import React from "react";
import Card from "../components/card";
import "../index.css";
import Games from "../games.json";
import  Recommend from "../components/recommend";

export const Board = () => {
  const featuredGames = Games.filter((recommended) => recommended.featured === true);

  return (
    <div>
      <div>
       <Recommend games={featuredGames}/>
      </div>

      <h1 className="best">BEST SELLERS</h1>
      <div className="board-row">
        {Games.map((gameDetail) => {
          return (
            <Card
              id={gameDetail.id}
              gameImage={gameDetail.img}
              name={gameDetail.name}
              price={gameDetail.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
