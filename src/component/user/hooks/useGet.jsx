import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGet(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, [url]);

    return { data, loading, error };
}