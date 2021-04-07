import LearningItem from "./LearningItem";

export default function LearningColumn() {
  let a = [1, 1, 1, 1];
  return (
    <div className="p-2">
      <h5 className="mt-2 text-left">Add new skills with therse courses</h5>
      <div className="d-flex flex-column my-4">
        {a.map((item, index) => {
          return <LearningItem key={index} index={index} />;
        })}
        <div className="text-center font-weight-bold text-muted my-2">Show more</div>
      </div>
    </div>
  );
}
