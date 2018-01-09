import React, { Component } from 'react';
import $ from 'jquery';

export default class MovieGlimpse extends Component{
  constructor(props){
    super(props);
    this.state={
      glimpsing:false,
      hovering:false
    }
  }
  glimpse(event){
    let $target=$(event.target).closest('.carousel');
    this.setState({
      hovering:true
    });
    setTimeout(()=>{
      if(this.state.hovering){
        this.setState({
          glimpsing:true
        });
      }
    },700);
  }
  glimpseOff(event){
    let $target=$(event.target).closest('.carousel');
    this.setState({
      hovering:false
    });
    setTimeout(()=>{
      this.setState({
        glimpsing:false
      });
    },250);
  }
  move_right($target){
    $target = $($target);
      if($target.is('.carousel:first-child')){
        $target.closest('.movie-slider').addClass('go_right');
      }else if($target.is('.carousel:nth-child(5)')){
        $target.closest('.movie-slider').addClass('go_left');
      }
        $target.closest('.glimpse').addClass('big');
        $target.prevAll().addClass('go_left');
        $target.nextAll().addClass('go_right');
  }
  move_left($target){
    $target = $($target);
      if($target.is('.carousel:first-child')){
        $target.closest('.movie-slider').removeClass('go_right');
      }else if($target.is('.carousel:nth-child(5)')){
        $target.closest('.movie-slider').removeClass('go_left');
      }
      $target.closest('.glimpse').removeClass('big');
      $target.prevAll().removeClass('go_left');
      $target.nextAll().removeClass('go_right');

  }
  render(){
    let glimpse_style={
      'backgroundImage':'url('+this.props.params.glimpse_pic+')'
    }
    const glimpse_text = (this.state.glimpsing) ? (
      <div className="glimpse-text" style={glimpse_style}>
        <div className="glimpse-text-overlay"></div>
        <div className="play-window">
          <div className="circle"><i className="fa fa-play"></i></div>
        </div>
        <div className="info-window">
          <div className="info-window-info">
            <div className='title'>Title</div>
            96% Match 2017 PG 1h 47m
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</div>
          </div>
          <div className="info-window-likes">
            <div className="circle">
              <i className="fa fa-thumbs-up"></i>
            </div>
            <div className="circle">
              <i className="fa fa-thumbs-down"></i>
            </div>
            <div className="circle">
              <i className="fa fa-check"></i>
            </div>
          </div>
        </div>
        <div className="down">
          <i className="fa fa-chevron-down"></i>
        </div>
      </div>
    ) : '';

    let style = {
      'backgroundImage':this.props.params.pic
    }
    return(
      <div onMouseEnter = {this.glimpse.bind(this)} onMouseLeave = {this.glimpseOff.bind(this)} className="movie-glimpse carousel">
        <div id="gl_1" style = {style} className="glimpse">
          { glimpse_text }
        </div>
        {/* <div className='movie-elapsed'>
          <div className='elapsed_bar'></div>
        </div> */}
      </div>
    );
  }
}
