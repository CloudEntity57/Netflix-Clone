import React, { Component } from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { changePreview } from '../actions/index';
import { bindActionCreators } from 'redux';


class MovieGlimpse extends Component{
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
    // this.move_right($target);
    setTimeout(()=>{
      if(this.state.hovering){
        this.setState({
          glimpsing:true
        });
      }
      // this.move_right($target);
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
      // this.move_left($target);
    },250);
  }

  previewMovie(){
    console.log('movie: ',this.props.params.title);
    const movie = this.props.params;
    this.props.alertPreview();
    this.props.changePreview(movie);
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
            <div className='title'>{this.props.params.title}</div>
            96% Match 2017 PG 1h 47m
            <div className="desc">{(this.props.params.description) ? this.props.params.description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt'}</div>
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
          <i onClick={ this.previewMovie.bind(this) } className="fa fa-chevron-down"></i>
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

function mapStateToProps(state){
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    changePreview
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieGlimpse);
