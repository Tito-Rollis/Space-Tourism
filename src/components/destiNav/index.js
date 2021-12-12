import { useState, useContext } from 'react';
import DestiNavTitle from './destiNavTitle';
import { DestinationContext } from '../../context/destinationContext/index';

function DestiNav({ index }) {
    const [, destinationHandler] = useContext(DestinationContext);
    const [clicked, setClicked] = useState({
        underline: { moon: '', mars: '', euro: '', titan: '' },
        text: { moon: '', mars: '', euro: '', titan: '' },
    });

    const moonClicked = () => {
        setClicked({
            underline: {
                moon: `0px -3px 0px 0px rgba(255, 255, 255, 1) inset`,
                mars: '',
                euro: '',
                titan: '',
            },
            text: {
                moon: 'text-white',
                mars: 'text-pl',
                euro: 'text-pl',
                titan: 'text-pl',
            },
        });
        destinationHandler(0);
    };

    const marsClicked = () => {
        setClicked({
            underline: {
                moon: ``,
                mars: '0px -3px 0px 0px rgba(255, 255, 255, 1) inset',
                euro: '',
                titan: '',
            },
            text: {
                moon: 'text-pl',
                mars: 'text-white',
                euro: 'text-pl',
                titan: 'text-pl',
            },
        });
        destinationHandler(1);
    };

    const euroClicked = () => {
        setClicked({
            underline: {
                moon: ``,
                mars: '',
                euro: '0px -3px 0px 0px rgba(255, 255, 255, 1) inset',
                titan: '',
            },
            text: {
                moon: 'text-pl',
                mars: 'text-pl',
                euro: 'text-white',
                titan: 'text-pl',
            },
        });
        destinationHandler(2);
    };

    const titanClicked = () => {
        setClicked({
            underline: {
                moon: ``,
                mars: '',
                euro: '',
                titan: '0px -3px 0px 0px rgba(255, 255, 255, 1) inset',
            },
            text: {
                moon: 'text-pl',
                mars: 'text-pl',
                euro: 'text-pl',
                titan: 'text-white',
            },
        });
        destinationHandler(3);
    };
    return (
        <ul
            className={`h-9 w-full md:flex items-center justify-start  md:gap-x-9 lg:gap-x-12 text-wt font-sub text-nav md:text-navMob lg:text-nav`}
        >
            <DestiNavTitle
                handler={moonClicked}
                title="MOON"
                clicked={clicked.underline.moon}
                text={clicked.text.moon}
            />
            <DestiNavTitle
                handler={marsClicked}
                title="MARS"
                clicked={clicked.underline.mars}
                text={clicked.text.mars}
            />
            <DestiNavTitle
                handler={euroClicked}
                title="EUROPA"
                clicked={clicked.underline.euro}
                text={clicked.text.euro}
            />
            <DestiNavTitle
                handler={titanClicked}
                title="TITAN"
                clicked={clicked.underline.titan}
                text={clicked.text.titan}
            />
        </ul>
    );
}

export default DestiNav;
