import style from './nav.module.css';

function Nav() {
    return (
        <div className={`flex justify-between items-center h-24`}>
            <div className={`h-12 w-12 ml-10 md:ml-14 ${style.logo}`}></div>
            <ul
                className={`h-full  md:flex items-center justify-center hidden md:gap-x-9 lg:gap-x-12 text-wt font-sub text-nav md:text-navMob lg:text-nav ${style.navContainer}`}
            >
                <li className={`flex gap-2 h-full items-center ${style.list}`}>
                    <span className="font-bold md:hidden lg:block">00</span>{' '}
                    HOME
                </li>
                <li className={`flex gap-2 h-full items-center ${style.list}`}>
                    <span className="font-bold md:hidden lg:block">01</span>{' '}
                    DESTINATION
                </li>
                <li className={`flex gap-2 h-full items-center ${style.list}`}>
                    <span className="font-bold md:hidden lg:block">02</span>{' '}
                    CREW
                </li>
                <li className={`flex gap-2 h-full items-center ${style.list}`}>
                    <span className="font-bold md:hidden lg:block">03</span>{' '}
                    TECHNOLOGY
                </li>
            </ul>
        </div>
    );
}

export default Nav;
