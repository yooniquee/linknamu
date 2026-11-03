"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { Link } from "@/lib/links";

type LinkListProps = {
  links: Link[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모두 0회
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { counts?: Record<string, number> } | null) => {
        // 받는 사이에 누른 클릭이 사라지지 않도록 큰 값을 유지
        if (!cancelled && data?.counts) {
          const fetched = data.counts;
          setCounts((prev) => {
            const next = { ...fetched };
            for (const [id, n] of Object.entries(prev)) {
              next[id] = Math.max(next[id] ?? 0, n);
            }
            return next;
          });
        }
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  function handleClick(id: string) {
    // 화면에는 바로 +1, 서버에도 저장 (새 탭으로 이동해도 요청이 끊기지 않게 keepalive)
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <nav className="flex w-full flex-col gap-3.5">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </nav>
  );
}
