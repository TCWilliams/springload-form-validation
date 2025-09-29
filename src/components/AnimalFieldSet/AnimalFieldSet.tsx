type AnimalsFieldsetProps = {
  animals: string[]
  selected: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AnimalsFieldset: React.FC<AnimalsFieldsetProps> = ({
  animals,
  selected,
  onChange,
}) => (
  <div className="select-field">
    <fieldset>
      <legend>Animals (select one or more)</legend>
      {animals.map((animal) => {
        const id = `animal-${animal}`
        return (
          <label htmlFor={id} key={animal}>
            <input
              type="checkbox"
              name="animals"
              value={animal}
              checked={selected.includes(animal)}
              onChange={onChange}
            />
            {animal}
          </label>
        )
      })}
    </fieldset>
  </div>
)

export { AnimalsFieldset }
