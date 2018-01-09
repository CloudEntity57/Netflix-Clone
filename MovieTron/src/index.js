import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

import 'babel-polyfill';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const logger = require('redux-logger').default;

// const logger = createLogger();

const store = createStore(
  allReducers,
  applyMiddleware(thunk,logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

registerServiceWorker();

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

// 
// let hovering = false;
// $('.movie-slider').on('mouseenter mouseleave',(event)=>{
//   if(event.type==='mouseenter'){
//     setTimeout(()=>{
//       hovering=true;
//     },450);
//   }else if(event.type==='mouseleave'){
//     // setTimeout(()=>{
//       hovering=false;
//     // },350);
//   }
// });
//
// const move_right = ($target,event) =>{
//   if($target.closest('.carousel').hasClass('movie-glimpse')){
//     if($target.is('.carousel:first-child')){
//       $target.closest('.movie-slider').addClass('go_right');
//     }else if($target.is('.carousel:nth-child(5)')){
//       $target.closest('.movie-slider').addClass('go_left');
//     }
//       $(event.target).closest('.glimpse').addClass('big');
//       $target.prevAll().addClass('go_left');
//       $target.nextAll().addClass('go_right');
//   }else{
//     if($target.is('.carousel:first-child')){
//       $target.closest('.movie-slider').addClass('go_tall_right');
//     }else if($target.is('.carousel:nth-child(5)')){
//       $target.closest('.movie-slider').addClass('go_tall_left');
//     }
//       $(event.target).closest('.glimpse').addClass('tall-big');
//       $target.prevAll().addClass('go_tall_left');
//       $target.nextAll().addClass('go_tall_right');
//   }
//   $(event.target).find('.glimpse-scene').removeClass('hidden');
// }
// const move_left = ($target,event) =>{
//   if($target.closest('.carousel').hasClass('movie-glimpse')){
//     if($target.is('.carousel:first-child')){
//       $target.closest('.movie-slider').removeClass('go_right');
//     }else if($target.is('.carousel:nth-child(5)')){
//       $target.closest('.movie-slider').removeClass('go_left');
//     }
//     $(event.target).closest('.glimpse').removeClass('big');
//     $target.prevAll().removeClass('go_left');
//     $target.nextAll().removeClass('go_right');
//
//   }else{
//     if($target.is('.carousel:first-child')){
//       $target.closest('.movie-slider').removeClass('go_tall_right');
//     }else if($target.is('.carousel:nth-child(5)')){
//       $target.closest('.movie-slider').removeClass('go_tall_left');
//     }
//
//     $(event.target).closest('.glimpse').removeClass('tall-big');
//     $target.prevAll().removeClass('go_tall_left');
//     $target.nextAll().removeClass('go_tall_right');
//
//   }
//   $(event.target).closest('.glimpse-scene').addClass('hidden');
// }
// $('.glimpse').on('mouseenter mouseleave',(event)=>{
//   let $target=$(event.target).closest('.carousel');
//   if(event.type==='mouseenter'){
//     if(hovering===true){
//       move_right($target,event);
//     }else{
//       setTimeout(()=>{
//         move_right($target,event);
//       },350);
//     }
//   }else if(event.type==='mouseleave'){
//     if(hovering===true){
//       move_left($target,event);
//     }else{
//       setTimeout(()=>{
//         move_left($target,event);
//       },350);
//     }
//
//   }
// });
