"use client";

import { useState } from "react";

// Pega aquí tu Access Key gratuita de https://web3forms.com
const ACCESS_KEY = "TU-ACCESS-KEY-DE-WEB3FORMS";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Nuevo mensaje desde tu portafolio",
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
      } else {
        setError("No se pudo enviar. Intenta de nuevo o escríbeme directo.");
      }
    } catch {
      setError("No se pudo enviar. Intenta de nuevo o escríbeme directo.");
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <p className="rounded border border-line bg-panel p-6 text-accent">
        Mensaje enviado. Te responderé a la brevedad.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm">
        <span className="text-mist">Nombre</span>
        <input
          type="text"
          name="name"
          required
          autoComplete="name"
          className="rounded border border-line bg-panel px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none"
          placeholder="Tu nombre"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="text-mist">Correo</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="rounded border border-line bg-panel px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none"
          placeholder="tu@correo.com"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="text-mist">Mensaje</span>
        <textarea
          name="message"
          required
          rows={5}
          className="resize-y rounded border border-line bg-panel px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-accent focus:outline-none"
          placeholder="Cuéntame de tu proyecto"
        />
      </label>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={sending}
        className="w-fit rounded bg-accent px-6 py-2.5 text-sm font-semibold text-abyss hover:opacity-90 disabled:opacity-50"
      >
        {sending ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
