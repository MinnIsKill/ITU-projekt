from flask import Flask, render_template, url_for, request, redirect 
from flask import jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS, cross_origin

from app import app
from app import db
from app import Person

@app.route("/addTab",methods=["POST","GET"])
def addTable():
    if request.method == "POST":
        name = request.form["name"]
        surname = request.form["surname"]
        instrument = request.form["instrument"]
        birthdate = request.form["birthdate"]
        phone = request.form["phone"]
        phone_parent = request.form["phone_parent"]
        email = request.form["email"]
        email_parent = request.form["email_parent"] 
        new_person = Person(name = name, surname = surname, instrument=instrument,birthdate=birthdate,phone=phone,phone_parent=phone_parent,email=email,email_parent=email_parent)
        try:
        
            db.session.add(new_person)
            db.session.commit()
            
            return(redirect("/addTab"))
        except:
            return "DATABASE ERROR"

    else:
        persons = Person.query.order_by(Person.id).all()
        return render_template("addTab.html", persons = persons)

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
        person_db = Person.query.order_by(Person.id).filter_by(id = student_id).first()
        person = {"ID":str(person_db.id),"NAME":person_db.name,"SURNAME":person_db.surname,"INSTRUMENT":person_db.instrument, "BIRTHDATE":person_db.birthdate,"PHONE":person_db.phone,"PHONEPARENT":person_db.phone_parent,"EMAIL":person_db.email,"EMAILPARENT":person_db.email_parent}
        return jsonify(person);
    except:
        person = {"ID":"","NAME":"DATABASE ERROR","SURNAME":"","INSTRUMENT":"", "BIRTHDATE":"","PHONE":"","PHONEPARENT":"","EMAIL":"","EMAILPARENT":""}
        return jsonify(person);

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


@app.route("/setStudent/<student_id>",methods=["GET","POST"])
def setStudent(student_id):
    if request.method == "POST":
        try:
            rec = request.get_json(force=True)
            print(rec);
            person = Person.query.order_by(Person.id).filter_by(id = student_id).first()
            person.name = rec["NAME"]
            person.surname = rec["SURNAME"]
            person.instrument = rec["INSTRUMENT"]
            person.birthdate = rec["BIRTHDATE"]
            person.phone = rec["PHONE"]
            person.phone_parent = rec["PHONEPARENT"]
            person.email = rec["EMAIL"]
            person.email_parent = rec["EMAILPARENT"] 
           
            db.session.commit()
            return jsonify({"success": True})
        except:
            return "DATABASE EROR"
        

@app.route("/dumpStudents",methods=["GET","POST"])
@cross_origin()
def dumpStudents():
    try:
        all_persons = Person.query.order_by(Person.id).all()
        persons = [x.serialize() for x in all_persons ]
        return jsonify({'students': persons})
    except:
        return "DATABASE EROR"

@app.route("/deleteStudent/<student_id>",methods=["GET","POST"])
@cross_origin()
def studentDelete(student_id):
    try:
        person = Person.query.filter_by(id=student_id).first();
        db.session.delete(person);
        db.session.commit();
        return jsonify({"success": True})
    except:
        return "DATABASE EROR"


@app.route("/addStudent",methods=["GET","POST"])
def addStudent():
    if request.method == "POST":
        rec = request.get_json(force=True)
        name = rec["name"]
        surname = rec["surname"]
        instrument = rec["instrument"]
        birthdate = rec["birthdate"]
        phone = rec["phone"]
        phone_parent = rec["phone_parent"]
        email = rec["email"]
        email_parent = rec["email_parent"] 
        new_person = Person(name = name, surname = surname, instrument=instrument,birthdate=birthdate,phone=phone,phone_parent=phone_parent,email=email,email_parent=email_parent)
        try:
        
            db.session.add(new_person)
            db.session.commit()
            
            return jsonify({"success": True})
        except:
            return "DATABASE ERROR"
