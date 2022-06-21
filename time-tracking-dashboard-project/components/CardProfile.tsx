import { MouseEventHandler, ReactNode } from "react";


interface ICardProfile {
  changeDay: MouseEventHandler<HTMLLIElement>;
  changeWeek: MouseEventHandler<HTMLLIElement>;
  changeMonth: MouseEventHandler<HTMLLIElement>;
  picture?: ReactNode;
}

export default function CardProfile(props: ICardProfile) {
  return (
    <>
      <ul>
        <li onClick={props.changeDay}>{"Daily"}</li>
        <li onClick={props.changeWeek}>{"Weekly"}</li>
        <li onClick={props.changeMonth}>{"Monthly"}</li>
      </ul>
    </>
  );
}
