import os
import threading
import asyncio

from flask import Flask
import discord
from discord.ext import commands

from config import BOT_TOKEN
from commands import setup_commands
from events import setup_events
from routes import register_routes


app = Flask(__name__)

register_routes(app)

intents = discord.Intents.default()
intents.message_content = True
intents.members = True

bot = commands.Bot(
    command_prefix="!",
    intents=intents
)

async def setup_bot():
    await setup_commands(bot)
    await setup_events(bot)

def run_bot():
    async def runner():
        await setup_bot()
        await bot.start(BOT_TOKEN)

    asyncio.run(runner())

threading.Thread(target=run_bot).start()

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
