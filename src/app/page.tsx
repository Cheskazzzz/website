import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Footer } from "~/components/footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat py-20 sm:py-24" style={{ backgroundImage: "url('/background.jpeg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to <span className="text-[#f5a5b8]">Chiikawa</span> Store
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90">
              Discover adorable Chiikawa plushies, accessories, and merchandise. Bring home your favorite characters today!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/about">Shop Now</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#faf7f2] to-[#f5ede5]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#3d2817] sm:text-4xl">
              Why Choose Chiikawa Store?
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#7d6b60]">
              We offer the best selection of authentic Chiikawa products with fast shipping and excellent customer service.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#3d2817]">
                  Plushies & Toys
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7d6b60]">
                  <p className="flex-auto">
                    High-quality plushies of Chiikawa and friends, perfect for collectors and fans.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#3d2817]">
                  Fast Shipping
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#7d6b60]">
                  <p className="flex-auto">
                    Quick and reliable delivery to get your Chiikawa items as soon as possible.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
