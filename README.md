# Interactive Portfolio - A Jira-Inspired Showcase

This is a dynamic and interactive portfolio built with Next.js, designed to look and feel like a Jira dashboard. It goes beyond a traditional static resume by allowing visitors to interact with projects, leave comments, and explore my skills in an engaging way.

## ✨ Key Features

- **Jira-Inspired UI**: A familiar and intuitive interface that presents my professional journey and projects like an agile board.
- **Interactive Project Modals**: Click on any project to view a detailed modal with descriptions, tech stacks, live demos, and image galleries.
- **Dynamic Commenting System**: Visitors can sign in with their Google account to leave comments on projects, fostering interaction and feedback.
- **User Authentication**: Secure and seamless user authentication powered by [Clerk](https://clerk.dev/), with Google Sign-In.
- **Real-time Database**: Comments are stored in a MongoDB database, fetched in real-time, and displayed dynamically.
- **Responsive Design**: The entire application is fully responsive, providing an optimal viewing experience on desktops, tablets, and mobile devices.
- **Theming**: A theme switcher allows users to cycle through different color schemes for a personalized experience.
- **Instant Search**: A powerful search bar in the navigation allows for instant filtering of projects and skills.
- **Informational Modals**: Dedicated, responsive modals for my skills, contact information, and an "About" section explaining the site's features.
- **CV Download**: A convenient button to download my latest CV.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🔧 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- Node.js (v20.5.1 or later recommended)
- npm, yarn, or pnpm
- A MongoDB Atlas account (or a local MongoDB instance)
- A Clerk account

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/nikhilbuilds/taskfolio
    cd taskfolio
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables. You can get the Clerk keys from your Clerk dashboard and the MongoDB URI from your MongoDB Atlas dashboard.

```env
# MongoDB Connection String
MONGODB_URI="your_mongodb_connection_string"

# Clerk API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
CLERK_SECRET_KEY="your_clerk_secret_key"
```

### Running the Development Server

Once the installation is complete and the environment variables are set up, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
