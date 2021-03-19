from database import Database
import hashlib
import time

def generateToken(username):
    hash = hashlib.new('ripemd160')
    hash.update(username.encode('utf-8'))
    cur_time = str(time.time())
    # Salting with epochtime of login to get unique token
    hash.update(cur_time.encode('utf-8'))

    token = hash.hexdigest()
    if len(token) > 20:
        token = token[0:20]

    db = Database()
    db.executeSQLAndCommit(
        "UPDATE admin SET token = %s WHERE username = %s;",
        (token, username)
    )
    return token

def authenticate(username, password):
        db = Database()
        verify_user = db.getOneVal(
            "SELECT 1 FROM admin WHERE username = %s;",
            (username, )
        )
        if verify_user:
            saved_pwd = db.getOneVal(
                "SELECT password FROM admin WHERE username = %s;",
                (username, )
            )
            db.close()
            if password == saved_pwd:
                token = generateToken(username)

                return {'Token' : token, 'Message': 'Login Sucessful'}
            else:

                return {'Token': 'Invalid', 'Message': 'Incorrect Password'}
        db.close()

        return {'Token': 'Invalid', 'Message': 'Incorrect UserID'}

def check_authorisation(token):
        db = Database()
        status = db.getOneVal(
            "SELECT 1 FROM admin WHERE token = %s;",
            (token, )
        )
        db.close()
        if status:
            return True

        return False

def delete_authorisation(token):
        db = Database()
        db.executeSQLAndCommit(
            "UPDATE admin SET token = NULL WHERE token = %s;",
            (token, )
        )
        db.close()

        return {'Message': 'Logged Out Sucessfully'}
