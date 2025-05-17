import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '@/components/Layout';

const faqs = [
  {
    q: "What is a Home Loan and who can apply?",
    a: "A Home Loan is a secured loan taken to purchase or construct a house. Salaried, self-employed, and business professionals can apply.",
    isOpen: true,
  },
  {
    q: "What is a Loan Against Property?",
    a: "Loan Against Property (LAP) is a secured loan where you mortgage your residential or commercial property to get funds for personal or business needs.",
    isOpen: false,
  },
  {
    q: "How does Balance Transfer work?",
    a: "Balance Transfer lets you transfer your existing loan to another lender at a lower interest rate, helping you save on EMIs.",
    isOpen: false,
  },
  {
    q: "What is a Business Loan?",
    a: "A Business Loan is an unsecured loan designed to meet various business needs like expansion, working capital, or equipment purchase.",
    isOpen: false,
  },
  {
    q: "What types of loans do you offer?",
    a: "We offer a variety of loans including personal loans, home loans, car loans, business loans, and loans against property.",
    isOpen: false,
  },
  {
    q: "How can I apply for a loan?",
    a: "You can easily apply online by filling out our simple application form. Our team will review your details and contact you for the next steps.",
    isOpen: false,
  },
  {
    q: "What documents are required for loan approval?",
    a: "Generally, you need to submit identity proof, address proof, income proof, and bank statements. Specific requirements may vary depending on the loan type.",
    isOpen: false,
  },
  {
    q: "How long does the loan approval process take?",
    a: "Once we receive all required documents, the approval process usually takes 24-48 hours.",
    isOpen: false,
  },
  {
    q: "Can I prepay or foreclose my loan?",
    a: "Yes, you can prepay or foreclose your loan at any time. Please refer to your loan agreement for any applicable charges.",
    isOpen: false,
  },
  {
    q: "What is the interest rate for loans?",
    a: "Our interest rates are competitive and depend on the loan amount, tenure, and your credit profile. Contact us for a personalized quote.",
    isOpen: false,
  },
  {
    q: "Is my data secure with your platform?",
    a: "Absolutely. We use advanced encryption and security measures to protect your personal and financial information.",
    isOpen: false,
  },
];

