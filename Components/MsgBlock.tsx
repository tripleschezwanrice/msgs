import { Message } from "@/Data/data"


export default function MsgBlock({message}:{message:string}){
  return (
    <div className="w-[33vw] rounded-full bg-yellow-200 p-4 border-2 border-black">
        {message}
    </div>
  )
}

