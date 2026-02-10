import { useState } from "react";

const WatchDemoPopup = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TRIGGER */}
      <span onClick={() => setOpen(true)}>
        {children}
      </span>

      {/* POPUP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-white text-2xl"
            >
              ✕
            </button>

            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID?autoplay=1"
              title="IndoTask Demo"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default WatchDemoPopup;
