import PatternPage from 'components/PatternPage';
import NavBar from 'components/NavBar';
import Homepage from 'pages/Homepage';
import Menu from 'pages/Menu';
import About from 'pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from 'components/Footer';
import NotFound from 'pages/NotFound';
import Dish from 'pages/Dish';

export default function AppRouter() {
    return(
        <main className='container'>
            <Router>
                <NavBar />
                <Routes>
                    <Route  path='/' element={<PatternPage />}>
                        <Route index element={<Homepage />}/>
                        <Route path='menu' element={<Menu />}/>
                        <Route path='about' element={<About />}/>
                    </Route>
                    <Route path='dish/:id' element={<Dish />}/>
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Router>
            <Footer />
        </main>
    );
}