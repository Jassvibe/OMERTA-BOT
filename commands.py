from discord.ext import commands

async def setup_commands(bot):

    @bot.command()
    async def ping(ctx):
        await ctx.send("Pong!")

    @bot.command()
    async def botinfo(ctx):
        await ctx.send("OMERTA BOT is running.")