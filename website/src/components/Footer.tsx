export function Footer() {
  const updatedOn = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date());

  return (
    <footer className="bg-[var(--background-color)]">
      <div className="content-shell py-8">
        <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
          <div className="pb-2">
            <a href="#hero" aria-label="Footer logo" className="inline-flex">
              <img src="/images/avatar.png" alt="Footer logo" className="h-10 w-10 mx-auto" />
            </a>
          </div>
          <p className="secondary-heading text-base">Updated: {updatedOn}</p>
          <div className="secondary-heading text-base">
            Made with <span className="text-red-500">❤</span> by Haiyi
          </div>
        </div>
      </div>
    </footer>
  );
}
