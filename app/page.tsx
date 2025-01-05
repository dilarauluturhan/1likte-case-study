"use client";
import Box from "@/components/Box";
import { ArrowRightIcon, ChevronDown, Earth, Search } from "lucide-react";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const boxes = [
    {
      icon: <ArrowRightIcon className="w-6 h-6" />,
      title: "Başlarken",
      description: "Hesap bilgileri, paketleme ve partner programı",
      date: "13 yazı",
    },
    {
      icon: <ArrowRightIcon className="w-6 h-6" />,
      title: "Ürün Yönetimi",
      description: "Ürün ekleme, silme ve yönetme",
      date: "12 yazı",
    },
  ];

  const filteredBoxes = boxes.filter((box) =>
    box.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>1likte Eğitim</title>
      </Head>
      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-end justify-center">
            <p className="text-2xl font-bold mr-1">1likte </p>
            <p className="text-lg font-thin"> | Eğitim</p>
          </div>
          <div className="flex items-center justify-center space-x-12">
            <div className="flex items-center justify-center space-x-2">
              <Earth strokeWidth={1.5} />
              <p className="text-md">Türkçe</p>
              <ChevronDown />
            </div>
            <button className="text-md">Giriş Yap</button>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <p className="font-medium text-[28px] py-6">
            1likte Ekibinden Tavsiyeler ve Yanıtlar
          </p>
        </div>
        <div className="container mx-auto flex justify-between items-center relative w-full mb-6">
          <input
            type="text"
            placeholder="Yazılarda arayın..."
            className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#414141] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
            <Search strokeWidth={1.5} />
          </div>
        </div>
      </header>
      <main className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBoxes.map((box, index) => (
            <Box
              key={index}
              icon={box.icon}
              title={box.title}
              description={box.description}
              date={box.date}
            />
          ))}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
