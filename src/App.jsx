import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSection from '../components/MainSection.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../components/styles.css'
import '../components/responsive.css';
import SecondMainSection from "../components/SecondMainSection.jsx";
import Link from '../components/Link.jsx';

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path='/index' element={<MainSection/>}></Route>
                <Route path='/team' element={<SecondMainSection/>}></Route>
                <Route path='/link' element={<Link/>}></Route>
            </Routes>
            <Footer/>
        </>
    );
}

const Wrapper = () => (
    <Router>
        <App />
    </Router>
);

export default Wrapper;
