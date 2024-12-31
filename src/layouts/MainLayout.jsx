import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="pb-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-284px)] bg-base-200">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
