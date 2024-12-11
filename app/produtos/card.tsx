import React from "react";
import { Product } from "../models/interfaces";

export default function Card({
  title,
  category,
  price,
  description,
  image,
  rating,
}: Product) {
  return (
    <section className="bg-white border rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full w-60">
      {/* Imagem do Produto */}
      <article className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </article>

      {/* Corpo do Card */}
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 truncate">{title}</h2>
        <p className="text-sm text-blue-500 italic font-semibold pb-2">{category}</p>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p> {/* Limita o texto com line-clamp */}
      </article>

      {/* Rodapé do Card */}
      <article className="p-4 border-t flex justify-between items-center">
        <span className="text-lg font-semibold text-blue-600">{price.toFixed(2)}€</span>
        <article className="text-sm text-yellow-500 flex items-center">
          {rating.rate}⭐{" "}
          <span className="text-gray-400 ml-2">({rating.count})</span>
        </article>
      </article>
    </section>
  );
}
