import { createElement } from "react";
import Label from "./Label";

export default function Element({ element, sample, }: {
  element: string;
  sample: string;
}) {
  function DynamicTag() {
    return createElement(`${element}`, { className: "sample" }, `${sample}`);
  }

  // function Label() {
  //   return createElement("h4", { className: "tag-label font-bowlby" }, `<${element}>`);
  // }

  return (
    <div id={element} className={element}>
      <Label tag={element}/>
      <DynamicTag />
    </div>
  );
}
