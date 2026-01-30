"use client";

import { useState, useEffect } from "react";

const PASSWORD = "smotownlove";
const STORAGE_KEY = "smotown_authenticated";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const authenticated = sessionStorage.getItem(STORAGE_KEY) === "true";
    setIsAuthenticated(authenticated);
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="w-8 h-8 rounded-full border-2 border-sage border-t-transparent animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-sage-pale/20 to-teal-pale/20 px-6">
      <div className="max-w-sm w-full">
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 shadow-soft-lg border border-white/50 text-center">
          <div className="w-16 h-16 rounded-full bg-sage-pale flex items-center justify-center mx-auto mb-6">
            <div className="w-6 h-6 rounded-full bg-sage" />
          </div>
          <h1 className="text-2xl font-light text-charcoal mb-2">
            AnchorSail
          </h1>
          <p className="text-charcoal-light text-sm mb-8">
            Enter password to continue
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Password"
                className={`w-full px-4 py-3.5 rounded-xl border bg-white/50 text-charcoal text-center focus:outline-none transition-all duration-200 ${
                  error
                    ? "border-blush focus:border-blush"
                    : "border-warm-gray focus:border-sage focus:ring-2 focus:ring-sage/10"
                }`}
                autoFocus
              />
              {error && (
                <p className="mt-3 text-sm text-blush animate-fade-in">
                  Incorrect password
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-sage hover:bg-sage-dark text-white px-6 py-3.5 rounded-full text-sm tracking-wide transition-all duration-300 hover:shadow-soft"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
