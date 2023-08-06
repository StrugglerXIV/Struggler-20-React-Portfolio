import React from "react";
import { VscGithubAlt } from "react-icons/vsc";

function Footer() {
  return (
    <footer>
      <h2>StrugglerXIV©</h2>
        <ul>
      <p>
          <a href="https://github.com/StrugglerXIV">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
      </p>
        </ul>
    </footer>
  );
}

export default Footer;