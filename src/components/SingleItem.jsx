import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({id, name, image, idPath, franquia}) => {

    const franchiseUrlName = franquia ? franquia.toLowerCase().replace(/\s+/g, '') : '';
    
    return (
        <Link to={`${idPath}/${franchiseUrlName}/${id}`} className="single-item">
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img className="single-item__image" src={image} alt={`Imagem do Personagem ${name}`} />
                </div>
            </div>
        
            <div className="single-item__texts">
                <div className="single-item__2lines">
                    <p className="single-item__title">{name}</p>
                </div> 
            </div>
        </Link>
    );
}

export default SingleItem;