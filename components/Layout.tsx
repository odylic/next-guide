import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>Home</nav>
      {children}
    </div>
  );
}

export default Layout;
