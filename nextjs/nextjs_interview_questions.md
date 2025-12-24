# Next.js Interview Questions and Answers

## 1. What is Next.js?
Next.js is a React framework built on top of Node.js for building server-side rendering (SSR) and static web applications. It provides features like routing, API routes, image optimization, and performance improvements out of the box.

---

## 2. What are the key features of Next.js?
- **File-based routing**: Pages are created inside the `pages` folder.
- **Server-Side Rendering (SSR)** and **Static Site Generation (SSG)**.
- **API Routes**: Create backend endpoints inside `pages/api`.
- **Image Optimization** with the `next/image` component.
- **Automatic Code Splitting** and prefetching.
- **Built-in CSS and Sass support**.

---

## 3. Difference between SSR, SSG, ISR, and CSR in Next.js?
- **SSR (Server-Side Rendering)**: HTML is generated on each request (`getServerSideProps`).
- **SSG (Static Site Generation)**: HTML is generated at build time (`getStaticProps`).
- **ISR (Incremental Static Regeneration)**: Allows static pages to be regenerated after deployment using `revalidate`.
- **CSR (Client-Side Rendering)**: Rendering happens in the browser using React.

---

## 4. What is the difference between Next.js and Create React App (CRA)?
- CRA is only for **client-side rendering**, while Next.js supports **SSR, SSG, ISR, and CSR**.
- Next.js has **built-in routing**, CRA needs React Router.
- Next.js provides **API routes**, CRA needs a separate backend.
- Next.js is more optimized for **SEO**.

---

## 5. Explain `getStaticProps`, `getServerSideProps`, and `getStaticPaths`.
- `getStaticProps`: Used for **SSG**, runs at build time.
- `getServerSideProps`: Used for **SSR**, runs on every request.
- `getStaticPaths`: Used with dynamic routes for generating static pages at build time.

---

## 6. What is Incremental Static Regeneration (ISR)?
ISR allows you to update static content without rebuilding the entire app. You can set a `revalidate` time in `getStaticProps` to regenerate pages.

```js
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 10, // Regenerates page every 10 seconds
  };
}
```

---

## 7. How does routing work in Next.js?
- File-based routing inside the `pages` folder.
- `pages/index.js` → `/`
- `pages/about.js` → `/about`
- Dynamic routes: `pages/posts/[id].js` → `/posts/1`
- Nested routes are created via folder structure.

---

## 8. How are API routes created in Next.js?
API routes are created in the `pages/api` folder.

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from API" });
}
```

---

## 9. How does Next.js handle image optimization?
Using the `next/image` component:
- Automatic resizing and lazy loading.
- Supports WebP format.
- Example:

```jsx
import Image from "next/image";

export default function Home() {
  return <Image src="/logo.png" width={200} height={200} alt="Logo" />;
}
```

---

## 10. What are Middleware in Next.js?
Middleware allows you to run code before a request is completed. It’s useful for authentication, redirects, and logging.

```js
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  if (!request.cookies.get("token")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
```

---

## 11. Difference between `Link` and `a` tag in Next.js?
- `<Link>` enables **client-side navigation** (faster, no page reload).
- `<a>` performs a full-page reload.

```jsx
import Link from "next/link";

<Link href="/about">About</Link>
```

---

## 12. How do you fetch data in Next.js?
- **getStaticProps** (build time)
- **getServerSideProps** (per request)
- **SWR** (client-side caching)
- **API routes**

---

## 13. What is the difference between `_app.js`, `_document.js`, and `_error.js`?
- **_app.js**: Customizes default App component, wraps pages with global providers (Redux, Theme, etc.).
- **_document.js**: Customizes HTML and `<head>` tags, used for SSR.
- **_error.js**: Handles 404 and error pages.

---

## 14. What is Static Export in Next.js?
Next.js can export a static HTML website using `next export`. It generates a static version of your app.

```bash
npm run build
npm run export
```

---

## 15. How do you handle authentication in Next.js?
- Using **NextAuth.js** for built-in auth.
- JWT tokens with middleware for SSR protection.
- Protect API routes using middleware.

---

## 16. Explain the role of `next.config.js`.
- Configure custom build options.
- Setup environment variables.
- Enable experimental features.
- Example:

```js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
};
```

---

## 17. What are React Server Components in Next.js 13+?
- Allow components to run on the server, reducing client-side JavaScript bundle size.
- Introduced with the **App Router** (`app/` directory).

---

## 18. What is the difference between `pages` router and `app` router in Next.js?
- **Pages Router (pre-13)**: File-based routing inside `pages/`, uses `getStaticProps`, etc.
- **App Router (13+)**: Uses React Server Components, `app/` folder, async server components, and layouts.

---

## 19. How do you deploy a Next.js app?
- **Vercel** (official hosting).
- **Netlify, AWS, Azure, DigitalOcean** also supported.
- `next build` → `next start` for production.

---

## 20. Why is Next.js good for SEO?
- Supports SSR & SSG (pre-rendered HTML for crawlers).
- Dynamic meta tags using `next/head`.
- Optimized images & performance. `

---

# Final Tips for Interview
- Know **data fetching methods**.
- Understand **difference between SSG, SSR, ISR, CSR**.
- Be ready to explain **routing, middleware, and app router (Next.js 13+)**.
- Learn **deployment strategies** (Vercel, custom servers).

