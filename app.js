document.getElementById('greetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Форманын жүктөлүшүн токтотот

    // Формадагы атыңызды алуу
    const name = document.getElementById('name').value;

    // Куттуктоо текстин түзүү
    if (name.trim() !== "") { // Эгер аты бош эмес болсо
        const greeting = `Саламатсызбы, ${name}! Сизди келе жаткан Жаңы жылыңыз менен куттуктайм! Балаңыз Нурдин!`;
        document.getElementById('greeting').textContent = greeting;
    } else { // Эгер эч нерсе жазылбаса
        document.getElementById('greeting').textContent = "Сураныч, атыңызды киргизиңиз!";
    }
});
