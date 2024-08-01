import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DataTable from './components/DataTable';
import FilterForm from './components/FilterForm';
import { fetchData } from './api/calls';

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    language: '',
  });
  const [sort, setSort] = useState('');

  useEffect(() => {
    loadData();
  }, [filters, sort]);

  const loadData = async () => {
    try {
      const fetchedData = await fetchData(filters, sort);
      console.log(filters);
      setData(fetchedData);
    } catch (error) {
      // Handle error (e.g., show an error message to the user)
      console.error('Failed to fetch data:', error);
    }
  };

  const handleFilterChange = (newFilters) => {
    console.log(newFilters);
    setFilters(newFilters);
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  return (
    <AppContainer>
      <Title>Data Explorer</Title>
      <FilterForm onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <DataTable data={data} />
    </AppContainer>
  );
}

export default App;