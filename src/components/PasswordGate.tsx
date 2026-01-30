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
        <div className="text-charcoal-light">Loading...</div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="max-w-sm w-full text-center">
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
              className={`w-full px-4 py-3 border bg-transparent text-charcoal text-center focus:outline-none transition-colors ${
                error ? "border-tan" : "border-warm-gray focus:border-sage"
              }`}
              autoFocus
            />
            {error && (
              <p className="mt-3 text-sm text-tan">
                Incorrect password
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-sage hover:bg-sage-light text-white px-6 py-3 text-sm tracking-wide transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
