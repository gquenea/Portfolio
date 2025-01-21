import "./Presentation.scss";
import quotationMark from "../../assets/quotationMark.png";

export default function Presentation() {
  return (
    <div id="presentation">
      <img src={quotationMark} alt="Ouverture de guillemet" />
      <p>
        Depuis maintenant quelques années je me suis reconverti dans un domaine
        qui reflete ma passion pour la technologie, le milieu de l'IT. J'ai
        effectué une formation en tant que developpeur web full stack d'un an
        puis j'ai pu travaillé pendant un an dans un entreprise qui developpait
        des solutions logiciels. Là bas j'ai pu cotoyer l'équipe de testeur dont
        le métier a tout de suite attiré ma curiosité. J'ai donc décidé
        d'effectuer un parcours en testeur logiciel. Maintenant j'ai hâte
        d'integrer une équipe de test et de perfectionner mes connaissances pour
        à terme devenir lead test.
      </p>
      <img src={quotationMark} alt="Ouverture de guillemet" className="quote-right" />
    </div>
  );
}
