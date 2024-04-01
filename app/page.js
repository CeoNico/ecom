
import { Featured } from "./Components/Featured";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Navbar />
      <main className="flex-1 ">
        <Landing />
        <Featured />
        <AboutUs />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
       <Footer />
      </footer>
    </div>
  )
}

