import Element from "../components/Element";
import "./Elements.css";

export default function Typography() {
  return (
    <div>
      <h2 className="site-header font-bowlby">Typography Tags</h2>
      <a href="https://www.englishclub.com/reading/cr-hare-tortoise.php"><Element element="a" sample="https://www.englishclub.com/reading/cr-hare-tortoise.php" /></a>
      <Element element="del" sample="The Hare thought this idea was impossible and he agreed to the proposal." />
      <Element element="h1" sample="The Hare and the Tortoise" />
      <Element element="h2" sample="The Hare and the Tortoise" />
      <Element element="h3" sample="The Hare and the Tortoise" />
      <Element element="h4" sample="The Hare and the Tortoise" />
      <Element element="h5" sample="The Hare and the Tortoise" />
      <Element element="h6" sample="One day the Hare laughed at the short feet and slow speed of the Tortoise." />
      <Element element="i" sample="This text is italicized." />
      <Element element="ins" sample="The Tortoise never stopped for a moment, walking slowly but steadily, right to the end of the course." />

      <Element element="mark" sample="The text is highlighted." />

      <Element element="p" sample="One day the Hare laughed at the short feet and slow speed of the Tortoise."/>
      <Element element="pre" sample="But when he reached the end, he saw the Tortoise there already, sleeping comfortably after her effort.
            - Aesop"/>
      <Element element="q" sample="The Tortoise never stopped for a moment, walking slowly but steadily, right to the end of the course." />
      <Element element="samp" sample="The Hare ran fast and stopped to lie down for a rest." />
      <Element element="small" sample="This text is small." />

    </div>
  );
}
