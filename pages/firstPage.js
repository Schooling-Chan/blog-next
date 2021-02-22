import Link from "next/link";
import { useRouter } from "next/router";

export default function FirstPage() {
  const router = useRouter();
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
