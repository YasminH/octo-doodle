type CheckboxProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Checkbox({ value, onChange }: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        value={value}
        name={value}
        id={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={value} dangerouslySetInnerHTML={{ __html: value }} />
    </>
  );
}
