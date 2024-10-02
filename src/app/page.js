export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My Next.js Project</h1>
      <p>This is the homepage. You can login or access the dashboard.</p>
      <a href="/login">
        <button>Login</button>
      </a>
      <a href="/dashboard">
        <button>Go to Dashboard</button>
      </a>
    </div>
  );
}
