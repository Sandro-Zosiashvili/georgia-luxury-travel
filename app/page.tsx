"use client";

import { BlogInsights } from "@/components/BlogInsights/BlogInsights";
import { ContactSection } from "@/components/ContactSection/ContactSection";
import { Destinations } from "@/components/Destinations/Destinations";
import { FAQ } from "@/components/FAQ/FAQ";
import { FinalCTA } from "@/components/FinalCTA/FinalCTA";
import { Footer } from "@/components/Footer/Footer";
import { Gallery } from "@/components/Gallery/Gallery";
import { Hero } from "@/components/Hero/Hero";
import { Itinerary } from "@/components/Itinerary/Itinerary";
import { Navbar } from "@/components/Navbar/Navbar";
import { Newsletter } from "@/components/Newsletter/Newsletter";
import { PreparationGuide } from "@/components/PreparationGuide/PreparationGuide";
import { Preloader } from "@/components/Preloader/Preloader";
import { StorySection } from "@/components/StorySection/StorySection";
import { Testimonials } from "@/components/Testimonials/Testimonials";
import { TourExplorer } from "@/components/TourExplorer/TourExplorer";
import { TourPreview } from "@/components/TourPreview/TourPreview";
import { TrustBar } from "@/components/TrustBar/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs/WhyChooseUs";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();

  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Destinations />
        <TourExplorer />
        <WhyChooseUs />
        <StorySection />
        <TourPreview />
        <Itinerary />
        <Testimonials />
        <Gallery />
        <PreparationGuide />
        <FAQ />
        <BlogInsights />
        <ContactSection />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
