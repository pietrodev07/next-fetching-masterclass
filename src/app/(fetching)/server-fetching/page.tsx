import { Product } from "@/types";
import { Card } from "@/components/card";
import { POSTS_API_BASE_URL } from "@/constants";

/* === PAGE DEFAULT BEHAVIOR === 
  - By default, this page uses Static Site Generation (SSG).
  - In production, SSG pages are rendered at build time.
  - In development, they behave like Server-Side Rendering (SSR) for debugging purposes.
*/

/* === TO ENABLE DYNAMIC RENDERING (SSR) ===
  - Use `export const dynamic = "force-dynamic";`
  - This forces the page to disable SSG and fetch fresh data on every request.
*/

/* === TO ENABLE INCREMENTAL STATIC REGENERATION (ISR) ===
  - Use `export const revalidate = 60;`
  - This regenerates the static page every 60 seconds after the initial build.
*/

/* === TO ENABLE STATIC SITE GENERATION (SSG) ===
  - This is the default behavior (no additional configuration needed).
  - In this mode, the page is pre-rendered at build time and remains static.
*/

const fetchProducts = async () => {
  // by default, no cache with ssr
  const res = await fetch(POSTS_API_BASE_URL, {
    // cache: "force-cache", // with this, the request is cached
    // next: { revalidate: 60 }, // with this, the request is uncached every 60 seconds
  });

  const data = await res.json();
  return data as Product[];
};

export default async function ServerFetchingPage() {
  const products = await fetchProducts();
  const randomNumber = Math.random();

  return (
    <main className="flex flex-col gap-5 p-5">
      <h1 className="text-3xl font-semibold">
        server fetching ({products.length}) - {randomNumber}
      </h1>

      <div className="flex flex-col gap-4">
        {products.map(({ id, title, body }) => (
          <Card key={id} title={title} body={body} />
        ))}
      </div>
    </main>
  );
}
