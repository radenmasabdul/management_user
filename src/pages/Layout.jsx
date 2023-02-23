import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <div className="w-full h-full overflow-auto dark:bg-slate-800">
        {children}
      </div>
    </>
  );
};

export default Layout;
