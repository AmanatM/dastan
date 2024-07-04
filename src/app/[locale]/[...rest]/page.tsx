import { notFound } from "next/navigation";

export default function CatchAllPage({ params: { locale } }: { params: { locale: string } }) {
  notFound();
}
