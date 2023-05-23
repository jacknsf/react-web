import logo from './logo.svg';
import './App.css';
import Row from './ui/widgets/table/Row';

import { rowData } from './ui/widgets/table/testData';
function App() {

    return (
        <>
            <Row rowData={rowData}></Row>
        </>
  );
}

export default App;
