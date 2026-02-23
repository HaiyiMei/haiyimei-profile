export function Footer() {
  const updatedOn = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="bg-[var(--background-color)]">
      <div className="content-shell py-8">
        <div className="mx-auto w-full max-w-md text-center">
          <div className="pb-2">
            <a href="#hero" aria-label="Back to top">
              <img src="/images/avatar.png" alt="Footer logo" className="h-10 w-10" />
            </a>
          </div>
          <p className="secondary-heading text-sm">Updated: {updatedOn}</p>
          <div className="secondary-heading text-sm">
            Made with <span className="text-red-500">❤</span> by Haiyi
          </div>
        </div>
      </div>
    </footer>
  );
}
