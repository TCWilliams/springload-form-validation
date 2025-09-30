# Springload Form Validation Challenge

This project is a React form with custom validation, accessibility, and clean CSS (no styling libraries), for a technical challenge.

## Features

- **Form fields:** Email, Password, Colour (single choice), Animals (multi-choice), and conditional “Type of tiger” textbox.
- **Validation:** Only the fields specified in the challenge are validated: email format, password length, colours, and 'Type of tiger' (required only if Tiger is selected). Animal checkboxes are not required.
- **Accessibility:** Proper labels, ARIA attributes, keyboard navigation, and error messages.
- **Custom CSS:** using CSS variables for theming.
- **Responsive design:** Works well on mobile and desktop.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `src/components/`: React components for the form and fields.
- `src/utils/validation.ts`: Validation logic.
- `src/index.css`: Global and shared styles.
- `src/types/`: Shared TypeScript types.

## Notes

- No data is submitted to a backend.
- All code and styles are written by hand. No external UI libraries.


