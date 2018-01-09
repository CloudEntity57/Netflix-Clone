import React, { Component } from 'react';


export default class Header extends Component{
  render(){
    return(
      <header>
        <div className="wrapper">
          <div className="pull-left">
            <span className="main-logo"><img src="./DISTORT.png" alt="" /></span>
            <span id='browse'>Browse <i className='fa fa-sort-desc'></i></span>
            <span id='kids'>Kids</span>
            <span id='dvd'>DVD</span>
          </div>
          <div className="pull-right">
            <span>search</span>
            <span>bell</span>
            <span>user</span>
          </div>
        </div>
      </header>
    );
  }
}
