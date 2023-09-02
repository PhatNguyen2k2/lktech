import React from 'react';
import Banner from '@/components/Banner/banner'
import Introduce from '@/components/Introduce/introduce'
import PartnerShow from '@/components/Partners/partnerShow';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Banner />
      <Introduce />
      <PartnerShow />
    </main>
  )
}