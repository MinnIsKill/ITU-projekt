import React from "react";
import { useState, useEffect } from "react";

const Edit = () => {
    
    const [student,setStudent] = useState({ ID: ""});

    useEffect(()=>{
        if(window.location.hash != ""){
        fetch('http://localhost:5000/getStudent/'+window.location.hash.replace('#',''),{method: "GET"}).then(response => response.json()).then((json) => {setStudent(json);console.log(json)});
        }},[]);
    
    function delete_data(){
        if(student.ID != ""){
        fetch('http://localhost:5000/deleteStudent/'+student.ID, {method: "POST"})
            .then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
        })
        .then((data) => {
            alert("Data Odstraněna "+data);
            reset_student();
        })
            .catch((error) => {
            alert("Nepovedlo odstranit data\n"+error)
        });}
        else{
            alert("Nelze odstranit žáka bez ID")
        }
    }

    function send_data(){
        if(student.ID != ""){
        const opts ={
            method: 'POST',
            header: {'Content-Type' : 'application/json'},
            body: JSON.stringify(student)
        };
        console.log(opts.body);
        fetch('http://localhost:5000/setStudent/'+student.ID, opts)
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
        });}
        else{
            alert("Nelze upravit žáka bez ID")
        }
    }

    function reset_student(){
        setStudent("");
        setStudent({ID : ""});
        document.getElementById("Form").reset();
    };
    return(
        <div>
            <div className="Form"> 
                <form id="Form">
                    <label>ID:<input value={student.ID}        type="text" onChange={(e)=> {if(e.target.value != ""){fetch('http://localhost:5000/getStudent/'+e.target.value,{method: "GET"}).then(response => response.json()).then((json) => {setStudent(json);console.log(json)}).catch(setStudent({name:"Neplatné ID"}))}else{reset_student();}}} required={true}                             /></label>
                    <label>Jméno:<input value={student.NAME}        type="text" onChange={(e) => setStudent({...student, NAME  : e.target.value})} required={true}                             /></label>
                    <label>Příjmení:<input value={student.SURNAME}     type="text" onChange={(e) => setStudent({...student, SURNAME  : e.target.value})} required={true}                       /></label>
                    <label>Datum narození:<input value={student.BIRTHDATE}   type="text" onChange={(e) => setStudent({...student, BIRTHDATE  : e.target.value})} required={true}               /></label>
                    <label>Nástroj:<input value={student.INSTRUMENT}  type="text" onChange={(e) => setStudent({...student,  INSTRUMENT : e.target.value})} required={true}                     /></label>
                    <label>Telefoní číslo:<input value={student.PHONE}       type="text" onChange={(e) => setStudent({...student, PHONE  : e.target.value})} required={true}                   /></label>
                    <label>Telefoní číslo na rodiče:<input value={student.PHONEPARENT}  type="text" onChange={(e) => setStudent({...student, PHONEPARENT  : e.target.value})} required={true}/></label>
                    <label>Email:<input value={student.EMAIL}       type="text" onChange={(e) => setStudent({...student, EMAIL  : e.target.value})} required={true}                            /></label>
                    <label>Email na rodiče:<input value={student.EMAILPARENT}  type="text" onChange={(e) => setStudent({...student, EMAILPARENT  : e.target.value})} required={true}         /></label>
                </form>
                
                <button onClick={ send_data }>Uložit</button>    
                <button className="refresh" onClick={reset_student}>Obnovit</button>    
                <button className="refresh" onClick={ delete_data}>Odstranit</button>    
            </div>
        </div>

    );
};



export default Edit;
