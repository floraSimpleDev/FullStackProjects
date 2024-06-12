import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 px-40 flex-1">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
