import React from 'react';
import { IonContent, IonHeader, 
  IonPage, IonTitle,  
  IonToolbar, IonCard,  
  IonCardContent} from '@ionic/react';
import Report from '../components/read/reportDebug'


const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

            <IonTitle>Historial Registro</IonTitle>

        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="medium" className="ion-padding">
        <IonCard>          
          <IonCardContent>

            <Report/> 
          </IonCardContent>
        </IonCard>        
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
