import Tag from "../components/Tag";

export default function Typography() {
  return (
    <div>
      <div id="h1" className="h1">
        <Tag element="h1" />
        <h1 className="example">The Hare and the Tortoise</h1>
      </div>

      <div id="h2" className="h2">
        <Tag element="h2" />
        <h2 className="example">The Hare and the Tortoise</h2>
      </div>


      <div id="p" className="p">
        <Tag element="p" />
        <p className="example">
          One day the Hare laughed at the short feet and slow speed of the
          Tortoise.
        </p>
      </div>
    </div>
  );
}
