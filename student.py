from database import Database

def add_student(s_details):
    db = Database()
    db.executeSQLAndCommit(
        "INSERT INTO student VALUES (nextval('STUDENT_Code'), %s, %s);",
        (s_details['name'], s_details['dept'])
    )
    db.close()

    return {'message': 'Sucessfully added student'}

def remove_student(student_id):
    db = Database()
    db.executeSQLAndCommit(
        "DELETE FROM student WHERE sid = %s;", (student_id,)
    )
    db.close()

    return {'message': 'Sucessfully deleted student'}
