import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { person, lockClosed, card } from 'ionicons/icons';
import './Tab3.css';

const users = [
  { id: 1, username: 'Fulano', password: '*****', cedula: '###' },
  { id: 2, username: 'Usuario2', password: '******', cedula: '###' },
  { id: 3, username: 'Usuario3', password: '******', cedula: '###' },
];

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lista de Usuarios--Muestra Demo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {users.map((user) => (
            <IonItem key={user.id}>
              <IonLabel>
                <IonLabel style={{ display: 'flex', flexDirection: 'column' }}>
                  <IonLabel style={{ display: 'flex', alignItems: 'center' }}>
                    <IonIcon slot="start" icon={person} />
                    <span>Usuario: {user.username}</span>
                  </IonLabel>
                  <IonLabel style={{ display: 'flex', alignItems: 'center' }}>
                    <IonIcon slot="start" icon={lockClosed} />
                    <span>Contraseña: {user.password}</span>
                  </IonLabel>
                  <IonLabel style={{ display: 'flex', alignItems: 'center' }}>
                    <IonIcon slot="start" icon={card} />
                    <span>Cédula: {user.cedula}</span>
                  </IonLabel>
                </IonLabel>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
