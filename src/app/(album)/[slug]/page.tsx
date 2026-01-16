import AlbumDetailPage from "@/pages/album/AlbumDetailPage";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return <AlbumDetailPage slug={params.slug} />;
}
