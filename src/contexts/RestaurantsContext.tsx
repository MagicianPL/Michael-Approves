import { createContext, useState, ReactElement } from "react";

const restaurantsArr = [
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

export const RestaurantsContext = createContext<any>(null);

interface Props {
    children: ReactElement;
}

const RestaurantsProvider: React.FC<Props> = ({children}) => {
    const [restaurants, setRestaurants] = useState(restaurantsArr)

    return (
    <RestaurantsContext.Provider value={[restaurants, setRestaurants]}>
        {children}
    </RestaurantsContext.Provider>
    )
};

export default RestaurantsProvider;