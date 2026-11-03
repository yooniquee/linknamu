type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl bg-gradient-to-b from-[#33436a] to-[#222e4c] px-5 py-4 text-center text-[15px] font-semibold text-[#f6eedf] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_3px_0_#141c30,0_10px_22px_-8px_rgba(31,42,68,0.55)] transition duration-200 hover:-translate-y-0.5 hover:from-[#3b4c76] hover:to-[#283656] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_4px_0_#141c30,0_14px_26px_-8px_rgba(31,42,68,0.6)] active:translate-y-0.5 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_1px_0_#141c30,0_4px_10px_-6px_rgba(31,42,68,0.5)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#33436a]"
    >
      {title}
    </a>
  );
}
