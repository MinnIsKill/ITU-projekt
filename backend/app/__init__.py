from flask import Flask, render_template, url_for, request, redirect 
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from flask_cors import CORS, cross_origin


app = Flask(__name__)
app.secret_key = "TrY% AnD@!1 G*E@s193This"
app.config['JSON_SORT_KEYS'] = False

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Person(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(63),nullable=False)
    surname = db.Column(db.String(63),nullable=False)
    instrument = db.Column(db.String(127),nullable=False)
    phone = db.Column(db.String(15),nullable=True)
    phone_parent = db.Column(db.String(13),nullable=False)
    email = db.Column(db.String(127),nullable=True)
    email_parent = db.Column(db.String(127),nullable=False)
    birthdate = db.Column(db.String(63),nullable=False)
    

    def __init__(self,name,surname,instrument,phone,phone_parent,email,email_parent,birthdate):
        self.name = name
        self.surname = surname
        self.instrument   = instrument 
        self.phone        = phone 
        self.phone_parent = phone_parent 
        self.email        = email 
        self.email_parent = email_parent 
        self.birthdate    = birthdate

    def __repr__(self):
        return("id:[{}]-date_of_creatin:|{}| name:\"{}\" surname:\"{}\"".format(self.id,self.date_of_creatin,name,surname))

    def serialize(self):
        return{"ID":str(self.id),"Jméno":self.name,"Příjmení":self.surname,"Nástroj":self.instrument, "Narozen":self.birthdate,"Mobil":self.phone,"Mobil_rodiče":self.phone_parent,"Email":self.email,"Email_rodiče":self.email_parent}


from app import views
