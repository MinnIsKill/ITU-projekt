from flask import Flask, render_template, url_for, request, redirect 
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.secret_key = "hehe"

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)

class Person(db.Model):
    id = db.Column(db.Integer,primary_key = True)
    name = db.Column(db.String(200),nullable=False)
    surname = db.Column(db.String(200),nullable=False)
    
    def __init__(self,name,surname):
        self.name = name
        self.surname = surname

    def __repr__(self):
        return("id:[{}]-date_of_creatin:|{}| name:\"{}\" surname:\"{}\"".format(self.id,self.date_of_creatin,name,surname))

from app import views
