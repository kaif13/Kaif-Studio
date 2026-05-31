import React, { Suspense, useEffect, useRef, useState } from "react";

const LazySection = ({ id, minHeight = 360, children }) => {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return undefined;

    const load = () => setShouldLoad(true);
    const hashMatches = id && window.location.hash === `#${id}`;

    if (hashMatches) {
      load();
      return undefined;
    }

    const handleHashChange = () => {
      if (id && window.location.hash === `#${id}`) {
        load();
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    if (!("IntersectionObserver" in window) || !sectionRef.current) {
      load();
      return () => window.removeEventListener("hashchange", handleHashChange);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [id, shouldLoad]);

  return (
    <div
      id={id}
      ref={sectionRef}
      style={!shouldLoad ? { minHeight } : undefined}
    >
      {shouldLoad && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
};

export default LazySection;
