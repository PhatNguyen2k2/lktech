import React from 'react';
import Banner from '@/components/Banner/banner'
import Introduce from '@/components/Introduce/introduce'
import PartnerShow from '@/components/Partners/partnerShow';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <Introduce />
      <PartnerShow />
    </main>
  )
}