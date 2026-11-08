import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const NotFound = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <p className="font-display text-8xl font-black text-brand-red">404</p>
      <p className="mt-4 text-xl text-muted-foreground">Wrong turn. This page isn't on the route.</p>
      <Link to="/" className="mt-8 font-semibold underline underline-offset-4 hover:text-brand-red">
        Back to the start line
      </Link>
    </main>
  </div>
);

export default NotFound;
