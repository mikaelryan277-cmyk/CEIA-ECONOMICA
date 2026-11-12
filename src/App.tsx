/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Emotional from './components/Emotional';
import Benefits from './components/Benefits';
import Preview from './components/Preview';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      <main className="max-w-[520px] mx-auto bg-[#FFF9F0]">
        <Hero />
        <PainPoints />
        <Emotional />
        <Benefits />
        <Preview />
        <TargetAudience />
        <Testimonials />
        <Plans />
        <Guarantee />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </div>
  );
}
