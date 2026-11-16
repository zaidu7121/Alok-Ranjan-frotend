export default function Loading() {
  return (
    <main className="alexa-route-loader" role="status" aria-label="Loading page">
      <div className="alexa-loader-logo">
        <iframe
          src="/alexa-legal-header.html"
          title="Alexa Legal animated logo"
          tabIndex={-1}
        />
      </div>
    </main>
  );
}