import React from 'react'
import Dropdown from './Dropdown'

export default function Header({title}) {
  return (
    <header>
      <h1>{title}</h1>
      <div>
        <span>[</span>
        <a href='/?lng=pt-br'class="link">pt-BR</a>
        <span> | </span>
        <a href='/?lng=en' class="link">en</a>
        <span> | </span>
        <a href='/?lng=es' class="link">es</a>
        <span>]</span>
      </div>
    </header>
  )
}
