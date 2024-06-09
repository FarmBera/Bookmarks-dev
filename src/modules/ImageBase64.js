import React, { useState } from "react";

const ImageBase64 = ({ base64ImageData, size }) => {
  // 또는 const [base64ImageData, setBase64ImageData] = useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...");

  return (
    <img src={base64ImageData} width={size} height={size} alt="Base64 Image" />
  );
};

export default ImageBase64;
