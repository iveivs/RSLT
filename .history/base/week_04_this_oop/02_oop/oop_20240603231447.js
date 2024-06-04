// Задание #1
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    technologies = [];
    status = 'Junior';

    setTechnologies(technologies) {
            this.technologies = [
            ...this.technologies, // Вопрос, зачем эта строчка ? Ведь у нас и так пустой массив
            ...technologies,
        ];
    }
    setNewStatus(newStatus) {
    this.status = newStatus;
}
}

const student = new Student('Maxim', 20);
student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
student.setNewStatus('Middle');
console.log(student);


// Вот такое вот автоисправление мне предложил vscode:

// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.technologies = [];
//         this.status = 'Junior';

//         this.setTechnologies = function (technologies) {
//             this.technologies = [
//                 ...this.technologies,
//                 ...technologies,
//             ];
//         };
//         this.setNewStatus = function (newStatus) {
//             this.status = newStatus;
//         };
//     }
// }

// const student = new Student ('Maxim', 20);
// student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
// student.setNewStatus('Middle');
// console.log(student);

// Задание #2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(obj) {
        this.obj.age > this.age ? `${this.obj.name} старше, чем ${this.name}`: ``${this.obj.name} старше, чем ${this.name}``
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2); // Максим младше, чем Светлана 
person2.compareAge(person3); // Светлана старше, чем Ирина 
person3.compareAge(person1); 