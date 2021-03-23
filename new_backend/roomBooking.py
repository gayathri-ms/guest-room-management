from database import Database
import datetime

def check_rel(rel_type, rel_id):
    if rel_type == 'College':
        return True

    db = Database()

    # psycopg2.sql used for dynamic table handling
    run_sql = psycopg2.sql.SQL(
        "SELECT 1 FROM {} where id = %s;"
        ).format(psycopg2.sql.Identifier(rel_type))

    result = db.getOneVal(run_sql, (rel_id,))
    db.close()
    if result == None:
        return False
    return True

def check_availability(type_tuple, arrival, depart):

    db = Database()
    # Create view to extract room_num with arrival times

    '''
    Step 1: Check to see if there are rooms with no reservations
            and are the required type
            and if so return the top record
    '''

    # Get room numbers which have no future reservations
    query_sql = '''
                    SELECT * FROM rooms
                    WHERE rooms.rid NOT IN
                    (SELECT rid FROM active_sessions)
                    AND ac = %s AND beds = %s
                    LIMIT 1;
                '''
    room = db.getOneVal(query_sql, type_tuple)
    if room:
            # Check if an avaiable room is returned
        db.close()
        return room

    '''
    Step 2: Check for unreserved slots in rooms with future reservations
    '''
    query_sql = '''
                    SELECT rooms.rid, beds, ac, arrive, depart FROM
                    rooms JOIN active_sessions
                    ON rooms.rid = active_sessions.rid
                    WHERE ac = %s AND beds = %s;
                '''
    rooms_active = db.getData(query_sql, type_tuple)
    db.close()

    all_rooms = list(set([room[0] for room in rooms_active]))
    # List methods to detemine which rooms cannot be Booked
    case_1 = [room[0] for room in rooms_active
                if arrival <= room[3] and depart >= room[4]]
    case_2 = [room[0] for room in rooms_active
                if arrival >= room[3] and depart >= room[4] and room[4] >= arrival]
    case_3 = [room[0] for room in rooms_active
                if arrival <= room[3] and depart >= i[3] and i[4] >= depart]

    all_not_possible = list(set(case_1 + case_2 + case_3))
    possible = [room for room in all_rooms if room not in all_not_possible]

    if len(possible):
        return possible[0]
    return -1

def get_price(room_num, stay_time):
    db = Database()
    room_price = db.getOneVal(
        "SELECT Price FROM rooms WHERE RID = %s;",
        (room_num, )
    ) * stay_time

    return room_price
def add_guest(Gname, GAddress, GPhn,
    rel_type, rel_id, room_num, arrival, depart, bill):
    db = Database()
    db.executeSQLAndCommit(
        '''
        INSERT INTO Guest (GName, Phone, Address, Nature, RelationID, RID, Arrival, Departure, Bill)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);
        ''',
        (Gname, GAddress, GPhn, rel_type, rel_id, room_num, arrival, depart, bill)
    )
    db.close()

    return

def add_active_session(room_id, arrival, depart, guest_name):
    db = Database()
    db.executeSQLAndCommit(
        "INSERT INTO active_sessions VALUES (%s, %s, %s, %s);",
        (room_id, arrival, depart, guest_name)
    )
    db.close()

    return True

def remove_booking(room_num, arrival):
    db = Database()
    due = db.getOneVal(
        "SELECT bill FROM Guest WHERE rid = %s AND arrival = %s",
        (room_num, arrival)
    )
    db.executeSQLAndCommit(
        "DELETE FROM active_sessions WHERE rid = %s AND arrive = %s",
        (room_num, arrival)
    )

    db.close()

    return {'Bill' : due, 'Status': 'Check Out Successful'}
