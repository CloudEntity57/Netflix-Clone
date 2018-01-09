import React, { Component } from 'react';
import MovieGlimpse from './MovieGlimpse';
import MoviePreview from './MoviePreview';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import $ from 'jquery';


class MovieRow extends Component{
  constructor(props){
    super(props);
    const glimpse_pic = '../images/carousel_images/moana2.webp';
    this.state = {
      previewing:false,
      movies:[
        {
          'pic':'url("../images/shameless.webp")',
          'glimpse_pic':'../images/shamelessbig.webp',
          'title':'Shameless',
          'description':"Stuff about Shameless and how cool it is"
        },
        {
          'pic':'url("../images/moana.webp")',
          glimpse_pic,
          'title':'Moana'
        },
        {
          'pic':'url("../images/sherlock.webp")',
          'glimpse_pic':'../images/sherlockbig.webp',
          'title':'Sherlock',
          'description':'Sherlock is an amazing mystery TV show starring, well Sherlock Holmes...duuh. Watch it binge style.'
        },
        {
          'pic':'url("../images/70sShot.webp")',
          'glimpse_pic':'../images/70sShotbig.webp',
          'title':'That 70s Show',
          'description':'That 70s Show is a cool show about the 70s, made all funny-like and starring cool people you know are awesome.'
        },
        {
          'pic':'url("../images/the_office.webp")',
          'glimpse_pic':'../images/the_officebig.webp',
          'title':'The Office'
        },
        {
          'pic':'url("../images/godless.jpg")',
          glimpse_pic
        },
        {
          'pic':'url("../images/punisher.jpg")',
          glimpse_pic
        },
        {
          'pic':'url("../images/stranger_things.jpg")',
          glimpse_pic
        },
        {
          'pic':'url("../images/beauty.webp")',
          glimpse_pic
        },
        {
          'pic':'url("../images/hotels.webp")',
          glimpse_pic
        }
      ]
    }

  }
  slideRight(event){
    let $slider = $(this.refs.slide);
    let slider_length = $('.movie-measure').css('width');
    slider_length = slider_length.split('').slice(0,slider_length.length-2).join('');
    slider_length = Math.floor(slider_length);
    slider_length = '+='+slider_length.toString();
    $slider.animate({right:slider_length},1000,()=>{console.log('done')});
    console.log(slider_length);
  }
  slideLeft(event){
    let $slider = $(this.refs.slide);
    let slider_length = $('.movie-measure').css('width');
    slider_length = slider_length.split('').slice(0,slider_length.length-2).join('');
    slider_length = Math.floor(slider_length);
    slider_length = '-='+slider_length.toString();
    $slider.animate({right:slider_length},1000,()=>{console.log('done')});
    console.log(slider_length);
  }
  alertPreview(){
    this.setState({
      previewing:true
    });
  }
  // componentDidMount(){
  //   this.animation();
  // }
  componentDidUpdate(){
    console.log('update')
    this.animation();
  }
  animation(){
    // window.onload = () => {
    let hovering = false;
    console.log('animating!! - ',this.state.previewing)
    $('.movie-slider').on('mouseenter mouseleave',(event)=>{
      if(event.type==='mouseenter' && this.state.previewing === false){
        setTimeout(()=>{
          hovering=true;
        },450);
      }else if(event.type==='mouseleave' && this.state.previewing === false){
        // setTimeout(()=>{
          hovering=false;
        // },350);
      }
    });

    const move_right = (this.state.previewing===false) ? ($target,event) =>{
      if($target.closest('.carousel').hasClass('movie-glimpse')){
        if($target.is('.carousel:first-child')){
          $target.closest('.movie-slider').addClass('go_right');
        }else if($target.is('.carousel:nth-child(5)')){
          $target.closest('.movie-slider').addClass('go_left');
        }
          $(event.target).closest('.glimpse').addClass('big');
          $target.prevAll().addClass('go_left');
          $target.nextAll().addClass('go_right');
      }else{
        if($target.is('.carousel:first-child')){
          $target.closest('.movie-slider').addClass('go_tall_right');
        }else if($target.is('.carousel:nth-child(5)')){
          $target.closest('.movie-slider').addClass('go_tall_left');
        }
          $(event.target).closest('.glimpse').addClass('tall-big');
          $target.prevAll().addClass('go_tall_left');
          $target.nextAll().addClass('go_tall_right');
      }
      $(event.target).find('.glimpse-scene').removeClass('hidden');
    } : ()=>{console.log('mumph')};
    const move_left = (this.state.previewing===false) ? ($target,event) =>{
      if($target.closest('.carousel').hasClass('movie-glimpse')){
        if($target.is('.carousel:first-child')){
          $target.closest('.movie-slider').removeClass('go_right');
        }else if($target.is('.carousel:nth-child(5)')){
          $target.closest('.movie-slider').removeClass('go_left');
        }
        $(event.target).closest('.glimpse').removeClass('big');
        $target.prevAll().removeClass('go_left');
        $target.nextAll().removeClass('go_right');

      }else{
        if($target.is('.carousel:first-child')){
          $target.closest('.movie-slider').removeClass('go_tall_right');
        }else if($target.is('.carousel:nth-child(5)')){
          $target.closest('.movie-slider').removeClass('go_tall_left');
        }

        $(event.target).closest('.glimpse').removeClass('tall-big');
        $target.prevAll().removeClass('go_tall_left');
        $target.nextAll().removeClass('go_tall_right');

      }
      $(event.target).closest('.glimpse-scene').addClass('hidden');
    } : ()=>{console.log('mumph')}
    $('.glimpse').on('mouseenter mouseleave',(event)=>{
      let $target=$(event.target).closest('.carousel');
      if(event.type==='mouseenter' && this.state.previewing===false){
        if(hovering===true){
          move_right($target,event);
        }else{
          setTimeout(()=>{
            move_right($target,event);
          },350);
        }
      }else if(event.type==='mouseleave' && this.state.previewing===false){
        if(hovering===true){
          move_left($target,event);
        }else{
          setTimeout(()=>{
            move_left($target,event);
          },350);
        }

      }
    });
  // }
}


  render(){
    // if(this.state.previewing==true){
    //   this.animation();
    // }
    console.log('in render: ',this.props.previewing);
    let movies = this.state.movies.map((movie)=>{
      return(
        <MovieGlimpse previewing={this.state.previewing} alertPreview={this.alertPreview.bind(this)} params={movie} />
      )
    })
    const preview = ( this.state.previewing ) ? (
      <div className="movie-preview-wrapper">
        <MoviePreview movie={this.props.previewing}/>
      </div>
    ) : '';
    const row_class = ( this.state.previewing ) ? "movie-row wrapper nomargin" : "movie-row wrapper";

    return(
      <div>
        <div className={row_class}>
          <div className="movie-row-title">{this.props.title}</div>
          <div className="blinder-left"><i onClick = {this.slideLeft.bind(this)} className="fa fa-chevron-left slide-left"></i></div>
          <div className="blinder-right"><i onClick = {this.slideRight.bind(this)} className="fa fa-chevron-right slide-right"></i></div>
          <div className="movie-measure"></div>
          <div ref='slide' className="movie-slider">
            { movies }
          </div>
        </div>
          { preview }
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    previewing:state.mainApp.previewing
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({

  },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieRow);
