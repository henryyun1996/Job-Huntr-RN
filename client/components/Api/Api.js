import { useEffect } from 'react';

function Api({ setJobData }) {

  const fetchJobData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/jobs');
        const data = await response.json();
        setJobData(data.data);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return null; // Replace this with your actual component JSX
}

export default Api;
