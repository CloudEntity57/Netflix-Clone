
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

$('.movie-glimpse').on('mouseenter mouseleave',(event)=>{
  let $target=$(event.target);
  if(event.type==='mouseenter'){
    if($target.is('.movie-glimpse:first-child')){
      $('.movie-slider').addClass('go_right');
    }else if($target.is('.movie-glimpse:last-child')){
      $('.movie-slider').addClass('go_left');
    }
    $target.addClass('big');
    $target.prevAll().addClass('go_left');
    $target.nextAll().addClass('go_right');
  }else if(event.type==='mouseleave'){
    if($target.is('.movie-glimpse:first-child')){
      $('.movie-slider').removeClass('go_right');
    }else if($target.is('.movie-glimpse:last-child')){
      $('.movie-slider').removeClass('go_left');
    }
    $target.removeClass('big');
    $target.prevAll().removeClass('go_left');
    $target.nextAll().removeClass('go_right');
  }
});
