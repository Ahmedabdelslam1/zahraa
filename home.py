from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

def db():
    return sqlite3.connect("system.db")


app = Flask(__name__)

def db():
    return sqlite3.connect("system.db")
    
@app.route("/invoice", methods=["POST"])
def invoice():
    data = request.json
    total = data["total"]

    db.execute("INSERT INTO invoices (total) VALUES (?)", (total,))
    db.commit()

    return {"status": "saved"}


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

@app.route("/setup", methods=["POST"])

@app.route("/login", methods=["POST"])
def login():
    data = request.json

    user = db.execute(
        "SELECT * FROM users WHERE username=? AND password=?",
        (data["username"], data["password"])
    ).fetchone()

    if user:
        return {"status": "ok"}
    return {"status": "error"}


@app.route("/patients", methods=["POST"])
def add_patient():
    data = request.json

    db.execute(
        "INSERT INTO patients (name, phone) VALUES (?,?)",
        (data["name"], data["phone"])
    )
    db.commit()

    return {"status": "added"}

@app.route("/login", methods=["POST"])
def login():
    data = request.json

    user = db().execute(
        "SELECT * FROM users WHERE username=? AND password=?",
        (data["username"], data["password"])
    ).fetchone()

    if user:
        return jsonify({"status": "ok"})
    else:
        return jsonify({"status": "error", "message": "بيانات غلط"})

app.run(host="0.0.0.0", port=5000)


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

app.run()
