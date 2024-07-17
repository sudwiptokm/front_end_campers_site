import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="space-y-1 text-muted-foreground">
            <p>123 Main Street</p>
            <p>Anytown, USA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            to="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            <FacebookIcon className="h-6 w-6" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            to="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            <TwitterIcon className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            to="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            <InstagramIcon className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            to="#"
            className="text-muted-foreground hover:text-primary transition"
          >
            <LinkedinIcon className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <div className="space-y-2 md:text-right text-center">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="space-y-1 flex flex-col">
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              Products
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-sm text-muted-foreground">
        &copy; 2024 Sudwipto Kumar Mondal. All rights reserved.
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
