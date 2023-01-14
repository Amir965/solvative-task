import React from "react";
import style from "./Loading.module.css";
const Loading = ({ loading, size }) => {
  return (
    <div className={style.loader_container}>
      <div className={style.spinner}></div>
    </div>
  );
};

export default Loading;
