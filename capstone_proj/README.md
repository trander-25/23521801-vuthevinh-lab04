# BlogDash - Capstone Project

A multi-page blog dashboard built with React that demonstrates all intermediate React concepts including routing, context, custom hooks, and data fetching.

## Features

### 1. React Router (createBrowserRouter)
- **Login Page** (`/`) - Authentication entry point
- **Dashboard** (`/dashboard`) - Protected route showing list of blog posts
- **Post Detail** (`/dashboard/post/:postId`) - Dynamic route for individual posts

### 2. Global State Management (Context API)
- **AuthContext** provides authentication state across the app
- `isAuthenticated` boolean state
- `login()` function to authenticate and redirect to dashboard
- `logout()` function to sign out and return to login

### 3. Protected Routes
- `<ProtectedRoute />` component guards dashboard routes
- Checks `isAuthenticated` from AuthContext
- Redirects to login if not authenticated
- Renders nested routes via `<Outlet />` when authenticated

### 4. Data Fetching & Loading States
- **useFetch** custom hook manages API calls
- Handles `data`, `loading`, and `error` states
- Dashboard fetches posts from JSONPlaceholder API
- PostDetail fetches individual post data dynamically
- Displays loading spinners and error messages

### 5. Dynamic Routes & useParams
- PostDetail uses `useParams` to get `postId` from URL
- Fetches post data based on dynamic route parameter
- Previous/Next navigation between posts

### 6. useRef for DOM Manipulation
- Login page uses `useRef` for username input
- `useEffect` with empty dependency array focuses input on mount
- Demonstrates direct DOM access when needed

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

1. Open the app and you'll see the **Login** page
2. Enter any username (authentication is simulated)
3. Click "Log In" to access the **Dashboard**
4. View the list of blog posts fetched from the API
5. Click any post card to view **Post Details**
6. Use Previous/Next buttons to navigate between posts
7. Click "Log Out" to return to login page

## Project Structure

```
capstone_proj/
├── src/
│   ├── components/
│   │   └── ProtectedRoute.jsx    # Route guard component
│   ├── context/
│   │   └── AuthContext.jsx       # Authentication context
│   ├── hooks/
│   │   └── useFetch.js          # Custom data fetching hook
│   ├── pages/
│   │   ├── Login.jsx            # Login page with useRef
│   │   ├── Dashboard.jsx        # Protected dashboard
│   │   └── PostDetail.jsx       # Dynamic post detail page
│   ├── App.jsx                  # Router configuration
│   └── main.jsx                 # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18.3.1** - UI library
- **React Router v6** - Client-side routing
- **Vite 5.4.21** - Build tool and dev server
- **JSONPlaceholder API** - Mock REST API for blog posts

## Concepts Demonstrated

✅ React Router with createBrowserRouter  
✅ Protected routes with authentication  
✅ Context API for global state  
✅ Custom hooks (useFetch)  
✅ useParams for dynamic routing  
✅ useRef for DOM references  
✅ useEffect for side effects  
✅ Loading and error states  
✅ Conditional rendering  
✅ Component composition

## API Endpoints Used

- `https://jsonplaceholder.typicode.com/posts` - List of posts
- `https://jsonplaceholder.typicode.com/posts/:id` - Individual post

## Author

Lab 4: Intermediate React - MSc. Tran Vinh Khiem  
Capstone Project - BlogDash
