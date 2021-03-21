import {
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
} from "@ionic/react";

import img from "../zebra.png";

import "./MostPopular.css";

const MostPopular = () => {
  return (
    <>
      <IonLabel>Most Popular</IonLabel>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonCard>
              <IonImg src={img} />
              <IonCardTitle>Shakiru Olodo</IonCardTitle>
              <IonCardSubtitle>⭐️⭐️⭐️⭐️⭐️</IonCardSubtitle>
            </IonCard>
            <IonCard>
              <IonImg src={img} />
              <IonCardTitle>Haruna Ahmed</IonCardTitle>
              <IonCardSubtitle>⭐️⭐️⭐️⭐️⭐️</IonCardSubtitle>
            </IonCard>
            <IonCard>
              <IonImg src={img} />
              <IonCardTitle>Yemisi Obe</IonCardTitle>
              <IonCardSubtitle>⭐️⭐️⭐️⭐️⭐️</IonCardSubtitle>
            </IonCard>
          </IonCol>
          <IonCol>
            <IonCard>
              <IonImg src={img} />
              <IonCardTitle>Ngozika Kalu</IonCardTitle>
              <IonCardSubtitle>⭐️⭐️⭐️⭐️⭐️</IonCardSubtitle>
            </IonCard>
            <IonCard>
              <IonImg src={img} />
              <IonCardTitle>Bubu Johnson</IonCardTitle>
              <IonCardSubtitle>⭐️⭐️⭐️⭐️⭐️</IonCardSubtitle>
            </IonCard>
            <IonCard>
              <IonImg src={img} />
              <IonCardTitle>Jane Doe</IonCardTitle>
              <IonCardSubtitle>⭐️⭐️⭐️⭐️⭐️</IonCardSubtitle>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
};

export default MostPopular;
