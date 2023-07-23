export default function Tag({ element }: { element: string }) {
  return (
    <div className="tag_block">
      <h3 style={{ color: '#fffffe' }}>&lt;{element}&gt;</h3>
    </div>
  );
}
