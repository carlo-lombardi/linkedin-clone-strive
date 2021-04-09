import Image from "react-bootstrap/Image";
export default function LearningItem(props) {
  return (
    <div className="d-flex border-bottom py-3">
      <Image src={`https://picsum.photos/id/${props.index}/100/50`} className="mr-3" />
      <div className="d-flex flex-column justify-content-center">
        <h6 className="text-left">Tell me about a time you had to manage conflicting priorities.</h6>
        <small className="text-left text-muted">16,420 viewers</small>
      </div>
    </div>
  );
}
