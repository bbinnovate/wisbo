"use client";

export default function DiscountBar() {
  return (
    <>
      <div className="sticky top-20 z-40 w-full bg-[#f6a81c] overflow-hidden h-8 sm:h-9">
        <div className="marquee">
          <div className="marquee__track">
            <MarqueeText />
            <MarqueeText />
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          contain: content;
        }

        .marquee__track {
          display: flex;
          flex-wrap: nowrap;
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
    <div className="flex items-center flex-nowrap whitespace-nowrap gap-8 px-4 py-1 text-white text-xs sm:text-sm font-medium">
      <span>🎉 1st 100 people get pre-launch exclusive access</span>
      <span>🎉 1st 100 people get pre-launch exclusive access</span>
      <span>🎉 1st 100 people get pre-launch exclusive access</span>
      <span>🎉 1st 100 people get pre-launch exclusive access</span>
      <span>🎉 1st 100 people get pre-launch exclusive access</span>
    </div>
  );
}
