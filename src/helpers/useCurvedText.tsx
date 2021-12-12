// @ts-ignore
import CircleType from "circletype";
import { useEffect } from "react";

//It allows to curve text
export const useCurvedText = (element: any) => {
        useEffect(()=>{
            const circleType = new CircleType(element.current);
            circleType.radius(250).dir(1); 
        }, [element]);
};