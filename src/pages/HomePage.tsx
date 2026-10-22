const HomePage = () => {
  return (
    <section id="home" className="scroll-mt-20 py-12 text-center md:py-20">
      <h1 className="text-3xl font-bold text-gray-900 md:text-5xl">
        Welcome to Product Store
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-gray-600">
        Browse our latest products with prices and ratings.
      </p>
      <a
        href="#products"
        className="mt-6 inline-block rounded bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Shop now
      </a>
    </section>
  );
};

export default HomePage;