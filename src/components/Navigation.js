import React from "react";
import { Link } from "gatsby";

import { Container, NavigationWrapper } from "../Styles/CustomStyles.styles";

import { useMenuQuery } from "../hooks/useMenuQuery";

const Navigation = () => {
  const {
    menu: { menuItems },
  } = useMenuQuery();

  return (
    <NavigationWrapper>
      <Container>
        <ul>
          <li>
            <Link to='/' activeClassName='nav-active'>
              Home
            </Link>
          </li>
          {menuItems.nodes.map((menuItem) => (
            <li key={menuItem.id}>
              <Link to={menuItem.url} activeClassName='nav-active'>
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </NavigationWrapper>
  );
};

export default Navigation;
