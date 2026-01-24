function Section({
  children,
  variant = "default",
  className = ""
}) {
  return (
    <section className={`section ${variant} ${className}`}>
      {children}
    </section>
  );
}

export default Section;
