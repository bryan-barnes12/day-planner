currentDate = dayjs().format("MMM Do, YYYY")
$("#currentDay").text(currentDate);


function generateCal () {
    for (let i = 0; i < 9; i++) {
        $(".container").append(`<div id="timeSlot${i}" class="timeBlock"></div>`);
        // $(`#timeSlot${i}`).append(`<div class="noteBlock"><textarea id="taskHour${i}" /></div>`);
        $(`#timeSlot${i}`).append(`<div class="buttonBlock"><input id="taskHour${i}" value="test content"/><button class="add" id="taskHourAdd${i}">✅</button><button class="remove" id="taskHourRem${i}">❌</button></div>`);
    }
}
generateCal();



$(".timeBlock").on('click', `.add`, function () {alert(`You clicked ${this.id}`)});
$(".timeBlock").on('click', `.remove`, function () {$(this).siblings("input").attr('value', '');});



console.log(document.body)