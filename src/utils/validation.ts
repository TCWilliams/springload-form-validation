
import type { FormData, FormErrors } from '../types/form'

/**
 * Validates a single form field value and returns an error message if invalid.
 *
 * @param name - The name of the field to validate.
 * @param value - The value of the field to validate.
 * @param formData - The full form data, used for conditional validation (e.g. tigerType).
 * @returns Error message if invalid, otherwise null.
 */
export function validateField(
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
  formData?: FormData
): string | null {
  if (name === 'email') {
    return /\S+@\S+\.\S+/.test(value) ? null : 'Please enter a valid email.'
  }

  if (name === 'password') {
    return value.length > 8
      ? null
      : 'Password must be longer than 8 characters.'
  }

  if (name === 'colour') {
    return value ? null : 'Please select a colour.'
  }

  if (name === 'animals') {
    return value.length > 0
      ? null
      : 'Please select at least one animal.'
  }

  if (name === 'tigerType') {
    if (formData?.animals.includes('Tiger')) {
      return value ? null : 'Please specify type of tiger.'
    }
  }
  return null
}

/**
 * Validates the entire form and returns an object containing error messages for each invalid field.
 *
 * @param formData - The  form data to validate.
 * @returns An object mapping field names to error messages (if any).
 */
export function validateForm(formData: FormData): FormErrors {
  const errors: FormErrors = {
    email: '',
    password: '',
    colour: '',
    animals: '',
    tigerType: ''
  }

  Object.entries(formData).forEach(([key, value]) => {
    const error = validateField(key, value, formData)

    if (error) {
      errors[key as keyof FormErrors] = error
    }
  })

  return errors
}
