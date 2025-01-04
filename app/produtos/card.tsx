import React, { useState } from "react";
import { CardProps } from "../models/interfaces";


export default function Card({ addToCart, ... props }: CardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(props);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);
  };

  return (
    <section className="bg-white border rounded-xl shadow-xl hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 flex flex-col">
      <article className="overflow-hidden rounded-t-lx pt-10">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-36 object-contain"
        />
      </article>
      <article className="p-4 flex-grow">
        <h2 className="text-lg font-bold text-red-300">
          {props.title}
        </h2>
        <p className="text-sm text-gray-900 italic font-bold pb-2">
          {props.category}
        </p>
        <p className="text-sm text-gray-700">
          {props.description}
        </p>
      </article>
      <article className="p-4 border-t flex justify-between items-center">
        <span className="text-lg font-bold text-red-400">
          {props.price.toFixed(2)}€
        </span>
        <article className="text-sm text-yellow-500 flex items-center">
          {props.rating.rate}⭐{" "}
          <span className="text-gray-400 ml-2">({props.rating.count})</span>
        </article>
      </article>
      <div className="px-4 py-2 flex justify-center">
        <button
          onClick={handleAddToCart}
          className={`w-full max-w-xs py-2 rounded transition-colors duration-200
            bg-green-400 hover:bg-green-600 text-white`}
        >
          {isAdded ? 'Adicionado' : 'Adicionar ao Carrinho'}
        </button>
        </div>
    </section>
  );
}