const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel(){
        this.level++
        if(this.level === 2) this.stack.push('CSS')
        if(this.level === 3) this.stack.push(''JavaScript'')
        if(this.level === 4) this.stack.push('CSS')
        if(this.level === 5) this.stack.push('CSS')
    }
}
student.improveLevel()