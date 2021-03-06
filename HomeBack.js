import React from 'react';
import './HomeBack.css';

function HomeBack(){

    const events = [];

    for (let i =0; i< 100; i++){
        events.push({
            title: "Event " +i,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        })
    }

    const cardify = (events) => {
        return events.map((event) => {
            return <div class="customCard">
                <h2 class="customCardTitle">{event.title}</h2>
                <p class="customCardDescription">{event.description}</p>
            </div>
        });
    };

    return (    
        <div>
            <div>
                <h1> Posts from People Nearby </h1>
                <div id="filters"> add filters here </div>
                <div id="cardsContainer">{cardify(events)}</div>
            </div>
        </div>
    );

}
export default HomeBack;