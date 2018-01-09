import React, { Component } from 'react';


export default class ShowPreview extends Component{
  render(){
    return(
      <div className="top-preview">
        {/* <!-- the overlying space that contains a left-side column with text and buttons --> */}
        <div className="top-overlay">
          <div className="col-xs-5">
            <div className="wrapper">
              <div className="mov-title">Shameless (U.S.)</div>
              <div className="mov-subtitle">2016 TV-MA 7 Seasons</div>
              <div className="next-up">Next Up</div>
              <div className="mov-episode"><span className="season">S6:E12</span>"Familia Supra Gallegorious Omnia!"</div>
              <p>
                The Gallaghers convene at the wedding. Debbie brings Franny, while Ian shows up with Caleb. Meanwhile, Frank reveals shocking news about Sean.
              </p>
              <div className="series-desc">
                  <i className="series-desc-icon fa fa-universal-access"></i><div> This series about an alcoholic father and his six children stars two-time Emmy winner William H. Macy.</div>
              </div>
              <div className="movie-top-buttons">
                <div className="circle"><i className="fa fa-check"></i></div>
                <div className="my-list"> MY LIST</div>
                <div className="circle"><i className="fa fa-thumbs-o-up"></i></div>
                <div className="circle"><i className="fa fa-thumbs-o-down"></i></div>
              </div>
            </div>
          </div>
          <div className="play-window col-xs-7">
            <div className="circle"><i className="fa fa-play"></i></div>
          </div>
        </div>
        {/* <!-- The underlying columns that contain a black area and a background picture --> */}
        <div className="top-preview-background">
          <div className="top-img-blur col-xs-3">
          </div>
          <div className="top-img col-xs-9">
            <div className="img-overlay"></div>
          </div>
        </div>
        {/* <!-- the bottom bar --> */}
        <div className="bottom-button-bar">
          <div className="buttons">
            <div className="button button-selected">OVERVIEW</div>
            <div className="button">EPISODES</div>
            <div className="button">MORE LIKE THIS</div>
            <div className="button">DETAILS</div>
          </div>
        </div>
      </div>
    );
  }
}
