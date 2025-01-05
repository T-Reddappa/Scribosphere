import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      Click{" "}
      <Link href="/documents/123" className="text-blue-500 underline">
        here
      </Link>{" "}
      to go to documentId 123
    </div>
  );
};

export default Home;
