const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel(){
        this.level++
        if(this.level === 2) this.stack.push('CSS')
        if(this.level === 2) this.stack.push('CSS')
        if(this.level === 2) this.stack.push('CSS')
    }
}
student.improveLevel()