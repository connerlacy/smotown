export default function Footer() {
  return (
    <footer className="py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center text-charcoal-light text-sm tracking-wide">
          <p>&copy; {new Date().getFullYear()} AnchorSail</p>
        </div>
      </div>
    </footer>
  );
}
