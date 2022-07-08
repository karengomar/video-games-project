import React from "react";
import { DetailInfo } from "./DetailInfo";
import  "../index.css";
import Games from "../games.json";
import { useParams } from "react-router";

export const Detail = () => {
    const {id} = useParams();
    
    return(
        <div>
            {Games.filter((detail) => detail.id === id).map((detail) => {
                return(
                    <DetailInfo 
                        principalImg = {"../images/God of War/god-of-war-2018319161748-10.png" } 
                        id = {detail.id}
                        title = {detail.name}
                        price = {detail.price}
                        smallImg = {"../images/God of War/godofwar-wpp-jpg-423682103.jpg"}
                        description = {"Kratos, que ha dejado atrás el mundo de los dioses, deberá adaptarse a tierras que no le son familiares, afrontar peligros inesperados y aprovechar una segunda oportunidad de ejercer como padre. Junto a su hijo Atreus se aventurará en lo más profundo e inclemente de las tierras de Midgard y luchará por culminar una búsqueda hondamente personal."}
                    /> 
                )    
            })}
        </div>  
    );
}

export default Detail;