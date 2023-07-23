import Tags from "./Tags";

export default function Typography() {
  return (
    <div>
      <Tags
        element="p"
        description="This element is used for represention paragraph text."
      />
      <p>
        The day for the race came, and the Tortoise and Hare started together.
        The Tortoise never stopped for a moment, walking slowly but steadily,
        right to the end of the course. The Hare ran fast and stopped to lie
        down for a rest. But he fell fast asleep. Eventually, he woke up and ran
        as fast as he could. But when he reached the end, he saw the Tortoise
        there already, sleeping comfortably after her effort.
      </p>
      <Tags element="h1" description="The h1 tag represents the first level of section heading sizing." />
    </div>
  );
}
