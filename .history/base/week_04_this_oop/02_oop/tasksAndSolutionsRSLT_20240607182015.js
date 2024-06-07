// Вам дана функция-конструктор, с помощью которой можно создавать экземпляры объектов.

// Ваша задача состоит в том, чтобы переписать данную функцию на класс (class):

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';

//     this.setTechnologies = function (technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }
//     this.setNewStatus = function (newStatus) {
//         this.status = newStatus;
//     }
// }

// const student = new Student('Maxim', 20);
// student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
// student.setNewStatus('Middle');
// console.log(student);

// function Student(name, age) {
//     this.name = name;
//     this.age = age;
//     this.technologies = [];
//     this.status = 'Junior';

//     this.setTechnologies = function(technologies) {
//         this.technologies = [
//             ...this.technologies,
//             ...technologies,
//         ];
//     }

//     this.setNewStatus = function(newStatus) {
//         this.status = newStatus;
//     }
// }

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        this.technologies = [];
        this.status = "Junior";
    }

    setTechnologies(technologies) {
        this.technologies = [...this.technologies, ...technologies];
    }

    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student("Maxim", 20);
student.setTechnologies(["HTML", "CSS", "JavaScript"]);
student.setNewStatus("Middle");
console.log(student);

// Задание #2

Вам необходимо создать класс Person, от него мы сможем создавать экземпляры людей. Конструктор класса будет принимать 2 параметра:

name - имя человека
age - количество полных лет
Также вам необходимо реализовать метод compareAge(). Он принимает в себя экземпляр класса Person и сравнивает значения полных лет.

Данный метод должен возвращать результат в следующем формате: Если у одного Person количество лет больше либо равно, чем у другого,
 то выводите сообщение через alert(): “name1 старше, чем name2”. Иначе же: “name1 младше, чем name2”.

Запускайте данный код для теста работы вашего класса Person:

