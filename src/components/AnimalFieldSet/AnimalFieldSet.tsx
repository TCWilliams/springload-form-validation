type AnimalsFieldsetProps = {
  animals: string[]
  selected: string[]
  error: string
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AnimalsFieldset: React.FC<AnimalsFieldsetProps> = ({
  animals,
  selected,
  error,
  onBlur,
  onChange,
}) => (
  <div className="select-field">
    <fieldset>
      <legend>Animals (select one or more)</legend>
      {animals.map((animal) => (
        <label key={animal}>
          <input
            type="checkbox"
            name="animals"
            value={animal}
            checked={selected.includes(animal)}
            onBlur={onBlur}
            onChange={onChange}
          />
          {animal}
        </label>
      ))}
    </fieldset>
    {<p className="error">{error}</p>}
  </div>
)

export { AnimalsFieldset }
