import MsgBlock from "@/Components/MsgBlock";
import { allMsg } from "@/Data/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-12">
      {allMsg.map((msg) => (
        <div key={msg.uid}>
          <MsgBlock message={msg.message} />
        </div>
      ))}
      <Link href="/Send" className='border-2 border-black w-[120px]  bg-blue-300 p-2 m-2 text-center'>Add</Link>
    </div>
  );
}
