interface ICard {
  title: string;
  current: number;
  previous: number;
  reference: string;
}

export default function Card(props: ICard) {
  return (
    <>
      <h5>{props.title}</h5>
      <h1>{props.current}{"hrs"}</h1>
      <h6>
        {"Last"} {props.reference} - {props.previous} { "hrs"}
      </h6>
    </>
  );
}
