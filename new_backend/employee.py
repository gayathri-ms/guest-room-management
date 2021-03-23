from database import Database

def add_employee(e_details):
    db = Database()
    db.executeSQLAndCommit(
        "INSERT INTO staff(StaffName, Posn, Salary) VALUES (%s, %s, %s);",
        (e_details['Name'], e_details['Posn'], e_details['Salary'])
    )
    db.close()

    return {'Status': 'Successful'}

def delete_employee(staff_id):
    db = Database()
    db.executeSQLAndCommit(
        "DELETE FROM staff WHERE StaffID = %s;", (staff_id['Id'],)
    )
    check = db.getOneVal(
        "SELECT 1 FROM staff WHERE StaffID = %s", (staff_id['Id'], )
    )
    db.close()
    if check:
        return {'Status': 'Unsuccessful'}
    return {'Status': 'Successful'}
