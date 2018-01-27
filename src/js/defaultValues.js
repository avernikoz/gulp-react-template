let exampleCategories = [
    {
        id: 1,
        parent: null,
        name: 'Category 1',
        numberOfTasks: 2
    },
    {
        id: 2,
        parent: null,
        name: 'Category 2',
        numberOfTasks: 3
    },
    {
        id: 3,
        parent: null,
        name: 'Category 3',
        numberOfTasks: 5
    },
    {
        id: 123213,
        parent: 3,
        name: 'Category 12323',
        numberOfTasks: null
    },
    {
        id: 9932,
        parent: 3,
        name: 'Category 39932',
        numberOfTasks: null
    },
    {
        id: 842,
        parent: 3,
        name: 'Category 842',
        numberOfTasks: null
    },
    {
        id: 66,
        parent: 842,
        name: 'Category 68',
        numberOfTasks: null
    },
    {
        id: 68,
        parent: 842,
        name: 'Category 69',
        numberOfTasks: null
    },
    {
        id: 111,
        parent: 68,
        name: 'Category 001',
        numberOfTasks: null
    },
];

let exampleTasks = [
    {
        id: 1,
        catid: 1,
        name: 'Task 1',
        description: ''
    },
    {
        id: 2,
        catid: 1,
        name: 'Task 2',
        description: ''
    },
    {
        id: 3,
        catid: 2,
        name: 'Task 1',
        description: ''
    },
    {
        id: 4,
        catid: 2,
        name: 'Task 2',
        description: ''
    },
    {
        id: 5,
        catid: 2,
        name: 'Task 3',
        description: ''
    },
    {
        id: 6,
        catid: 3,
        name: 'Task 1',
        description: ''
    },
    {
        id: 7,
        catid: 3,
        name: 'Task 2',
        description: ''
    },
    {
        id: 8,
        catid: 3,
        name: 'Task 3',
        description: ''
    },
    {
        id: 9,
        catid: 3,
        name: 'Task 4',
        description: ''
    },
    {
        id: 10,
        catid: 3,
        name: 'Task 5',
        description: ''
    },
];

export {exampleCategories,exampleTasks} ;
