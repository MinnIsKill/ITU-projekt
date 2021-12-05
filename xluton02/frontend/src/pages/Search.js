/* 
 * Author: Jan Lutonský xluton02
 */
import React from "react";
import {useState, useEffect} from "react";
import Table from "./../components/Table/main.js"
import "./../components/Table/main.css"


const Search = ( ) => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/dumpStudents',{method: "GET"})
        .then(response => response.json())
        .then((json) => setData(json.students))
    }, []);
    
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [instrument, setInstrument] = useState("");
    const [birthdate, setBirthdate] = useState("");
    
    function search_name(rows){
        return rows.filter((row) => 
            row.ID.toString().toLowerCase().indexOf(name.toLowerCase()) > -1 ||
            row.Jméno.toString().toLowerCase().indexOf(name.toLowerCase()) > -1 
        );
    }
    
    
    function search_surname(rows){
        return rows.filter((row) => 
            row.Příjmení.toString().toLowerCase().indexOf(surname.toLowerCase()) > -1 
        );
    }
    
    
    function search_instrument(rows){
        return rows.filter((row) => 
            row.Nástroj.toString().toLowerCase().indexOf(instrument.toLowerCase()) > -1 
        );
    }
    
    function search_birthdate(rows){
        return rows.filter((row) => 
            row.Narozen.toString().toLowerCase().indexOf(birthdate.toLowerCase()) > -1 
        );
    }
    
    return(
        <div>
            <div className="SearchBar" Style="padding-left: 20px;">
                    Jméno/ID:<input Style="width: 15%" className ="inputBox"  type="text" value={ name } onChange={(e) => setName(e.target.value) }/>
                    Příjmení:<input Style="width: 15%" className ="inputBox"  type="text" value={ surname } onChange={(e) => setSurname(e.target.value) }/>
                
                <span>
                    Nástroj:<input Style="width: 15%" className ="inputBox"  type="text" value={ instrument } onChange={(e) => setInstrument(e.target.value) }/>
                    Datum Narození:<input Style="width: 15%" className ="inputBox" type="text" value={ birthdate } onChange={(e) => setBirthdate(e.target.value) }/>
                </span>
            </div>
        
            <Table data={ search_birthdate(search_instrument(search_surname(search_name(data)))) } />
        </div>
    );
};


export default Search;
