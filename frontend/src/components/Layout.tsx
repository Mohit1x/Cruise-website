// Layout.tsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Footer } from "./Footer";
import { MobileFooter } from "./MobileFooter";

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen pb-16">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileFooter />
    </div>
  );
};

export default Layout;
