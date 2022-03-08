import { useState, useEffect } from 'react';
import axios from 'axios';

const usePositionAddress = address => {
    const [map, setMap] = useState({});
    const API = `http://api.positionstack.com/v1/forward?access_key=b2b467c7fdb8b66b4078da33a7afb062&query=${address}`;

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            axios(API)
            .then(response => setMap(response.data.data[0]));
        }

        return () => mounted = false;

    }, []);

    console.log('map -> ', map);

    return map;
};

export default usePositionAddress;