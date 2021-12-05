/*
 * Author: Jan Lutonský xluton02
 */
import React from "react";
import { useState, useEffect } from "react";
import './Add.css'

const Add = () => {

    const [student,setStudent] = useState({name:"",
                                           surname:"",
                                           birthdate:"",
                                           instrument:"",
                                           phone:"",
                                           phone_parent:"",
                                           email:"",
                                           email_parent:""
                                          });
    

    useEffect(()=>{
        const data = localStorage.getItem("AddStudent");
        if(data){
            setStudent(JSON.parse(data));
        }
    },[]);

    useEffect(()=>{
        localStorage.setItem("AddStudent", JSON.stringify(student));
    });

    function send_data(){
        const opts ={
            method: 'POST',
            header: {'Content-Type' : 'application/json'},
            body: JSON.stringify(student)
        };
        console.log(opts.body);
        fetch('http://localhost:5000/addStudent', opts)
            .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
        })
        .then((data) => {
            alert("Data uložena"+data);
            reset_student();
        })
            .catch((error) => {
            alert("Nepovedlo se uložit data\n"+error)
        });
    }

    function reset_student(){
        setStudent({ name : ""});
        setStudent({surname:""});
        setStudent({birthdate:""});
        setStudent({instrument:""});
        setStudent({phone:""});
        setStudent({phone_parent:""});
        setStudent({email:""});
        setStudent({email_parent:""});
        document.getElementById("Form").reset();
    };

    return(
        <div className="Form"> 
            <form id="Form">
                <label>Jméno:<input value={student.name}        type="text" onChange={(e) => setStudent({...student, name  : e.target.value})} required={true}                             /></label>
                <label>Příjmení:<input value={student.surname}     type="text" onChange={(e) => setStudent({...student, surname  : e.target.value})} required={true}                       /></label>
                <label>Datum narození:<input value={student.birthdate}   type="text" onChange={(e) => setStudent({...student, birthdate  : e.target.value})} required={true}               /></label>
                <label>Nástroj:<input value={student.instrument}  type="text" onChange={(e) => setStudent({...student,  instrument : e.target.value})} required={true}                     /></label>
                <label>Telefoní číslo:<input value={student.phone}       type="text" onChange={(e) => setStudent({...student, phone  : e.target.value})} required={true}                   /></label>
                <label>Telefoní číslo na rodiče:<input value={student.phone_parent}  type="text" onChange={(e) => setStudent({...student, phone_parent  : e.target.value})} required={true}/></label>
                <label>Email:<input value={student.email}       type="text" onChange={(e) => setStudent({...student, email  : e.target.value})} required={true}                            /></label>
                <label>Email na rodiče:<input value={student.email_parent}  type="text" onChange={(e) => setStudent({...student, email_parent  : e.target.value})} required={true}         /></label>
            </form>
                <button onClick={ send_data }>Uložit</button>    
                <button className="refresh" onClick={reset_student}>Obnovit</button>    
        </div>
    );
};



export default Add;
