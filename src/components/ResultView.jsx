import React from 'react';
import PropTypes from 'prop-types';

const ResultView = ({ obj }) => (!obj ? (
  <div className="result">
    <p>0</p>
  </div>
) : (
  <div className="result">

    <p>
      {obj.total}
      {obj.operation}
      {obj.next}
    </p>
  </div>
));

export default ResultView;

ResultView.defaultProps = {
  obj: 0,
};
ResultView.propTypes = {
  obj: PropTypes.number,
};
