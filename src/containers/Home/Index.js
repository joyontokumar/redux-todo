import React from 'react';
import './style.css';
import Header from '../../components/Headers';
import mydata from '../../data.json';

const Home = () => {
    return (
        <div>
            <Header />
            <pre>{JSON.stringify(mydata, null, 2)}</pre>
        </div >
    )
}

export default Home
