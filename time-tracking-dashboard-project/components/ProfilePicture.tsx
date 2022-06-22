import Image from "next/image";

export interface IProfilePicture {
  src: string;
  alt: string;
}

export default function ProfilePicture(props: IProfilePicture) {
  return <Image src={props.src} alt={props.alt} width={72} height={72} />;
}
