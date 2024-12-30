# Expo Starter Template

A modern, feature-rich Expo starter template with TypeScript, Supabase, DrizzleORM, TailwindCSS, and pre-configured authentication.

## Features

- 🚀 [Expo](https://expo.dev/) for cross-platform mobile development
- 🔷 [TypeScript](https://www.typescriptlang.org/) for type safety
- 🎨 [TailwindCSS](https://tailwindcss.com/)+ [react-native-shadcn/ui](https://github.com/mrzachnugent/react-native-reusables) for styling
- 🔐 [Supabase](https://supabase.com/) for backend and authentication
- 📊 [DrizzleORM](https://orm.drizzle.team/) for type-safe database operations
- 🔑 Pre-configured authentication flow
- 📱 Responsive layouts

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/expo-starter.git
cd expo-starter
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

- Copy `.env.example` to `.env`
- Fill in your Supabase credentials

4. Start the development server:

```bash
yarn start
```

## Project Structure

```
expo-starter/
├── app/                   # App directory
│   ├── (auth)/           # Authentication screens
│   ├── (tabs)/           # Main app tabs
│   └── _layout.tsx       # Root layout
├── components/           # Reusable components
├── lib/                 # Utility functions
├── models/              # Database models
└── services/           # API services
```

## Environment Variables

Create a `.env` file with the following variables:

```
EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
