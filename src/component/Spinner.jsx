import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const style = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const Spinner = () => {
  return (
    <div style={style}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export { Spinner };
