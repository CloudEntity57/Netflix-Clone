import React, { Component } from 'react';
import $ from 'jquery';

export default class TallMovieRow extends Component{
  goRight(event){
    let $slider = $(this.refs.slide);
    let slider_length = $('.movie-measure').css('width');
    slider_length = slider_length.split('').slice(0,slider_length.length-2).join('');
    slider_length = Math.floor(slider_length);
    slider_length = '+='+slider_length.toString();
    $slider.animate({right:slider_length},1000,()=>{console.log('done')});
    console.log(slider_length);
  }
  goLeft(event){
    let $slider = $(this.refs.slide);
    let slider_length = $('.movie-measure').css('width');
    slider_length = slider_length.split('').slice(0,slider_length.length-2).join('');
    slider_length = Math.floor(slider_length);
    slider_length = '-='+slider_length.toString();
    $slider.animate({right:slider_length},1000,()=>{console.log('done')});
    console.log(slider_length);
  }
  render(){
    return(
      <div className="movie-row wrapper">
        <div className="movie-row-title">MOVIETRON ORIGINALS</div>
        <div className="blinder-left"><i onClick={this.goLeft.bind(this)} className="fa fa-chevron-left slide-left"></i></div>
        <div className="blinder-right"><i onClick={this.goRight.bind(this)} className="fa fa-chevron-right slide-right"></i></div>
        <div className="movie-measure"></div>
        <div ref='slide' className="movie-slider">
          <div className="movie-glimpse-tall carousel"><div id="gl_11" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_12" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_13" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_14" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_15" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_16" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_17" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_18" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_19" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
          <div className="movie-glimpse-tall carousel"><div id="gl_20" className="glimpse"></div><div className='movie-elapsed'><div className='elapsed_bar'></div></div></div>
        </div>
      </div>
    );
  }
}
