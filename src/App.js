import Home from './pages/home/index';
import Destination from './pages/destination/index';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DestinationContextProvider from './context/destinationContext';
function App() {
    return (
        <DestinationContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route
                        path="/destination"
                        element={<Destination />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </DestinationContextProvider>
    );
}

export default App;
