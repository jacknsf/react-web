import React from 'react';

function Cell({ val}) {
  return (

     <td>
      <input type="text" id={ val.id} value={val.value }></input>
     </td >
  );
}

export default Cell;