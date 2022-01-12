import Nav from '../../components/nav/index';
import style from './home.module.css';
function Home() {
    return (
        <div
            className={`h-screen ${style.homeContainer} flex flex-col w-full pt-6`}
        >
            <Nav number="00" />
            <div
                className={`flex px-40 flex-col lg:flex-row items-center lg:justify-between flex-1 ${style.homeContent}`}
            >
                {/* TEXT */}
                <div
                    className={`flex lg:w-3/6 text-center flex-col lg:text-left lg:items-start`}
                >
                    <p className="lg:text-h5 md:text-h5Tab text-h5Mob font-sub text-pl">
                        SO, YOU WANT TO TRAVEL TO
                    </p>
                    <h1 className="font-main text-h1Mob md:text-h1 text-wt">
                        SPACE
                    </h1>
                    <p className="text-bodyMob md:text-bodyTab lg:text-body font-sub text-pl">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                {/* BUTTON */}
                <div>
                    <div
                        className={`rounded-full ${style.cta} mt-12  text-h5Mob lg:text-h4  md:mt-14 lg:mt-0 flex justify-center items-center`}
                    >
                        <p className="font-main ">EXPLORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
