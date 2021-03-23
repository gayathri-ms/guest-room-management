from database import Database
import json
import datetime

def price_change(change_details):
    ac = False
    if change_details['ac'] == 'AC':
        ac = True
    db = Database()
    db.executeSQLAndCommit(
        "UPDATE rooms SET Price = %s WHERE Beds = %s AND AC = %s;",
        (change_details['New_Price'], change_details['Beds'], ac)
    )
    db.close()

    return {'Status': 'Successful'}


def staff_change(change_details):
    db = Database()
    name = db.getOneVal("SELECT StaffName FROM Staff WHERE StaffID = %s;", (change_details['StaffID'], ))
    posn = db.getOneVal("SELECT Posn FROM Staff WHERE StaffID = %s;", (change_details['StaffID'], ))
    if posn != "Housekeeping":
        return {'Status': 'Unsuccessful - Enter Housekeeping staff'}

    db.executeSQLAndCommit(
        "INSERT INTO Staff_Rooms VALUES (%s, %s, %s)",
        (change_details['StaffID'], name, change_details['RoomID'])
    )
    db.close()

    return {'Status': 'Successful'}

def staff_change_delete(change_details):
    db = Database()
    check = db.getOneVal("SELECT 1 FROM Staff_Rooms WHERE StaffID = %s AND RID = %s;",
        (change_details['StaffID'], change_details['RoomID'])
    )
    if not check:
        db.close()
        return {'Status': 'Unsuccessful - Entry doesn\'t exist'}

    db.executeSQLAndCommit(
        "DELETE FROM Staff_Rooms WHERE StaffID = %s AND RID = %s;",
        (change_details['StaffID'], change_details['RoomID'])
    )
    db.close()

    return {'Status': 'Successful'}

def get_assigned():
    db = Database()
    result = db.getDataDict("Select * from Staff_Rooms;")
    db.close()

    return result

def records_by_name(query):
    db = Database()
    result = db.getDataDict(
        '''
        SELECT GCode, Gname, phone, address, nature, relationid, rid, relationname,
        to_char(arrival, 'DD-MM-YYYY') as arrival, to_char(departure, 'DD-MM-YYYY') as departure, bill
        from Guest WHERE Gname = %s;
        ''', (query, )
    )
    result = json.dumps(result)
    db.close()

    return result

def records_by_arrival(arrival_date):
    db = Database()
    result = db.getDataDict(
    '''
    SELECT GCode, Gname, phone, address, nature, relationid, rid, relationname,
    to_char(arrival, 'DD-MM-YYYY') as arrival, to_char(departure, 'DD-MM-YYYY') as departure, bill
    from Guest WHERE arrival = %s;
    ''', (arrival_date, ) )

    result = json.dumps(result)
    db.close()

    return result

def all_active():
    db = Database()
    result = db.getDataDict("Select rid, to_char(arrive, 'DD-MM-YYYY') as arrive, to_char(depart, 'DD-MM-YYYY') as depart from Active_Sessions;")

    result = json.dumps(result)
    db.close()

    return result
