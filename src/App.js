import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Layout from './layout/components/Layout';
import List from './pages/List';
import Add from './pages/Add';
import Item from './pages/Item';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' exact element={<Welcome />} />
                    <Route path='/list' element={<List />} />
                    <Route path='/add' element={<Add />} />
                    <Route path='/item' element={<Item />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
