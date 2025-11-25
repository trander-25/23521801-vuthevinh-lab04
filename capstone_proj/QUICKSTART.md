# Quick Start Guide - BlogDash Capstone

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd capstone_proj
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will open automatically at `http://localhost:3001`

### 3. Test the Application

#### Login Flow
1. You'll see the login page with username/password fields
2. The username field is automatically focused (using useRef)
3. Enter any username and click "Log In"
4. You'll be redirected to the dashboard (protected route)

#### Dashboard
1. View 10 blog posts fetched from JSONPlaceholder API
2. See loading spinner while data is fetching
3. Click any post card to view details

#### Post Detail
1. Dynamic route shows individual post (`/dashboard/post/:postId`)
2. Uses useParams to get post ID from URL
3. Fetches specific post data with useFetch hook
4. Navigate between posts using Previous/Next buttons
5. Click "Back to Dashboard" to return

#### Logout
1. Click "Log Out" button in dashboard header
2. Returns to login page
3. Protected routes are no longer accessible

## 🏗️ Architecture Overview

### Routes (createBrowserRouter)
- `/` - Login page
- `/dashboard` - Dashboard (protected)
- `/dashboard/post/:postId` - Post detail (protected)

### Context
- **AuthContext** - Global authentication state
  - `isAuthenticated`: boolean
  - `login()`: authenticate and navigate
  - `logout()`: sign out and redirect

### Custom Hooks
- **useFetch** - Data fetching with loading/error states
  - Returns: `{ data, loading, error }`
  - Used in Dashboard and PostDetail

### Components
- **ProtectedRoute** - Guards dashboard routes
  - Checks authentication
  - Redirects to login if not authenticated
  - Renders `<Outlet />` for nested routes

### Pages
- **Login** - useRef for input focus, AuthContext for login
- **Dashboard** - useFetch for posts list, Link to details
- **PostDetail** - useParams for dynamic ID, useFetch for post data

## 📝 Key Concepts Demonstrated

### 1. React Router v6
```jsx
const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { 
    path: '/dashboard', 
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'post/:postId', element: <PostDetail /> }
    ]
  }
]);
```

### 2. Protected Routes
```jsx
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};
```

### 3. Custom Hook
```jsx
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // ... fetch logic
  return { data, loading, error };
};
```

### 4. Dynamic Routes
```jsx
const { postId } = useParams();
const { data } = useFetch(`https://api.example.com/posts/${postId}`);
```

### 5. useRef & useEffect
```jsx
const inputRef = useRef(null);
useEffect(() => {
  inputRef.current?.focus();
}, []);
```

## 🎨 Features

✅ Automatic input focus on login page  
✅ Protected routes with authentication  
✅ Global state via Context API  
✅ Loading states and error handling  
✅ Dynamic routing with parameters  
✅ Responsive design with inline styles  
✅ Previous/Next post navigation  
✅ Clean, modern UI

## 🔧 Troubleshooting

### Port already in use
Edit `vite.config.js` and change the port number

### API not loading
Check your internet connection - the app uses JSONPlaceholder API

### Protected routes not working
Make sure you've logged in first - authentication is required

## 📚 Next Steps

1. Add form validation to login
2. Implement comments section on post detail
3. Add search/filter functionality to dashboard
4. Persist authentication state to localStorage
5. Add toast notifications for actions
6. Implement infinite scroll for posts
7. Add dark mode toggle

Happy coding! 🎉
