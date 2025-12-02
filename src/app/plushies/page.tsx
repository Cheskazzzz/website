"use client";

import Image from "next/image";
import { Button } from "~/components/ui/button";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Separator } from "~/components/ui/separator";
import { Footer } from "~/components/footer";

const plushies = [
  {
    id: 1,
    name: "Chiikawa Plush",
    description: "The main character! Soft and cuddly, perfect for hugs.",
    price: 1499,
    image: "/chiikawa_plush.png",
  },
  {
    id: 2,
    name: "Hachiware Plush",
    description: "Chiikawa's best friend, always ready for adventure.",
    price: 1449,
    image: "/hachiware_plush.png",
  },
  {
    id: 3,
    name: "Usagi Plush",
    description: "The sweet rabbit character, super soft and cute.",
    price: 1549,
    image: "/usagi_plush.png",
  },
  {
    id: 4,
    name: "Rakko Plush",
    description: "The tiny otter friend with a big personality.",
    price: 1399,
    image: "/rakko_plush.png",
  },
  {
    id: 5,
    name: "Kuri Manju Plush",
    description: "A sweet and squishy character plush perfect for collectors.",
    price: 1599,
    image: "/kurimanju_plush.png",
  },
  {
    id: 6,
    name: "Momonga Plush",
    description: "The adorable flying squirrel character in plush form.",
    price: 4999,
    image: "/momonga_plush.png",
  },
];

export default function PlushiesPage() {
  // addToCart writes products to localStorage under the key 'cart'
  const addToCart = (product: { id: number; name: string; price: number; image?: string }) => {
    try {
      const raw = localStorage.getItem("cart");
      const cart = raw ? JSON.parse(raw) as Array<any> : [];

      const existing = cart.find((p: any) => p.id === product.id);
      if (existing) {
        existing.qty = (existing.qty || 1) + 1;
      } else {
        cart.push({ ...product, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      // optional: dispatch a storage event so other tabs/components can react
      window.dispatchEvent(new StorageEvent("storage", { key: "cart", newValue: JSON.stringify(cart) }));
    } catch (err) {
      console.error("Failed to add to cart", err);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f5ede5] text-[#3d2817]">
      <div className="w-full px-6 py-16">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight text-[#3d2817] sm:text-7xl mb-6">
            Chiikawa <span className="text-[#f5a5b8]">Plushies Shop</span>
          </h1>
          <p className="text-xl text-[#7d6b60] max-w-3xl">
            Discover our adorable collection of Chiikawa plushies! Each plush is crafted with care and attention to detail. From the main character to all their friends, find your perfect companion today.
          </p>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plushies.map((plushie) => (
              <div
                key={plushie.id}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col hover:scale-105"
              >
                {/* Image Container */}
                <AspectRatio className="w-full bg-[#f5ede5]" ratio={1}>
                  {plushie.image ? (
                    <Image
                      src={plushie.image}
                      alt={plushie.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-[#c9b4a8]">{plushie.name}</div>
                  )}
                </AspectRatio>

                {/* Content */}
                <div className="flex flex-col gap-4 p-6 flex-grow">
                  <h3 className="text-2xl font-bold text-[#3d2817]">
                    {plushie.name}
                  </h3>
                  <p className="text-[#7d6b60] text-base flex-grow">
                    {plushie.description}
                  </p>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#e8d4c8]">
                    <div className="text-3xl font-bold text-[#f5a5b8]">
                      ₱{plushie.price.toFixed(2)}
                    </div>
                    <Button
                      onClick={() => addToCart({ id: plushie.id, name: plushie.name, price: plushie.price, image: plushie.image })}
                      className="bg-[#f5a5b8] hover:bg-[#f08aad] text-white rounded-full"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto mt-16 text-center">
          <Separator className="my-6 bg-[#e8d4c8]" />
          <p className="text-[#7d6b60] text-lg">
            More plushies coming soon! Stay tuned for new releases and exclusive limited editions.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
