export interface Message{
    uid?:string,
    message:string,
    profile?:string
}

export const allMsg: Message[] = [
    {
        uid: "1",
        message: "Hello wooooMan"
    },
    {
        uid: "2",
        message: "Hello"
    },
    {
        uid:"3",
        message:"Peepeepoopoo"
    }
];