import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Search from "./Search";

import "./Home.css";
import Language from "./Language";
import Header from "./Header";
import Body from "./Body";
export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <Language />
        <Header />
        <Body />
        <Search />
      </div>
    </div>
  );
}
