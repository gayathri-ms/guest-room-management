from database import Database

def add_student(s_details):
    db = Database()
    db.executeSQLAndCommit(
        "INSERT INTO student(SName, Dept) VALUES (%s, %s);",
        (s_details['Name'], s_details['Branch'])
    )
    db.close()

    return {'Status': 'Successful'}

def delete_student(s_id):
    db = Database()
    db.executeSQLAndCommit(
        "DELETE FROM student WHERE id = %s;", (s_id['Id'],)
    )

    check = db.getOneVal(
        "SELECT 1 FROM student WHERE id = %s", (s_id['Id'], )
    )
    db.close()
    if check:
        return {'Status': 'Unsuccessful'}
    return {'Status': 'Successful'}
