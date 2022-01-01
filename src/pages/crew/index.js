import React from 'react';
import Nav from '../../components/nav/index';
import style from './crew.module.css';
export default function Crew() {
    return (
        <div
            className={`pt-6 h-screen w-screen ${style.container} overflow-hidden`}
        >
            <Nav crew="rgba(255, 255, 255, 1)" />
        </div>
    );
}
