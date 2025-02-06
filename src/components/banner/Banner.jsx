import "./Banner.scss";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  return (
    <div id="banner">
      <div className="name-and-job">
        <h1>
          <span className="first-name">Gislain</span>
          <br />
          <span className="last-name">Quenea</span>
        </h1>
        <div className="job">{t("header.banner.job")}</div>
      </div>
    </div>
  );
}
