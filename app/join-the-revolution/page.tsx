import React from 'react';
import JoinHero from "@/components/JoinHero";
import Revolution from '@/components/Revolution';
import IraOffers from "@/components/IraOffers";
import JoinMission from "@/components/JoinMission";

export default function JoinTheRevolutionPage() {
  return (
    <main className="min-h-screen bg-white">
      <JoinHero />
      <Revolution/>
      <IraOffers/>
      <JoinMission/>
      
      {/* We will add the next sections here (The Content/Paragraphs) */}
    </main>
  );
}