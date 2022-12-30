export default function Footer() {
  return (
    <footer className="text-center text-gray-400 font-medium mx-auto container p-5 text-sm sm:text-base">
      <p>
        Copyright &copy; {new Date().getFullYear()} kitton.tech. All rights
        reserved.
      </p>
    </footer>
  );
}
