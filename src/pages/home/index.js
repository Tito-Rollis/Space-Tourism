import Nav from '../../components/nav/index';
import style from './home.module.css';
function Home() {
    return (
        <div className={`h-screen ${style.homeContainer} `}>
            <Nav />
            <div
                className={`flex w-full flex-col lg:flex-row items-center justify-center ${style.homeContent}`}
            >
                <div
                    className={`${style.textContainer} flex text-center flex-col lg:text-left lg:items-start`}
                >
                    <p className="lg:text-h5 md:text-h5Tab text-h5Mob font-sub text-pl">
                        SO, YOU WANT TO TRAVEL TO
                    </p>
                    <h1 className="font-main text-h1Mob text-wt">SPACE</h1>
                    <p className="text-bodyMob md:text-bodyTab lg:text-body font-sub text-pl">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div>
                    <div
                        className={`rounded-full ${style.cta} mt-20 md:text-h4 text-h5Mob lg:text-h4  md:mt-32 lg:mt-0 flex justify-center items-center`}
                    >
                        <p className="font-main text-h4 ">EXPLORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
