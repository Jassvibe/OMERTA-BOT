from db import test_connection

async def setup_events(bot):

    @bot.event
    async def on_ready():

        print(f"Logged in as {bot.user}")

        if test_connection():
            print("Database Connected")
        else:
            print("Database Failed")