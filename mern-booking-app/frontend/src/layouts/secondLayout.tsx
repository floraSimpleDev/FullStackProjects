import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const Second = ({ children }: Props) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="container mx-auto py-10 px-40 flex-1">
        {children}
      </section>
      <Footer />
    </main>
  );
};

export default Second;
