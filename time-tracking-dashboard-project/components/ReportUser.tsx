import ProfilePicture, { IProfilePicture } from "./ProfilePicture";

interface IReportUser extends IProfilePicture {
  user: string;
}

export default function ReportUser(props: IReportUser) {
  return (
    <>
      <div>
        <ProfilePicture src={props.src} alt={props.alt} />
      </div>
      <div>
        <h6>{"Report for"}</h6>
        <h1>{props.user}</h1>
      </div>
    </>
  );
}
