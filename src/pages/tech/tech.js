import React, { useState, useLayoutEffect } from 'react';
import Nav from '../../components/nav/index';
import styles from './tech.module.css';
import { data } from '../../api/data';

const DATA_TECH = data.technology;
export default function Tech() {
    const [active, setActive] = useState(0);
    const [size, setSize] = useState(1025);
    const number = [0, 1, 2];
    useLayoutEffect(() => {
        window.addEventListener('resize', () => setSize(window.innerWidth));
    }, []);
    return (
        <div onResiz className={`${styles.container} pt-6`}>
            <Nav number="03" />
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
                    03
                </span>{' '}
                SPACE LAUNCH 101
            </h1>
            {/* CONTENT */}
            <div className="flex flex-wrap lg:flex-nowrap justify-center  lg:pl-32 lg:space-x-9 items-center">
                {/* POINTER */}
                <div className="flex items-center justify-center flex-row  lg:flex-col mt-6 lg:mt-0 space-x-4 lg:space-x-0 lg:space-y-6 flex-1 ">
                    {number.map((val) => {
                        return (
                            <button
                                key={val}
                                onClick={() => setActive(val)}
                                className={` rounded-full h-12 w-12 border border-wt ${
                                    active === val ? 'bg-wt' : 'bg-bk'
                                } justify-center items-center flex`}
                            >
                                <h1
                                    className={`font-main text-body  ${
                                        active === val ? 'text-bk' : 'text-wt'
                                    }`}
                                >
                                    {val + 1}
                                </h1>
                            </button>
                        );
                    })}
                </div>
                {/* DETAIL */}
                <div className="flex flex-col items-center lg:items-start mt-6 lg:mt-0">
                    <h1 className="text-h5Mob text-pl font-sub">
                        THE TERMINOLOGY...
                    </h1>
                    <h1 className="font-main lg:text-h3 text-h4 text-wt text-center lg:text-left">
                        {DATA_TECH[active].name.toUpperCase()}
                    </h1>
                    <p className="text-pl mx-12 lg:mx-0 lg:text-body text-bodyMob text-center lg:text-left">
                        {DATA_TECH[active].description}
                    </p>
                </div>
                <img
                    className="order-first w-screen lg:order-last mt-6 lg:mt-0"
                    style={{ height: size > 1024 ? '500px' : '130px' }}
                    src={
                        size > 1024
                            ? DATA_TECH[active].images.portrait
                            : DATA_TECH[active].images.landscape
                    }
                    alt={DATA_TECH[active].name}
                />
            </div>
        </div>
    );
}
