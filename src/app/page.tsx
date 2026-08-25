import Header from '@/widgets/Header/Header';
import Hero from '@/widgets/Hero/Hero';
import Clients from '@/widgets/Clients/Clients';
import Metrics from '@/widgets/Metrics/Metrics';
import Features from '@/widgets/Features/Features';
import BusinessFormats from '@/widgets/BusinessFormats/BusinessFormats';
import Cases from '@/widgets/Cases/Cases';
import PriceCalculator from '@/widgets/PriceCalculator/PriceCalculator';
import FAQ from '@/widgets/FAQ/FAQ';
import CTA from '@/widgets/CTA/CTA';
import Footer from '@/widgets/Footer/Footer';
import DemoModal from '@/features/modal/ui/DemoModal';

export default function HomePage() {
    return (
        <main>
            <Header />
            <Hero />
            <Clients />
            <Metrics />
            <Features />
            <BusinessFormats />
            <Cases />
            <PriceCalculator />
            <FAQ />
            <CTA />
            <Footer />
            <DemoModal />
        </main>
    );
}
