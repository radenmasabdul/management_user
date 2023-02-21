import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full overflow-auto ">{children}</div>
    </>
  );
};

export default Layout;