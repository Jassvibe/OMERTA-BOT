def register_routes(app):

    @app.route("/")
    def home():
        return """
        <h1>OMERTA Dashboard</h1>
        <p>Bot is online.</p>
        """