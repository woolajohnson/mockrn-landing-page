"use client"

import * as React from "react"

const faqs = [
  {
    question: "Is the AI interviewer accurate for nursing questions?",
    answer: "Yes! Our AI is specifically trained on thousands of real nursing interview questions and scenarios. It covers clinical knowledge, ethical situations, patient care scenarios, and behavioral questions commonly asked in nursing interviews. The AI is regularly updated with the latest nursing practices and interview trends."
  },
  {
    question: "Can I try a free mock interview before paying?",
    answer: "Absolutely! Our free plan includes 3 mock interviews per month with basic AI feedback. This gives you a chance to experience our platform and see how it can help improve your interview skills before committing to a paid plan."
  },
  {
    question: "How does the voice interview work?",
    answer: "Our voice interview feature uses advanced speech recognition technology. You can speak your answers naturally, and our AI will analyze both your content and delivery. You'll receive feedback on your speaking pace, clarity, confidence level, and answer quality - just like in a real interview."
  },
  {
    question: "Do you offer plans for schools and institutions?",
    answer: "Yes! We offer special institutional pricing for nursing schools, hospitals, and healthcare organizations. These plans include bulk licenses, administrative dashboards, progress tracking, and custom question banks. Contact our sales team for a personalized quote."
  },
  {
    question: "What types of nursing positions does MockRN cover?",
    answer: "MockRN covers a wide range of nursing specialties including medical-surgical, ICU, emergency, pediatric, obstetric, psychiatric, and community health nursing. We also have questions for different experience levels from new graduates to experienced nurses seeking leadership roles."
  },
  {
    question: "How quickly will I see improvement in my interview skills?",
    answer: "Most users see noticeable improvement after just 3-5 practice sessions. Our AI provides immediate, actionable feedback that helps you identify and correct weaknesses quickly. With consistent practice, you'll build confidence and improve your response quality within weeks."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about MockRN and how it can help you ace your nursing interviews.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@mockrn.com" 
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  )
}
