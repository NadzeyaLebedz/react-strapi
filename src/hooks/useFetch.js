import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(url) {
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    const token = 'ac89dd3b833df8d1fc2cb4dbc4f37da9679eb4eff3730fc41f4d9fcffb1b44832583bc77cd463744825517bfcb67f53d5122b75b2d3530666476c5cc5fee22a78497867f1d4b82de30e94c923a73304f972476d6af7bc0bafb17596340fb4732fe537853c257432a01993e5a923df650bdf248dfe03cbc92192bbd6ccdceb833' 

    useEffect(
        () => {
            const fetchData = async () => {
                setLoading(true);
                try {
                    const res = await axios.get(url, {
                        headers: {
                          'Authorization': `Bearer ${token}`
                        }
                      });
                      setData(res.data.data);
                    setLoading(false);
                } catch (error) {
                    setError(error);
                    setLoading(false);
                }
            };
            fetchData();
        },
        [ url ]
    );

    return { data, error, loading };
}