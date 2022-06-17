interface ICardProfile {
  selectDaily: boolean;
  selectWeekly: boolean;
  selectMonthly: boolean;
}

export default function CardProfile(props: ICardProfile) {
  return (
    <ul>
      <li>
        {" "}
        {"Daily"} {props.selectDaily}
      </li>
      <li>
        {" "}
        {"Weekly"} {props.selectWeekly}
      </li>
      <li>
        {" "}
        {"Monthly"} {props.selectMonthly}
      </li>
    </ul>
  );
}
