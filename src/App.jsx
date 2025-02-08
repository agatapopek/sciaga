export default function App (){
  return(
    <>
    <p># React Course Notes</p>

<p>## 1. Introduction to Vite and React Basics</p>

<p>### Vite Overview</p>
<p>- Definition: A web bundler for creating websites and web applications
- Purpose: Bundles multiple files (JavaScript, CSS, images) into optimized packages
- Benefits:
  - Fast startup time
  - Live updates (Hot Module Replacement)
  - Optimized for speed and performance</p>

<p>### React Components</p>
<p>- Components are functions that return JSX
- JSX allows HTML-like code within JavaScript
- Curly brackets {} are used for embedding JavaScript expressions in JSX</p>

<p>## 2. Props and Component Communication</p>

<p>### Understanding Props</p>
<p>- Props (properties) pass data from parent to child components
- Props are read-only (immutable)
- Can have default values
- Supports type-checking with PropTypes</p>

<p>### Props Implementation</p>
<p>Parent components can pass data to child components through props. Child components receive these props as parameters and can use default values if none are provided. Props enable component reusability and maintain a clear data flow.</p>

<p>### PropTypes Usage</p>
<p>PropTypes provide runtime type checking for React props. They help catch bugs by validating data types of props being passed to components. Required props can be specified using isRequired.</p>

<p>### Conditional Rendering</p>
<p>- Uses ternary operators for conditional display
- Enables dynamic content based on props or state
- Provides clean syntax for conditional UI elements</p>

<p>## 3. Web Storage and State Management</p>

<p>### Web Storage API</p>
<p>#### Types:</p>
<p>1. localStorage
   - Persists after browser closes
   - ~5-10MB capacity
   - Best for user preferences</p>

<p>2. sessionStorage
   - Cleared when browser closes
   - ~5MB capacity
   - Good for temporary data</p>

<p>### Data Storage Best Practices</p>
<p>Always use JSON.stringify when storing data and JSON.parse when retrieving data. This ensures proper data format preservation, especially for objects and arrays.</p>

<p>### State Management</p>
<p>- Uses useState hook for component state
- Basic syntax involves destructuring state and setter function
- State updates trigger component re-renders
- State can hold any type of data</p>

<p>### Side Effects with useEffect</p>
<p>- Handles operations outside component rendering
- Common uses:
  - Data fetching
  - Subscriptions
  - DOM manipulations
- Can include cleanup function for resource management</p>

<p>## 4. CSS Styling in React</p>

<p>### Styling Approaches</p>
<p>1. Inline Styles:
   - Direct styling in JSX
   - Object-based syntax
   - Dynamic style manipulation</p>

<p>2. CSS Modules:
   - Local scope for styles
   - Prevents style conflicts
   - Component-specific styling</p>

<p>3. Styled Components:
   - CSS-in-JS solution
   - Dynamic styles with props
   - Theme support</p>

<p>### CSS Modules vs. Global CSS</p>
<p>- CSS Modules provide local scoping
- Prevents style conflicts between components
- Naming becomes unique through automatic class name generation</p>

<p>### Theme Provider Usage</p>
<p>Theme providers allow consistent styling across components through a centralized theme object. They enable easy theme switching and maintenance of design systems.</p>

<p>## 5. Event Handling and CRUD Operations</p>

<p>### Event Listeners and Handlers</p>
<p>Common Events:
- onClick
- onChange
- onSubmit
- onMouseEnter/Leave
- onKeyDown/Up
- onFocus</p>

<p>### Event Handler Implementation</p>
<p>Event handlers are functions that execute in response to user interactions. They receive the event object as a parameter and can access event-related information.</p>

<p>### Event Object Properties</p>
<p>- event.type: Type of event
- event.target: Element that triggered event
- event.preventDefault(): Prevents default behavior
- event.target.value: Current value of form elements</p>

<p>### CRUD Operations</p>
<p>- Create: Add new data
- Read: Retrieve existing data
- Update: Modify existing data
- Delete: Remove data</p>

<p>### Spread Operator Usage</p>
<p>The spread operator (...) allows array and object manipulation in a more concise way. It's commonly used for creating new arrays or objects with modifications.</p>

<p>## Best Practices and Tips</p>
<p>1. Always use PropTypes for type checking
2. Keep components small and focused
3. Use meaningful component and variable names
4. Handle side effects properly with useEffect
5. Implement proper error handling
6. Use appropriate styling approaches based on project needs
7. Follow proper CRUD patterns for data operations
8. Implement proper event handling patterns
9. Use localStorage/sessionStorage appropriately for data persistence
10. Keep state management simple and organized</p>
    </>
  )
}