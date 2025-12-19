"use client";

import React, { useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Button from "../Button";

type Props = {
  onSuccess?: () => void;
  resetKey?: number;
};

const ContactPage = ({ onSuccess, resetKey }: Props) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // 🔥 Dynamic children ages
  const [childAges, setChildAges] = useState<string[]>([""]);

  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
  }>({});

  const [loading, setLoading] = useState(false);

  // 🔄 Reset form
  useEffect(() => {
    setForm({ name: "", phone: "", email: "" });
    setChildAges([""]);
    setErrors({});
  }, [resetKey]);

  // ================= VALIDATION =================
  const validate = () => {
    const newErrors: typeof errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Enter a valid email address";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      await addDoc(collection(db, "waitlist"), {
        name: form.name,
        phone: form.phone,
        email: form.email,
        childAges: childAges.filter((age) => age.trim() !== ""),
        createdAt: serverTimestamp(),
      });

      onSuccess?.();
    } catch (error) {
      console.error("Firestore error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ================= ADD CHILD =================
  const addChild = () => {
    setChildAges([...childAges, ""]);
  };

  return (
   <form id="contact-form"
  onSubmit={handleSubmit}
  className="rounded-3xl shadow-xl p-6 w-full max-w-150 space-y-4 border-2 border-[#f6a81c]
             bg-linear-to-b from-[#C5EEEE] to-[#40C7C7] overflow-hidden"
>


      {/* Heading */}
      <div className="text-center lg:mb-0 mb-5">
        <h4 className=" font-serif font-bold black-text ">
          Join the Wisbo Family!
        </h4>
        {/* <p className="black-text">Fill in your details</p> */}
      </div>

      {/* Name */}
      <div>
        <label className="block black-text font-medium mb-1">Full Name</label>
        <input
          className="w-full rounded-[30px] px-4 py-3
           bg-white border-2 border-[#2cbec3]
           focus:border-[#f6a81c] focus:ring-0
           outline-none transition-colors duration-200 black-text"

          placeholder="Enter your name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block black-text font-medium mb-1">Phone Number</label>
        <input
           className="w-full rounded-[30px] px-4 py-3
           bg-white border-2 border-[#2cbec3]
           focus:border-[#f6a81c] focus:ring-0
           outline-none transition-colors duration-200 black-text"
          placeholder="10-digit mobile number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block black-text font-medium mb-1">Email Address</label>
        <input
          className="w-full rounded-[30px] px-4 py-3
           bg-white border-2 border-[#2cbec3]
           focus:border-[#f6a81c] focus:ring-0
           outline-none transition-colors duration-200 black-text"
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      {/* 🔥 Child Ages */}
      <div className="space-y-3">
        <label className="block black-text font-medium">Age of Child (optional)</label>

        {childAges.map((age, index) => (
          <div key={index} className="flex items-center gap-3">
            <input
               className="w-full flex-1 rounded-[30px] px-4 py-3
           bg-white border-2 border-[#2cbec3]
           focus:border-[#f6a81c] focus:ring-0
           outline-none transition-colors duration-200 black-text"
              placeholder={`Child ${index + 1} age`}
              value={age}
              onChange={(e) => {
                const updated = [...childAges];
                updated[index] = e.target.value;
                setChildAges(updated);
              }}
            />

            {/* ➕ Button only on last child */}
            {index === childAges.length - 1 && (
              <button
              style={{
    // transformOrigin: "1.25em 50%",
    background: "linear-gradient(90deg, #FF6600 13%, #F9A91E 100%)",
  }}
                type="button"
                onClick={addChild}
                className="w-10 h-10 rounded-full text-white text-xl flex items-center justify-center font-bold"
              >
                +
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
     <div className="flex justify-center">
  <Button
    type="submit"
    disabled={loading}
    className="w-full sm:w-auto px-6"
  >
    {loading ? "Submitting..." : "Join the Waitlist"}
  </Button>
</div>


    </form>
  );
};

export default ContactPage;
