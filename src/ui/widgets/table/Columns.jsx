import React from 'react';
import Col from './Col';

function Columns({ colData }) {


  return (

      <tr style={{ display:'flex'}}>
          {colData.map(val =>

              <Col val={val} key={ val.id} />
          
          )}
      </tr>
  );
}

export default Columns;