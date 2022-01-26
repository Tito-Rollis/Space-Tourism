import style from './nav.module.css';
import TextNav from './textNav';
import HamburgenComponent from '../hamburger/hamburgerComponent';
function Nav({ number }) {
    const textNav = [
        { title: 'HOME', number: '00', link: '/' },
        { title: 'DESTINATION', number: '01', link: '/destination' },
        { title: 'CREW', number: '02', link: '/crew' },
        { title: 'TECHNOLOGY', number: '03', link: '/tech' },
    ];
    return (
        <div className={`flex px-10 justify-between items-center h-20`}>
            <div className={`h-10 w-10 md:ml-14 ${style.logo}`}></div>
            <HamburgenComponent />
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
        </div>
    );
}

export default Nav;
