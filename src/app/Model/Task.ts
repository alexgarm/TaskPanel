import { Priority } from './Priotity';
import { Category } from './Category';

export class Task {
    id: number;
    title: string;
    completed: boolean;
    priority?: Priority;
    category?: Category;
    date?: Date;

    constructor(_id: number, _title: string, _completed: boolean, _priority?: Priority, _category?: Category, _date?: Date) {
        this.id = _id;
        this.title = _title;
        this.completed = _completed;
        this.category = _category;
        this.priority = _priority;
        this.date = _date;

    }

}