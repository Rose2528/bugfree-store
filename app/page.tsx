import Link from "next/link";

const products = [
  {
    id: 1, name: "Wireless Headphones", price: 120, description: "Immersive sound and long battery life.",
    img: "https://i.postimg.cc/k4bjyRQp/Headphone.png"
  },
  {
    id: 2, name: "Smart Watch", price: 199, description: "Track health & notifications on the go.",
    img: "https://i.postimg.cc/KcVGz6jv/Smartwatch.png"
  },
  // ❌ Bug: broken link
  {
    id: 3, name: "Gaming Mouse", price: 59, description: "High DPI and ergonomic shape.",
    img: "https://i.postimg.cc/SKT6zSHP.png"
  },
];

export default function HomePage() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Featured products</h2>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="text-gray-500">{p.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-semibold">${p.price}</div>
                {/* ❌ Bug: checkout link passes wrong query param */}
                <Link href={`/checkout?product=${p.id}`} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  Buy now
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
