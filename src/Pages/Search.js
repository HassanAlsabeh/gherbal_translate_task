import React from "react";
import { useTranslation } from "react-i18next";
import search from "./search.png";

export default function Search() {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <div>
        <div className="body" style={{ marginTop: "20px", marginLeft: "20px" }}>
          <div>
            <img src={search} width="50px" height="40px" />
          </div>
          <div className="body_text"> {t("search")}</div>
        </div>
        <div className="search_container">
          <div className="search">
            <p style={{ width: "130px", margin: "1rem" }}>
              {t("search_icon_1")}
            </p>
          </div>
          <div className="search">
            <p style={{ width: "130px", margin: "1rem" }}>
              {t("search_icon_2")}
            </p>
          </div>
          <div className="search">
            <p style={{ width: "130px", margin: "1rem" }}>
              {t("search_icon_3")}
            </p>
          </div>
          <div className="search">
            <p style={{ width: "130px", margin: "1rem" }}>
              {t("search_icon_4")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
