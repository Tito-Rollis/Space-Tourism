import React from 'react';
import style from './destiNav.module.css';

function DestiNavTitle({ title, handler, clicked, text = 'text-pl' }) {
    let isClicked = {
        boxShadow: clicked,
    };
    return (
        <li
            style={isClicked}
            className={`flex gap-2 h-full items-center ${style.list}`}
        >
            <button
                onClick={handler}
                className={`${text} font-sub text-nav md:text-navMob lg:text-nav`}
            >
                {title}
            </button>
        </li>
    );
}

export default DestiNavTitle;
