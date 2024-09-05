/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const cTeacher: Subjects.Teacher = {
    firstName: 'Mark',
    lastName: 'Goo',
    experienceTeachingC: 10,
    experienceTeachingReact: 5,
    experienceTeachingJava: 0
};

export const cpp = new Subjects.Cpp(cTeacher);
console.log('C++');
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

export const java = new Subjects.Java(cTeacher);
console.log('java+++');
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

export const react = new Subjects.React(cTeacher);
console.log('react+++');
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());