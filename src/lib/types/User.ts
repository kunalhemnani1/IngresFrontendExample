export type UserSession = {
    user_id?: string,
    user_name?: string,
    user_type?: string,
    user_email?: string,
}

export type graphPoint = {
    x: any,  // x position
    y1?: number // for multiple graphs on single plane
    y2?: number // till yn 
}

export type graphData = {
    graph_title?: string,
    xlabel?: string,
    ylabel?: string,
    graph_type: "bar" | "line" | "natural" // we will add further more
    graph_data: graphPoint[] // array of graphpoints
}

export type responsetype = {
    answer?: string,
    graphs?: graphData[]
}

export type Message = {
    id?: string | number;
    sender: string,
    text: string,
    timestamp?: number | Date;
    graphArray?: graphData[],
}
