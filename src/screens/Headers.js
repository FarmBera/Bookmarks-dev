import React, { /* useEffect, */ useState } from "react";
import { /* Sticky, */ StickyContainer } from "react-sticky";
import styled from "styled-components";

// color
import ColorFolder from "../styles/colors";

// components
import BookmarkList from "../data/BookmarkList";

const Headers = () => {
  const [items, setItems] = useState(() => {
    // BookmarkList에 있는 아이템들로 초기 상태 설정
    const initialItems = BookmarkList.reduce((acc, curr) => {
      const item = { id: acc.length + 1, name: curr.folder };
      if (!acc.some((item) => item.name === curr.folder)) {
        acc.push(item);
      }
      return acc;
    }, []);

    // 중복 제거된 배열 반환
    return initialItems;
  });

  return (
    <StickyContainer>
      <HeaderContainer>
        <Nav>
          <NavList>
            {items.map((item) => (
              <NavItem key={item.id}>
                <a href="/">
                  <NavLink>{item.name}</NavLink>
                </a>
              </NavItem>
            ))}
          </NavList>
        </Nav>
      </HeaderContainer>
    </StickyContainer>
  );
};

/* const Text = styled.div`
  text-decoration: none;
  color: ${ColorFolder.white};
`; */

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  /* padding-right: -10px; */
  /* border-left: 1px solid ${ColorFolder.white};
  border-right: 3px solid ${ColorFolder.white}; */
`;

const NavItem = styled.li`
  text-decoration: none;
  margin-right: 20px;

  :hover {
    border: 1px solid ${ColorFolder.white};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export default Headers;
