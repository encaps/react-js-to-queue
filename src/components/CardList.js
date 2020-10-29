// import './ImageList.css';
import Card from './Card';
import React from 'react';

const CardList = (props) => {

    // const images = props.images.map( image => {
    //     return <ImageCard key={image.id} image={image} />
    // });

    const cards = props.cards.map( card => {
        // return <Card title="1" />
        console.log("card id = ", card.id)
        return <Card key={card.id} card={card} />
    });

    return (
        <div className="card-list row">{cards}</div>
    )
}

export default CardList;