import React from 'react';
import { useState } from 'react';

function Cell({ val }) {

    let [value, setValue] = useState("");

  return (

      <td>
          <input type="text" id={val.id} value={value || val.value} onChange={e => setValue(e.target.value)}></input>
     </td >
  );
}

export default Cell;