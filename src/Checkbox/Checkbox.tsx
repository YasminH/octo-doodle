type CheckboxProps = {
  value: string;
  onChange: (value: string) => void;
  checked?: boolean;
};

export default function Checkbox({
  value,
  onChange,
  checked = false,
}: CheckboxProps) {
  return (
    <>
      <input
        type="checkbox"
        value={value}
        name={value}
        id={value}
        onChange={(e) => onChange(e.target.value)}
        checked={checked}
      />
      <label htmlFor={value} dangerouslySetInnerHTML={{ __html: value }} />
    </>
  );
}
