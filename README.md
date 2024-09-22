# Next.js Multi-Step Form Application

This project is a **multi-step form application** built using **Next.js** with **TypeScript**, **Tailwind CSS**, and **PostCSS**. The application follows the atomic design principles and leverages React context for global state management.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/next-multi-step-form.git
   cd next-multi-step-form
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Project Structure

```bash
├── app/
│   ├── form/                # Components for different form steps
│   ├── layout.tsx           # Layout component
│   └── page.tsx             # Main page component
│
├── components/
│   ├── atoms/               # Small reusable components
│   ├── molecules/           # More complex components composed of atoms
│   └── templates/           # High-level templates like MultiForm
│
├── context/
│   └── MultiFormContext.tsx  # Global state for multi-step forms
│
├── interfaces/              # TypeScript interfaces
│   └── commons.ts           # Common interfaces used in the app
│
├── public/
│   ├── assets/              # Static assets (images, icons, etc.)
│
├── styles/
│   └── globals.css          # Global CSS
│
├── utils/
│   ├── constants.ts         # Application constants
│   └── helpers.ts           # Helper functions
│
├── .eslintrc.js             # ESLint configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project metadata and scripts
```

---

## Features

- Multi-step form functionality
- Context API for managing form state across steps
- Responsive design using **Tailwind CSS**
- TypeScript for static type checking
- Atomic design structure for reusable components

---

## Usage

To start the application in development mode, run:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Form Flow

The application includes a **multi-step form** under the `/app/form/` directory. Each step of the form is a separate component (`Form1.tsx`, `Form2.tsx`, etc.). The form flow is managed via the `MultiFormContext`, ensuring that state persists between form steps.

---

## Available Scripts

In the project directory, you can run the following commands:

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run lint`**: Lints the codebase using ESLint.
- **`npm run format`**: Formats the codebase using Prettier.

---

## Technologies Used

- [Next.js](https://nextjs.org/) – React framework for server-rendered apps.
- [TypeScript](https://www.typescriptlang.org/) – Static typing for JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework.
- [PostCSS](https://postcss.org/) – A tool for transforming CSS.
- [React Context API](https://reactjs.org/docs/context.html) – State management across form steps.
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) – Modular, reusable component architecture.

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
