"use client";

import React, { useEffect } from 'react';
import useSWR from 'swr';
import Card from './card'; 
import { Product } from '../models/interfaces';

export default function Page() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR<Product[], Error>('api/products', fetcher);

  useEffect(() => {
    document.body.classList.add('home-body');

    return () => {
      document.body.classList.remove('home-body');
    };
  }, []);

  if (error) return <>Failed to load</>;
  if (isLoading) return <>Loading...</>;
  if (!data) return <>No data available</>;

  return (
    <section className="container py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Produtos</h1>
      {/* Ajustei o gap para 'gap-6' para reduzir o espaçamento entre os cards */}
      <article className="gap-80 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            category={product.category}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
          />
        ))}
      </article>
    </section>
  );
}
