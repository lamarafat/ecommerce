import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function useFetch(url, handleResponse) {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async (values, page) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, values);
      handleResponse(response, navigate, page); 
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setError('Email already exists');
        } else {
          setError(error.response.data.message || 'An error occurred. Please try again.');
        }
      } else {
        setError('Network error. Please check your connection.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { error, isLoading, fetchData };
}