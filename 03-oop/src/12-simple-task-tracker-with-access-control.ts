class Task {
    private completed: boolean;
    private _createdBy: string;

    constructor(public title: string, public description: string, private createdBy: string) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
        this.completed = false;
    }

    static createSampleTasks() {
        return [
            new Task('Walk the dog', 'Walk the dog for at least 1 hour', 'John'),
            new Task('Do the dishes', 'Read dish label b4 using dishwasher', 'Karen')
        ];
    }

    toggleStatus() {
        this.completed = !this.completed;
    }

    getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.getCompletedString()}`;
    }

    private getCompletedString(): string {
        return this.completed ? 'Completed' : 'Pending';
    }
}

const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());

const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());

const tasks = Task.createSampleTasks();
tasks.forEach(task =>
    console.log(task.getDetails()));