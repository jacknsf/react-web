import React from 'react';

function Cell({ val}) {
  return (

      <input type="text" id={ val.id} value={val.value }></input>
  );
}

export default Cell;