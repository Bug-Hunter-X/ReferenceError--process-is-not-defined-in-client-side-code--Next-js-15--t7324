# ReferenceError: process is not defined in client-side code (Next.js 15)

This repository demonstrates a common error in Next.js 15 applications where accessing environment variables in client-side code (pages/about.js) throws a `ReferenceError: process is not defined`.

## Problem

The `process` global object is not available in the browser environment. Attempting to access environment variables using `process.env` within a client-side component will result in a runtime error.

## Solution

The solution involves fetching environment variables during the build process and making them available to the client-side code via `getStaticProps` or `getServerSideProps` functions.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Navigate to `/about`.
5. Observe the error in the browser console.