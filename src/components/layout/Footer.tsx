const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-gray-600 md:flex-row">
        <p>&copy; {year} Product Store. All rights reserved.</p>

        <ul className="flex gap-4">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#products" className="hover:text-blue-600">Products</a></li>
          <li>
            <a
              href="https://dummyjson.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600"
            >
              DummyJSON API
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;