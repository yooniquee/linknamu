type ProfileProps = {
  name: string;
  bio: string;
  initial: string;
};

// 프로필 사진은 아직 없으므로 이니셜 원형 아바타로 대신 표시
export default function Profile({ name, bio, initial }: ProfileProps) {
  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <div
        aria-label={`${name} 프로필 사진`}
        className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-zinc-800 bg-zinc-100 text-4xl font-bold text-zinc-700"
      >
        {initial}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold text-zinc-900">{name}</h1>
        <p className="text-sm text-zinc-600">{bio}</p>
      </div>
    </section>
  );
}
