import React, { Component } from 'react';
import Overlay from './Overlay';


export default class MoviePreview extends Component{
  constructor(props){
    super(props);
    this.state={
      display:'overview'
    };
  }
  handleClick(e){
    const display = e.target.id;
    const lastSelected = document.getElementById(this.state.display);
    lastSelected.classList.remove('button-selected');
    e.target.classList.add('button-selected');
    console.log('event: ',display);
    this.setState({
      display
    })
  }
  render(){
    const pics = [
      (this.props.movie.glimpse_pic) ? this.props.movie.glimpse_pic : "./images/carousel_images/moana2.webp",
      "./images/carousel_images/moana1.webp",
      "./images/carousel_images/moana3.webp"
    ]
    const params = {
      ...this.props.movie
    }
    const movie_pics = pics.map((pic)=>{
      let style = (pics.indexOf(pic)===0) ? {'backgroundImage':'url('+pic+')','opacity':1,'display':'block'} :  {'backgroundImage':'url('+pic+')','opacity':0 }
      return(
        <div className="top-movie-inner" style={style}></div>
      );
    });

    let overlay;
    switch(this.state.display){
      case 'overview':
      overlay = (
          <Overlay col='5' params={params} graytone={false} view="overview"/>
      );
      break;
      case 'details':
      overlay = <Overlay params={params} col='12' graytone={true} view="details"/>;
      break;
      default:
      overlay = (
          <Overlay col='5' params={params} graytone={false} view="overview"/>
      );
    }

    return(
      <div className="top-preview">
        {/* <!-- the overlying space that contains a left-side column with text and buttons --> */}
        <div className="top-overlay">
          { overlay }
        </div>
        {/* <!-- The underlying columns that contain a black area and a background picture --> */}
        <div className="top-preview-background">
          <div className="top-img-blur col-xs-3">
          </div>
          <div className="top-movie-img col-xs-9">
            { movie_pics }
            <div className="img-overlay"></div>
          </div>
        </div>
        {/* <!-- the bottom bar --> */}
        <div className="bottom-button-bar">
          <div className="buttons">
            <div onClick = {this.handleClick.bind(this)} id="overview" className="button button-selected">OVERVIEW</div>
            <div onClick = {this.handleClick.bind(this)} id="more" className="button">MORE LIKE THIS</div>
            <div onClick = {this.handleClick.bind(this)} id="details" className="button">DETAILS</div>
          </div>
        </div>
      </div>
    );
  }
}
