/*
Task code to refactor:

function assignTask(
    user: { username: string, signupDate: Date },
    task: {
        status: 'Logged' | 'Started' | 'InProgress' | 'Done',
        title: string,
        daysRequired: number,
        assignedTo: {
            username: string,
            signupDate: Date
        } | undefined,
        changeStatus(newStatus: 'Logged' | 'Started' | 'InProgress' | 'Done'): void
    }
) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}
 */

//After refactor:
interface User {
    username: string;
    signupDate: Date;
}

enum Status {
    Logged,
    Started,
    InProgress,
    Done
}

interface Task {
    status: Status;
    title: string;
    daysRequired: number;
    assignedTo: User | undefined;

    changeStatus(newStatus: Status): void;
}

function assignTask(
    user: User,
    task: Task
) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

let user = {
    username: 'Margaret',
    signupDate: new Date(2022, 1, 13),
    passwordHash: 'random'
}

let task1: Task = {
    status: Status.Logged,
    title: 'Need assistance',
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: Status) {
        this.status = newStatus;
    }
}


let task2: Task & {moreProps: number, evenMore: string} = { //this looks atrocious
    status: Status.Done,
    title: 'Test',
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: Status) {
        this.status = newStatus;
    },
    moreProps: 300,
    evenMore: 'wow'
}

assignTask(user, task1);
assignTask(user, task2);