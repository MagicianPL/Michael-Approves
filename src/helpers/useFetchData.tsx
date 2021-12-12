import {useEffect} from 'react';

export const useFetchData = (url: string, setState: (data: any)=>void) => {
    useEffect(()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => {
        console.log(data);
        setState(data);
    });
    }, [url, setState])
};