import "./components.css";

export default function Tags({
  element,
  description,
}: {
  element: string;
  description: string;
}) {
  return (
    <div className="tag_block">
      <h4>&lt;{element}&gt;</h4>
      <p>{description}</p>
    </div>
  );
}
