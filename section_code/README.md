# Lab 4: React Intermediate - Comprehensive Examples

A complete implementation of React intermediate concepts covering useEffect, useRef, data fetching, forms, routing, Context API, and custom hooks.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📚 Lab Sections

### Section 1: useEffect Hook
- **Data Fetching with useEffect**: Fetching users from API
- **Event Listener with Cleanup**: Window resize tracking
- **Timer with Cleanup**: Countdown timer implementation
- **Fetch with AbortController**: Search with proper cleanup
- **Dependency Array Demo**: Understanding when effects run

**Key Concepts:**
- Effect lifecycle vs component lifecycle
- Setup and cleanup functions
- Dependency array management
- Preventing memory leaks

### Section 2: useRef Hook
- **Focus Input**: DOM manipulation example
- **Scroll to Element**: Programmatic scrolling
- **Stopwatch**: Storing mutable values without re-renders
- **Previous Value Tracking**: Accessing previous state
- **Video Player Control**: Browser API integration
- **Performance Demo**: useRef vs useState comparison

**Key Concepts:**
- DOM element access
- Mutable values without re-renders
- Performance optimization
- Browser API integration

### Section 3: Data Fetching Strategies
- **Native fetch API**: Manual implementation
- **Axios Library**: Simplified data fetching
- **POST Requests**: Both fetch and axios examples
- **Comprehensive Data Fetching**: Complex data flows
- **Error Handling Comparison**: fetch vs axios

**Key Concepts:**
- fetch vs axios trade-offs
- Loading states
- Error handling
- JSON parsing
- HTTP status codes

### Section 4: Forms in React
- **Controlled Components**: State as single source of truth
- **Uncontrolled Components (Modern)**: Using FormData API
- **Uncontrolled Components (Legacy)**: Using useRef
- **HTML5 Validation**: Built-in browser validation
- **Dynamic Forms**: Adding/removing inputs

**Key Concepts:**
- Controlled vs uncontrolled patterns
- Inline validation
- Form submission handling
- HTML5 validation attributes

### Section 5: React Router v6
- **Modern Routing**: createBrowserRouter setup
- **Dynamic Routes**: URL parameters with useParams
- **Query Parameters**: useSearchParams implementation
- **Nested Routes**: Layout components with Outlet
- **Protected Routes**: Authentication-based routing
- **Navigation**: Link and useNavigate

**Key Concepts:**
- Data router API
- Route configuration
- Authentication flows
- Programmatic navigation

### Section 6: Context API
- **Theme Context**: Global theme management
- **Auth Context**: User authentication state
- **Shopping Cart**: Complex state management
- **Multiple Contexts**: Combining contexts

**Key Concepts:**
- Creating contexts
- Provider/Consumer pattern
- Avoiding prop drilling
- Performance considerations

### Section 7: Custom Hooks
- **useFetch**: Reusable data fetching
- **useLocalStorage**: Persistent state
- **useDebounce**: Debounced values
- **useToggle**: Boolean state management
- **useOnlineStatus**: Network status detection
- **useInterval**: Declarative intervals

**Key Concepts:**
- Hook composition
- Logic reusability
- Naming conventions
- Best practices

## 🎯 Features

✅ Complete implementation of all 7 sections
✅ 40+ working examples
✅ Modern React patterns and best practices
✅ Responsive design
✅ Clean, documented code
✅ Real API integration
✅ Error handling
✅ Loading states
✅ Form validation
✅ Routing with authentication
✅ Global state management
✅ Custom hooks library

## 🛠️ Technologies Used

- React 18.2
- React Router 6.20
- Axios 1.6
- Vite 5.0
- Modern ES6+ JavaScript

## 📖 How to Use

1. **Navigate through sections** using the sidebar
2. **Interact with examples** - all are fully functional
3. **Check console logs** for debugging information
4. **Read inline comments** in the code for explanations
5. **For Router demo**: Edit `src/main.jsx` and uncomment Section5Router

## 🔧 Project Structure

```
Lab_4/
├── src/
│   ├── components/
│   │   ├── Section1-UseEffect.jsx
│   │   ├── Section2-UseRef.jsx
│   │   ├── Section3-DataFetching.jsx
│   │   ├── Section4-Forms.jsx
│   │   ├── Section5-Router.jsx
│   │   ├── Section6-Context.jsx
│   │   └── Section7-CustomHooks.jsx
│   ├── pages/
│   │   └── Pages.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 💡 Key Learning Points

### useEffect
- Think in terms of synchronization, not lifecycle
- Always include cleanup functions
- Trust the linter for dependencies
- Use AbortController for fetch requests

### useRef
- Use for DOM access and mutable values
- Doesn't trigger re-renders
- Ideal for performance optimization
- Store interval/timeout IDs

### Data Fetching
- axios simplifies common tasks
- fetch requires manual error checking
- Always handle loading and error states
- Consider using React Query for production

### Forms
- Controlled: More control, immediate validation
- Uncontrolled: Better performance for large forms
- Use FormData API for modern uncontrolled forms
- HTML5 validation for basic needs

### React Router
- Use createBrowserRouter (modern API)
- Outlet for nested routes
- Protected routes with authentication
- useNavigate for programmatic navigation

### Context API
- For low-frequency global state
- Combine with custom hooks
- Consider performance implications
- Use multiple contexts when needed

### Custom Hooks
- Extract reusable logic
- Follow naming conventions (use*)
- Return what consumers need
- Compose built-in hooks

## 🎓 Best Practices Demonstrated

1. **Proper cleanup** in useEffect
2. **Dependency array** correctness
3. **Error boundaries** and error handling
4. **Loading states** for async operations
5. **Form validation** patterns
6. **Route protection** strategies
7. **State management** architecture
8. **Code reusability** with custom hooks
9. **Performance optimization** techniques
10. **Modern React patterns**

## 📝 Notes

- All examples use real APIs (JSONPlaceholder)
- StrictMode is enabled for development
- Code follows React best practices
- Comprehensive inline documentation
- Fully responsive design
- Production-ready patterns

## 🤝 Credits

Based on Lab 4: React Intermediate by MSc. Tran Vinh Khiem

---

**Happy Learning! 🚀**
