import Image from "next/image";

export default function ProfilePicture() {
  return (
    <Image
      src={"/image-jeremy.png"}
      alt="profile picture"
      width={72}
      height={72}
    />
  );
}
