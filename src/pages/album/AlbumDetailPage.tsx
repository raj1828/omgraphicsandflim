interface Props {
  slug: string;
}

export default function AlbumDetailPage({ slug }: Props) {
  return (
    <div>
      <h1>Album: {slug}</h1>
    </div>
  );
}
