import "./Main.css";
import React from "react";

const Main = () => {
  return (
    <main className="main">
      <div className="main__background"></div>
      <section className="main__section">
        <div className="main__container">
          <h1 className="main__title">What's going on in the world?</h1>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <form className="main__search-form">
            <input className="main__search" placeholder="Enter topic"></input>
            <button className="main__search-button">Search</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;
