"use client";
export default function ErrorPage(error) {
  return (
    <html>
      <body>
        <h2>Disaster has struck! Go back 3 spaces</h2>
        <p>{error.message}</p>
      </body>
    </html>
  );
}
