"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Separator } from "~/components/ui/separator";
import { Footer } from "~/components/footer";

type CartItem = {
  id: number;
  name: string;
  price: number;
  image?: string;
  qty: number;
};

export default function CartPage() {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem("cart");
        const cart = raw ? (JSON.parse(raw) as CartItem[]) : [];
        setItems(cart);
      } catch (err) {
        console.error("Failed to read cart", err);
        setItems([]);
      }
    };

    load();

    const onStorage = (e: StorageEvent) => {
      if (e.key === "cart") load();
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const removeItem = (id: number) => {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    localStorage.setItem("cart", JSON.stringify(next));
    window.dispatchEvent(new StorageEvent("storage", { key: "cart", newValue: JSON.stringify(next) }));
  };

  const changeQty = (id: number, qty: number) => {
    const next = items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
    setItems(next);
    localStorage.setItem("cart", JSON.stringify(next));
    window.dispatchEvent(new StorageEvent("storage", { key: "cart", newValue: JSON.stringify(next) }));
  };

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  const handleCheckout = () => {
    // Clear the cart
    localStorage.removeItem("cart");
    window.dispatchEvent(new StorageEvent("storage", { key: "cart", newValue: null }));
    // Navigate to checkout success page
    router.push("/checkout");
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#faf7f2] to-[#f5ede5] text-[#3d2817] py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-6 text-[#f5a5b8]">Your Cart</h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
            <p className="text-lg text-[#7d6b60] mb-4">Your cart is empty.</p>
            <Link href="/plushies">
              <Button className="bg-[#f5a5b8] hover:bg-[#f08aad] text-white rounded-full">Browse Plushies</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <ul className="divide-y divide-[#e8d4c8]">
                {items.map((item) => (
                  <li key={item.id} className="flex items-center gap-4 py-4">
                    <div className="w-24 h-24 bg-[#f5ede5] rounded-2xl overflow-hidden relative">
                      <AspectRatio ratio={1} className="w-24 h-24">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} fill className="object-cover" />
                        ) : (
                          <div className="flex items-center justify-center h-full text-[#c9b4a8]">{item.name}</div>
                        )}
                      </AspectRatio>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-lg text-[#3d2817]">{item.name}</div>
                      <div className="text-[#f5a5b8] font-semibold">₱{item.price.toFixed(2)}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min={1}
                        value={item.qty}
                        onChange={(e) => changeQty(item.id, Number(e.target.value))}
                        className="w-20 border border-[#e8d4c8] rounded-lg px-2 py-1 bg-white text-[#3d2817]"
                      />
                      <button onClick={() => removeItem(item.id)} className="text-sm text-[#e8516e] hover:text-[#d4344f] font-semibold">Remove</button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Separator className="bg-[#e8d4c8]" />

            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-[#3d2817]">Subtotal</div>
              <div className="text-2xl font-bold text-[#f5a5b8]">₱{subtotal.toFixed(2)}</div>
            </div>

            <div className="flex justify-end">
              <Button onClick={handleCheckout} className="bg-[#f5a5b8] hover:bg-[#f08aad] text-white rounded-full px-8 py-3">Proceed to Checkout</Button>
            </div>
          </div>
        )}
      </div>
    </main>
    <Footer />
    </>
  );
}