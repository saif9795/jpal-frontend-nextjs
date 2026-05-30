import AboutSection from '@/components/web/AboutSection'
import ContactSection from '@/components/web/ContactSection'
import Footer from '@/components/web/Footer'
import Hero from '@/components/web/Hero'
import InvestorPartnerships from '@/components/web/InvestorPartnerships'
import MarketCardsSection from '@/components/web/MarketCardsSection'
import Navbar from '@/components/web/Navbar'
import PhasesSection from '@/components/web/PhasesSection'
import ProcessSection from '@/components/web/ProcessSection'
import StatsBar from '@/components/web/StatsBar'
import FadeInSection from '@/components/animations/FadeInSection'
import React from 'react'

const page = () => {
  return (
    <div id="home">
      <Navbar />
      <FadeInSection delay={0.05}>
        <Hero />
      </FadeInSection>
      <div className="scroll-mt-24">
        <FadeInSection delay={0.08}>
          <StatsBar />
        </FadeInSection>
      </div>
      <div id="about" className="scroll-mt-24">
        <FadeInSection>
          <AboutSection />
        </FadeInSection>
      </div>
      <div id="strategy" className="scroll-mt-24">
        <FadeInSection>
          <ProcessSection />
        </FadeInSection>
      </div>
      <div>
        <FadeInSection>
          <PhasesSection />
        </FadeInSection>
      </div>
       <div id="markets" className="scroll-mt-24">
        <FadeInSection>
          <MarketCardsSection/>
        </FadeInSection>
      </div>
      <div id="investors" className="scroll-mt-24">
        <FadeInSection>
          <InvestorPartnerships/>
        </FadeInSection>
      </div>
     
      <div id="contact" className="scroll-mt-24">
        <FadeInSection>
          <ContactSection/>
        </FadeInSection>
      </div>
      <div>
        <FadeInSection>
          <Footer/>
        </FadeInSection>
      </div>
    </div>
  )
}

export default page
