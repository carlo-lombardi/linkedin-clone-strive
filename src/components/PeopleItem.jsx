import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
export default function PeopleItem(props) {
  return (
    <div className="row my-1">
      <div className="col col-2 px-2">
        <Image roundedCircle fluid src={props.image} alt="" />
      </div>
      <div className="col col-10 py-2 flex-column d-flex px-2">
        <Link to={`/profile/` + props.id}>
          <div className="name-wrapper d-flex" style={{ lineHeight: "2px" }}>
            <p className="font-weight-bold text-left m-0">{`${props.name} ${props.surname}`}</p>
            <p className="mx-1">·</p>
            <p className="ml-1">3rd+</p>
          </div>
        </Link>

        <small className="text-muted text-left ">{props.title}</small>
        <Button
          size="sm"
          className="rounded-pill my-2 font-weight-bold"
          variant="outline-secondary"
          style={{ width: "30%" }}
        >
          Connect
        </Button>
      </div>
    </div>
  );
}
