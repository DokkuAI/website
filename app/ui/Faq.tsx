"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqData } from "@/app/utils/faq-data";

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  return (
    <section id="faqs" className="py-11">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      {isOpen && <p className="mt-2">{faq.answer}</p>}
    </div>
  );
}
