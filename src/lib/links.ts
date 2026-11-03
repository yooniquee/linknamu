// 링크 목록 (id는 클릭 수를 저장할 때 쓰는 고유 키라 바꾸지 않는다)
export const links = [
  { id: "instagram", title: "📷 INSTAGRAM", url: "https://www.instagram.com/yoonique.eng" },
  { id: "naver-blog", title: "📗 Naver Blog", url: "https://blog.naver.com/sinzzu_" },
  { id: "youtube", title: "🚩 YouTube", url: "https://www.youtube.com/@yooniqueenglish" },
  { id: "threads", title: "🖤 Thread", url: "https://www.threads.com/@yoonique.eng" },
];

export type Link = (typeof links)[number];

export const linkIds = new Set(links.map((link) => link.id));
