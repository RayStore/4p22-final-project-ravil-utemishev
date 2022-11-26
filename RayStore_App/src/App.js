import './App.scss';

import { Rotes, Route } from 'react-router-dom';

import { IndexPage } from './pages/IndexPage';

function App () {
    return (
        <>
            <header>
                <a href="/">Homepage</a>
            </header>
            <Rotes>
                <Route path="/" element={<IndexPage/>} /> 
            </Rotes>
        </>    
    );
}

export default App;





