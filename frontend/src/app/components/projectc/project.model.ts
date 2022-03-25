export  interface Project{
    id?: number,
    name: string,
    logo: string,
    start_date: Date,
    end_date: Date,
    value: number,
    risk: number,
    roi:number,
    members:string[] 
}
