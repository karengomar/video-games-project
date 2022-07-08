import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "../index.css";

interface RecommendedGame {
  id: string;
  name: string;
}

interface RecommendProps {
  games: RecommendedGame[];
}


export const Recommend = (props: RecommendProps) => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const jumpTo = (step: number) => {
    setCurrentFeaturedIndex(step);
  }

  const renderNextGame =
    props.games.map((_, index) => {
      const opacity = index === currentFeaturedIndex ? 1 : 0.2
      return <button className="timer-button" onClick={()=>jumpTo(index)} style={{ opacity }}/>
    })

  useEffect(() => {
    const interval = setInterval(() => {
      const maxIndex = props.games.length -1;
      // revisar usando modulo (%)
      // setCurentFeaturedIndex(currentFeaturedIndex + 1);
      const nextFeaturedGame = currentFeaturedIndex+1 > maxIndex ? 0 : currentFeaturedIndex+1;
      setCurrentFeaturedIndex(nextFeaturedGame);
    }, 3000);
    return () => clearInterval(interval);
  });


  return (
    <div className="reco-container">
      <div>
        <img
          className="principal-recommended"
          src="../images/League of Legends/league-of-legends-background.png"
          alt=""
        />

        <span className="awarded">AWARDED AND RECOMMENDED</span>
        <div>
          <span className="reco-title">{props.games[currentFeaturedIndex].name}</span>
        </div>
        <div>
          <span className="reco-descrip">
            League of Legends is a fast-paced, competitive online game that
            blends {"\n"}
            the speed and intensity of an RTS with RPG elements.{" "}
          </span>
        </div>

        <Link to={`/detail/${props.games[currentFeaturedIndex].id}`}>
          <button className="blue-button-reco">
            <span className="inside">INSTALL GAME</span>
          </button>
        </Link>

        <button className="favorite-button-reco">
          <span className="inside">ADD TO FAVORITES</span>
        </button>
      </div>
      {renderNextGame}
    </div>
  );
};

export default Recommend;
