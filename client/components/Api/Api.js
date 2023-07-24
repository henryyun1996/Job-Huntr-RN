import { useEffect } from 'react';

function Api({ setJobData, setIsLoading }) {

    const fetchJobData = async () => {
        const url = 'https://fd4d-2603-8001-4800-2320-e4e2-280-7c3f-9142.ngrok-free.app/jobs';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setJobData(data);
                setIsLoading(false)
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
