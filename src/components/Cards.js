import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out our Selection!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                      src= "images/bobahome.jpeg"
                      text="Have the sweet taste of our special milk tea"
                      label='Milk Tea'
                      path='/services'
                    />
                    <CardItem 
                      src= "images/iced tea.jpg"
                      text="Refresh yourself with some of refreshing iced tea"
                      label='Iced Tea'
                      path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                        src= "images/coffeeimg.jpg"
                        text= "Wake up with a nice coffee"
                        label='Coffee'
                        path='/services'
                    />
                    <CardItem 
                        src= "images/popcornchicken.jpg"
                        text="Explore your Options"
                        label='Snacks'
                        path='/services'
                    />
                    <CardItem 
                      src= "images/cocktails.jpg"
                      text="Explore your Options"
                      label='Night Specials'
                      path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards;