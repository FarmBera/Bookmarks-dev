import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ColorFolder from "../styles/colors";

/** 이미지 가져와서 return */
async function getImage(imgName) {
  const module = await import(`../icon/${imgName}.png`);
  return module.default;
}

const loadingImg = await getImage("Loading");

function CreateLink({ name, domain, icon, size = 64 }) {
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /** 이미지 불러오는 과정*/
    async function fetchImage(name) {
      try {
        const imageData = await getImage(name);
        if (imageData) setImg(imageData);
      } catch (e) {
        const tempImage = await getImage("Noicon2");
        setImg(tempImage);
      }
      setIsLoading(false);
    }
    if (icon) fetchImage(icon);
    else fetchImage(name);
  }, []);

  // 로딩 중일 때 표시할 내용
  if (isLoading) {
    return (
      <ContainerLink color={ColorFolder.white}>
        <div className="container">
          <StyledLink color={ColorFolder.white}>
            <a href={domain} target="_blank" rel="noreferrer">
              <img
                className="icon"
                src={loadingImg}
                width={size}
                height={size}
                alt="icon"
              />
            </a>
            <p className="icon_name">{name}</p>
          </StyledLink>
        </div>
      </ContainerLink>
    );
  }

  return (
    <ContainerLink color={ColorFolder.gray}>
      <div>
        <StyledLink>
          <a
            className="container"
            href={domain}
            target="_blank"
            rel="noreferrer"
          >
            {/* img가 null이 아닐 때만 렌더링 */}
            {img && (
              <img
                className="icon"
                src={img}
                width={size}
                height={size}
                alt="icon"
              />
            )}
            <p className="icon_name">{name}</p>
          </a>
        </StyledLink>
      </div>
    </ContainerLink>
  );
}

const ContainerLink = styled.div`
  /* text-decoration: none; */
  width: 160px;
  height: auto;
  padding-top: 20px;
  border: 1px solid ${(props) => props.color || ColorFolder.white};
`;

const StyledLink = styled.a`
  /* text-decoration: none; */
  color: ${(props) => props.color || ColorFolder.white};

  & p {
    /* text-decoration: none; */
    color: ${(props) => props.color || ColorFolder.white};
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
`;

export default CreateLink;
