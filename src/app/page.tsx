import { Suspense } from "react";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <Portfolio />
    </Suspense>
  );
}
