import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <div className="pt-[70px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
export default App;
