import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../redux/slices/isLoading'; // Import setIsLoading action
import { setJobData } from '../../redux/slices/jobData'; // Import setJobData action
import { setLocation } from '../../redux/slices/location'

function Api() {
    const dispatch = useDispatch();

    const fetchJobData = async () => {
        const url = 'https://3908-2603-8001-4800-2320-591e-f5ec-bb1d-37e4.ngrok-free.app/jobs';

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

    const fetchLocation = async () => {
        const url = 'https://3908-2603-8001-4800-2320-591e-f5ec-bb1d-37e4.ngrok-free.app/location';

        try {
            console.log('fetching data from API')
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                dispatch(setLocation(data));
            }
        } catch (error) {
            console.error('Error occurred while fetching data:', error);
        }
    };

    useEffect(() => {
        fetchJobData();
        fetchLocation()
    }, []);

    return null;
}

export default Api;
