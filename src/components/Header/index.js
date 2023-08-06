import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1>StrugglerXIV's Portfolio</h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section className="hero">
        <div className="hero-cta">
          {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

          <h2>Hello!</h2>
          <p>
            Welcome to Struggler's Portfolio. This was made using React for our 20th Challenge in the UCF coding bootcamp. This is an awesome showcase of how far we've all come since the start of this class.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Header;