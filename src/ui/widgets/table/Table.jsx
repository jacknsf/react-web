import React from 'react';
import Columns from "./Columns"
import Row from './Row';

function Table({cols,rows}) {
  return (

      <table>
          <thead>

              <Columns colData={cols}></Columns>
          </thead>
          <tbody>

              {rows.map(r =>


                  <Row rowData={r.rowdata} cols={cols} key={ r.id} />

              )}
        
          </tbody>
      </table>
  );
}

export default Table;