import React from "react";
import "./Home.css";
import TeamCard from "../components/TeamCard";
import teams from "../data/teams.json";
import trophy from "/assets/trophy.png";
import { useRef } from "react";

const Home = () => {
   const scrollRef = useRef(null);
   const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="home-wrapper">
      {/* Top Background Section */}
      <div className="hero-background">
        <div className="top-bar">
        <div className="side left-side">
          <img src={trophy} alt="Trophy" className="spinning-trophy" />
        </div>

        <div className="overlay-text">
          <h1>🏏 Cricket is Back!</h1>
          <p>     Get Ready for the Battle!</p>
        </div>
        <div className="side right-side">
          <p className="motivational-text">
            “Victory is reserved for those <br /> who are willing to pay its
            price.”
          </p>
        </div>
      </div>
      </div>

      {/* Scrollable Team Card Section */}
      <div className="team-scroll-wrapper">
        <button className="scroll-button left" onClick={() => scroll("left")}>
          ◀
        </button>
        <div className="team-scroll-section" ref={scrollRef}>
          <div className="team-scroll">
            {teams.map((team) => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        </div>
        <button className="scroll-button right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>


    </div>
  );
};

export default Home;
