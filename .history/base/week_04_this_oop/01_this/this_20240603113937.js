const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel(){
        this.level++
        if(this.level === 2) this.stack.push('CSS')
        if(this.level === 3) this.stack.push('JavaScript')
        if(this.level === 4) this.stack.push('React ')
        if(this.level === 5) this.stack.push('NodeJS')
        if(this.level > 5) console.log("Студент выучил все технологии!");
        return this.stack
    }
}
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
student.improveLevel()
    