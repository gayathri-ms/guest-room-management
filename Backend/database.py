import psycopg2

def db_connect():
    db_config = {
        'dbname':'test_database',
        'user':'manas',
        'password':'password',
        'host':'localhost'
    }
    conn = psycopg2.connect(**db_config)
    return conn

class Database():
    def  __init__(self):
        self.conn = db_connect()

    def open(self):
        self.close()
        self.conn = db_connect()

    def close(self):
        if self.conn:
            self.conn.close()

    def rollback():
        self.conn.rollback()

    def commit(self):
        self.conn.commit()

    """ Helper Fucntions/ Methods """

    def _executeSQLGetCursor(self, sql, args=None):
        if not self.conn:
            self.open()
        try:
            cur = self.conn.cursor()
            cur.execute(sql, args)
        except Exception:
            self.rollback()
            raise "Error executing the SQL"

        return cur

    def _executeSQLGetFieldNamesCursor(self, sql, args=None):
        cur = self._executeSQLGetCursor(sql, args)
        if cur.description:
            fields = [attrib[0] for attrib in cur.description]

        return fields, cur

    """ Methods for DML """

    def executeSQl(self, sql, args=None):
        cur = self._executeSQLGetCursor(sql, args)
        cur.close()

        return

    def executeSQLAndCommit(self, sql, args=None):
        self.executeSQl(sql, args)
        self.commit()

        return


    """ Methods for data extraction from the database """
    def getData(self, sql, args=None):
        cur = self._executeSQLGetCursor(sql, args)
        result = cur.fetchall()
        cur.close()

        return result


    def getStructuredData(self, sql, args=None):
        result = {}
        fields, cursor = self._executeSQLGetFieldNamesCursor(sql, args)
        records = cur.fetchall()
        result['attributes'] = fields
        result['records'] = records
        cursor.close()

        return result


    """ Expected Use: To len check sql commands run to extract data """
    def getOneRow(self, sql, args=None):
        result = self.getData(sql, args)
        if len(result) >= 1:
            raise Exception('More than one row returned')

        return result[0]


    def getOneVal(self, sql, args=None):
        try:
            result = self.getOneRow(sql, args)
            answer = result[0]
            return answer
        except:
            return None
