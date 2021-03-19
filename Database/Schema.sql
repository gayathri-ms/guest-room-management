--ADMIN
CREATE TABLE Admin_Table
(
	AID varchar(10) primary key,
	AName varchar(50) not null,
--	Dept varchar(10),
	PWD varchar(20),
	Token varchar(20),
--	Authority varchar(20) check (Authority similar to '^Clerk$' or Authority similar to '^Staff$' or Authority similar to '^Power$')
	
	UNIQUE (AID, AName)
);

--Student
CREATE TABLE Student
	(
		SID varchar(10) primary key,
		SName varchar(50) not null,
		Dept varchar(10),
		
		UNIQUE (SID, SName)
		);

--Faculty
CREATE TABLE Faculty
	(
		FID varchar(10) primary key,
		FName varchar(50) not null,
		Dept varchar(10),
		
		UNIQUE (FID, FName)
		);


--Staff
CREATE TABLE Staff
	(
		StaffID varchar(10) primary key,
		StaffName varchar (50) not null,
		Posn varchar(50),
		Salary int,
--		Floor int
--		Building varchar(10)

		UNIQUE (StaffID, StaffName)
		);

--Rooms
CREATE TABLE Rooms
	(
		RID varchar(10) primary key,
--		Building varchar(10),
		Price int,
		Beds int,
		AC boolean,
--		Occupied boolean default false,
		UNIQUE (RID, Price)
--		CONSTRAINT fk_Building FOREIGN KEY (Building) REFERENCES BUILDING(BID),
--		CONSTRAINT UNIQUE (RID, Building)
		);


-- Staff_Rooms
CREATE TABLE Staff_Rooms
(
	StaffID varchar(10),
	StaffName varchar (50),
	RID varchar(10),

	CONSTRAINT fk_Staff FOREIGN KEY (StaffID, StaffName) REFERENCES Staff(StaffID, StaffName)
	ON UPDATE CASCADE
	ON DELETE CASCADE,
	CONSTRAINT fk_RID FOREIGN KEY (RID) REFERENCES Rooms(RID)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);

--Guest
CREATE TABLE Guest
(
	GCode varchar(20) primary key,
	GName varchar(50) not null,
	Phone bigint,
	Address varchar (200),
	Nature varchar(20) not null 
	check (Nature similar to 'Student' or Nature similar to 'Faculty' or Nature similar to 'College'),	
	RelationID varchar(10),
	RelationName varchar (50),
	PersonsCount int,
	RID varchar(10),
--	Building varchar(10),
--	Tariff varchar(10),
	Arrival double precision,
--	Arrived timestamp,
	Departure double precision,
--	Departed timestamp,
	Paid int,
	Due int,
	Total int,
	
	UNIQUE (GCode, GName),
	UNIQUE (RID, Arrival, Departure),
	CONSTRAINT PaidDue check (Paid >= 0.5*Total),
	CONSTRAINT Total_check check (Paid+Due=Total),
	CONSTRAINT fk_Room FOREIGN KEY (RID, Total) REFERENCES Rooms(RID, Price)
	ON UPDATE CASCADE
	ON DELETE CASCADE
--	CONSTRAINT fk_book FOREIGN KEY (Room,Tariff,Total) REFERENCES TARIFF_Rooms(Room,Tariff,TotalPrice)
);

--Active_Sessions
CREATE TABLE Active_Sessions
(
	RID varchar(10),
	Arrival double precision,
--	Arrived timestamp,
	Departure double precision,
--	Departed timestamp,
	
	CONSTRAINT fk_session FOREIGN KEY (RID, Arrival, Departure) REFERENCES Guest(RID, Arrival, Departure) 
	ON UPDATE CASCADE
	ON DELETE CASCADE

);

----Guest_RELATION
--CREATE TABLE Guest_RELATION
--(
--	GCode varchar(20) not null,
--	GName varchar(50) not null,
--	Nature char(20) not null,
--	SID varchar(10),
--	SName varchar(50),
--	
--
--	CONSTRAINT fk_Guest FOREIGN KEY (GCode,GName, Nature) REFERENCES Guest(GCode,GName, Nature)
--	ON UPDATE CASCADE
--	ON DELETE CASCADE,
--	CONSTRAINT fk_Student FOREIGN KEY (SID,SName) REFERENCES Student(SID,SName),
--	
--	FID varchar(10),
--	FName varchar(50),
--
--	CONSTRAINT fk_Faculty FOREIGN KEY (FID,FName) REFERENCES Faculty(FID,FName),
--	
--
--	AID varchar(10),
--	AName varchar(50),
--
--	CONSTRAINT fk_Admin FOREIGN KEY (AID,AName) REFERENCES Admin_Table(AID,AName),
--
--	StaffID varchar(10),
--	StaffName varchar(50),
--
--	CONSTRAINT fk_Staff FOREIGN KEY (StaffID,StaffName) REFERENCES Staff(StaffID,StaffName)
--);


