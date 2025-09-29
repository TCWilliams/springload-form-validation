import { useState } from 'react'
import { FormField } from '../FormField'
import { AnimalsFieldset } from '../AnimalFieldSet'
import { ColourFieldset } from '../ColourFieldSet'
import { validateForm, validateField } from '../../utils/validation'
import { COLOURS, ANIMALS } from '../../constants'
import type { FormData, FormErrors } from '../../types/form'

import './form.css'

const INITIAL_ERRORS: FormErrors = {
  email: '',
  password: '',
  tigerType: '',
}

const INITIAL_FORM_DATA: FormData = {
  email: '',
  password: '',
  colour: '',
  animals: [],
  tigerType: '',
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    ...INITIAL_FORM_DATA,
  })

  const [errors, setErrors] = useState<FormErrors>({ ...INITIAL_ERRORS })

  // Used to show success message on submit
  const [submitted, setSubmitted] = useState(false)

  /**
   * Handles input changes for all form fields, including checkboxes and text inputs.
   * Updates form state and re-validates the field if there was a previous error.
   *
   * - For checkboxes (animals): adds/removes the animal from the array.
   * - If 'Tiger' is unchecked, clears the 'tigerType' field.
   * - For other fields, updates the value directly.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target

    // re-validate field on change if there was an error
    if (errors[name as keyof FormErrors] !== '') {
      const error = validateField(name as keyof FormData, value, formData)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }

    if (name === 'animals') {
      setFormData((prev) => {
        const animals = checked
          ? [...prev.animals, value]
          : prev.animals.filter((animal) => animal !== value)

        if (prev.animals.includes('Tiger') && !animals.includes('Tiger')) {
          // Clear tigerType if Tiger has been unchecked
          return { ...prev, animals, tigerType: '' }
        }

        return { ...prev, animals }
      })
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  /**
   * Handles blur events for all form fields.
   * Validates the field and updates the error state for that field.
   */
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const error = validateField(name as keyof FormData, value, formData)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  /**
   * Handles form submission.
   * Validates the entire form and updates error state. If no errors, logs form data and displays a success message.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const submitErrors = validateForm(formData)

    setErrors({
      email: submitErrors.email,
      password: submitErrors.password,
      tigerType: submitErrors.tigerType,
    })

  if (Object.values(submitErrors).every((err) => err === '')) {
      // No errors, submit the form
      console.log('Form submitted successfully:', formData)
      setSubmitted(true)
    }
  }

  /**
   * Resets the form field and errors to initial state.
   */
  const resetForm = () => {
    setFormData({
      ...INITIAL_FORM_DATA,
    })
    setErrors({ ...INITIAL_ERRORS })
    setSubmitted(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <FormField
          label="Email"
          type="email"
          name="email"
          required
          value={formData.email}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.email}
        />

        <FormField
          label="Password"
          type="password"
          name="password"
          placeholder="Must be longer than 8 characters"
          required
          value={formData.password}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.password}
        />

        <ColourFieldset
          colours={COLOURS}
          selected={formData.colour}
          onChange={handleChange}
        />

        <AnimalsFieldset
          animals={ANIMALS}
          selected={formData.animals}
          onChange={handleChange}
        />

        {formData.animals.includes('Tiger') && (
          <FormField
            label="Type of Tiger"
            type="text"
            name="tigerType"
            value={formData.tigerType}
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.tigerType}
          />
        )}

        <div className="form-actions">
          <button
            className="button reset-button"
            type="button"
            onClick={() => resetForm()}
          >
            Reset
          </button>
          <button className="button submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <p>{submitted && 'Form submitted successfully!'}</p>
    </>
  )
}

export { Form }
