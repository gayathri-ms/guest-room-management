from bottle import run, route, template, error
from bottle import get, post, put, delete
from bottle import request, response, redirect

import json
import psycopg2
import datetime

def date_handler(str_date):
    _date = [int(item) for item in str_date.split('-')[::-1]]
    return datetime.date(*_date)


# Login
# from authorised_user import *
# @post('/api/login')
# def login():
#     '''
#         Expected Input JSON:
#             {
#                 'username': ...,
#                 'password': ...
#             }
#         Output JSON:
#             {
#                 'Token': ...,
#                 'Authority': ...
#                 'Message': ...
#             }
#     '''
#     username = request.json.get('username')
#     password = request.json.get('password')
#     return authenticate(username, password)
#
# @post('/api/logout')
# def logout():
#     '''
#         Expected Input JSON:
#             {
#                 'Token': STRING
#             }
#         Output JSON:
#             {
#                 'Status': STRING
#                 'Message': STRING
#             }
#     '''
#     try:
#         token = request.json.get('Token')
#         return delete_authorisation(token)
#     except Exception as ex:
#         print(ex)
#         return {'Status': 'Unsucessful', 'Message': 'Error Executing'}

# Admin
import student
import faculty
import employee

@post('/api/add_student')
def add_student():
    '''
        Expected Input JSON:
            {
                'Name': 'Gayathri MS'
                'Branch': 'CSE'
            }
        Output JSON:
            {
                'Status': STRING
            }
    '''
    try:
        s_details = json.load(request.body)
        return student.add_student(s_details)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/delete_student')
def delete_student():
    '''
        Expected Input JSON:
            {
                'Id': STRING
            }
        Output JSON:
            {
                'Status': STRING
            }
    '''
    try:
        s_id = json.load(request.body)
        return student.delete_student(s_id)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/add_faculty')
def add_faculty():
    '''
        Expected Input JSON:
            {
                'Name': STRING
                'Dept': STRING(3)
            }
        Output JSON:
            {
                'Status': STRING
            }
    '''
    try:
        f_details = json.load(request.body)
        return faculty.add_faculty(f_details)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/delete_faculty')
def delete_faculty():
    '''
        Expected Input JSON:
            {
                'Id': STRING
            }
        Output JSON:
            {
                'Status': STRING
            }
    '''
    try:
        f_id = json.load(request.body)
        return faculty.delete_faculty(f_id)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/add_employee')
def add_employee():
    '''
        Expected Input JSON:
            {
                'Name': STRING
                'Posn': STRING
                'Salary': INT
            }
        Output JSON:
            {
                'Status': STRING
            }
    '''
    try:
        e_details = json.load(request.body)
        return employee.add_employee(e_details)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/delete_employee')
def delete_employee():
    '''
        Expected Input JSON:
            {
                'Id': STRING
            }
        Output JSON:
            {
                'Status': STRING
            }
    '''
    try:
        staff_id = json.load(request.body)
        return employee.delete_employee(staff_id)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

# Manager Functionalities
import manager

@post('/api/room_price_change')
def room_price_change():
    '''
        Expected Input JSON:
        {
            'Beds': INT,
            'AC': BOOL,
            'New_Price': INT,
        }

        Output JSON:
        {
            'Status' : STRING
        }
    '''
    try:
        change_details = json.load(request.body)
        return manager.price_change(change_details)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/add_staff_room')
def add_staff_room():
    '''
        Expected Input JSON:
        {
            'StaffId' : STRING,
            'RoomID': STRING
        }
        Output JSON:
        {
            'Status' : STRING
        }
    '''
    try:
        change_details = json.load(request.body)
        # print('change_details = ', change_details)
        return manager.staff_change(change_details)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/delete_staff_room')
def delete_staff_room():
    '''
        Expected Input JSON:
        {
            'StaffId' : STRING,
            'RoomID': STRING
        }
        Output JSON:
        {
            'Status' : STRING
        }
    '''
    try:
        change_details = json.load(request.body)
        return manager.staff_change_delete(change_details)
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@get('/api/all_staff_room')
def all_staff_room():
    '''
        # Expected Input JSON:
        #     No input JSON

        Output JSON:
        {
            'Attributes': LIST OF ATTRIBUTES,
            'Records': LIST OF TUPLES WITH EACH TUPLE A RECORD
        }
    '''
    try:
        return manager.get_assigned()
    except Exception as ex:
        print(ex)
        return {'Attributes': 'Unsuccessful','Records': 'Unsuccessful'}

