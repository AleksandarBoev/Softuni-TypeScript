abstract class Course {
    constructor(protected title: string, protected duration: number) {
        this.title = title;
        this.duration = duration;
    }

    abstract getDescription(): string;
}

class DesignCourse extends Course {
    constructor(title: string, duration: number, private tools: string[]) {
        super(title, duration);
        this.tools = tools;
    }

    getDescription(): string {
        return `Design Course: ${this.title} using ${this.tools.join(", ")} - ${this.duration} hours`;
    }
}

class ProgrammingCourse extends Course {
    constructor(title: string, duration: number, private language: string) {
        super(title, duration);
        this.language = language;
    }

    getDescription(): string {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
    }
}

const jsCourse = new ProgrammingCourse("Intro to JavaScript", 40, "JavaScript");
const uiCourse = new DesignCourse("UX Fundamentals", 30, ["Figma", "Sketch"]);

console.log(jsCourse.getDescription());
console.log(uiCourse.getDescription());