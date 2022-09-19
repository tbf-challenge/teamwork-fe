import React from "react";
import { DelArtContent } from "./DelArtContent";
import "./delArt.css";

const DelArt = () => {
  return (
    <section className="DeleteArticle">
      <div className="wrapper">
        <button className="close" type="button">X</button>
        <h3>{DelArtContent.delArt}</h3>
        <p>{DelArtContent.confirmDel}</p>
        <div className="callToAction">
          <button type="button">{DelArtContent.buttonCancel}</button>
          <button className="delete" type="button">{DelArtContent.buttonDelete}</button>
        </div>
      </div>
    </section>
  );
};

export default DelArt;
