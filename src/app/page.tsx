import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 보여 주기용 더미 데이터 (실제 내용은 나중에 교체)
const profile = {
  name: "YOONIQUE ENGLISH | 신상윤 영어",
  bio: "수능·내신 영어 전문강사",
  image: "/profile.png",
};

const links = [
  { title: "📷 INSTAGRAM", url: "https://www.instagram.com/yoonique.eng" },
  { title: "📗 Naver Blog", url: "https://blog.naver.com/sinzzu_" },
  { title: "🚩 YouTube", url: "https://www.youtube.com/@yooniqueenglish" },
  { title: "🖤 Thread", url: "https://www.threads.com/@yoonique.eng" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-16 sm:py-20">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile {...profile} />
        <nav className="flex w-full flex-col gap-3.5">
          {links.map((link) => (
            <LinkCard key={link.title} {...link} />
          ))}
        </nav>
      </div>
    </main>
  );
}
