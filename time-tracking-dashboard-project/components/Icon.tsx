import Image from "next/image";

interface Iicon {
  type: string;
}

export default function Icon(props: Iicon) {
  return (
    <div style={{ marginTop: -55, textAlign: "right" }}>
      <Image
        src={`/icon-${props.type}.svg`}
        alt={`icon ${props.type}`}
        width={55}
        height={22}
      />
    </div>
  );
}
