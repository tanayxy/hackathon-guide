
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="glass-morphism p-8 rounded-xl max-w-md w-full text-center animate-scale-in opacity-0">
        <div className="text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-2xl font-medium mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-white/10 rounded-lg text-primary hover:bg-white/5 transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
