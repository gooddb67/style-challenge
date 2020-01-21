import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './styles.css';
import Chevron from './assets/Chevron';
import Info from './assets/Info';
import poster from './assets/poster.jpg';

class ShowtimesContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      performances: this.props.performances,
      itemsToShow: 3,
      isExpanded: false
    };

    this.showMoreResults = this.showMoreResults.bind(this);
  }

  showMoreResults() {
    const { itemsToShow } = this.state;
    if (itemsToShow === 3) {
      this.setState({
        itemsToShow: this.state.performances.length,
        isExpanded: true
      });
    }
  }

  renderShowTimes() {
    const { performances, itemsToShow } = this.state;
    return (
      <TransitionGroup>
        {performances.slice(0, itemsToShow).map((performance, idx) => {
          return (
            <CSSTransition
              key={idx}
              timeout={600}
              classNames="performance-target"
            >
              <div className="performance-info">
                <div tabIndex="0" className="performance-info__date">
                  <span>{performance.dayOfWeek}</span>
                  <br />
                  {performance.date}
                </div>
                {performance.times.map((time, idx) => {
                  return (
                    <button key={idx} className="performance-info__time">
                      {time}
                    </button>
                  );
                })}
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    );
  }

  render() {
    const { showName, priceRange } = this.props;
    return (
      <div className="container">
        <section tabIndex="0" className="header">
          <img tabIndex="0" src={poster} alt={`${showName} poster`} />
          <div className="show-info">
            <span tabIndex="0" className="show-info__name">
              <b>{showName}</b> Tickets
            </span>
            <div tabIndex="0" className="show-info__priceRange">
              <b>{priceRange}</b>
            </div>
            <div tabIndex="0" className="show-info__learn-more">
              <Info /> <span>Learn More</span>
            </div>
          </div>
        </section>
        <section>{this.renderShowTimes()}</section>
        <section
          onClick={this.showMoreResults}
          role="button"
          className="footer"
        >
          {this.state.isExpanded ? (
            <span tabIndex="0" className="footer__calendar">
              <b>Show Calendar</b>
            </span>
          ) : (
            <span tabIndex="0">
              <b>More Performances</b> <Chevron />
            </span>
          )}
        </section>
      </div>
    );
  }
}

export default ShowtimesContainer;
