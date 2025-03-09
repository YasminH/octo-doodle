type CheckboxProps = {
  value: string;
};

export default function Checkbox({ value }: CheckboxProps) {
  return (
    <>
      <input type="checkbox" value={value} name={value} id={value} />
      <label htmlFor={value} dangerouslySetInnerHTML={{ __html: value }} />
    </>
  );
}
