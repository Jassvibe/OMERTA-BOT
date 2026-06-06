import os
import psycopg2

def get_connection():
    return psycopg2.connect(
        os.getenv("DATABASE_URL")
    )

def test_connection():
    try:
        conn = get_connection()
        cur = conn.cursor()

        cur.execute("SELECT 1")

        result = cur.fetchone()

        cur.close()
        conn.close()

        return result[0] == 1

    except Exception as e:
        print(f"Database Error: {e}")
        return False