import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#002d62] mt-auto text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Column 1: Filters & Copyright */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Filters</h3>
            <ul className="space-y-2 text-sm text-blue-100/80">
              <li>
                <Link href="/?category=all" className="hover:text-white transition-colors">
                  All
                </Link>
              </li>
              <li>
                <Link href="/?category=electronics" className="hover:text-white transition-colors">
                  eleΞtronk
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-8 text-sm text-blue-200/80">
            © 2024 American
          </div>
        </div>

        {/* Column 2: About Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">About Us</h3>
          <ul className="space-y-2 text-sm text-blue-100/80">
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B60B0] transition-colors hover:bg-blue-600"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5 fill-white text-[#0B60B0]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B60B0] transition-colors hover:bg-blue-600"
              aria-label="Follow us on Twitter"
            >
              <Twitter className="h-5 w-5 fill-white text-[#0B60B0]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B60B0] transition-colors hover:bg-blue-600"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
