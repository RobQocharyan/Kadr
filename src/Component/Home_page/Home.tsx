import './home.scss'
import { FC } from 'react';
import React from "react";
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';


export const Home: FC = () => {
    return (
        <div className='home'>
            <Header/>
            <h1>Home</h1>
            <Footer />
        </div>
    )
}