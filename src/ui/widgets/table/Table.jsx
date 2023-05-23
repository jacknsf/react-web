import React from 'react';
import Columns from "./Columns"
import Row from './Row';

function Table({cols}, {rows}) {
  return (

      <table>

              <Columns colData={cols}></Columns>
          <tbody>

              {rows.map(rowdata =>

                
                  <Row rowData={rowdata} />

              )}
        
          </tbody>
      </table>
  );
}

export default Table;