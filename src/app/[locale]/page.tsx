import {useTranslations} from 'next-intl';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import VoiceInteraction from '@/components/VoiceInteraction';
import Memory from '@/components/Memory';
import EmotionalSupport from '@/components/EmotionalSupport';
import Comparison from '@/components/Comparison';
import PersonalGrowth from '@/components/PersonalGrowth';
import Privacy from '@/components/Privacy';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

type PageProps = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: PageProps) {
  const t = useTranslations();

  // Optional: Validierung der Locale
  if (!['en', 'de', 'fr', 'es', 'it', 'tr'].includes(locale)) {
    return <div>404 – Sprache nicht unterstützt</div>;
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <VoiceInteraction />
      <Memory />
      <EmotionalSupport />
      <Comparison />
      <PersonalGrowth />
      <Privacy />
      <Waitlist />
      <Footer />
    </main>
  );
} 