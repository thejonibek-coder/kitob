"use client";

import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(undefined);

const translations = {
  uz: {
    home: "Bosh sahifa",
    books: "Kitoblar",
    categories: "Kategoriyalar",
    favorites: "Sevimlilar",
    about: "Biz haqimizda",
    search: "Qidirish",
    explore: "Kitoblarni ko‘rish",
    startReading: "O‘qishni boshlash",
    trending: "Hozir mashhur kitoblar",
  },

  en: {
    home: "Home",
    books: "Books",
    categories: "Categories",
    favorites: "Favorites",
    about: "About",
    search: "Search",
    explore: "Explore Books",
    startReading: "Start Reading",
    trending: "Trending Now",
  },

  ru: {
    home: "Главная",
    books: "Книги",
    categories: "Категории",
    favorites: "Избранное",
    about: "О нас",
    search: "Поиск",
    explore: "Посмотреть книги",
    startReading: "Начать читать",
    trending: "Популярные книги",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("uz");

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const t = (key) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}