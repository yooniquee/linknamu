import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여 주기용 더미 데이터 (실제 내용은 나중에 교체)
const profile = {
  name: "YOONIQUE ENGLISH | 신상윤",
  bio: "Y:AXIS | 해석을 넘어 논리로",
  initial: "Y",
};

const links = [
  { title: "Instagram", url: "https://www.instagram.com/" },
  { title: "NaverBlog", url: "https://blog.naver.com/" },
  { title: "Youtube", url: "https://www.youtube.com/" },
  { title: "Thread", url: "https://www.threads.net/" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-zinc-50 px-4 py-10">
      <div className="flex w-full max-w-md flex-col items-center gap-8 rounded-3xl border-2 border-zinc-800 bg-white px-6 py-10">
        <Profile {...profile} />
        <nav className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.title} {...link} />
          ))}
        </nav>
      </div>
    </main>
  );
}
