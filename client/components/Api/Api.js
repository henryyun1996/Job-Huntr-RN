import { useEffect } from 'react';

function Api({ setJobData }) {

    const fetchJobData = async () => {
        const url = 'https://127.0.0.1:5000/jobs';
        try {
            const response = await fetch(url);

            if (response.ok) {
                const data = await response.json();
                setJobData(data);
                console.log('API request failed', response.status);
            }
        } catch (error) {
            console.error('Error occurred while fetching data:', error);
        }
    };

    useEffect(() => {
        fetchJobData();
    }, []);

    return null;
}

export default Api;
