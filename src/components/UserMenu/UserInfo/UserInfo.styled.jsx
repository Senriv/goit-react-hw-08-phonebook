import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const UserLink = styled(Link)`
  text-decoration: none;
  color: #4caf50;
  font-weight: bold;
`;

export const UserBtn = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;