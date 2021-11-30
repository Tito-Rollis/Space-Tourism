
function DestiNav() {
    return (
        <div className={`flex justify-between items-center h-24`}>
            <ul
                className={`h-full  md:flex items-center justify-center hidden md:gap-x-9 lg:gap-x-12 text-wt font-sub text-nav md:text-navMob lg:text-nav`}
            >
                <li className={`flex gap-2 h-full items-center`}>MOON</li>
                <li className={`flex gap-2 h-full items-center`}>MARS</li>
                <li className={`flex gap-2 h-full items-center`}>EUROPA</li>
                <li className={`flex gap-2 h-full items-center `}>TITAN</li>
            </ul>
        </div>
    );
}

export default DestiNav;
