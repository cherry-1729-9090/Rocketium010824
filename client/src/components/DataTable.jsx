import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f8f9fa;
  padding: 12px;
  text-align: left;
  border-bottom: 2px solid #dee2e6;
`;

const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid #dee2e6;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #e9ecef;
  }
`;

function DataTable({ data }) {
  {console.log(data)}
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Language</Th>
          <Th>Version</Th>
          <Th>Bio</Th>
        </Tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <Tr key={`${item.id}-${index}`}>
            <Td>{item.name}</Td>
            <Td>{item.language}</Td>
            <Td>{item.version}</Td>
            <Td>{item.bio}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;