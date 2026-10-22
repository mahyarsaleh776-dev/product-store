import { useState } from 'react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-bold text-blue-600">
          Product Store
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
          className="rounded p-2 text-xl md:hidden"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav
          className={`${isOpen ? 'flex' : 'hidden'} w-full flex-col gap-2 pt-4 md:flex md:w-auto md:flex-row md:gap-6 md:pt-0`}
        >
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium text-gray-700 hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;