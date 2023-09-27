import { Outlet} from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const appLayoutStyle = {
  minHeight: "calc(100vh - 150px)",
};

const AppLayout = () => {
  
  return (
    <div>
      <Header></Header>
      <div style={appLayoutStyle}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AppLayout;
