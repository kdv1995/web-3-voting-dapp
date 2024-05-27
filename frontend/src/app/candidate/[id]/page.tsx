export default function Page({ params }: { params: { id: string } }) {
  return <div>My Candidate: {params.id}</div>;
}
