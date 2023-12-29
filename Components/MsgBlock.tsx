import { Message } from "@/Data/data"


export default function MsgBlock({message}:{message:string}){
  return (
    <div className="w-[33vw] rounded-full bg-yellow-300 p-4 border-2 border-yellow-200">
        {message}
    </div>
  )
}

