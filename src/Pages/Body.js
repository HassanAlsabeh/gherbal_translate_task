import React from "react";
import { useTranslation } from "react-i18next";
import arrow from "./arrow-right.png";

export default function Body() {
  const { t } = useTranslation();
  return (
    <div>
      <div>
        <div className="body_title"> {t("body_title")}</div>
        <div className="body">
          <img src={arrow} width="50px" height="40px" />
          <div className="body_text">{t("first_body")} </div>
        </div>
        <div className="body">
          <div style={{ fontWeight: "bold", marginLeft: "2rem" }}>
            {t("body_title2")}{" "}
          </div>
        </div>

        <div className="body">
          <img src={arrow} width="50px" height="40px" />
          <div className="body_text">{t("second_body")} </div>
        </div>

        <div className="body">
          <img src={arrow} width="50px" height="40px" />
          <div className="body_text">{t("third_body")} </div>
        </div>

        <div className="body">
          <img src={arrow} width="50px" height="40px" />
          <div className="body_text">{t("fourth_body")} </div>
        </div>
      </div>
    </div>
  );
}
