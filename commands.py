@bot.command()
    @commands.has_permissions(manage_channels=True)
    async def lock(ctx):

        overwrite = ctx.channel.overwrites_for(ctx.guild.default_role)
        overwrite.send_messages = False

        await ctx.channel.set_permissions(
            ctx.guild.default_role,
            overwrite=overwrite
        )

        await ctx.send("🔒 Channel locked.")

    @bot.command()
    @commands.has_permissions(manage_channels=True)
    async def unlock(ctx):

        overwrite = ctx.channel.overwrites_for(ctx.guild.default_role)
        overwrite.send_messages = True

        await ctx.channel.set_permissions(
            ctx.guild.default_role,
            overwrite=overwrite
        )

        await ctx.send("🔓 Channel unlocked.")

    @bot.command()
    @commands.has_permissions(manage_channels=True)
    async def slowmode(ctx, seconds: int):

        await ctx.channel.edit(
            slowmode_delay=seconds
        )

        await ctx.send(
            f"⏱️ Slowmode set to {seconds} seconds."
        )