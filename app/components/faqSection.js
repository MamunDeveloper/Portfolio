import React from "react";
import FAQItem from "./faqItems";
import styles from '@/app/styles/faq.module.css'

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Next.js?",
      answer: "Next.js is a framework for server-rendered React applications.",
    },
    {
      question: "How do I install Next.js?",
      answer:
        "You can install Next.js using npm or yarn by running: npm install next or yarn add next",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div className={styles.faq_section}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles.faq_list}>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
