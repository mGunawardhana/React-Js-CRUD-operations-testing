import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmpListing from "./EmpListing";

function App() {
    return (
        <div className="App">
            <h1>React JS CRUD</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<EmpListing/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );

}

export default App;
