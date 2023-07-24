import { createElement } from "react";

// function Greeting({ name }: { name: string }) {
//   return (
//     <h1 className="greeting">
//       Hello <i>{name}</i>. Welcome!
//     </h1>
//   );
// }

export default function Element({
  element,
  exmpl,
}: {
  element: string;
  exmpl: string;
}) {
  function DynamicTag() {
    return createElement(
      `${ element }`,
      { className: "example" },
      `${ exmpl }`
    );
  }

  //   var DynamicTag: string = `${element}` as keyof JSX.IntrinsicElements;
  return (
    <div id={element} className={element}>
      <h3 style={{ color: "#fffffe" }}>&lt;{element}&gt;</h3>
      {/* <DynamicTag>{exmpl}</DynamicTag> */}
      <DynamicTag />
    </div>
  );
}
