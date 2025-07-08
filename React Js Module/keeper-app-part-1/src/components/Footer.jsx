import React from "react";
import "../../public/styles.css";

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright © {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
