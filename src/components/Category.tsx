import {
  IonLabel,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardSubtitle,
  IonCol,
  IonRow,
} from "@ionic/react";

import "./Category.css";

const Category = () => {
  return (
    <>
      <IonLabel>Categories</IonLabel>
      <IonRow>
        <IonCol>
          <IonSlides>
            <IonSlide>
              {/*  */}

              <IonCard className="c4">
                <IonCardSubtitle>Mechanic</IonCardSubtitle>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="c4">
                <IonCardSubtitle>Electrician</IonCardSubtitle>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="c4">
                <IonCardSubtitle>Plumber</IonCardSubtitle>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="c4">
                <IonCardSubtitle>A/C Repair</IonCardSubtitle>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="c4">
                <IonCardSubtitle>Generator repair</IonCardSubtitle>
              </IonCard>
            </IonSlide>

            <IonSlide>
              <IonCard className="c4">
                <IonCardSubtitle>Carpenter</IonCardSubtitle>
              </IonCard>

              {/* */}
            </IonSlide>
          </IonSlides>
        </IonCol>
      </IonRow>
    </>
  );
};

export default Category;
