1. What is JSX, and why is it used?
Answer: JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like structures inside a React file. It is used because it makes the code easier to read, write, and maintain by keeping the UI logic and structure together.

2. What is the difference between State and Props?
Answer: * State: It is local data managed within a component that can change over time (mutable).

Props: Short for "Properties," these are read-only data passed from a parent component to a child component (immutable).

3. What is the useState hook, and how does it work?
Answer: useState is a React Hook that allows functional components to manage state. It returns an array with two elements: the current state value and a function to update that value. Whenever the update function is called, React re-renders the component to display the new data.

4. How can you share state between components in React?
Answer: State is shared by "Lifting State Up" to the nearest common parent component. The parent then passes the state or the update functions down to its children as Props.

5. How is event handling done in React?
Answer: Event handling in React uses camelCase naming (e.g., onClick instead of onclick). Instead of passing a string, you pass a function as the event handler inside curly braces {}. Example: <button onClick={handleClick}>Click Me</button>.