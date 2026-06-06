from discord.ext import commands
import discord

async def setup_commands(bot):

    @bot.command()
    async def ping(ctx):
        await ctx.send("Pong!")

    @bot.command()
    async def botinfo(ctx):
        await ctx.send("OMERTA BOT is running.")

    @bot.command()
    @commands.has_permissions(ban_members=True)
    async def ban(ctx, member: discord.Member, *, reason="No reason provided"):

        await member.ban(reason=reason)

        await ctx.send(
            f"🔨 {member} has been banned.\nReason: {reason}"
        )

    @bot.command()
    @commands.has_permissions(kick_members=True)
    async def kick(ctx, member: discord.Member, *, reason="No reason provided"):

        await member.kick(reason=reason)

        await ctx.send(
            f"👢 {member} has been kicked.\nReason: {reason}"
        )

    @bot.command()
    @commands.has_permissions(manage_messages=True)
    async def clear(ctx, amount: int):

        await ctx.channel.purge(limit=amount + 1)

        msg = await ctx.send(
            f"🧹 Deleted {amount} messages."
        )

        import asyncio
        await asyncio.sleep(3)

        await msg.delete()