from database import Database

def add_faculty(f_details):
    db = Database()
    db.executeSQLAndCommit(
        "INSERT INTO faculty(FName, Dept) VALUES (%s, %s);",
        (f_details['Name'], f_details['Dept'])
    )
    db.close()

    return {'Status': 'Successful'}

def delete_faculty(f_id):
    db = Database()
    db.executeSQLAndCommit(
        "DELETE FROM faculty WHERE id = %s;", (f_id['Id'],)
    )
    check = db.getOneVal(
        "SELECT 1 FROM faculty WHERE id = %s", (f_id['Id'], )
    )
    db.close()
    if check:
        return {'Status': 'Unsuccessful'}
    return {'Status': 'Successful'}
