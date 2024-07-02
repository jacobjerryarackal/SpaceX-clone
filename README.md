This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## How to Run

- To run NextJs : npm run dev
- To run MongoDB : npm run devstart

## Features

- **NextAuth Authentication**: Secure login and registration using Google OAuth.
- **Beautiful UI**: Aesthetic and modern design inspired by the SpaceX website.
- **Responsive Design**: Fully responsive layout that works seamlessly on all devices.
- **Dynamic Pages**: Almost all pages from the SpaceX website are replicated, including vehicle details, missions, and more.
- **User-Friendly**: Easy navigation and interactive elements for a smooth user experience.
- **MongoDB Integration**: User data is stored securely in MongoDB.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **NextAuth**: Authentication library for Next.js applications.
- **React**: JavaScript library for building user interfaces.
- **MongoDB**: NoSQL database for storing user data.
- **CSS Modules**: Scoped and modular CSS for styling components.
- **Axios**: Promise-based HTTP client for making API requests.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/spacex-clone.git
   cd spacex-clone

2. ## Install dependencies:
   ```bash
      npm install
   
3. ## Set up environment variables:

   Create a .env.local file in the root directory and add the following:
   ```bash
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   MONGODB_URI=your-mongodb-connection-string
   NEXTAUTH_URL=http://localhost:3000

4. ## Run the development server:
   ```bash
   npm run dev
Open http://localhost:3000 with your browser to see the result.


## Usage

1. ## Registration:
  - Navigate to the "Register" page to create a new account.
  - Use Google OAuth to log in easily.

2. ## Explore the Website:
- Browse through various pages, including details about Falcon 9, Falcon Heavy, Dragon, Starship, and more.
- Enjoy the user-friendly interface and responsive design.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/your-feature-name).
3. Commit your changes (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
