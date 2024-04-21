import Image from "next/image";
interface Candidate {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  dateOfBirth: string;
  srcString: string;
}
export default function Candidate({ candidate }: { candidate: Candidate }) {
  const { id, name, email, phone, address, dateOfBirth, srcString } = candidate;
  return (
    <div className="bg-gradient-to-tl">
      <div key={id}>
        <Image src={srcString} width={300} height={300} alt={name} />
        <div className="text-4xl divide-red-100 text-red-600">{name}</div>
        <div className="text-2xl">{phone}</div>
        <div className="text-2xl">{email}</div>
        <div className="text-2xl">{address}</div>
        <div className="text-2xl">{dateOfBirth}</div>
      </div>
    </div>
  );
}
