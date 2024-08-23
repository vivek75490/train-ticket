import Header2 from "./common/Header2";
import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";

const MainDiv = () => {

  return (
    <>
      <Header2 />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainDiv;
