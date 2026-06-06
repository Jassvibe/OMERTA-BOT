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

def add_warning(guild_id, user_id, moderator_id, reason):

    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        """
        INSERT INTO warnings
        (guild_id,user_id,moderator_id,reason)
        VALUES (%s,%s,%s,%s)
        """,
        (
            guild_id,
            user_id,
            moderator_id,
            reason
        )
    )

    conn.commit()

    cur.close()
    conn.close()

def get_warnings(guild_id, user_id):

    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        """
        SELECT reason
        FROM warnings
        WHERE guild_id=%s
        AND user_id=%s
        """,
        (
            guild_id,
            user_id
        )
    )

    data = cur.fetchall()

    cur.close()
    conn.close()

    return data