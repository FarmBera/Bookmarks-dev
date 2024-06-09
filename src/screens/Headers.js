import React, { useEffect, useState } from "react";
import { Sticky, StickyContainer } from "react-sticky";
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

    // 중복 제거된 initialItems를 반환
    return initialItems;
  });

  /** Attempt 3 */
  /* // BookmarkList에 있는 아이템들로 초기 상태 설정
  const initialItems = BookmarkList.reduce((acc, curr) => {
    const item = { id: acc.length + 1, name: curr.folder };
    if (!acc.some((item) => item.name === curr.folder)) {
      acc.push(item);
    }
    return acc;
  }, []);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const addItem = (it) => {
      const newItem = { id: items.length + 1, name: `${it}` };

      // 중복 확인
      if (items.some((item) => item.name === newItem.name)) return; // 중복이면 함수 종료

      setItems((prevItems) => [...prevItems, newItem]);
    };

    // BookmarkList가 중복된 값을 포함할 수 있으므로 이를 필터링합니다.
    const uniqueFolders = [...new Set(BookmarkList.map((item) => item.folder))];

    for (let i = 0; i < uniqueFolders.length; i++) addItem(uniqueFolders[i]);
  }, [BookmarkList]); */

  /** Attempt 2 */
  /* useEffect(() => {
    const addItem = (it) => {
      const newItem = { id: items.length + 1, name: `${it}` };

      if (items.some((item) => item.name === newItem.name)) return; // 중복이면 함수 종료

      setItems((prevItems) => [...prevItems, newItem]);
    };

    console.log(BookmarkList.length);

    for (let i = 0; i < BookmarkList.length; i++)
      addItem(BookmarkList[i].folder);
  }, []); */

  /** Attempt 1 */
  /* const addItem = (it) => {
    const newItem = { id: items.length + 1, name: `${it}` };

    if (it in items) return;

    setItems([...items, newItem]);
  };

  console.log(BookmarkList.length);

  for (let i = 0; i < BookmarkList.length; i++) {
    addItem(BookmarkList[i].folder);
  } */

  return (
    <StickyContainer>
      <HeaderContainer>
        <Nav>
          <NavList>
            {items.map((item) => (
              <NavItem key={item.id}>
                <NavLink>{item.name}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
      </HeaderContainer>
    </StickyContainer>
  );
  /** ver 1 */
  /* return (
    <div>
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <header style={{ ...style, zIndex: 1000 }}>
              <nav>
                <Text>
                  <ul>
                    {items.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                </Text>
              </nav>
            </header>
          )}
        </Sticky>
      </StickyContainer>
    </div>
  ); */
};

const Text = styled.div`
  text-decoration: none;
  color: ${ColorFolder.white};
`;

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
`;

const NavItem = styled.li`
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export default Headers;

// import React from "react";

// function Headers() {
//   return (
//     <div className="App">
//       <header className="App-header">Headers!</header>
//       {/* <header className="">Headers!</header> */}
//     </div>
//   );
// }

// export default Headers;
