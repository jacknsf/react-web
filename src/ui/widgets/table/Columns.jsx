import React from 'react';
import Col from './Col';

function Columns({ colData }) {


  return (

      <thead style={{ display:'flex'}}>
          {colData.map( val =>

              <Col val={val} />
          
          )}
      </thead>
  );
}

export default Columns;