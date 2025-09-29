'use client';

import { pageview } from "@/utils/gtm";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function GTMTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
