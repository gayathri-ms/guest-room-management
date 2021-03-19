from database import Database
import time

def check_relation(rel_code, rel_id):
    table_to_query = ['Student', 'Faculty', 'College']
    if table_to_query[rel_code] = 'College':
        return 1

    db = Database()

    # psycopg2.sql used for dynamic table handling
    run_sql = psycopg2.sql.SQL(
        "SELECT 1 FROM {} where id = %s;"
        ).format(psycopg2.sql.Identifier(table_to_query[rel_code]))

    result = db.getOneVal(run_sql, (rel_id,))
    db.close()

    return result

def check_availability(type_tuple, arrival, depart):
    db = Database()
    # Create view to extract room_num with arrival times
    run_sql = '''
                 CREATE VIEW query_result AS
                 SELECT room_num, ac, beds FROM room
                 LEFT JOIN active_session
                 ON room.room_num = active_session.room_id;
              '''
    db.executeSQl(run_sql)

    '''
    Step 1: Check to see if there are rooms with no reservations
            and are the required type
            and if so return the top record
    '''

    # Get room numbers which have no future reservations
    query_sql = '''
                    SELECT room_num FROM room
                    EXCEPT (SELECT room_num FROM query_result
                            WHERE ac = %s and beds = %s
                            intersect
                            SELECT room_id FROM active_session) LIMIT 1;
                '''
    room = db.getOneVal(query_sql, type_tuple)
    if room:
            # Check if an avaiable room is returned
        db.executeSQl("DROP VIEW query_result;")
        db.close()
        return room

    '''
    Step 2: Check for unreserved slots in rooms with future reservations
    '''
    query_sql = '''
                    SELECT room_num, arrival, depart
                    FROM query_result, active_session
                    WHERE ac = %s AND beds = %s AND query_result.room_num = active_session.room_id;
                '''
    rooms_active = db.getData(query_sql, type_tuple)
    db.executeSQl("DROP VIEW query_result;")
    db.close()
    for room in rooms_active:
        if room[1] < departure:
            rooms_active.remove(room)
    for room in rooms_active:
        if room[2] > arrival:
            rooms_active.remove(room)

    if len(rooms_active) != 0:
        return rooms_active[0][0]

    return -1

def get_price(room_num, arrival, depart, service_list, occupant_count):
    arrival = time.localtime(arrival)
    depart = time.localtime(depart)
    stay_time = depart.tm_yday - arrival.tm_yday
    if arrival.tm_year < depart.tm_year:
        stay_time += 365

    db = Database()
    room_price = db.getOneVal(
        "SELECT base_price FROM room WHERE room_num = %s;",
        (room_num, )
    ) * stay_time

    service_charges = db.getOneRow("select * from service_charges;")
    bill= [service_list[i] * service_charges[i] for i in range(len(service_list))]
    bill= sum(bill) * occupant_count
    db.close()

    return (room_price, bill)

def add_active_session(room, arrival, depart, guest_id):
    db = Database()
    db.executeSQLAndCommit(
        "INSERT INTO active_session VALUES (%s, %s, %s, %s);",
        (room, arrival, depart, guest_id)
    )
    db.close()

    return {'status': 'Room Booked'}

def remove_booking(guest_name, room_id):
    db = Database()
    db.executeSQLAndCommit(
        "DELETE FROM active_session WHERE guest_name = %s and room_id = %s",
        (guest_name, room_id)
    )
    db.close()

    return {'status': 'Check Out Sucessful'}
