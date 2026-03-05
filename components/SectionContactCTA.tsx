import React from 'react';

interface SectionContactCTAProps {
  text: string;
  buttonLabel: string;
  onClick: () => void;
}

const SectionContactCTA: React.FC<SectionContactCTAProps> = ({ text, buttonLabel, onClick }) => {
  return (
    <div className="mt-16 rounded-2xl bg-slate-100 px-6 py-6 md:px-10 md:py-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-lg font-medium leading-relaxed text-slate-800 md:text-2xl">
          {text}
        </p>

        <button
          type="button"
          onClick={onClick}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-4 text-base font-semibold text-white transition-all transform hover:scale-105 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default SectionContactCTA;
