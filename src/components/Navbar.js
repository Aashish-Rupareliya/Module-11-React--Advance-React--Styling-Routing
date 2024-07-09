import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo> Nest </Logo>
        <NavItems>
          <NavItem>Browse All Categories</NavItem>
          <NavItem>Hot Deals</NavItem>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Shop</NavItem>
          <NavItem>Vendors</NavItem>
          <NavItem>Mega Menu</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Pages</NavItem>
          <NavItem>Contact</NavItem>
        </NavItems>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #27ae60;
`;

const NavItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

const NavItem = styled.li`
  font-size: 1rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #27ae60;
  }
`;

export default Navbar;
