export type UserSession = {
    user_id?:string,
    user_name?:string,
    user_type?:string,
    user_email?:string,
}


export type Message = {
    sender : string,
    text : string,
    graphData? : Object[],
    created_at? : number;
    message_id? : string | number;
}