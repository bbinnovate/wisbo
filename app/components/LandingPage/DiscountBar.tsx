"use client";

export default function DiscountBar() {
  return (
    <>
      {/* Discount Bar */}
      <div className="sticky top-20 z-40 w-full bg-[#f6a81c] overflow-hidden">
        <div className="marquee">
          <div className="marquee__track">
            <MarqueeText />
            <MarqueeText />
          </div>
        </div>
      </div>

      {/* Component-level CSS */}
      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee__track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
          will-change: transform;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}

function MarqueeText() {
  return (
    <div className="flex items-center gap-8 px-4 py-1 text-white text-xs sm:text-sm font-medium">
      <span>🎉 1st 100 registrations get a special price.</span>
      <span>🎉 1st 100 registrations get a special price.</span>
      <span>🎉 1st 100 registrations get a special price.</span>
      <span>🎉 1st 100 registrations get a special price.</span>
      <span>🎉 1st 100 registrations get a special price.</span>
    </div>
  );
}
