--Admin_Table
INSERT INTO Admin_Table (AName, PWD) VALUES
('Arjuna Sarkar', 'PmB67^80'),
('Agni Sharma', 'NBgu90%23'),
('Bikram Singh', '60jnV_t67'),
('Chirag Patel', '90CS89n;'),
('Digvijay Jain', 'Bh0gt-u89');


--Student
INSERT INTO Student (Sname, Dept) VALUES
('Amit Shankar', 'CSE'),
('Archana Khanna', 'CSE'),
('Dev Paul', 'CSE'),

('Ajay Kumar', 'ETC'),
('Akhil Dey', 'ETC'),
('Shivani Jain', 'ETC'),

('Alok Singh', 'ME'),
('Arpit Dev', 'ME'),
('Pinaki Mishra', 'ME'),

('Amar Pal', 'CSE'),
('Ankit Sharma', 'CSE'),
('Dipak Chandra', 'CSE'),

('Ajit Pathak', 'ETC'),
('Bimal Sen', 'ETC'),
('Chanchala Mishra', 'ETC'),

('Akshay Nath', 'ME'),
('Kanchan Mishra', 'ME'),
('Zoya Khatoon', 'ME'),

('Bima Sen', 'CSE'),
('Jay Dewan', 'CSE'),
('Madhav Jain', 'CSE'),

('Bhadra Pal', 'ETC'),
('Himesh Nath' , 'ETC'),
('Prakhar Sen', 'ETC'),

('Dipak Kalra', 'ME'),
('Lokesh Jain' , 'ME'),
('Shanti Rana', 'ME');

--Faculty
INSERT INTO Faculty(FName, Dept) VALUES
('Aikta Nayyar', 'CSE'),
('Anuj Goyal', 'CSE'),

('Birendra Sen', 'ETC'),
('Daksh Srivastava', 'ETC'),

('Anju Sharma', 'ME'),
('Payal Rana', 'ME'),

('Rekha Shankar', 'CSE'),
('Shikha Pradhan', 'CSE'),

('Tarun Pandey', 'ETC'),
('Varun Halder', 'ETC'),

('Ashok Pal', 'ME'),
('Manoj Mishra', 'ME'),

('Vishesh Ranjan', 'CSE'),
('Yukti Khurana', 'CSE'),

('Kriti Raaj', 'ETC'),
('Vishnu Shekhar' , 'ETC'),

('Gauri Pal', 'ME'),
('Priyesh Jain' , 'ME');

--Staff
INSERT INTO Staff (Staffid, Staffname, posn, salary) VALUES
('SF0000','Chandrashekhar Bose', 'Manager', 30000);

INSERT INTO Staff (Staffname) VALUES
( 'Ankita Agarwal'),
( 'Neeraj Majumder');

UPDATE Staff
	SET posn= 'Receptionist', salary= 10000
	WHERE posn IS NULL and salary IS NULL;

INSERT INTO Staff (Staffname) VALUES
( 'Pankaj Sharma'),
( 'Dheeraj Goyal'),
( 'Jayesh Singh'),
( 'Tapan Gorkha');

UPDATE Staff
	SET posn= 'Guard', salary= 5000
	WHERE posn IS NULL and salary IS NULL;

INSERT INTO Staff (Staffname) VALUES
( 'Sahil Mishra'),
( 'Vivek Kumar'),
( 'Saloni Khaitan'),
( 'Priya Pal'),
( 'Gagan Raaj'),
( 'Jivan Das'),
( 'Kavita Wadhwa'),
( 'Pooja Rana'),
( 'Laxmi Shukla'),
( 'Shikha Jain');

UPDATE Staff
	SET posn= 'Housekeeping', salary= 8000
	WHERE posn IS NULL and salary IS NULL;

INSERT INTO Staff (Staffname) VALUES
( 'Sanjay Ranjan'),
( 'Parvati Shankar');

UPDATE Staff
	SET posn= 'Chef', salary= 15000
	WHERE posn IS NULL and salary IS NULL;

INSERT INTO Staff (Staffname) VALUES
( 'Kshama Das'),
( 'Sreeja Padhi'),
( 'Shailja Mahato'),
( 'Ayush Das'),
( 'Rakesh Samanta'),
( 'Anmol Das'),
( 'Ayaaz Khan');

UPDATE Staff
	SET posn= 'Kitchen', salary= 12000
	WHERE posn IS NULL and salary IS NULL;

INSERT INTO Staff (Staffname) VALUES
( 'Matali Halder'),
( 'Yukta Saxena');

UPDATE Staff
	SET posn= 'Cashier', salary= 15000
	WHERE posn IS NULL and salary IS NULL;

--Rooms
INSERT INTO Rooms VALUES
('101', 850, 1, false),
('102', 1000, 1, true),
('103', 1500, 2, false),
('104', 1750, 2, true),
('105', 2000, 1, false),
('106', 2200, 2, true),
('107', 5000, 2, true),

('201', 850, 1, false),
('202', 1000, 1, true),
('203', 1500, 2, false),
('204', 1750, 2, true),
('205', 2000, 2, false),
('206', 2200, 1, true),
('207', 5000, 2, true),

('301', 850, 1, false),
('302', 1000, 1, true),
('303', 1500, 2, false),
('304', 1750, 2, true),
('305', 2000, 2, false),
('306', 2200, 1, true),
('307', 5000, 2, true),

('401', 850, 1, false),
('402', 1000, 1, true),
('403', 1500, 2, false),
('404', 1750, 2, true),
('405', 2000, 2, false),
('406', 2200, 1, true),
('407', 5000, 3, true);

--Staff_Rooms
INSERT INTO Staff_Rooms (Staffname, RID) VALUES
( 'Sahil Mishra', 101),
( 'Sahil Mishra', 102),
( 'Sahil Mishra', 107),

( 'Vivek Kumar', 103),
( 'Vivek Kumar', 104),
( 'Vivek Kumar', 105),
( 'Vivek Kumar', 106),

( 'Saloni Khaitan', 201),
( 'Saloni Khaitan', 202),
( 'Saloni Khaitan', 207),

( 'Priya Pal', 203),
( 'Priya Pal', 204),
( 'Priya Pal', 205),
( 'Priya Pal', 206),

( 'Gagan Raaj', 301),
( 'Gagan Raaj', 302),
( 'Gagan Raaj', 307),

( 'Jivan Das', 303),
( 'Jivan Das', 304),
( 'Jivan Das', 305),
( 'Jivan Das', 306),

( 'Kavita Wadhwa', 401),
( 'Kavita Wadhwa', 402),
( 'Kavita Wadhwa', 407),

( 'Pooja Rana', 403),
( 'Pooja Rana', 404),
( 'Pooja Rana', 405),
( 'Pooja Rana', 406),

( 'Laxmi Shukla', 107),
( 'Laxmi Shukla', 207),

( 'Shikha Jain', 307),
( 'Shikha Jain', 407);

--Guest
delete from guest;
alter sequence guest_code restart;

INSERT INTO Guest (GName, Phone, Address, Nature, RelationID, PersonsCount, RID, Paid, Total) values
('Archana Shankar', 8700576981, 'Vandana Appt, Gokhale Rd, Gwalior-474001', 'Student', 'B0001', 2, 102, 500, 1000);
