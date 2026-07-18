"use client";

export default function ServicesCatalogue() {
  return (
    <section
      id="catalogue"
      className="bg-[#faf7f2] py-24"
    >
        const categories = [
  {
    title: "Facials",
    image: "/services/facials.jpg",
    services: 13,
    price: "Starts from ₹600",
  },
  {
    title: "Hair Cuts",
    image: "/services/hair-cut.jpg",
    services: 6,
    price: "Starts from ₹200",
  },
  {
    title: "Hair Colour",
    image: "/services/hair-colour.jpg",
    services: 8,
    price: "Starts from ₹800",
  },
  {
    title: "Hair Spa",
    image: "/services/hair-spa.jpg",
    services: 7,
    price: "Starts from ₹800",
  },
  {
    title: "Waxing",
    image: "/services/waxing.jpg",
    services: 17,
    price: "Starts from ₹80",
  },
  {
    title: "Makeup",
    image: "/services/makeup.jpg",
    services: 3,
    price: "Starts from ₹4500",
  },
];

return (
  <section id="catalogue" className="bg-[#faf7f2] py-24">
    <div className="mx-auto max-w-7xl px-6">

      <div className="text-center">
        <p className="uppercase tracking-[0.4em] text-yellow-600">
          OUR COMPLETE MENU
        </p>

        <h2 className="mt-4 text-5xl font-bold">
          Premium Beauty Services
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-600">
          Discover luxurious beauty treatments designed to
          enhance your confidence and elegance.
        </p>
      </div>

      <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {categories.map((category) => (

          <div
            key={category.title}
            className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >

            <img
              src={category.image}
              alt={category.title}
              className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {category.services} Premium Services
              </p>

              <p className="mt-2 font-semibold text-yellow-600">
                {category.price}
              </p>

              <button
                className="mt-8 rounded-full bg-yellow-600 px-6 py-3 font-semibold text-white transition hover:bg-yellow-700"
              >
                View Services
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  </section>
);
        <div className="text-center">

          <p className="uppercase tracking-[0.4em] text-yellow-600">
            OUR COMPLETE MENU
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Premium Beauty Services
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Discover luxurious beauty treatments designed to
            enhance your confidence and elegance.
          </p>

        </div>

      </div>
    </section>
  );
}