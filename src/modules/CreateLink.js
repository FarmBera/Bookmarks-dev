import React, { useState, useEffect } from "react";
import "../styles/CreateLink.css";

/** 이미지 가져와서 return */
async function getImage(imgName) {
  const module = await import(`../icon/${imgName}.png`);
  return module.default;
}

function CreateLink({ name, size = 64 }) {
  const [img, setImg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const size = 30;

  useEffect(() => {
    /** 이미지 불러오는 과정*/
    async function fetchImage() {
      const imageData = await getImage(name);
      setImg(imageData);
      setIsLoading(false);
    }
    fetchImage();
  }, []);

  // 로딩 중일 때 표시할 내용
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {/* img가 null이 아닐 때만 렌더링 */}
      {img && <img className="icon" src={img} width={size} height={size} />}
      <p className="icon_name">{name}</p>
    </div>
  );
}

export default CreateLink;
