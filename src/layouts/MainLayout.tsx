import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";

interface Props{
    children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}


