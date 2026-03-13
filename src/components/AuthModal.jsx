import { useEffect, useState } from "react";

function AuthModal({ isOpen, initialMode = "login", onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    setMode(initialMode);
    setNotice("");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [initialMode, isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const isLogin = mode === "login";

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice(
      isLogin
        ? "Login form is ready. Connect it to your backend authentication to enable sign in."
        : "Signup form is ready. Connect it to your backend to create new accounts.",
    );
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm text-black"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-[10px] bg-white shadow-2xl border"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <div className="bg-slate-950 px-6 py-5 text-black">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600">
                Welcome
              </p>
              <h2 id="auth-modal-title" className="mt-2 text-2xl font-bold">
                {isLogin ? "Login to your account" : "Create your account"}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                {isLogin
                  ? "Access your dashboard, services, and candidate support updates."
                  : "Sign up to manage hiring requests, training details, and account access."}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-teal-400 hover:text-black"
              aria-label="Close authentication form"
            >
              X
            </button>
          </div>
        </div>


        <div className="px-6 py-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <div>
                <label htmlFor="signup-name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Full name
                </label>
                <input
                  id="signup-name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-teal-500"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="auth-email" className="mb-2 block text-sm font-semibold text-slate-700">
                Email address
              </label>
              <input
                id="auth-email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-teal-500"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="signup-phone" className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone number
                </label>
                <input
                  id="signup-phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-teal-500"
                  required
                />
              </div>
            )}

            <div>
              <label htmlFor="auth-password" className="mb-2 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                id="auth-password"
                type="password"
                placeholder={isLogin ? "Enter your password" : "Create a password"}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-teal-500"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label
                  htmlFor="signup-confirm-password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Confirm password
                </label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition-colors focus:border-teal-500"
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between gap-3 text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-teal-600" />
                  Remember me
                </label>
                <button type="button" className="font-semibold text-teal-600 hover:text-teal-700">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-teal-600 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-teal-700"
            >
              {isLogin ? "Login" : "Create account"}
            </button>
          </form>

          {notice && (
            <p className="mt-4 rounded-2xl bg-teal-50 px-4 py-3 text-sm text-teal-700">{notice}</p>
          )}

          <div className="mt-5 text-center text-sm text-slate-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(isLogin ? "signup" : "login");
                setNotice("");
              }}
              className="font-semibold text-teal-600 hover:text-teal-700"
            >
              {isLogin ? "Signup" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