@post('/api/view_by_name')
def view_by_name():
    '''
        Expected Input JSON:
        {
            'Name': STRING
        }
        Output JSON:
        {
            'Records': LIST OF TUPLES
        }
    '''
    try:
        query = json.load(request.body)
        return manager.records_by_name(query['Name'])
    except Exception as ex:
        print(ex)
        return {'Attributes': 'Unsuccessful','Records': 'Unsuccessful'}

@post('/api/view_by_arrival')
def view_by_arrival():
    '''
        Expected Input JSON:
        {
            'Arrival' : STRING
        }
        Output JSON:
        {
            'Attributes': LIST OF ATTRIBUTES,
            'Records': LIST OF TUPLES WITH EACH TUPLE A RECORD
        }
    '''
    try:
        query = json.load(request.body)
        date_object = date_handler(query['Arrival'])
        return manager.records_by_arrival(date_object)
    except Exception as ex:
        print(ex)
        return {'Attributes': 'Unsuccessful','Records': 'Unsuccessful'}


@get('/api/view_active')
def view_active():
    '''
        # Expected Input JSON:
        #     No input JSON

        Output JSON:
        {
            'Attributes': LIST OF ATTRIBUTES,
            'Records': LIST OF TUPLES WITH EACH TUPLE A RECORD
        }
    '''
    try:
        return manager.get_assigned()
    except Exception as ex:
        print(ex)
        return {'Attributes': 'Unsuccessful','Records': 'Unsuccessful'}


# Reception Functionalities
from roomBooking import *

@post('/api/check_in')
def check_in():
    '''
        Expected Input JSON:
        {
            'Name' : STRING,
            'Address' : STRING,
            'Phone_Number' : STRING,
            'Nature' : STRING,
            'Id' : STRING,
            'ac' : STRING,
            'Beds' : STRING,
            'Arrival' : STRING,
            'Departure' : STRING,
        }
        Output JSON:
        {
            'Status': STRING,
            'Room_num': STRING,
            'Price': STRING
        }
    '''
    try:
        data = json.load(request.body)
        Gname = data['Name']
        GAddress = data['Address']
        GPhn = data['Phone_Number']

        # Check if relation exists
        rel_type = data['Nature']
        rel_id = data['Id']
        if not check_rel(rel_type, rel_id):
            return {
                'Status': 'Unsuccessful - Relation doesn\'t exist',
                'Room_num': None,
                'Price': None
            }

        # Check for room availability
        ac, beds = (data['ac'], data['Beds'])
        arrival = date_handler(data['Arrival'])
        depart = date_handler(data['Departure'])

        room_num = check_availability((ac, beds), arrival, depart)
        if room_num == -1:
            return {
                'Status': 'Unsuccessful - No Available Rooms',
                'Room_num': None,
                'Price': None
            }

        # Calculate bill
        stay_time = (depart - arrival).days
        room_price = get_price(room_num, stay_time)

        add_guest(
            Gname, GPhn, GAddress,
            rel_type, rel_id, room_num,
            arrival, depart, room_price
        )
        add_active_session(room_num, arrival, depart, Gname)

        return {
            'Status': 'Successful',
            'Room_num': room_num,
            'Price': room_price
        }
    except Exception as ex:
        print(ex)
        return {'Status': 'Unsuccessful'}

@post('/api/check_out')
def check_out():
    '''
        Expected Input JSON:
        {
            'RoomID': STRING
            'Arrival': DATE
        }
        Output JSON:
        {
            'Remaining_Due' : INT
            'Status': STRING
        }
    '''
    try:
        data = json.load(request.body)
        room_num = str(data['RoomID'])
        arrival = date_handler(data['Arrival'])
        return remove_booking(room_num, arrival)
    except Exception as ex:
        print(ex)
        return {'Remaining_Due' : 0, 'Status': 'Unuccessful'}


run(host='localhost', port=8080, debug=True)
