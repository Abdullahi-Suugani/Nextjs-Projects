interface Product {
  id: number;
  title: string;
}
interface ProductsResponse {
  products: Product[];
}

async function getProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products", {
    next: { revalidate: 60 },
  });
  if (!response.ok) throw new Error("Unable to load products.");
  const data: ProductsResponse = await response.json();
  return data.products.slice(0, 5);
}

export default async function ProductsPage() {
  try {
    const products = await getProducts();
    return (
      <section className="card">
        <h1>Products</h1>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </section>
    );
  } catch {
    return (
      <section className="card">
        <h1>Products</h1>
        <p role="alert">
          We couldn’t load the products right now. Please try again later.
        </p>
      </section>
    );
  }
}
