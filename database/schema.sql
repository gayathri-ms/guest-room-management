--ADMIN
CREATE TABLE Authorised_Users
(
        AID varchar(10) primary key,
        Username varchar(20) not null,
        Password varchar(20) not null,
        Token varchar(20),
        Authority varchar(20) check (Authority similar to 'Manager' or Authority similar to 'Administrator'),
        UNIQUE (AID, Username)
);

--Student
CREATE TABLE Student
(
		ID varchar(10) primary key,
		SName varchar(50) not null,
		Dept varchar(10),

		UNIQUE (ID, SName)
);

--Faculty
CREATE TABLE Faculty
(
		ID varchar(10) primary key,
		FName varchar(50) not null,
		Dept varchar(10),

		UNIQUE (ID, FName)
);


--Staff
CREATE TABLE Staff
(
		StaffID varchar(10) primary key,
		StaffName varchar (50) not null,
		Posn varchar(20),
		Salary int,
		UNIQUE (StaffID, StaffName)
);

--Rooms
CREATE TABLE Rooms
(
      RID varchar(10) primary key,
      Price int,
      Beds int,
      AC boolean,
      UNIQUE (RID, Price)
);

-- Staff_Rooms
CREATE TABLE Staff_Rooms
(
		StaffID varchar(10),
		StaffName varchar (50),
		RID varchar(10),

		CONSTRAINT fk_Staff
			FOREIGN KEY (StaffID, StaffName)
				REFERENCES Staff(StaffID, StaffName)

		ON UPDATE CASCADE
		ON DELETE CASCADE,

		CONSTRAINT fk_RID
			FOREIGN KEY (RID)
				REFERENCES Rooms(RID)

		ON UPDATE CASCADE
		ON DELETE CASCADE
);

--Guest
CREATE TABLE Guest
(
		GCode varchar(20) PRIMARY KEY,
		GName varchar(50) NOT NULL,
		Phone bigint,
		Address varchar (200),
		Nature varchar(20) NOT NULL
		check (Nature similar to 'Student' or Nature similar to 'Faculty' or Nature similar to 'College'),
		RelationID varchar(10),
		RID varchar(10),
    RelationName varchar(50),
		Arrival date,
		Departure date,
		Bill int,

		UNIQUE (GCode, GName),

		CONSTRAINT fk_Room
			FOREIGN KEY (RID)
				REFERENCES Rooms(RID)

		ON UPDATE CASCADE
		ON DELETE CASCADE
);

--Active_Sessions
CREATE TABLE Active_Sessions
(
	RID varchar(10),
	Arrive date,
	Depart date,
  Gname varchar(50),

	CONSTRAINT fk_session
		FOREIGN KEY (RID, Arrive, Depart)
			REFERENCES Guest(RID, Arrival, Departure)

	ON UPDATE CASCADE
	ON DELETE CASCADE
);
