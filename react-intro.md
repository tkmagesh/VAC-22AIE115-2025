# React.js

## Components
- Building blocks in React
- Reusable entity
- Encapsulates Presentation + User Interaction + State
- An Application is just a composition of components

### React Components
- Must be created as a JavaScript function
- Component function names must start with 'uppercase'
- Should return JSX (JavaScript in XML)

### JSX
|HTML|JSX|
|---|---|
|Open tags without corresponding close tags are valid | Every open tag MUST have corresponding close tag |
|"for" attribute is valid | Use "htmlFor" instead of "for"|
|"class" attribute is valid | use "className" instead of "class"|

### React Component
- A javascript function whose name starts with Uppercase
    ex: Greeter, Product, Products
- The component function should return one root JSX element

### Props
Props are how the data is passed from the parent component to the child component