export default function FAQPage() {
  const [faqItems, setFaqItems] = useState(faqs);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  // How many questions to show by default (equal to image height)
  const visibleCount = 4;

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    const updatedFaqs = faqItems.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : faq.isOpen,
    }));
    setFaqItems(updatedFaqs);
  };

  // Filter FAQs based on search
  const filteredFaqs = faqItems.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show only visibleCount questions unless showAll is true
  const faqsToShow = showAll ? filteredFaqs : filteredFaqs.slice(0, visibleCount);

  return (
    <Layout>
    <>
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/glacial-indifference-2');
          body, .faq-root {
            font-family: 'Glacial Indifference', sans-serif;
            color: #333;
            font-size: 15.5px;
            background: #f8f9fa;
          }
          .faq-card {
            background: #fff;
            border-radius: 18px;
            box-shadow: 0 4px 32px rgba(0,0,0,0.07);
            padding: 38px 28px 38px 28px;
            max-width: 1280px;
            width: 100%;
            margin: 40px auto;
          }
          .faq-heading {
            font-size: 40px;
            font-weight: 700;
            color: #222;
            text-align: center;
            margin-bottom: 10px;
            letter-spacing: -1px;
            line-height: 1.1;
          }
          .faq-heading .accent {
            color: #0074d9;
          }
          .faq-subtext {
            text-align: center;
            color: #555;
            font-size: 20px;
            margin-bottom: 30px;
            max-width: 650px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 400;
          }
          .faq-question {
            font-size: 19px;
            color: #0074d9;
            font-weight: 700;
          }
          .faq-answer {
            color: #333;
            font-size: 15.5px;
            text-align: justify;
          }
          .modern-search-bar {
            display: flex;
            align-items: center;
            background: #fff;
            border: 1.5px solid #e3e3e3;
            border-radius: 30px;
            padding: 6px 18px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.03);
            margin-bottom: 22px;
            transition: border 0.2s;
          }
          .modern-search-bar:focus-within {
            border-color: #0074d9;
            box-shadow: 0 2px 12px rgba(0,116,217,0.09);
          }
          .modern-search-icon {
            margin-right: 10px;
            color: #0074d9;
            font-size: 20px;
            flex-shrink: 0;
            opacity: 0.8;
          }
          .modern-search-input {
            border: none;
            outline: none;
            background: transparent;
            font-size: 16px;
            flex: 1;
            color: #333;
            font-family: inherit;
            padding: 8px 0;
          }
          .modern-search-input::placeholder {
            color: #aaa;
            opacity: 1;
          }
          .faq-list {
            background: transparent;
            border-radius: 12px;
            margin-top: 8px;
          }
          .faq-item {
            border-bottom: 1px solid #eaeaea;
            padding: 18px 0 9px 0;
            cursor: pointer;
            transition: background 0.1s;
          }
          .faq-item:last-child {
            border-bottom: none;
          }
          .faq-item:hover {
            background: #fafbfc;
          }
          .faq-toggle {
            font-size: 22px;
            font-weight: 400;
            color: #bbb;
            margin-left: 10px;
            user-select: none;
          }
          .faq-illustration {
            display: block;
            margin: 0 auto;
            max-width: 100%;
            height: 410px;
            object-fit: contain;
            border-radius: 18px;
            box-shadow: 0 2px 12px rgba(0,0,0,0.05);
            background: none !important;
          }
          .no-bg {
            background: none !important;
          }
          .show-more-btn {
            display: block;
            margin: 18px auto 0 auto;
            background: #0074d9;
            color: #fff;
            font-weight: 600;
            border: none;
            border-radius: 8px;
            padding: 9px 28px;
            font-size: 16px;
            box-shadow: 0 2px 8px rgba(0,116,217,0.08);
            transition: background 0.2s;
          }
          .show-more-btn:hover {
            background: #005fa3;
          }
          @media (max-width: 991px) {
            .faq-illustration {
              height: 300px;
            }
            .faq-heading {
              font-size: 32px;
            }
            .faq-card {
              max-width: 98vw;
            }
          }
          @media (max-width: 767px) {
            .faq-card {
              padding: 18px 4px 24px 4px;
            }
            .faq-illustration {
              height: 140px;
            }
            .faq-heading {
              font-size: 22px;
            }
          }
        `}
      </style>

      <div className="faq-root">
        <div className="faq-card">
          {/* Centered Heading and Subtext */}
          <h1 className="faq-heading">
            Frequently Asked <span className="accent">Questions</span>
          </h1>
          <div className="faq-subtext">
            Find answers to your questions about our loan products and services.
          </div>
          <div className="row align-items-center justify-content-center" style={{ minHeight: "420px" }}>
            {/* Left: FAQ Content */}
            <div className="col-md-6">
              {/* Modern Search Bar */}
              <div className="modern-search-bar">
                <span className="modern-search-icon">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0074d9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="modern-search-input"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* FAQ Items */}
              <div className="faq-list">
                {faqsToShow.length === 0 && (
                  <div className="text-center text-muted py-4">
                    No questions found for your search.
                  </div>
                )}
                {faqsToShow.map((faq, index) => (
                  <div
                    key={index}
                    className="faq-item"
                    onClick={() => toggleFaq(faqItems.indexOf(faq))}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="faq-question">{faq.q}</div>
                      <div className="faq-toggle">
                        {faq.isOpen ? "−" : "+"}
                      </div>
                    </div>
                    {faq.isOpen && (
                      <div className="mt-2 faq-answer">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
                {/* Show More Button */}
                {!showAll && filteredFaqs.length > visibleCount && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAll(true)}
                  >
                    Show More
                  </button>
                )}
                {/* Show Less Button */}
                {showAll && filteredFaqs.length > visibleCount && (
                  <button
                    className="show-more-btn"
                    onClick={() => setShowAll(false)}
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>
            {/* Right: Illustration */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center no-bg"
              style={{ background: "none" }}
            >
              <img
                src="https://img.freepik.com/free-vector/faq-concept-illustration_114360-5245.jpg"
                alt="FAQ Illustration"
                className="faq-illustration"
                style={{ background: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
    </Layout>
  );
}
