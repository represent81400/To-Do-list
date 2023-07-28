import React from "react";

const date = new Date();

function Footer(){
  return(
    <footer>
      <p> Copyright@To Do List {date.getFullYear()}. </p>
    </footer>
  )
}

export default Footer;
