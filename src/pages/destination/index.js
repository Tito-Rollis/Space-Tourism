import DestiNav from '../../components/destiNav/index';
import Nav from '../../components/nav/index';
import style from './destination.module.css';
import { data } from '../../api/data';
import { useContext } from 'react';
import { DestinationContext } from '../../context/destinationContext/index';
export default function Destination() {
    const [index] = useContext(DestinationContext);

    return (
        <div
            className={`pt-6 h-full w-screen ${style.container} overflow-hidden`}
        >
            <Nav number="01" />
            <h1
                className={`font-sub text-wt text-left ml-10 text-h5Mob md:text-h5 md:mt-4 md:ml-14`}
            >
                <span
                    className="font-bold text-h5 mr-6 md:mr-7"
                    style={{
                        color: '#FFF',
                        opacity: '0.25',
                    }}
                >
                    01
                </span>{' '}
                PICK YOUR DESTINATION
            </h1>
            <div
                className={`${style.content} md:flex-row flex-col flex items-center justify-center flex-wrap mt-9`}
            >
                <div className={`${style.leftcontent}`}>
                    <img
                        className="self-end md:mt-16"
                        width={300}
                        src={data.destinations[index].images.png}
                        alt="planet"
                    />
                </div>
                <div
                    className={`${style.sidebar} flex flex-col items-center md:items-start mt-8`}
                >
                    <DestiNav />
                    <h1 className="font-main text-wt text-h2">
                        {data.destinations[index].name.toUpperCase()}
                    </h1>
                    <p className="text-pl text-center md:text-left font-sub text-bodyTab mx-5 md:mx-0 md:text-body font-normal">
                        {data.destinations[index].description}
                    </p>
                    <div className="mt-10 justify-center md:justify-start flex w-full gap-x-14">
                        <div>
                            <h1 className="font-sub text-sub2 text-pl">
                                AVG. DISTANCE
                            </h1>
                            <p className="text-wt font-main text-sub2 md:text-sub1">
                                {data.destinations[index].distance}
                            </p>
                        </div>
                        <div>
                            <h1 className="font-sub text-sub2 text-pl">
                                Est. travel time
                            </h1>
                            <p className="text-wt font-main text-sub2 md:text-sub1">
                                {data.destinations[index].travel}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
