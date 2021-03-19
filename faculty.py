from database import Database

def add_faculty(f_details):
    db = Database()
    db.executeSQLAndCommit(
        "INSERT INTO faculty VALUES (nextval('FACULTY_Code'), %s, %s);",
        (f_details['name'], f_details['dept'])
    )
    db.close()

    return {'message': 'Sucessfully added faculty'}

def remove_faculty(faculty_id):
    db = Database()
    db.executeSQLAndCommit(
        "DELETE FROM faculty WHERE fid = %s;", (faculty_id,)
    )
    db.close()

    return {'message': 'Sucessfully deleted faculty'}
