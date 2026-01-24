import { useEffect, useRef, useState } from "react";

function MediaBlock({
  image,
  alt,
  children,
  reverse = false,
  className = ""
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        media-block
        card
        ${className}
        ${reverse ? "reverse" : ""}
        ${visible ? "media-show" : "media-hide"}
      `}
    >
      <img src={image} alt={alt} />
      <div className="media-content">{children}</div>
    </div>
  );
}

export default MediaBlock;
