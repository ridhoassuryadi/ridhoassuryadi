import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <div className="fixed inset-0 bg-black"></div>;
}
