import "./Presentation.scss";
import quotationMark from "../../assets/quotationMark.png";
import { useTranslation } from "react-i18next";


export default function Presentation({ aos }) {
  const { t } = useTranslation();

  
  return (
    <div id="presentation" data-aos={aos}>
      <img src={quotationMark} alt="Ouverture de guillemet" />
      <p>
      {t("presentation")}
      </p>
      <img
        src={quotationMark}
        alt="Ouverture de guillemet"
        className="quote-right"
      />
    </div>
  );
}
