import { Category } from '../Model/Category';
import { Priority } from '../Model/Priotity';
import { Task } from '../Model/Task';

export class TestData{
    static categories: Category[]=[
        { id: 1, title: "Работа" },
        { id: 2, title: "Семья" },
        { id: 3, title: "Учеба" },
        { id: 4, title: "Отдых" },
        { id: 5, title: "Спорт" }, 
        { id: 6, title: "Еда" }, 
        { id: 7, title: "Финансы" },
         { id: 8, title: "Здоровье" }, 
         { id: 9, title: "Гаджеты" }, 
         { id: 10, title: "Автомобиль" }
        
    ];


    static priorites: Priority[] =[
        {id: 1, title: "низкий", color: "#e5e5e5"},
        {id: 2, title: "средний", color: "#85d1b2"},
        {id: 3, title: "высокий", color: "#f1828d"},
        {id: 4, title: "Очень срочно", color: "#f1128d"}
    ];

    static task: Task[]=[

        {
            id: 1,
            title: 'заправиться полный бак',
            priority: TestData.priorites[2],
            completed: false,
            category: TestData.categories[10],
            date: new Date('2020-05-05')
        },
        {
            id: 2,
            title: 'заправиться полный бак',
            priority: TestData.priorites[2],
            completed: false,
            category: TestData.categories[10],
            date: new Date('2020-05-05')
        },
        {
            id: 3,
            title: 'заправиться полный бак',
            priority: TestData.priorites[2],
            completed: false,
            category: TestData.categories[10],
            date: new Date('2020-05-05')
        }
    ];
}