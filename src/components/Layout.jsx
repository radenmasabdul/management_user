import React from "react";
import Content from "./Content";

const Layout = ({ children }) => {
  return (
    <>
      <Content />
      <div className="w-full h-full overflow-auto ">{children}</div>
    </>
  );
};

export default Layout;
