"use client";

import { useEffect, useState } from "react";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);

  // localStorage'dan fikrlarni olish
  useEffect(() => {
    const savedTodos = localStorage.getItem("ebooks-todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Fikrlarni localStorage'ga saqlash
  useEffect(() => {
    localStorage.setItem("ebooks-todos", JSON.stringify(todos));
  }, [todos]);

  // Fikr qo'shish
  const addTodo = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo.title,
          description: newTodo.description,
        }),
      });

      if (!response.ok) {
        throw new Error("Telegramga yuborilmadi");
      }

      setTodos((prev) => [...prev, newTodo]);

      setTitle("");
      setDescription("");

      alert("Fikringiz Telegram botga yuborildi! ✅");
    } catch (error) {
      console.error(error);
      alert("Telegramga yuborishda xatolik ❌");
    }
  };

  // Fikrni o'chirish
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-16">
      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold text-slate-900">
          Fikrlar
        </h2>

        <form onSubmit={addTodo} className="space-y-4">
          <input
            type="text"
            placeholder="Ismingiz"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-md border border-slate-300 px-3 py-3 text-base outline-none transition focus:border-slate-500"
          />

          <textarea
            placeholder="Fikringizni yozing..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-md border border-slate-300 px-3 py-3 text-base outline-none transition focus:border-slate-500"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-slate-800 py-3 font-semibold text-white transition hover:bg-slate-900"
          >
            Yuborish
          </button>
        </form>

        <div className="my-7 border-t border-slate-900"></div>

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

              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                O'chirish
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}