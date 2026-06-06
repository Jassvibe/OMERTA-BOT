from discord.ext import commands
from db import add_warning, get_warnings

async def setup_commands(bot):

    @bot.command()
    async def ping(ctx):
        await ctx.send("Pong!")

    @bot.command()
    async def botinfo(ctx):
        await ctx.send("OMERTA BOT is running.")

    @bot.command()
    async def warn(ctx, member, *, reason):

        add_warning(
            ctx.guild.id,
            int(member.strip("<@!>")),
            ctx.author.id,
            reason
        )

        await ctx.send(
            f"Warning added for {member}\nReason: {reason}"
        )

    @bot.command()
    async def warnings(ctx, member):

        user_id = int(member.strip("<@!>"))

        data = get_warnings(
            ctx.guild.id,
            user_id
        )

        if not data:
            await ctx.send("No warnings found.")
            return

        msg = ""

        for i, row in enumerate(data, start=1):
            msg += f"{i}. {row[0]}\n"

        await ctx.send(msg)