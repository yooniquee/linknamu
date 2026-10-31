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
      className="block w-full rounded-xl border-2 border-zinc-800 bg-white px-4 py-4 text-center font-medium text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-100"
    >
      {title}
    </a>
  );
}
