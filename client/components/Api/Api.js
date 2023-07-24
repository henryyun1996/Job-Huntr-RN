import { useEffect } from 'react';

function Api({ setJobData, setIsLoading }) {

    const fetchJobData = async () => {
        // const url = 'https://5341-2603-8001-4800-2320-3ca7-c4c7-d437-61fb.ngrok-free.app/jobs';
        const url = 'http://127.0.0.1:5000/jobs';

        try {
            console.log('fetching data from API')
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setJobData(data);
                setIsLoading(false)
                console.log(data);
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
