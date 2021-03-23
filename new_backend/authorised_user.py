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
        "UPDATE Authorised_Users SET token = %s WHERE Username = %s;",
        (token, username)
    )
    db.close()

    return token

def authenticate(username, password):
        db = Database()
        verify_user = db.getOneVal(
            "SELECT Authority FROM Authorised_Users WHERE Username = %s AND Password = %s;",
            (username, password)
        )

        db.close()
        if verify_user:
            token = generateToken(username)
            return {'Token' : token, 'Authority': verify_user, 'Message': 'Login Sucessful'}
        else:
            return {'Token': 'Invalid', 'Authority': 'Invalid', 'Message': 'Incorrect Credentials'}

def check_authorisation(token):
        db = Database()
        status = db.getOneVal(
            "SELECT 1 FROM Authorised_Users WHERE token = %s;",
            (token, )
        )
        db.close()
        if status:
            return True

        return False

def delete_authorisation(token):
        db = Database()
        db.executeSQLAndCommit(
            "UPDATE Authorised_Users SET token = NULL WHERE token = %s;",
            (token, )
        )
        db.close()

        return {'Status': 'Successful', 'Message': 'Logged Out'}

def change_password(ad_name, ad_pass, usr_name, new_pass):
    db = Database()
    adm_check = db.getOneVal(
        "SELECT 1 FROM Authorised_Users WHERE Username = %s AND Password = %s;",
        (ad_name, ad_pass)
    )

    if not adm_check:
        db.close()
        return {'Status': 'Unsuccessful', 'Message': 'Admin Credentials Incorrect'}

    user_check = db.executeSQl("SELECT 1 FROM Authorised_Users WHERE Username = %s",
        (usr_name, )
    )
    if not user_check:
        db.close()
        return {'Status': 'Unsuccessful', 'Message': 'User Credentials Incorrect'}

    db.executeSQLAndCommit(
        "UPDATE Authorised_Users SET Password = %s WHERE Username = %s;",
        (new_pass, usr_name)
    )
    db.close()

    return {'Status': 'Successful', 'Message': 'Password Reset Successful'}
