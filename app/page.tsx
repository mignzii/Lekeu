import Demo from "@/components/Demo";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Onboarding from "@/components/Onboarding";
import Service from "@/components/Service";
import Booking from "@/components/booking";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen  bg-[#DBDBDB] flex-col font-Urbanist overflow-hidden ">
    <Navbar />

    <Hero />
     
     <Service />
    <Experience />
    <Onboarding />
    <Mission />
    <Demo />
    <Booking />
    <Footer />
    </main>
  );
}
