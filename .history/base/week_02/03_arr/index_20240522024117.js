const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = (arr) => {
    const client = peopleWaiting.shift()
    console.log(`${client} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`);
}
giveParcel(peopleWaiting)
giveParcel(peopleWaiting)
giveParcel(peopleWaiting)
leaveQueueWithoutParcel
console.log(peopleWaiting);