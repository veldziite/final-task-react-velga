import { useState, useEffect } from 'react';
import axios from 'axios';

function useAxiosGet(uri) {
    const [request, setRequest] = useState({
        loading: true,
        data: null,
    });

    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
        });

        const url = `http://localhost:3000/${uri}`;
        axios.get(url)
            .then((response) => {
                setRequest({
                    loading: false,
                    data: response.data,
                });
            }).catch(() => {
                alert('Smth went south');
                setRequest({
                    loading: false,
                    data: null,
                });
            });
    }, [uri]);

    return request;
}

export default useAxiosGet;