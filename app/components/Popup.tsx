"use client";

import React from "react";

type PopupProps = {
  open: boolean;
  children: React.ReactNode;
};

const Popup = ({ open, children }: PopupProps) => {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40 h-screen" />

      {/* Centered Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
