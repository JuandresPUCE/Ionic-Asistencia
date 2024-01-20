import React, { useState, useEffect } from "react";
import {Form, Button } from 'semantic-ui-react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard,  IonCardHeader, 
    IonCardTitle, IonCardContent,
    IonList, IonItem, IonInput,
    IonButton, IonIcon,
    IonModal, IonButtons} from '@ionic/react';

import 'semantic-ui-css/semantic.min.css'

import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import axios  from "axios";

export default function Attendant(){
    
    let history = useHistory();
    const type = "2";
    const [date, setDate] = useState('');
    const [record, setRecord] = useState('');
    const [id, setId]       = useState('');
    const [name, setName]   = useState('');
    const [lastname, setLastName] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [imp1, setInput1] = useState('');
    const [imp2, setInput2] = useState('');
 
    //FECHA ACTUAL
    var today = new Date();
    var now   = today.toLocaleString();


    useEffect(() =>{
        setRecord(localStorage.getItem('RECORD'));
        setId(localStorage.getItem('ID'));
        setName(localStorage.getItem('NAME'));
        setLastName(localStorage.getItem('LASTNAME'));
        setDate(now);
        
        let random = Math.floor(Math.random() * 9);
        //console.log("NUMERO 1 "+ random);
        setN1(random);

        let random2 = Math.floor(Math.random() * 9);
        //console.log("NUMERO 2 "+ random2);
        setN2(random2);
    }, [])
    
   
    const aux = 'https://cors-anywhere.herokuapp.com/';
    const myip = 'http://40.75.120.104/apiweb/';
    
    const sendDataToApi = ()=> {
        console.log("entra");
        var v1 = id.substring((n1-1), n1);
        var v2 = id.substring((n2-1), n2);
        console.log(v1+" -"+v2);
        if( (v2 == imp2)&&(v1 == imp1) ){
            
            axios.post(aux+myip,{
                type,
                record
            })
            .then (() =>  {
                let random = Math.floor(Math.random() * 9);
                setN1(random);
                let random2 = Math.floor(Math.random() * 9);
                setN2(random2);
                setInput1('');
                setInput1('');
                history.push('/Tab1')
            })
        }
    }
    
    

    return(
        <div>
          <Form>
            <center>
              <h2>Bienvenido</h2>
              <br/>
              <h2>{name} {lastname}</h2>
            </center>
            <br/>
            <br/>
            <center>
              <h2>Fecha y Hora</h2>
              <h2>{date} </h2>
              <br/>
              <h3>Para registrar su aistencia ingrese los digitos de su cédula  </h3>
            </center>
            <br/>
            <Form.Field>
              <label className="breathing-label" >{n1}</label>
              <input name="number1"
                type="number"
                onChange={(e) => setInput1(e.target.value)} 
                placeholder='Ingrese el digito indicado' />
            </Form.Field>
            <Form.Field>
              <label className="breathing-label">{n2}</label>
              <input name="number2"
                type="number"
                onChange={(e) => setInput2(e.target.value)} 
                placeholder='Ingrese el digito indicado' />
            </Form.Field>
            <br/>
            <center>
                <Button color="red" type='submit' onClick={sendDataToApi}>Registrar</Button>
                <Link to = '/Tab1'>
                    <Button >Cancelar</Button>
                </Link>
          
            </center>
          </Form>
        </div>
    )
}