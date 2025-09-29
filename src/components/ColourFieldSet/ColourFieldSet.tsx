type ColourFieldsetProps = {
  colours: string[]
  selected: string
  error: string
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ColourFieldset: React.FC<ColourFieldsetProps> = ({
  colours,
  selected,
  error,
  onBlur,
  onChange,
}) => (
  <div className="select-field">
    <fieldset>
      <legend>Colour (select one)</legend>
      {colours.map((colour) => (
        <label key={colour}>
          <input
            type="radio"
            name="colour"
            value={colour}
            checked={selected === colour}
            onBlur={onBlur}
            onChange={onChange}
          />
          {colour}
        </label>
      ))}
    </fieldset>
    {<p className="error">{error}</p>}
  </div>
)

export { ColourFieldset }
