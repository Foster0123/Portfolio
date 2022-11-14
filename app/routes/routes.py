from app import app
from flask import render_template

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login")
def login():
    return render_template("pages/login.html")

@app.route("/signup")
def signup():
    return render_template("pages/signup.html")

@app.route("/account")
def account():
    return render_template("pages/account.html")