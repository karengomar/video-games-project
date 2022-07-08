import React from "react";

interface DetailInfoProps{
    id: any;
    principalImg?: string;
    title: string;
    price: string;
    description?: string;
    smallImg?: string;
}

export const DetailInfo = (props:DetailInfoProps) => {
    return(
        <div>
            <div className="container">
                <img  className="principal" src={props.principalImg} alt="" />

                <div>
                    <div className="oval">
                        <img className="oval-img" src="../images/quality.png" alt=""/>
                    </div>
                    <span className="release">NEW RELEASE</span>
                </div>
    
                <span className= "detail-title">{props.title}</span>
            </div>
            <div>
                <div className="mask">
                    <span className="detail-price">{props.price + " €"}</span>
                    <button className="blue-button-detail" value={props.id}>
                        <span className="inside" >INSTALL GAME</span>
                    </button>
                </div>
            </div>
            <div>
                <img className="secundary" src={props.smallImg} alt=""/>
                <span className="detail-description ">
                    <span className="bold">
                        {props.description}
                    </span>
                    <ul className="list">
                        <li>Viaja a un mundo oscuro y elemental de temibles criaturas directamente extraído de la mitología nórdica.</li>
                        <li>Vence a tus enemigos en encarnizados combates cuerpo a cuerpo donde el pensamiento táctico y la precisión letal te darán la ventaja.</li> 
                        <li>Descubre una historia apasionante y emocional en la que Kratos se verá obligado a controlar la ira que tanto lo ha caracterizado.</li>
                    </ul>
                </span>
            </div>
        </div>
    )
}

export default DetailInfo;