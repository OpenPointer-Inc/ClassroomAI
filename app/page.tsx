import Footer from '@/components/Footer';
import CalltoAction from '@/components/CalltoAction';
import Navigation from '@/components/Navigation';
import Learning from '@/components/Learning';
import Faqs from '@/components/Faqs';
import Top from '@/components/Top';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Your content here */}
      <Navigation />
      <Top /> 
      <Learning />
      <Faqs />
      <CalltoAction />
      <Footer />
    </main>
  );
}
