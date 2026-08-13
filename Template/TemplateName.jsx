import React, { useEffect, useState } from "react";
import Style from "./TemplateName.module.css";

export default function TemplateName() {
 
  const [counter, setCounter] = useState(0);
 
  useEffect(() => {}, []);
 
 
  return (
    <>
      <h1>TemplateName</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas et
        excepturi ex fugit saepe cumque soluta repellat, eius vel? Harum
        dignissimos nam magni impedit mollitia aliquid optio et vel autem!
      </p>
    </>
  );
}
