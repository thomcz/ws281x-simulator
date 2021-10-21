import React from 'react';

const Cell = (props) => (
  <svg  width="20" height="20" style={{margin: "1px"}}>
    <g fill={props.color}>
      <rect x={props.positionX} y={props.positionY} width="20" height="20"/>
    </g>
  </svg> 
);

Cell.propTypes = {};

Cell.defaultProps = {};

export default Cell;
