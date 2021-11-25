import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import player1 from '../assets/player1.png';
import player2 from '../assets/player2.png';
import player3 from '../assets/player3.png';

class Carouselcard extends Component {
  state = {
    items: [
      {id: 1, 
      title: "Tsukiyama",
      subTitle: "C-Rank Hunter",
      img: player1},

      {id: 2, 
        title: "Night Owl",
        subTitle:"C-Rank Hunter",
        img: player2},
      {id: 3, title: "Killer Bee",
      subTitle: "C-Rank Hunter",
      img: player3},
      
    ]
  }
  render () {
    const { items } = this.state;
    return (
      <Carousel >
        {items.map(item => <div key={item.id}> <img src={item.img}/>
                                <h3 className="playername">{item.title}</h3>
                                <p>{item.subTitle}</p></div>)}
      </Carousel>
    )
  }
}

export default Carouselcard