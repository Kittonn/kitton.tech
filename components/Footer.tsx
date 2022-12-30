export default function Footer() {
  return (
    <footer className="container mx-auto p-5 text-center text-sm font-medium text-gray-400 sm:text-base">
      <p>
        Copyright &copy; {new Date().getFullYear()} kitton.tech. All rights
        reserved.
      </p>
    </footer>
  );
}
