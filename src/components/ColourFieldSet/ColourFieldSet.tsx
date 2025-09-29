type ColourFieldsetProps = {
  colours: string[]
  selected: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ColourFieldset: React.FC<ColourFieldsetProps> = ({
  colours,
  selected,
  onChange,
}) => (
  <div className="select-field">
    <fieldset>
      <legend>Colour (select one)</legend>
      {colours.map((colour) => {

        const id = `colour-${colour}`
        return (
          <label htmlFor={id} key={colour}>
            <input
              type="radio"
              name="colour"
              value={colour}
              checked={selected === colour}
              onChange={onChange}
            />
            {colour}
          </label>
        )
      })}
    </fieldset>
  </div>
)

export { ColourFieldset }