--Guest_Student
--CREATE TABLE Guest_Student	
--(
--	GCode varchar(20),
--	GName varchar(50),
--	SID varchar(10),
--	SName varchar(50),
--	
--
--	CONSTRAINT fk_Guest FOREIGN KEY (GCode,GName) REFERENCES Guest(GCode,GName)
--	ON UPDATE CASCADE
--	ON DELETE CASCADE,
--	CONSTRAINT fk_Student FOREIGN KEY (SID,SName) REFERENCES Student(SID,SName)
--	ON UPDATE CASCADE
--	ON DELETE CASCADE
--);
--
----Guest_Faculty
--CREATE TABLE Guest_Faculty	
--(
--	GCode varchar(20),
--	GName varchar(50),
--	FID varchar(10),
--	FName varchar(50),
--
--	CONSTRAINT fk_Guest FOREIGN KEY (GCode,GName) REFERENCES Guest(GCode,GName)
--	ON UPDATE CASCADE
--	ON DELETE CASCADE,
--	CONSTRAINT fk_Faculty FOREIGN KEY (FID,FName) REFERENCES Faculty(FID,FName)
--	ON UPDATE CASCADE
--	ON DELETE CASCADE
--);
--
----Guest_ADMIN
--CREATE TABLE Guest_ADMIN	
--(
--	GCode varchar(20),
--	GName varchar(50),
--	AID varchar(10),
--	AName varchar(50),
--
--	CONSTRAINT fk_Guest FOREIGN KEY (GCode,GName) REFERENCES Guest(GCode,GName)
--	ON UPDATE CASCADE
--	ON DELETE CASCADE,
--	CONSTRAINT fk_Admin FOREIGN KEY (AID,AName) REFERENCES Admin_Table(AID,AName)
--	ON UPDATE CASCADE
--	ON DELETE CASCADE
--);

--BUILDING
--CREATE TABLE BUILDING
--	(
--		BID varchar(10) primary key,
--		RoomCount int,
--		FloorCount int
--		);

--TARIFF
--CREATE TABLE TARIFF
--	(
--		TID varchar(10) primary key,
--		Breakfast int check (Breakfast<=1),
--		Lunch  int check (Lunch<=1),
--		Dinner int check (Dinner<=1),
--		Internet int check (Internet<=1),
--		Price int,
--		UNIQUE (TID, Price)
--		);
--
--TARIFF_PRICE
--CREATE TABLE PRICE
--(
--	Breakfast int not null,
--	Lunch int not null,
--	Dinner int not null,
--	Internet int not null
--);
--
----TARIFF_Rooms
--CREATE TABLE TARIFF_Rooms
--(
--	Tariff varchar(10) not null,
--	Room varchar(10) not null,
----	Building varchar(10),
--	TariffPrice int,
--	RoomPrice int,
--	TotalPrice int,
--
--	UNIQUE (Tariff, Room),
--	UNIQUE (Tariff, Room, TotalPrice), --Building),
--	CONSTRAINT total check (TariffPrice+RoomPrice=TotalPrice),
--	CONSTRAINT fk_Tariff FOREIGN KEY (Tariff) REFERENCES TARIFF(TID),
--	CONSTRAINT fk_Room FOREIGN KEY (Room) REFERENCES Rooms(RID),
----	CONSTRAINT fk_Building FOREIGN KEY (Building) REFERENCES BUILDING(BID),
--	CONSTRAINT fk_RoomPrice FOREIGN KEY (Room, RoomPrice) REFERENCES Rooms(RID, Price),
--	CONSTRAINT fk_TariffPrice FOREIGN KEY (Tariff, TariffPrice) REFERENCES TARIFF(TID, Price)
--);
--Guest_Rooms
--CREATE TABLE Guest_Rooms
--(
--	GCode varchar(20),
--	GName varchar(50),
--	Building varchar(10),
--	Occupied boolean default false,
--
--	CONSTRAINT fk_GCode FOREIGN KEY (GCode) REFERENCES Guest(GCode),
--	CONSTRAINT fk_GName FOREIGN KEY (GName) REFERENCES Guest(GName),
--	CONSTRAINT fk_Building FOREIGN KEY (Building) REFERENCES Rooms(Building),
--	CONSTRAINT booked UNIQUE (Room, Building, Arrival, Depart),
--	CONSTRAINT occupied_true 
--	(
--		case
--			when Departed>=LOCALTIMESTAMP
--			then
--				update Guest_Rooms
--				set Occupied = false
--				where Departed>=LOCALTIMESTAMP,

--			when Arrived>=LOCALTIMESTAMP
--			then 
--				update Guest_Rooms
--				set Occupied = true
--				where Arrived>=LOCALTIMESTAMP
--		)
--	)
--);