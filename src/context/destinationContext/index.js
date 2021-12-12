import { createContext, useState } from 'react';

export const DestinationContext = createContext();

const DestinationContextProvider = (props) => {
    const [index, setIndex] = useState(0);
    const destinationHandler = (i) => {
        return setIndex(i);
    };
    return (
        <DestinationContext.Provider value={[index, destinationHandler]}>
            {props.children}
        </DestinationContext.Provider>
    );
};
export default DestinationContextProvider;
