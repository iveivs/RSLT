const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = arr => {
    const client = arr.shift()
    console.log(`${client} получил(а) посылку. В очереди осталось ${arr.length} человек`);
}
giveParcel(peopleWaiting)
giveParcel(peopleWaiting)
giveParcel(peopleWaiting)
const leaveQueueWithoutParcel = arr => {
    const client = arr.shift()
    console.log(`${client} не получил(а) посылку и ушел(ла) из очереди`);
}
leaveQueueWithoutParcel(peopleWaiting)
console.log(peopleWaiting);