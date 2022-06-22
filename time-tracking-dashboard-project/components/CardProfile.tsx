import { MouseEventHandler, ReactNode } from "react";

interface ICardProfile {
  changeDay: MouseEventHandler<HTMLLIElement>;
  changeWeek: MouseEventHandler<HTMLLIElement>;
  changeMonth: MouseEventHandler<HTMLLIElement>;
}

export default function CardProfile(props: ICardProfile) {
  return (
    <div>
      <ul>
        <li onClick={props.changeDay} tabIndex={0}>
          {"Daily"}
        </li>
        <li onClick={props.changeWeek} tabIndex={0}>
          {"Weekly"}
        </li>
        <li onClick={props.changeMonth} tabIndex={0}>
          {"Monthly"}
        </li>
      </ul>
    </div>
  );
}
