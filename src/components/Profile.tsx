import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-5 text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full border-[5px] border-[#C9A45C] object-cover shadow-[0_12px_32px_-8px_rgba(31,42,68,0.35)]"
      />
      <div className="flex flex-col gap-1.5">
        <h1 className="text-lg font-bold tracking-tight text-[#1f2a44]">{name}</h1>
        <p className="text-sm text-[#5b6478]">{bio}</p>
      </div>
    </section>
  );
}
