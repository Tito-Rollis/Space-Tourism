import Home from './pages/home/index';
import Destination from './pages/destination/index';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/destination" element={<Destination />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
