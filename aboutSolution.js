```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About({ myVariable }) {
  // Access environment variable safely
  console.log(myVariable);

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page. My variable is: {myVariable}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  // Fetch environment variable in server-side code
  const myVariable = process.env.MY_VARIABLE;

  // Pass the variable to the page component
  return {
    props: {
      myVariable: myVariable,
    },
  };
}
```