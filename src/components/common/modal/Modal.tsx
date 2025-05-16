import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { ModalI } from "./ModalT";

const Modal: React.FC<ModalI> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "medium",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const portalElement = document.getElementById("portal");
  if (!portalElement) return null;

  const sizeClasses = {
    small: "max-w-md w-full",
    medium: "max-w-lg w-full",
    large: "max-w-2xl w-full",
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn px-4"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={`${sizeClasses[size]} bg-dark-bg rounded-lg p-4 shadow-xl animate-slideIn flex flex-col gap-4`}
      >
        <div className="flex items-center justify-between ">
          {title && <h2 className="text-xl font-semibold ">{title}</h2>}
          <button
            className="text-white  text-2xl font-light p-2 cursor-pointer"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="max-h-[calc(90vh-100px)] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    portalElement
  );
};

export default Modal;
