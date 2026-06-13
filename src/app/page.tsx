import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SummerOffer from "@/components/SummerOffer";
import AccountTypes from "@/components/AccountTypes";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <SummerOffer />
      <AccountTypes />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
