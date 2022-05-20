import React from 'react';

const ExhibitionDetail = ({exhibitionDetail}) => {
    const {name, description, author, img} = exhibitionDetail;
    console.log("exhibitionDetail" + exhibitionDetail)
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-card" src={img} alt="" />
                <p>{description}</p>
            </div>
            <div className="exhibition-name">
                <h5>{name}</h5>
                <small>{author}</small>
            </div>
        </div>
    );
}

export default ExhibitionDetail;