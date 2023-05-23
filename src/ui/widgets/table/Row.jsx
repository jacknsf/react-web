import React from 'react';
import Cell from './Cell';

function Row({ rowData }) {


  return (

      <div style={{ display:'flex'}}>
          {rowData.map( val =>

              <Cell val={ val} />
          
          )}
      </div>
  );
}

export default Row;