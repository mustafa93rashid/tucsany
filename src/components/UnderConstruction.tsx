import { Construction } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 py-16 bg-gray-400">
      <Construction className="w-20 h-20 text-orange-500 mb-6 animate-bounce" />

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        We Are Building This Page
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        Stay tuned for a unique experience and creative features coming soon!
      </p>

      <div className="flex items-center gap-4">
        <span className="w-3 h-3 rounded-full bg-orange-500 animate-ping" />
        <span className="w-3 h-3 rounded-full bg-orange-400 animate-ping delay-200" />
        <span className="w-3 h-3 rounded-full bg-orange-300 animate-ping delay-400" />
      </div>
    </div>
  );
};

export default UnderConstruction;
