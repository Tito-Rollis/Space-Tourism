import style from './nav.module.css';

function Nav() {
    return (
        <div
            className={`flex justify-between items-center pt-5 ${style.headContainer}`}
        >
            <div className={`h-6 w-6 ml-5 ${style.logo}`}></div>
            <ul
                className={`h-12 px-10 flex items-center justify-center  gap-x-8 text-wt font-sub text-nav ${style.navContainer}`}
            >
                <li className="flex gap-2">
                    <span className="font-bold">00</span> HOME
                </li>
                <li className="flex gap-2">
                    <span className="font-bold">01</span> DESTINATION
                </li>
                <li className="flex gap-2">
                    <span className="font-bold">02</span> CREW
                </li>
                <li className="flex gap-2 ">
                    <span className="font-bold">03</span> TECHNOLOGY
                </li>
            </ul>
        </div>
    );
}

export default Nav;
