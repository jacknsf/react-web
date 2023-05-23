import React from 'react';
import Cell from './Cell';

function Row({ rowData,cols }) {


  return (

      <tr style={{ display:'flex'}}>
          {rowData.map( val =>
             
              <Cell val={ val} />
          
          )}
      </tr>
  );
}

export default Row;