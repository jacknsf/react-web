import React from 'react';
import Cell from './Cell';

function Row({ rowData,cols }) {


  return (

      <tr style={{ display:'flex'}}>
          {rowData.map(val =>

              <Cell val={val} key={ val.id}  />
          
          )}
      </tr>
  );
}

export default Row;