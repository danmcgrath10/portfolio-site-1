import Link from "next/link"

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ marginBottom: "2rem" }}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" style={{ 
        display: "inline-block",
        padding: "0.5rem 1rem",
        backgroundColor: "#0070f3",
        color: "white",
        textDecoration: "none",
        borderRadius: "0.25rem"
      }}>
        Back to Home
      </Link>
    </div>
  )
}
