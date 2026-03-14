import { useEffect, useState } from "react";

function AuthModal({ isOpen, initialMode = "login", onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    setMode(initialMode);
    setNotice("");

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [initialMode, isOpen, onClose]);

  if (!isOpen) return null;

  const isLogin = mode === "login";

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice(
      isLogin
        ? "Login form is ready. Connect it to your backend authentication."
        : "Signup form is ready. Connect it to your backend."
    );
  };

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm text-black"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md overflow-hidden rounded-[10px] bg-white shadow-2xl border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="bg-slate-950 px-6 py-4 text-black">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600">
                Welcome
              </p>

              <h2 className="mt-1 text-xl font-bold">
                {isLogin ? "Login to your account" : "Create your account"}
              </h2>

              <p className="mt-1 text-xs text-slate-300">
                {isLogin
                  ? "Access your dashboard and services."
                  : "Create account to manage services."}
              </p>
            </div>

            <button
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 hover:border-teal-400 hover:text-black"
            >
              X
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="px-6 py-5">
          <form className="space-y-3" onSubmit={handleSubmit}>
            
            {!isLogin && (
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                  required
                />
              </div>
            )}

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                  required
                />
              </div>
            )}

            {/* Reference fields */}
            {!isLogin && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Reference Number
                  </label>
                  <input
                    type="text"
                    placeholder="Ref number"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-semibold text-slate-700">
                    Reference Name
                  </label>
                  <input
                    type="text"
                    placeholder="Ref name"
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                type="password"
                placeholder={isLogin ? "Enter password" : "Create password"}
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Confirm password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-teal-500"
                  required
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-3 w-3" />
                  Remember me
                </label>

                <button className="font-semibold text-teal-600 hover:text-teal-700">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-teal-600 py-2.5 text-sm font-semibold text-white hover:bg-teal-700"
            >
              {isLogin ? "Login" : "Create account"}
            </button>
          </form>

          {notice && (
            <p className="mt-3 rounded-xl bg-teal-50 px-3 py-2 text-xs text-teal-700">
              {notice}
            </p>
          )}

          <div className="mt-4 text-center text-xs text-slate-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
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