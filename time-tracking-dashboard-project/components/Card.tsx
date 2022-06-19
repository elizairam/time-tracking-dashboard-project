import { ReactNode } from "react";

interface ICard {
  title: string;
  current: number;
  previous: number;
  dataReference: string;
}

export default function Card(props: ICard) {
  return (
    <>
      <h5>{props.title}</h5>
      <h1>{props.current}</h1>
      <h6>
        {"Last"} {props.dataReference} {"-"}{props.previous} { "hrs"}
      </h6>
    </>
  );
}
