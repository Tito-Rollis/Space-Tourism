import style from './nav.module.css';
import TextNav from './textNav';
import HamburgenComponent from '../hamburger/hamburgerComponent';
import { useState } from 'react';

export const textNav = [
    { title: 'HOME', number: '00', link: '/' },
    { title: 'DESTINATION', number: '01', link: '/destination' },
    { title: 'CREW', number: '02', link: '/crew' },
    { title: 'TECHNOLOGY', number: '03', link: '/tech' },
];
function Nav({ number }) {
    const [clicked, setClicked] = useState(false);
    const clickHandler = () => setClicked(!clicked);

    return (
        <div
            className={`flex px-10 justify-between items-center relative h-20`}
        >
            <div className={`h-10 w-10 md:ml-14 ${style.logo}`}></div>
            <HamburgenComponent clicked={clicked} clickHandler={clickHandler} />
            <ul
                className={`h-full  md:flex items-center justify-center hidden md:gap-x-9 lg:gap-x-12 text-wt font-sub text-nav md:text-navMob lg:text-nav ${style.navContainer}`}
            >
                {textNav.map((item) => {
                    return (
                        <TextNav
                            isClick={
                                item.number === number &&
                                'rgba(255, 255, 255, 1)'
                            }
                            title={item.title}
                            number={item.number}
                            link={item.link}
                        />
                    );
                })}
            </ul>
            {clicked && (
                <div className="absolute w-screen z-10 bg-bk h-screen  left-0 top-0 pt-20 pl-4">
                    <ul
                        className={`  h-auto flex flex-col gap-y-12 text-wt font-sub text-nav `}
                    >
                        {textNav.map((item) => {
                            return (
                                <TextNav
                                    isClick={
                                        item.number === number &&
                                        'rgba(255, 255, 255, 1)'
                                    }
                                    title={item.title}
                                    number={item.number}
                                    link={item.link}
                                />
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Nav;
