const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = (arr) => {
    const client = peopleWaiting.shift()
    console.log(`${name} получил(а) посылку. В очереди осталось length человек`);
}
console.log(peopleWaiting);