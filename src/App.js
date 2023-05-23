import logo from './logo.svg';
import './App.css';

import { cols, rows } from './ui/widgets/table/testData';
import Table from './ui/widgets/table/Table';
function App() {

    return (
        <>
            <Table cols={cols} rows={rows}/>
        </>
  );
}

export default App;
