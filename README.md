# 🛡️ Zod-Lite

![TypeScript](https://img.shields.io/badge/TypeScript-Advanced-blue)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-green)

**Zod-Lite** is a lightweight, zero-dependency schema validation library built to demonstrate the power of advanced TypeScript features like **Mapped Types**, **Recursive Type Inference**, and **Generics**.

---

## ✨ Key Features

- ⚡ **Zero Dependencies** — Extremely lightweight footprint  
- 🧠 **Deep Type Inference** — Automatically extract TypeScript interfaces from runtime schemas  
- 🔒 **Type Safety** — Catch data mismatches at compile-time and runtime  
- 💡 **Developer Experience** — Full IDE autocompletion for validated data objects  

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/zod-lite.git

cd zod-lite

# Install dependencies
npm install

# Build the project
npm run build

```
## QuickStart 
import { object, string, Infer } from './src';

// 1. Define your schema structure
const UserSchema = object({
  id: string(),
  profile: object({
    username: string(),
    email: string(),
  })
});

// 2. Automatically infer the TypeScript type
type User = Infer<typeof UserSchema>;

/* 'User' becomes:
{
  id: string;
  profile: {
    username: string;
    email: string;
  }
}
*/

// 3. Parse and Validate
try {
  const user = UserSchema.parse({
    id: "uuid-123",
    profile: {
      username: "vaib_dev",
      email: "vaib@example.com"
    }
  });

  console.log(user.profile.username); // ✅ Autocomplete works!
} catch (err: any) {
  console.error("Validation failed:", err.message);
}

## Project Structure 
├── src/
│   ├── index.ts        # Entry point
│   ├── types.ts        # Core logic & Infer utility
│   └── validators/     # Validators
│       ├── string.ts
│       └── object.ts
├── dist/               # Build output (ignored)
├── tsconfig.json
└── package.json

## 🤝Contribution 
Contributions are welcome! Feel free to open issues or submit pull requests.