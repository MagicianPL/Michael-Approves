import { createContext, ReactElement } from "react";

const restaurants = [
    {
        name: "McDonald",
        rating: 5,
        description: "Yeeey!"
    },
    {
        name: "Burger King",
        rating: 5,
        description: "Yeeey!"
    },
];

interface Restaurants {
    name: String;
    rating: Number;
    description: String;
}

export const RestaurantsContext = createContext<Restaurants[]>([]);

interface Props {
    children: ReactElement;
}

const RestaurantsProvider: React.FC<Props> = ({children}) => {
    return (
    <RestaurantsContext.Provider value={restaurants}>
        {children}
    </RestaurantsContext.Provider>
    )
};

export default RestaurantsProvider;