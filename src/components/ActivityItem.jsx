import Image from "react-bootstrap/Image";
export default function ActivityItem(props) {
  return (
    <div className="col">
      <div className="d-flex">
        <Image style={{ height: "50px" }} src={props.image} />
        <p className="ml-2 font-weight-bold">{props.text}</p>
      </div>
    </div>
  );
}
