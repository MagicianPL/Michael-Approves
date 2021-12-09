import { createContext, ReactElement } from "react";

export const RestaurantsContext = createContext({});

interface Props {
    children: ReactElement;
}

const RestaurantsProvider: React.FC<Props> = ({children}) => {
    return (
    <RestaurantsContext.Provider value="Hello from context">
        {children}
    </RestaurantsContext.Provider>
    )
};

export default RestaurantsProvider;