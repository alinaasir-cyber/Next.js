type Product = {
  id: number;
  title: string;
};

type ProductsResponse = {
  products: Product[];
};

export default async function ProductsPage() {
  const response = await fetch("https://dummyjson.com/products?limit=5", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = (await response.json()) as ProductsResponse;

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-3xl font-bold text-sky-300">
          Products (Server Component)
        </h1>
        <p className="mb-6 text-slate-300">
          The first five titles are fetched from DummyJSON on the server.
        </p>
        <ul className="space-y-3">
          {data.products.slice(0, 5).map((product) => (
            <li
              key={product.id}
              className="rounded-lg border border-slate-700 bg-slate-900 px-5 py-4"
            >
              {product.title}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
