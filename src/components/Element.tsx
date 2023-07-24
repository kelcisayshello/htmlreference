import { createElement } from "react";

export default function Element({
  element,
  exmpl,
}: {
  element: string;
  exmpl: string;
}) {
  function DynamicTag() {
    return createElement(`${element}`, { className: "example" }, `${exmpl}`);
  }

  return (
    <div id={element} className={element}>
      <h3 style={{ color: "#fffffe" }}>&lt;{element}&gt;</h3>
      <DynamicTag />
    </div>
  );
}
