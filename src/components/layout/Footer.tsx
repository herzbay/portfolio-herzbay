export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[var(--container-width)] items-center justify-center px-6 py-5">
        <p className="text-sm text-text-muted">
          Made with love by{" "}
          <span className="font-medium text-text-secondary">Herzbay</span>{" "}
          <span aria-hidden="true">❤️</span>
        </p>
      </div>
    </footer>
  );
}