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

// Вам необходимо создать класс Person, от него мы сможем создавать экземпляры людей. Конструктор класса будет принимать 2 параметра:

// name - имя человека
// age - количество полных лет
// Также вам необходимо реализовать метод compareAge(). Он принимает в себя экземпляр класса Person и сравнивает значения полных лет.

// Данный метод должен возвращать результат в следующем формате: Если у одного Person количество лет больше либо равно, чем у другого,
//  то выводите сообщение через alert(): “name1 старше, чем name2”. Иначе же: “name1 младше, чем name2”.

// Запускайте данный код для теста работы вашего класса Person:
// const person1 = new Person('Максим', 24);
// const person2 = new Person('Светлана', 36);
// const person3 = new Person('Ирина', 23);

// person1.compareAge(person2); // Максим младше, чем Светлана 
// person2.compareAge(person3); // Светлана старше, чем Ирина 
// person3.compareAge(person1); // Ирина младше, чем Максим

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        if (this.age > person.age) {
            alert(`${this.name} старше, чем ${person.name}`);
        } else {
            alert(`${this.name} младше, чем ${person.name}`);
        }
    }
}

const person1 = new Person("Максим", 24);
const person2 = new Person("Светлана", 36);
const person3 = new Person("Ирина", 23);

person1.compareAge(person2); // Максим младше, чем Светлана
person2.compareAge(person3); // Светлана старше, чем Ирина
person3.compareAge(person1); // Ирина младше, чем Максим


Вам поручили задачу на проекте. Необходимо разработать словарь, в который можно добавлять слова с их описанием, удалять слова и получать их.

Для начала создайте класс Dictionary. Его конструктор принимает 1 параметр name.

Инициализируйте данное значение при помощи this. Также в конструкторе должно объявляться поле words, которое по умолчанию должно быть пустым объектом.

Вам необходимо в класс Dictionary добавить 4 метода:

add(). Данный метод добавляет новое слово в словарь. Он принимает в себя 2 параметра:
word - слово (тип данных строка).
description - описание слова (тип данных строка).
Присвойте объекту words по ключу word (этот параметр передали в метод add()) значение объекта,
 в котором будут храниться данные о слове и его описание. Пример объекта words после добавления слова "js":
