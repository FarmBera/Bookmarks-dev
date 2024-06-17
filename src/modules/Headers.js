import React, { /* useEffect, */ useState } from "react";
import { /* Sticky, */ StickyContainer } from "react-sticky";
import styled from "styled-components";
import { Link } from "react-router-dom";

// color
import ColorFolder from "../styles/colors";

// components
import BookmarkList from "../data/BookmarkList";

function Headers({ handleClick }) {
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
        <div className="Nav">
          <div className="NavList">
            {items.map((item) => (
              <div className="NavItem" key={item.id}>
                <Link onClick={() => handleClick(item.name)}>
                  <div className="NavLink">{item.name}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </HeaderContainer>
    </StickyContainer>
  );
}

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

  a {
    text-decoration: none;
  }
  .NavLink {
    color: ${ColorFolder.white};
  }

  .Nav {
    display: flex;
    justify-content: center;

    .NavList {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      /* padding-right: -10px; */
      /* border-left: 1px solid ${ColorFolder.white}; */
      /* border-right: 3px solid ${ColorFolder.white}; */

      .NavItem {
        text-decoration: none;
        margin-right: 20px;

        ::before {
          transform: scaleX(0);
          transform-origin: bottom right;
          color: ${ColorFolder.black};
        }

        :hover::before {
          transform: scaleX(1);
          transform-origin: bottom left;
          /* color: ${ColorFolder.black}; */
        }

        ::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          inset: 0 0 0 0;
          background: ${ColorFolder.darkgreen};
          z-index: -1;
          transition: transform 0.3s ease;
        }

        position: relative;
        /* font-size: 5rem; */

        html {
          block-size: 100%;
          inline-size: 100%;
        }

        body {
          min-block-size: 100%;
          min-inline-size: 100%;
          margin: 0;
          box-sizing: border-box;
          display: grid;
          place-content: center;
        }

        @media (orientation: landscape) {
          body {
            grid-auto-flow: column;
          }
        }
      }
    }
  }
`;

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
// `;

// const NavList = styled.ul`
//   display: flex;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   /* padding-right: -10px; */
//   /* border-left: 1px solid ${ColorFolder.white};
//   border-right: 3px solid ${ColorFolder.white}; */
// `;

// const NavItem = styled.li`
//   text-decoration: none;
//   margin-right: 20px;

//   ::before {
//     transform: scaleX(0);
//     transform-origin: bottom right;
//     color: ${ColorFolder.black};
//   }

//   :hover::before {
//     transform: scaleX(1);
//     transform-origin: bottom left;
//     /* color: ${ColorFolder.black}; */
//   }

//   ::before {
//     content: " ";
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     inset: 0 0 0 0;
//     background: ${ColorFolder.darkgreen};
//     z-index: -1;
//     transition: transform 0.3s ease;
//   }

//   position: relative;
//   /* font-size: 5rem; */

//   html {
//     block-size: 100%;
//     inline-size: 100%;
//   }

//   body {
//     min-block-size: 100%;
//     min-inline-size: 100%;
//     margin: 0;
//     box-sizing: border-box;
//     display: grid;
//     place-content: center;
//   }

//   @media (orientation: landscape) {
//     body {
//       grid-auto-flow: column;
//     }
//   }
// `;

// const NavLink = styled.a`
//   color: #fff;
//   text-decoration: none;
// `;

export default Headers;
