--setRelationName
CREATE OR REPLACE FUNCTION setRelationName ()
	RETURNS trigger
	LANGUAGE plpgsql

AS
$$
BEGIN
	UPDATE Guest
	SET RelationName= FName
	FROM Faculty
	WHERE RelationID= FID AND Nature= 'Faculty' AND RelationName IS NULL;

	UPDATE Guest
	SET RelationName= SName
	FROM Student
	WHERE RelationID= SID AND Nature= 'Student' AND RelationName IS NULL;

	RETURN NEW;
	
END;
$$;

CREATE TRIGGER Relation_Name
	AFTER INSERT OR UPDATE
	ON Guest
	FOR EACH ROW
	EXECUTE PROCEDURE setRelationName ();

--setBill (is not intended to work for update because due will not be null)
CREATE OR REPLACE FUNCTION setBill ()
	RETURNS trigger
	LANGUAGE plpgsql

AS
$$
BEGIN
	UPDATE Guest
	SET Due= Total-Paid
	WHERE DUE IS NULL; --forced to set due null else not other condition is working

	RETURN NEW;
	
END;
$$;

CREATE TRIGGER Bill
	AFTER INSERT 
	ON Guest
	FOR EACH ROW
	EXECUTE PROCEDURE setBill ();

--setNewBill (does not work)
CREATE OR REPLACE FUNCTION setNewBill ()
	RETURNS trigger
	LANGUAGE plpgsql

AS
$$
BEGIN
	UPDATE Guest
	SET Due= New.Total-New.Paid
	WHERE Due+Paid != Total;

	RETURN NEW;
	
END;
$$;

CREATE TRIGGER NewBill
	BEFORE UPDATE
	ON Guest
	FOR EACH ROW
	EXECUTE PROCEDURE setNewBill ();

--setStaff
CREATE OR REPLACE FUNCTION setStaff ()
	RETURNS trigger
	LANGUAGE plpgsql

AS
$$
BEGIN
	UPDATE Staff_Rooms
	SET StaffName= Staff.StaffName
	FROM Staff
	WHERE Staff_Rooms.StaffID= Staff.StaffID AND Staff_Rooms.StaffName IS NULL;
	
	UPDATE Staff_Rooms
	SET StaffID= Staff.StaffID
	FROM Staff
	WHERE Staff_Rooms.StaffName= Staff.StaffName AND Staff_Rooms.StaffID IS NULL;

	RETURN NEW;
	
END;
$$;

CREATE TRIGGER Staff_Rooms_Staff
	AFTER INSERT OR UPDATE
	ON Staff_Rooms
	FOR EACH ROW
	EXECUTE PROCEDURE setStaff();

--CREATE TRIGGER Total_Bill
--	BEFORE INSERT
--	ON
--	Guest,TARIFF_ROOMS
--	FOR EACH ROW
--	SET Guest.Total= TARIFF_ROOMS.TotalPrice 
--	WHERE Guest.Tariff= TARIFF_ROOMS.Tariff;

--CREATE TRIGGER TotalPrice
--	BEFORE INSERT
--	ON
--	, ROOMS, TARIFF
--	FOR EACH ROW
--	SET TARIFF_ROOMS.TotalPrice= TARIFF.Price + ROOMS.Price
--	WHERE TARIFF_ROOMS.Tariff= TARIFF.TID AND TARIFF_ROOMS.Room= ROOMS.RID;

--CREATE TRIGGER Occupancy_true
--	BEFORE INSERT
--	ON
--	Guest, ROOMS
--	FOR EACH ROW
--	SET ROOMS.Occupied= true
--	WHERE ROOMS.RID= Guest.Room AND Guest.Arrival>=LOCALTIMESTAMP AND Guest.Departure<=LOCALTIMESTAMP;
--
--CREATE TRIGGER Occupancy_false
--	BEFORE INSERT
--	ON
--	Guest, ROOMS
--	FOR EACH ROW
--	SET ROOMS.Occupied= false
--	WHERE ROOMS.RID= Guest.Room AND Guest.Departure>=LOCALTIMESTAMP;

--CREATE TRIGGER TARIFF_price
--	BEFORE INSERT
--	ON 
--	TARIFF, PRICE
--	FOR EACH ROW
--	SET TARIFF.Price= TARIFF.Breakfast*PRICE.Breakfast + TARIFF.Lunch*PRICE.Lunch + TARIFF.Dinner*PRICE.Dinner + TARIFF.Internet*PRICE.Internet;
--	