import os
import threading
from flask import Flask
import discord
from discord.ext import commands

TOKEN = os.getenv("BOT_TOKEN")

intents = discord.Intents.default()
intents.message_content = True
intents.members = True

bot = commands.Bot(
    command_prefix="!",
    intents=intents
)

app = Flask(__name__)

@app.route("/")
def home():
    return """
    <h1>Discord Bot Dashboard</h1>
    <p>Bot and Dashboard are running.</p>
    """

@bot.event
async def on_ready():
    print(f"Logged in as {bot.user}")

@bot.command()
async def ping(ctx):
    await ctx.send("Pong!")

def run_bot():
    bot.run(TOKEN)

threading.Thread(target=run_bot).start()

if __name__ == "__main__":
    port = int(os.getenv("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
