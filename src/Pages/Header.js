import React from "react";
import { useTranslation } from "react-i18next";
export default function Header() {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <div className="header">
        <div className="header_title">
          <p style={{ width: "80px", marginLeft: "1rem" }}>
            {t("header_title")}
          </p>
        </div>
        <div> {t("header_1")}</div>
        <div> {t("header_2")}</div>
        <div>{t("header_3")}</div>
      </div>
    </div>
  );
}
