@app.route("/setup", methods=["POST"])
def setup():
    data = request.json
    db = db_connect()

    db.execute("INSERT INTO companies (name) VALUES (?)", (data["company"],))
    db.execute("INSERT INTO branches (name, phone) VALUES (?,?)",
               (data["branch"], data["phone"]))

    db.execute("INSERT INTO users (username, password, role) VALUES (?,?,?)",
               (data["user"], data["pass"], "admin"))

    db.commit()

    return {"status": "ok"}
