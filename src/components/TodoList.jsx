"use client";

import { useEffect, useState } from "react";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [todos, setTodos] = useState([]);

  // Sahifa ochilganda localStorage'dan ma'lumotlarni olish
  useEffect(() => {
    const savedTodos = localStorage.getItem("ebooks-todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    } else {
      setTodos([
        {
          id: 1,
          title: "JavaScript asoslari",
          description:
            "JavaScript dasturlash tilining asosiy tushunchalari, o'zgaruvchilar, funksiyalar va shart operatorlari",
        },
        {
          id: 2,
          title: "Tailwind CSS bilan ishlash",
          description:
            "Tailwind CSS yordamida zamonaviy va responsive web-sahifalarni tez yaratish usullari hamda...",
        },
        {
          id: 3,
          title: "Node.js va Express",
          description:
            "Node.js va Express framework yordamida REST API yaratish, routing, middleware va server bilan...",
        },
      ]);
    }
  }, []);

  // Har safar todos o'zgarganda localStorage'ga saqlash
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("ebooks-todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    setTodos((prev) => [...prev, newTodo]);

    setTitle("");
    setDescription("");
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">

        {/* Title */}
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Todo List
        </h2>

        {/* Form */}
        <form onSubmit={addTodo} className="space-y-4">

          <input
            type="text"
            placeholder="Sarlavha"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-3 text-base outline-none transition focus:border-slate-500"
          />

          <textarea
            placeholder="Tavsif"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-md border border-slate-300 px-3 py-3 text-base outline-none transition focus:border-slate-500"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-slate-800 py-3 font-semibold text-white transition hover:bg-slate-900"
          >
            Qo'shish
          </button>

        </form>

        {/* Chiziq */}
        <div className="my-7 border-t border-slate-900"></div>

        {/* Todo cards */}
        <div className="space-y-4">

          {todos.map((todo) => (
            <div
              key={todo.id}
              className="rounded-md border border-slate-200 bg-slate-50 p-4"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {todo.title}
              </h3>

              <p className="mt-1 text-[15px] leading-6 text-slate-600">
                {todo.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}