import React, { useState} from "react";
import {Form, Button } from 'semantic-ui-react';
import './create.css';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard,  IonCardHeader, 
    IonCardTitle, IonCardContent,
    IonList, IonItem, IonInput,
    IonButton, IonIcon,
    IonModal, IonButtons} from '@ionic/react';

import { call, card, mail, person } from "ionicons/icons";

import 'semantic-ui-css/semantic.min.css'

import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import axios  from "axios";

export default function Create(){
    let history = useHistory();
    const type = "1";
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    
    console.log(id);
    console.log(name);
    
    const aux = 'https://cors-anywhere.herokuapp.com/';
    const myip = 'http://40.75.120.104/apiweb/';
    
    const sendDataToApi = ()=> {
        let error = 0;
        let msg   = "";
        if(id.length != 10){
            msg += "Cédula incorrecta\n";
            error = 1;
        }

        if(name.length < 3){
            msg += "Máximo de caracteres para Nombre es 3\n";
            error = 1;
        }

        if(lastname.length < 3){
            msg += "Máximo de caracteres para Apellidos es 3\n";
            error = 1;
        }

        var inx1 = email.indexOf("@");
        if( (email.length < 10) || (inx1 < 0)  ) {
            msg += "Verifique campo Email\n";
            error = 1;
        }

        
        if(error == 0){
            axios.post(aux+myip,{
                type,
                id,
                name,
                lastname,
                email,
                mobile 
            })
            .then (() =>  {
                setId('')
                setName('')
                setLastName('')
                setEmail('')
                setMobile('')
                history.push('/Tab1')
            })
        }else{
            console.log(msg);
            alert(msg);
        }
    }


    return(
        <div>
          <Form>
            <Form.Field>
            <IonIcon slot="start" icon={card} />
              <label className="breathing-label">Cédula *</label>
              <input name="id"
                maxLength={10}
                onChange={(e) => setId(e.target.value)} 
                placeholder='Cédula' />
            </Form.Field>
            <Form.Field>
            <IonIcon slot="start" icon={person} />
              <label className="breathing-label">Nombres</label>
              <input name="name"
                maxLength={100}
                minLength={3}
                onChange={(e) => setName(e.target.value)} 
                placeholder='Nombres' />
            </Form.Field>
            <Form.Field>
            <IonIcon slot="start" icon={person} />
              <label className="breathing-label">Apellidos</label>
              <input name="lastname"
                maxLength={100}
                minLength={3}
                onChange={(e) => setLastName(e.target.value)} 
                placeholder='Apellidos' />
            </Form.Field>
            <Form.Field>
            <IonIcon slot="start" icon={mail} />
              <label className="breathing-label">E-mail</label>
              <input name="email"
                maxLength={100}
                minLength={10}
                type="email"
                onChange={(e) => setEmail(e.target.value)} 
                placeholder='E-mail' />
            </Form.Field>
            <Form.Field>
            <IonIcon slot="start" icon={call} />
              <label className="breathing-label">Celular</label>
              <input name="mobile"
                maxLength={10}
                minLength={10}
                onChange={(e) => setMobile(e.target.value)} 
                placeholder='Celular' />
            </Form.Field>
                <center>
                    <Button color="blue" type='submit' onClick={sendDataToApi}>Guardar</Button>
                    <Link to = '/Tab1'>
                        <Button >Cancelar</Button>
                    </Link>
                    
                </center>
          </Form>
        </div>
    )
}