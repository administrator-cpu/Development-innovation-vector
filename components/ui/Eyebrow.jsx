export default function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white px-4 py-[7px] pl-3 text-[12.5px] text-[#5A5464]">
      <span
        aria-hidden="true"
        className="bg-gradient-to-r from-rose to-amber bg-clip-text font-mono text-[11px] text-transparent"
      >
        &lt;/&gt;
      </span>
      {children}
    </span>
  );
}
