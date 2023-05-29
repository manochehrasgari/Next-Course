import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="px-4 container mx-auto xl:max-w-screen-xl">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
