import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../redux/slices/isLoading'; // Import setIsLoading action
import { setJobData } from '../../redux/slices/jobData'; // Import setJobData action

function Api() {
    const dispatch = useDispatch();

    const fetchJobData = async () => {
        const url = 'https://fd4d-2603-8001-4800-2320-e4e2-280-7c3f-9142.ngrok-free.app/jobs';

        try {
            console.log('fetching data from API')
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                dispatch(setJobData(data));

                // Dispatch the action to set isLoading to false
                dispatch(setIsLoading(false));
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
