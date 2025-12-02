import { Footer } from "~/components/footer";

export default function AboutPage() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef] text-gray-900">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-[5rem]">
          About <span className="text-pink-500">Chiikawa</span>
        </h1>
        <div className="max-w-4xl text-center">
          <p className="text-lg text-gray-700 mb-6">
            Chiikawa is a beloved character created by Nagano. Known for its adorable design and playful personality, Chiikawa has captured the hearts of fans worldwide.
          </p>
          <p className="text-lg text-gray-700">
            Our store is dedicated to bringing you the best Chiikawa merchandise, including plushies, accessories, and more. We source our products to ensure the highest quality for our customers.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">Quality Products</h3>
            <div className="text-lg">
              We carefully select and test all our Chiikawa items to ensure they meet our standards.
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">Fast Shipping</h3>
            <div className="text-lg">
              Get your Chiikawa goodies delivered quickly with our reliable shipping partners.
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold">Customer Service</h3>
            <div className="text-lg">
              Our team is here to help with any questions about your Chiikawa purchases.
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}
