function FaqItem({ index, question, answer }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#faq${index}`}
        >
          {question}
        </button>
      </h2>

      <div
        id={`faq${index}`}
        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}

export default FaqItem;
