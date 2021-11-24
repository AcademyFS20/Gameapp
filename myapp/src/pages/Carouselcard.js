import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import player1 from '../assets/player1.png';
import player2 from '../assets/player2.png';
import player3 from '../assets/player3.png';

class Carouselcard extends Component {
  state = {
    items: [
      {id: 1, 
      title: "Player",
      subTitle: "Brave girl",
      img: player1},

      {id: 2, 
        title: "Player",
        subTitle:"Courageous",
        img: player2},
      {id: 3, title: "Player",
      subTitle: "Knight",
      img: player3},
      
    ]
  }
  render () {
    const { items } = this.state;
    return (
      <Carousel>
        {items.map(item => <div key={item.id}> <img src={item.img}/>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p></div>)}
      </Carousel>
    )
  }
}

export default Carouselcard