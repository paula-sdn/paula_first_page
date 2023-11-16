import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
  <>
    <div className="w-screen flex justify-center items-center h-screen bg-fuchsia-400 text-blue-300"> 
      <h1 className="text-7xl ">Mark zhopa</h1>
    </div>
    <div className="w-screen h-screen bg-fuchsia-600">
    <h1 className="text-7xl">Mark zhopa</h1>
  </div>
  </>
  );
}
