async def setup_events(bot):

    @bot.event
    async def on_ready():
        print(f"Logged in as {bot.user}")