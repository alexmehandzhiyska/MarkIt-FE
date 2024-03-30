import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/layout/Layout';
import Login from './components/auth/login/Login';
import FileUpload from './components/file-management/file-upload/FileUpload';
import ViewContainer from './components/view-container/ViewContainer';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<ViewContainer />}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/upload" element={<FileUpload />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
