from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

def db():
    return sqlite3.connect("system.db")

@app.route("/login", methods=["POST"])
def login():
    data = request.json
    user = db().execute(
        "SELECT * FROM users WHERE username=? AND password=?",
        (data["username"], data["password"])
    ).fetchone()

    if user:
        return jsonify({"status": "ok", "branch_id": user[4]})
    return jsonify({"status": "error"})

@app.route("/patients/<int:branch_id>")
def patients(branch_id):
    rows = db().execute(
        "SELECT * FROM patients WHERE branch_id=?",
        (branch_id,)
    ).fetchall()

    return jsonify(rows)
    
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

app.run()
