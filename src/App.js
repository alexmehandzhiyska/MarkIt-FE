import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/Layout';
import Login from './components/auth/login/Login';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
