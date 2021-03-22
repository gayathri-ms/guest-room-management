from bottle import run, route, template, error
from bottle import get, post, put, delete
from bottle import request, response, redirect

import json
import psycopg2

# Admin Privileges
from admin_login import *
from student import *
from faculty import *
@post('/api/login')
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    return authenticate(username, password)

@post('/api/logout')
def logout():
    token = request.json.get('token')
    return delete_authorisation(token)

@post('/api/add_student')
def add_student(token, s_details):
    if check_authorisation(token):
        return add_student(s_details)
    redirect('api/login')

@delete('/api/delete_student')
def delete_student():
    if check_authorisation(token):
        return delete_faculty(f_details)
    redirect('api/login')

@post('/api/add_faculty')
def add_faculty(token, f_details):
    if check_authorisation(token):
        return add_faculty(f_details)
    redirect('api/login')

@delete('/api/delete_faculty')
def delete_faculty():
    if check_authorisation(token):
        return delete_faculty(f_details)
    redirect('api/login')

# Reception Functionalities
@get('/api/check_relation')
def check_relation:
    pass
    
@put('/api/check_in')
def check_in():
    rel_code = request.json.get('nature')
    rel_id = request.json.get('relation')

@delete('/api/check_out')
def check_out():
    pass

run(host='localhost', port=8080, debug=True)
