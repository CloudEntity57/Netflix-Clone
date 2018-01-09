import React, { Component } from 'react';
import DetailItem from './DetailItem';

export default class Overlay extends Component{
  render(){
    const gray_class = (this.props.graytone) ? ' graytone' : '';
    const col = 'overlay-content col-xs-'+this.props.col + gray_class;
    const play = (this.props.col === '5') ? (
      <div className="play-window col-xs-7">
        <div className="circle"><i className="fa fa-play"></i></div>
      </div>
    ): '';
    const details = (this.props.col==='5') ? (
      <div>
        <div className="mov-subtitle">2016 PG 1h 47m</div>
        <p>
          { (this.props.params.description) ? this.props.params.description : 'A Polynesian girl destined to be her island\'s chief makes a perilous trip with a boastful demigod to undo his mistake and save her people.'}
        </p>
        <div className="movie-desc">
            <div>Starring:<span> Auli'i Cravalho, Dwayne Johnson, Rachel House, Temuera Morrison, Jermaine Clement </span></div>
            <div>Directors:<span> John Musker, Ron Clements, Don Hall, Chris Williams </span></div>
            <div>Genres:<span> Children & Family Movies, Movies for ages 5 to 7, Movies for ages 8 to 10</span></div>
        </div>
        <div className="movie-top-buttons">
          <div className="circle"><i className="fa fa-check"></i></div>
          <div className="my-list"> MY LIST</div>
          <div className="circle"><i className="fa fa-thumbs-o-up"></i></div>
          <div className="circle"><i className="fa fa-thumbs-o-down"></i></div>
        </div>
      </div>
    ) : (
      <section>
        <div className="preview-col-sm">
          <DetailItem />
          <DetailItem />
          <DetailItem />
        </div>
        <div className="preview-col-sm">
          <DetailItem />
          <DetailItem />
          <DetailItem />
        </div>
        <div className="preview-col-sm">
          <DetailItem />
          <DetailItem />
        </div>
        <div className="preview-col-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </section>
    );
    return(
      <div>
        <div className={col}>
          <div className="wrapper">
          <div className="mov-title">{this.props.params.title}</div>
            { details }
          </div>
        </div>
        { play }
      </div>
    );
  }
}
