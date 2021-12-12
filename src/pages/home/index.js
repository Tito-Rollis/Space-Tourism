import Nav from '../../components/nav/index';
import style from './home.module.css';
function Home() {
    return (
        <div className={`h-screen ${style.homeContainer} w-full pt-6`}>
            <Nav home="rgba(255, 255, 255, 1)" />
            <div
                className={`flex px-20 flex-col lg:flex-row items-center justify-center ${style.homeContent}`}
            >
                <div
                    className={`flex lg:w-3/6 text-center flex-col lg:text-left lg:items-start`}
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
                        className={`rounded-full ${style.cta} mt-20  text-h5Mob lg:text-h4  md:mt-14 lg:mt-0 flex justify-center items-center`}
                    >
                        <p className="font-main ">EXPLORE</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
