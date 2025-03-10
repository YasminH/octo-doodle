type SearchBoxProps = {
  onChange: (value: string) => void;
};

export default function SearchBox({ onChange }: SearchBoxProps) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
