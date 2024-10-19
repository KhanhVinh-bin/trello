"use client"
import React from 'react'
import Link from "next/link"
function Menu() {
  const menu = [
    { name: "Workplace", url: "/" },
    { name: "Recent", url: "/" },
  ]
  return (
    <div className="flex">
      {menu.map(
        ((item, index) => {
          return <Link
            key={index}
            href={item.url}
            className='p-4 text-2xl bg-blue-200'
          >
            {item.name}
          </Link>
        }
        ))}
    </div>
  )
}

export default Menu