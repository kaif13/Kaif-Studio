import { useCallback, useRef, useState } from "react";

const GOLD = "#B18445";
const GOLD_HI = "#D0AD75";
const INK = "#181817";
const CARD = "#24231F";
const LINE = "rgba(255,255,255,0.10)";

const Bar = ({
  w = "100%",
  h = 6,
  c = "rgba(255,255,255,0.22)",
  r = 4,
  mb = 8,
}) => (
  <div
    style={{
      width: w,
      height: h,
      background: c,
      borderRadius: r,
      marginBottom: mb,
    }}
  />
);

function SiteUI() {
  return (
    <div
      style={{
        padding: "14px 16px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 4,
              background: `linear-gradient(135deg, ${GOLD_HI}, ${GOLD})`,
            }}
          />
          <Bar w={54} h={6} mb={0} />
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Bar w={24} h={5} mb={0} />
          <Bar w={24} h={5} mb={0} />
          <Bar w={24} h={5} mb={0} />
          <div
            style={{
              width: 48,
              height: 16,
              borderRadius: 20,
              background: `linear-gradient(135deg, ${GOLD_HI}, ${GOLD})`,
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, alignItems: "center", flex: 1 }}>
        <div style={{ flex: 1.1 }}>
          <Bar w="92%" h={11} c="rgba(255,255,255,0.88)" />
          <Bar w="68%" h={11} c="rgba(255,255,255,0.88)" mb={14} />
          <Bar w="100%" h={5} c="rgba(255,255,255,0.18)" />
          <Bar w="84%" h={5} c="rgba(255,255,255,0.18)" mb={16} />
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                width: 70,
                height: 22,
                borderRadius: 8,
                background: `linear-gradient(135deg, ${GOLD_HI}, ${GOLD})`,
              }}
            />
            <div
              style={{
                width: 56,
                height: 22,
                borderRadius: 8,
                border: `1px solid ${LINE}`,
              }}
            />
          </div>
        </div>
        <div
          style={{
            flex: 0.9,
            alignSelf: "stretch",
            borderRadius: 12,
            border: `1px solid ${LINE}`,
            background:
              "radial-gradient(120% 120% at 70% 20%, rgba(177,132,69,0.4), rgba(24,24,23,0.9))",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: CARD,
              border: `1px solid ${LINE}`,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <div
              style={{
                width: 18,
                height: 18,
                borderRadius: 6,
                background: "rgba(177,132,69,0.3)",
                marginBottom: 8,
              }}
            />
            <Bar w="80%" h={5} />
            <Bar w="60%" h={5} mb={0} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Chip({ children, className, style, z = 60 }) {
  return (
    <div
      className={className}
      style={{
        position: "absolute",
        transform: `translateZ(${z}px)`,
        background: "rgba(22,22,26,0.85)",
        backdropFilter: "blur(8px)",
        border: `1px solid rgba(177,132,69,0.35)`,
        borderRadius: 14,
        padding: "10px 14px",
        boxShadow: "0 20px 40px -16px rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        gap: 8,
        color: "#fff",
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export default function HeroVisual3D() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 8, ry: -14 });

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: 8 - py * 14, ry: -14 + px * 16 });
  }, []);

  const onLeave = useCallback(() => setTilt({ rx: 8, ry: -14 }), []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 560,
        margin: "0 auto",
        perspective: 1100,
        padding: "50px 30px",
        fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
      }}
    >
      <style>{`
        @keyframes kglow { 0%,100% { opacity:.55; transform:scale(1);} 50% { opacity:.9; transform:scale(1.08);} }
        @keyframes kfloatA { 0%,100%{transform:translateZ(70px) translateY(0)} 50%{transform:translateZ(70px) translateY(-9px)} }
        @keyframes kfloatB { 0%,100%{transform:translateZ(90px) translateY(0)} 50%{transform:translateZ(90px) translateY(10px)} }
        @keyframes kfloatC { 0%,100%{transform:translateZ(55px) translateY(0)} 50%{transform:translateZ(55px) translateY(-7px)} }
        @media (prefers-reduced-motion: reduce){ .k-anim{ animation:none !important } }
      `}</style>

      <div
        aria-hidden="true"
        className="k-anim"
        style={{
          position: "absolute",
          inset: "10% 5%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(177,132,69,0.45), transparent 65%)",
          filter: "blur(40px)",
          animation: "kglow 6s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform .25s ease-out",
        }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            background: "#000",
            borderRadius: 16,
            padding: 10,
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 50px 90px -30px rgba(0,0,0,0.95), 0 0 0 1px rgba(177,132,69,0.15)",
          }}
        >
          <div
            style={{
              background: "#101014",
              borderRadius: "10px 10px 0 0",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: 8,
              borderBottom: `1px solid ${LINE}`,
            }}
          >
            <span
              style={{ width: 9, height: 9, borderRadius: 99, background: "#ff5f57" }}
            />
            <span
              style={{ width: 9, height: 9, borderRadius: 99, background: "#febc2e" }}
            />
            <span
              style={{ width: 9, height: 9, borderRadius: 99, background: "#28c840" }}
            />
            <div
              style={{
                flex: 1,
                marginLeft: 8,
                height: 18,
                borderRadius: 6,
                background: "#1c1c22",
                border: `1px solid ${LINE}`,
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
                fontSize: 10,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              kaifwebstudio.in
            </div>
          </div>
          <div
            style={{
              background: INK,
              borderRadius: "0 0 8px 8px",
              height: 300,
              overflow: "hidden",
            }}
          >
            <SiteUI />
          </div>
        </div>

        <Chip
          className="k-anim"
          z={70}
          style={{ top: 24, left: -28, animation: "kfloatA 6s ease-in-out infinite" }}
        >
          <span style={{ color: GOLD_HI }}>★</span> 5.0 client rating
        </Chip>
        <Chip
          className="k-anim"
          z={90}
          style={{
            bottom: 56,
            right: -34,
            animation: "kfloatB 7s ease-in-out infinite",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 99,
              background: "#28c840",
              boxShadow: "0 0 8px #28c840",
            }}
          />
          Loads in 0.9s
        </Chip>
        <Chip
          className="k-anim"
          z={55}
          style={{
            bottom: -10,
            left: 10,
            animation: "kfloatC 6.5s ease-in-out infinite",
          }}
        >
          <span style={{ color: GOLD_HI }}>✓</span> Mobile-first
        </Chip>
      </div>
    </div>
  );
}
