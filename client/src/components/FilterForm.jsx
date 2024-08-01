import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function FilterForm({ onFilterChange, onSortChange }) {
  const [language, setLanguage] = useState('');
  const [version, setVersion] = useState('');
  const [bio, setBio] = useState('');
  const [sort, setSort] = useState('');

  const handleSubmit = (e) => {
    console.log('submitted')
    e.preventDefault();
    const filters = {};
    if (language) filters.language = language;
    if (version) filters.version = version;
    if (bio) filters.bio = bio;
    onFilterChange(filters);
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    onSortChange(newSort);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Version"
        value={version}
        onChange={(e) => setVersion(e.target.value)}
      />
      <Select value={sort} onChange={handleSortChange}>
        <option value="">Sort by...</option>
        <option value="name">Name</option>
        <option value="language">Language </option>
        <option value="version">Version (Low to High)</option>
        <option value="-version">Version (High to Low)</option>
      </Select>
      <Button type="submit">Apply Filters</Button>
    </Form>
  );
}

export default FilterForm;