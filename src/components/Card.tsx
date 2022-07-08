import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css";

interface CardProps {
    gameImage: string;
    name: string;
    price: string;
    id: string;
}

export const Card = (props:CardProps) => {
    return (
        <div className="card">
            <img className="image" src={props.gameImage} alt="" id={props.id}/>
            <div className="joint">
                <span className="title">{props.name}</span>
                <div>
                    <span className="price">
                        {props.price + " USD"}
                    </span>
                </div>
            </div>
            <div>
                <Link to={`/detail/${props.id}`}>
                    <button className="blue-button">
                        <span className="inside">BUY NOW</span>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Card;