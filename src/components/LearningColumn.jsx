import LearningItem from "./LearningItem";

export default function LearningColumn() {
  return (
    <div className="p-2">
      <h5 className="mt-2 text-left">Add new skills with therse courses</h5>
      <div className="d-flex flex-column my-4">
        <LearningItem />
        <LearningItem />
        <LearningItem />
      </div>
    </div>
  );
}
