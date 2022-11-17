import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/panel-1");
  }, []);

  return null;
}
