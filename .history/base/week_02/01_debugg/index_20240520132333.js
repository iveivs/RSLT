let health = prompt('Введите число параметра "здоровье" для персонажа')
if (health <= 0 || !health) {
    console.log('debugg', health);
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}