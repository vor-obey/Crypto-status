import React, {useRef} from 'react';
import { Space, Typography } from "antd";
import { Link } from "react-router-dom";

const Footer = () => {
  const ref = useRef();
  console.log(ref)
  return (
    <>
      <Typography.Title
        level={5}
        style={{ color: "#ffffff", textAlign: "center" }}
      >
        Crypto state <br />
        All right reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </>
  );
};

export { Footer };
