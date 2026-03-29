@app.route("/setup", methods=["POST"])
def setup():
    data = request.json
    db = db_connect()

    # شركة
    db.execute("INSERT INTO companies (name) VALUES (?)", (data["company"],))

    # فروع
    for branch in data["branches"]:
        db.execute(
            "INSERT INTO branches (name, phone) VALUES (?,?)",
            (branch["name"], branch["phone"])
        )

    # مستخدم
    db.execute(
        "INSERT INTO users (username, password, role) VALUES (?,?,?)",
        (data["username"], data["password"], "admin")
    )

    db.commit()

    return {"status": "ok"}
