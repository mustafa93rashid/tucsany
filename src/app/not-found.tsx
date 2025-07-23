import CustomButton from "@/components/CustomButton";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-gray-400/50">
            <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-6">Sorry, the page you are looking for does not exist.</p>
            <CustomButton label="Go Home" href="/" />
        </div>
    );
}
