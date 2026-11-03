import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/lib/links";

const profile = {
  name: "YOONIQUE ENGLISH | 신상윤 영어",
  bio: "수능·내신 영어 전문강사",
  image: "/profile.png",
};

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center px-6 py-16 sm:py-20">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
