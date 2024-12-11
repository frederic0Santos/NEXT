import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-5 bg-transparent text-white font-bold">
      <h1 className="mb-4 text-4xl text-center">React & Next.js</h1>
      <nav className="w-full flex justify-center">
        <ul className="flex space-x-8">
          <li className="transition-transform duration-200 hover:scale-105">
            <Link href="/" className="text-white no-underline hover:underline">
              Home →
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link href="/produtos" className="text-white no-underline hover:underline">
              Produtos →
            </Link>
          </li>
          <li className="transition-transform duration-200 hover:scale-105">
            <Link href="/tecnologias" className="text-white no-underline hover:underline">
              Tecnologias →
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
