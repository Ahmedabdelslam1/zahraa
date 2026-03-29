from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

def get_db():
    return sqlite3.connect("clinic.db")

@app.route("/")
def index():
    db = get_db()
    patients = db.execute("SELECT * FROM patients").fetchall()
    return render_template("index.html", patients=patients)

@app.route("/add_patient", methods=["POST"])
def add_patient():
    name = request.form["name"]
    phone = request.form["phone"]

    db = get_db()
    db.execute("INSERT INTO patients (name, phone) VALUES (?,?)", (name, phone))
    db.commit()
    return redirect("/")

app.run(debug=True)
