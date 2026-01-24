function FaqItem({ question, answer }) {
  return (
    <div className="faq-item">
      <strong>{question}</strong>
      <p>{answer}</p>
    </div>
  );
}

export default FaqItem;
