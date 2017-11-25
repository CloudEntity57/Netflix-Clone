
// Loading movies into slider, slider animations below:

const movies = {
  1:'red',
  2:'green',
  3:'blue',
  4:'orange',
  5:'yellow',
  6:'purple',
  7:'pink'
}

let hovering = false;
$('.movie-slider').on('mouseenter mouseleave',(event)=>{
  if(event.type==='mouseenter'){
    setTimeout(()=>{
      $('.movie-glimpse').addClass('hovering');
      hovering=true;
    },350);
  }else if(event.type==='mouseleave'){
    // $('.movie-glimpse').removeClass('hovering');
    setTimeout(()=>{
      $('.movie-glimpse').removeClass('hovering');
      hovering=false;
    },350);
  }
});

const move_right = ($target,event) =>{
  if($target.is('.movie-glimpse:first-child')){
    $('.movie-slider').addClass('go_right');
  }else if($target.is('.movie-glimpse:last-child')){
    $('.movie-slider').addClass('go_left');
  }
  $(event.target).closest('.glimpse').addClass('big');
  $target.prevAll().addClass('go_left');
  $target.nextAll().addClass('go_right');
}
const move_left = ($target,event) =>{
  if($target.is('.movie-glimpse:first-child')){
    $('.movie-slider').removeClass('go_right');
  }else if($target.is('.movie-glimpse:last-child')){
    $('.movie-slider').removeClass('go_left');
  }
  $(event.target).closest('.glimpse').removeClass('big');
  $target.prevAll().removeClass('go_left');
  $target.nextAll().removeClass('go_right');
}
$('.movie-glimpse').on('mouseenter mouseleave',(event)=>{
  let $target=$(event.target).closest('.movie-glimpse');
  if(event.type==='mouseenter'){
    if(hovering===true){
      move_right($target,event);
    }else{
      setTimeout(()=>{
        move_right($target,event);
      },350);
    }
  }else if(event.type==='mouseleave'){
    if(hovering===true){
      move_left($target,event);
    }else{
      setTimeout(()=>{
        move_left($target,event);
      },350);
    }

  }
});
