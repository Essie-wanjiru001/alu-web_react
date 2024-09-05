/// <reference path="./Teacher.ts" />

namespace Subjects {
    export class Subject {
        protected teacher: Subjects.Teacher;

        constructor(teacher: Subjects.Teacher) {
            this.teacher = teacher;
        }

        setTeacher(teacher: Subjects.Teacher): void {
            this.teacher = teacher;
        }
    }
}