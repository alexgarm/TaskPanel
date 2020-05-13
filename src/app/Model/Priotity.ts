export class Priority{
    id: number;
    title: string;
    color: string;

    constructor(_id : number , _title : string , _color: string){
        this.id = _id;
        this.color = _color;
        this.title = _title;
    }
}