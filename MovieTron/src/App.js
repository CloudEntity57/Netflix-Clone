import React, { Component } from 'react';
import Header from './components/Header';
import ShowPreview from './components/ShowPreview';
import MoviePreview from './components/MoviePreview';
import MovieRow from './components/MovieRow';
import TallMovieRow from './components/TallMovieRow';
import './App.css';

import $ from 'jquery';



class App extends Component {


  render() {
    
    const user = "Josh";
    const movie = {
      'pic':'url("../images/moana.webp")',
      'glimpse_pic':'../images/carousel_images/moana2.webp',
      'title':'Moana',
      'description':'A Polynesian girl destined to be her island\'s chief makes a perilous trip with a boastful demigod to undo his mistake and save her people.'
    }
    return (
      <div>
        <Header />
        <MoviePreview movie={movie}/>
        <div className="main-area">
          <MovieRow title="Continue Watching For Dave"/>
          <TallMovieRow />
          <MovieRow title="Trending Now"/>
        </div>
      </div>
    );
  }
}

export default App;
