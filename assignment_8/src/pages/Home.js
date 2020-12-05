import React from 'react';
import Header from '../layout/Header';
import '../App.css';

// Functional Component for homepage

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <div class="content-wrapper">
                <h1>Home</h1>
                <p>Hello</p>
            </div>
        </React.Fragment>
    )
}