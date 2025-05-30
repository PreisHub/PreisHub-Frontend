import React from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
