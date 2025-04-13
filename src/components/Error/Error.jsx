import { Link } from "react-router";

const Error = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-base-200">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-error">404</h1>
                <h2 className="text-3xl font-semibold mt-4 text-base-content">Oops! Page Not Found 🥲</h2>
                <p className="text-base mt-2 text-gray-500 dark:text-gray-400">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <div className="mt-6">
                    <Link to="/" className="btn btn-primary">
                        ⬅️ Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;
