import React from 'react';
import ReactDOM from 'react-dom';

import ShowtimesContainer from './ShowtimesContainer';
import showData from './showData';

ReactDOM.render(
  <ShowtimesContainer
    performances={showData}
    showName="The Phantom of the Opera"
    priceRange="$29.00 - 215.00"
  />,
  document.getElementById('root')
);
