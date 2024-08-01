import axios from 'axios';

const API_BASE_URL = 'http://localhost:3500/api';

export const fetchData = async (filters, sort) => {
  try {
    const params = new URLSearchParams();
    console.log(filters)
    if (filters.language) params.append('language', filters.language);
    if (filters.version) params.append('version', filters.version);
    if (filters.bio) params.append('bio', filters.bio);
    if (sort) params.append('sort', sort);

    const response = await axios.get(`${API_BASE_URL}/data`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};