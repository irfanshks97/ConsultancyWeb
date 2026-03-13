import { useEffect, useRef, useState } from "react";

function Reveal({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
  duration = 700,
  y = 18,
  x = 0,
  scale = 0.985,
  blur = 8,
  amount = 0.18,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: amount,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [amount]);

  return (
    <Component
      ref={ref}
      className={`transition-[opacity,transform,filter] will-change-[opacity,transform,filter] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translate3d(0, 0, 0) scale(1)"
          : `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        filter: isVisible ? "blur(0px)" : `blur(${blur}px)`,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </Component>
  );
}

export default Reveal;
