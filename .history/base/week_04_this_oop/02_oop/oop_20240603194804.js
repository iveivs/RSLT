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

// для прикола
// Вот такую вот а