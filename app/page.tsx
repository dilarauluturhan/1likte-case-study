"use client";

import { useState } from "react";
import Head from "next/head";
import CustomBox from "@/components/CustomBox";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const boxes = [
    {
      icon: "arrow-right",
      title: "Başlarken",
      description: "Hesap bilgileri, paketleme ve partner programı",
      date: "13 yazı",
    },
    {
      icon: "box",
      title: "Ürün Yönetimi",
      description: "Ürün ekleme, silme ve yönetme",
      date: "13 yazı",
    },
    {
      icon: "delivery",
      title: "Sipariş Yönetimi",
      description: "Kargo operasyonu, iptaller ve faturalandırma",
      date: "13 yazı",
    },
    {
      icon: "arrow-left",
      title: "İade Yönetimi",
      description: "Talepler, ihtilaflı iadeler ve süreçler",
      date: "13 yazı",
    },
    {
      icon: "truck",
      title: "Kargo Ayarları",
      description: "Anlaşmalar ve gönderim işlemleri",
      date: "13 yazı",
    },
    {
      icon: "discount",
      title: "İndirim Yönetimi",
      description: "İndirim tipleri, yönetimleri ve avantajları",
      date: "13 yazı",
    },
    {
      icon: "copy",
      title: "Kampanya Yönetimi",
      description: "Kampanyaya ürün ekleme ve kuralları",
      date: "13 yazı",
    },
    {
      icon: "screen",
      title: "Mağaza Kişiselleştirme",
      description: "Kişiselleştirilmiş kullanımı keşfedin",
      date: "13 yazı",
    },
    {
      icon: "ad",
      title: "Reklam",
      description: "Öne çıkmak için ihtiyaç duyduğunuz bilgilere erişin",
      date: "13 yazı",
    },
    {
      icon: "statistic",
      title: "Raporlar ve Hesap Sağlığı",
      description: "Satışlarınız ve hesap durumunuz hakkında bilgi alın",
      date: "13 yazı",
    },
    {
      icon: "mini",
      title: "Mini",
      description: "Ürünleriniz için Mini içerik kullanımı",
      date: "13 yazı",
    },
    {
      icon: "buying",
      title: "Grup Alışverişi",
      description: "Oluşturma, yönetme ve kurallar hakkında",
      date: "13 yazı",
    },
    {
      icon: "layers",
      title: "Finans",
      description:
        "Detaylı fatura ve ödeme bilgilerine ulaşarak süreçleri kolaylaştırın",
      date: "13 yazı",
    },
  ];

  const filteredBoxes = boxes.filter((box) =>
    box.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>1likte Eğitim</title>
      </Head>
      <header className="bg-black text-white p-4">
        <div className="container mx-auto max-w-5xl flex justify-between items-center">
          <div className="flex items-end justify-center">
            <p className="text-2xl font-bold mr-1">1likte </p>
            <p className="text-lg font-thin"> | Eğitim</p>
          </div>
          <div className="hidden lg:flex items-center justify-center space-x-12">
            <div className="flex items-center justify-center space-x-2">
              <img src="/icons/earth.svg" alt="Earth" />
              <p className="text-md">Türkçe</p>
              <img src="/icons/down.svg" alt="Down" />
            </div>
            <button className="text-md">Giriş Yap</button>
          </div>
          {/* hamburger menü */}
          <div className="lg:hidden">
            {/* figma'daki hamburger menü ikonu export edilemediği için elle yazdım */}
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <div className="w-6 h-5 flex flex-col justify-between items-end cursor-pointer">
                <span className="block w-full h-[3px] bg-white rounded"></span>
                <span className="block w-3/4 h-[3px] bg-white rounded"></span>
                <span className="block w-full h-[3px] bg-white rounded"></span>
              </div>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-black text-white mt-4 p-4 rounded-lg space-y-4 flex flex-col items-center justify-center fixed top-10 left-0 w-full h-48 z-50">
            <div className="flex items-center space-x-2">
              <img src="/icons/earth.svg" alt="Earth" />
              <p className="text-md">Türkçe</p>
              <img src="/icons/down.svg" alt="Down" />
            </div>
            <button className="text-md w-full">Giriş Yap</button>
          </div>
        )}

        <div className="container mx-auto max-w-5xl  flex justify-between items-center">
          <p className="font-medium text-[28px] py-6">
            1likte Ekibinden Tavsiyeler ve Yanıtlar
          </p>
        </div>
        <div className="container mx-auto max-w-5xl  flex justify-between items-center relative w-full mb-6">
          <input
            type="text"
            placeholder="Yazılarda arayın..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-4 pl-12 border-none rounded-[10px] bg-[#414141] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-gray-600"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6">
            <img src="/icons/search.svg" alt="Search" />
          </div>
        </div>
      </header>
      <main className="container mx-auto max-w-5xl flex-grow">
        {filteredBoxes.length === 0 ? (
          <p className="text-center text-2xl text-gray-500 my-32">
            Aradığınız kategori bulunamamıştır.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {filteredBoxes.map((box, index) => (
              <CustomBox
                key={index}
                icon={box.icon}
                title={box.title}
                description={box.description}
                date={box.date}
              />
            ))}
          </div>
        )}
      </main>
      <footer className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center pt-24 pb-12">
          <img src="/icons/group.svg" alt="logo" />
          <img src="/icons/birlikte.svg" alt="1likte" />
        </div>
        <div className="flex items-center justify-center space-x-5 pb-7">
          <p className="text-[#6B7280] text-[14px] font-normal">
            Görüşlerini Bildir
          </p>
          <p className="text-[#6B7280] text-[14px] font-normal">Hata Bildir</p>
        </div>
        <div className="flex items-center justify-center space-x-5 pb-14 lg:pb-7">
          <img src="/icons/X.svg" alt="x" />
          <img src="/icons/Instagram.svg" alt="instagram" />
          <img src="/icons/LinkedIn.svg" alt="linkedin" />
        </div>
      </footer>
    </div>
  );
}
