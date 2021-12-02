from flask import Flask, render_template, url_for, request, redirect 
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy

from app import app
from app import db
from app import Person

@app.route("/search",methods=["POST","GET"])
def search():
    if request.method == "POST":
        name = request.form["name"]
        surname = request.form["surname"]
        new_person = Person(name = name, surname = surname)
        try:
            db.session.add(new_person)
            db.session.commit()
            return(redirect("/search"))
        except:
            return "DATABASE ERROR"

    else:
        offenders = Person.query.order_by(Person.id).all()
        return render_template("search.html", offenders = offenders)

@app.route("/",methods=["GET","POST"])
def index():
        return render_template("index.html")

@app.route("/sTab",methods=["POST","GET"])
def sTab():
    students = Person.query.order_by(Person.name).all()
    return render_template("stable.html")

@app.route("/getStudent/<student_id>",methods=["GET","POST"])
def getStudent(student_id):
    try:
        person = Person.query.order_by(Person.id).filter_by(id = student_id).first()
        return "<h1>{} {}<h2>".format(person.name,person.surname)
    except:
        return "DATABASE EROR"

@app.route("/studentPage/<student_id>",methods=["GET","POST"])
def studentPage(student_id):
    if request.method == "POST":
        try:
            person = Person.query.order_by(Person.id).filter_by(id = student_id).first()
            person.name = request.form["name"]
            person.surname = request.form["surname"]
            db.session.commit()
            return render_template("user_info.html", i = person)
        except:
            return "DATABASE EROR"
        
    else:
        try:
            person = Person.query.order_by(Person.id).filter_by(id = student_id).first()
            return render_template("user_info.html", i = person)
        except:
            return "DATABASE EROR"


@app.route("/dumpStudents",methods=["GET","POST"])
def dumpStudents():
    try:
        persons = [x.serialize() for x in Person.query.order_by(Person.id).all() ]
        return jsonify({'students': persons})
    except:
        return "DATABASE EROR"
