import React from 'react';
import AboutHero from '@/components/About/AboutHero';
import AboutStory from '@/components/About/AboutStory';
import AboutValues from '@/components/About/AboutValues';
import AboutStats from '@/components/About/AboutStats';
import BlogReview from '@/components/Blog/BlogReview';
import Customer from '@/components/Customer';
import FormSection from '@/components/FormSection';

export const metadata = {
  title: "About Us | Webstep Solutions",
  description: "Learn more about Webstep Solutions, our mission, values, and the team behind our digital excellence.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <BlogReview />
      <Customer />
      <FormSection />
    </main>
  );
}
