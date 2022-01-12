import React, { useState } from 'react';
import Nav from '../../components/nav/index';
import style from './crew.module.css';
import { data } from '../../api/data';

const DATA_CREW = data.crew;
export default function Crew() {
    const [active, setActive] = useState(0);
    const bullets = [0, 1, 2, 3];
    return (
        <div
            className={`pt-6 h-screen w-screen ${style.container} overflow-hidden static md:relative`}
        >
            <Nav number="02" />
            <h1
                className={`font-sub text-wt text-center text-h5Mob md:text-h5 md:text-left md:mt-4 md:ml-14`}
            >
                <span
                    className="font-bold text-h5 mr-6 md:mr-7"
                    style={{
                        color: '#FFF',
                        opacity: '0.25',
                    }}
                >
                    02
                </span>{' '}
                MEET YOUR CREW
            </h1>
            <div className="grid mt-8 md:mt-3 mx-6 md:mx-32 lg:mt-12">
                <div
                    className={`flex w-full z-0 justify-center md:absolute lg:h-3/4 lg:-left-24 lg:justify-end  md:bottom-0 md:left-0 md:right-0 md:h-2/5 h-64 ${style.img}`}
                >
                    {
                        <img
                            src={DATA_CREW[active].images.png}
                            alt={DATA_CREW[active].name}
                        />
                    }
                </div>

                {/* BUTTON */}
                <div className="flex mt-8 lg:mt-28  gap-x-4 justify-self-center lg:justify-self-start">
                    {bullets.map((bullet, index) => {
                        return (
                            <button
                                key={index}
                                number={bullet}
                                onClick={(e) =>
                                    setActive(
                                        e.currentTarget.getAttribute('number')
                                    )
                                }
                                className={`${
                                    parseInt(active) === bullet
                                        ? style.bullet
                                        : style.bullet_default
                                } w-3 h-3 rounded-full cursor-pointer z-30`}
                            ></button>
                        );
                    })}
                </div>
                {/* INFO */}
                <div className="md:row-start-1 md:row-end-2 z-20 lg:w-10/12 ">
                    <p className="font-main text-body w-full text-center font-normal text-wt opacity-50 mt-8 lg:text-h4 lg:text-left">
                        {DATA_CREW[active].role.toUpperCase()}
                    </p>
                    <p className="font-main text-sub1 w-full text-center font-normal text-wt lg:text-h3 lg:text-left">
                        {DATA_CREW[active].name.toUpperCase()}
                    </p>
                    <p className="font-sub text-bodyMob w-full text-center font-normal text-pl mt-4 lg:text-body lg:text-left lg:w-3/4">
                        {DATA_CREW[active].bio}
                    </p>
                </div>
            </div>
        </div>
    );
}
