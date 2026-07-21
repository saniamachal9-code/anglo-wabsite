import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="mb-4 flex justify-center text-accent">
          <AlertCircle className="h-16 w-16" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-sm font-medium text-white transition-colors hover:bg-secondary/90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
