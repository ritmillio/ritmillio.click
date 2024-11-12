import Image from "next/image";
import { Container } from "@/components/container";

export default async function Folio() {
  return (
    <Container>
      <div className="my-10 text-4xl text-white">Folio</div>
      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </p>
      <Image src="/avatar.png" alt="folio" width={250} height={500} />
    </Container>
  );
}
