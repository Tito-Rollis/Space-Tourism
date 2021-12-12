import DestiNav from '../../components/destiNav/index';
import Nav from '../../components/nav/index';
import style from './destination.module.css';
import { data } from '../../api/data';
import { useState, useContext } from 'react';
import { DestinationContext } from '../../context/destinationContext/index';
function Destination() {
    const [index] = useContext(DestinationContext);

    return (
        <div
            className={`flex flex-col pt-6 h-screen w-screen ${style.container}`}
        >
            <Nav dest="rgba(255, 255, 255, 1)" />
            <div className={`${style.content} mt-9`}>
                <div className={`${style.leftcontent}`}>
                    <h1 className={`font-sub text-wt text-h5`}>
                        <span
                            className="font-bold text-h5"
                            style={{
                                color: '#FFF',
                                opacity: '0.25',
                                marginRight: '28px',
                            }}
                        >
                            01
                        </span>{' '}
                        PICK YOUR DESTINATION
                    </h1>
                    <img
                        className="self-end mt-16"
                        width={300}
                        src={data.destinations[index].images.png}
                        alt="planet"
                    />
                </div>
                <div className={`${style.sidebar} mt-8`}>
                    <DestiNav />
                    <h1 className="font-main text-wt text-h2">
                        {data.destinations[index].name.toUpperCase()}
                    </h1>
                    <p className="text-pl font-sub text-body font-normal">
                        {data.destinations[index].description}
                    </p>
                    <div className="mt-10 flex w-full gap-x-14">
                        <div>
                            <h1 className="font-sub text-sub2 text-pl">
                                AVG. DISTANCE
                            </h1>
                            <p className="text-wt font-main text-sub1">
                                {data.destinations[index].distance}
                            </p>
                        </div>
                        <div>
                            <h1 className="font-sub text-sub2 text-pl">
                                Est. travel time
                            </h1>
                            <p className="text-wt font-main text-sub1">
                                {data.destinations[index].travel}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;
