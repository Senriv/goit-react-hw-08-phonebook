import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const NavItems = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.li`
  margin: 0 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #4caf50;
  font-weight: bold;
`;

export const Title = styled.h1`
  color: #333;
  margin: 0 auto;
  width: 360px;
  text-align: center;
`;
