import { Card, Hero, LoadMore } from '@/components';
import React from 'react';
import { fetchAnime } from './action';

const HomePage = async () => {
  const data = await fetchAnime(1);
  return (
    <div>
      <Hero />
      <section className="px-6 py-9">
        <h1 className="lg:text-2xl font-semibold text-white">Explore Anime</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-6">
          {data}
        </div>

        <LoadMore/>
      </section>
    </div>
  );
};

export default HomePage;
