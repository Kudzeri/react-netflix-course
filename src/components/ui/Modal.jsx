import { useEffect } from "react";
import { createPortal } from "react-dom";

export function Modal({ children, onClose, title }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-[90%] max-w-xl bg-gray-600 dark:bg-gray-900 text-white p-6 rounded-2xl shadow-lg animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl hover:text-red-600 transition"
          aria-label="Закрыть"
        >
          X
        </button>
        <div className="flex">
          {children}
          <p className="mx-auto text-3xl text-center text-amber-400">{title}</p>
        </div>
      </div>
    </div>,
    document.body
  );
}
