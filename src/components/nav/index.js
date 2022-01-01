import style from './nav.module.css';
import { Link } from 'react-router-dom';

function Nav({ home, dest, crew, tech }) {
    return (
        <div className={`flex justify-between items-center h-20`}>
            <div className={`h-10 w-10 ml-10 md:ml-14 ${style.logo}`}></div>
            <ul
                className={`h-full  md:flex items-center justify-center hidden md:gap-x-9 lg:gap-x-12 text-wt font-sub text-nav md:text-navMob lg:text-nav ${style.navContainer}`}
            >
                <li
                    style={{
                        boxShadow: `0px -3px 0px 0px ${home} inset`,
                    }}
                    className={`flex  gap-2 h-full items-center ${style.list}`}
                >
                    <span className="font-bold md:hidden lg:block">00</span>{' '}
                    <Link to="/">HOME</Link>
                </li>

                <li
                    style={{
                        boxShadow: `0px -3px 0px 0px ${dest} inset`,
                    }}
                    className={`flex gap-2 h-full items-center ${style.list}`}
                >
                    <span className="font-bold md:hidden lg:block">01</span>{' '}
                    <Link to="/destination">DESTINATION</Link>
                </li>

                <li
                    style={{
                        boxShadow: `0px -3px 0px 0px ${crew} inset`,
                    }}
                    className={`flex gap-2 h-full items-center ${style.list}`}
                >
                    <span className="font-bold md:hidden lg:block">02</span>{' '}
                    <Link to="/crew">CREW</Link>
                </li>

                <li
                    style={{
                        boxShadow: `0px -3px 0px 0px ${tech} inset`,
                    }}
                    className={`flex gap-2 h-full items-center ${style.list}`}
                >
                    <span className="font-bold md:hidden lg:block">03</span>{' '}
                    TECHNOLOGY
                </li>
            </ul>
        </div>
    );
}

export default Nav;
