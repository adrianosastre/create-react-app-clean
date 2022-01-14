import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Layout from './components/layout/Layout';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import ItemPage from './pages/ItemPage';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' exact element={<WelcomePage />} />
                    <Route path='/list' element={<ListPage />} />
                    <Route path='/add' element={<AddPage />} />
                    <Route path='/item' element={<ItemPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
