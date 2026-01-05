function PageLayout({ title }) {
  return (
    <div className="container py-5">
      <h1>{title}</h1>
      <p className="mt-3">
        This is the <strong>{title}</strong> page. Content will be added here later.
      </p>
    </div>
  );
}

export default PageLayout;
