import Link from "next/link";

const Footer = () => {
  return (
    <div>
      {" "}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Acme Inc. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </div>
  );
};

export default Footer;
