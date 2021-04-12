currentDate = dayjs().format("MMM Do, YYYY")
$("#currentDay").text(currentDate);
let plans = {
    taskHour0: "",
    taskHour1: "",
    taskHour2: "",
    taskHour3: "",
    taskHour4: "",
    taskHour5: "",
    taskHour6: "",
    taskHour7: "",
    taskHour8: "",
}

function generateCal () {
    if (!localStorage.getItem('plans')) {
        localStorage.setItem('plans',JSON.stringify(plans));
    } else {
        plans = JSON.parse(localStorage.getItem('plans'));
    }
    console.log(plans);
    for (let i = 0; i < 9; i++) {
        $(".container").append(`<div id="timeSlot${i}" class="timeBlock"></div>`);
        // $(`#timeSlot${i}`).append(`<div class="noteBlock"><textarea id="taskHour${i}" /></div>`);
        $(`#timeSlot${i}`).append(`<div class="buttonBlock"><input id="taskHour${i}" data-value="taskHour${i}" value="" /><button class="add" id="taskHourAdd${i}">✅</button><button class="remove" id="taskHourRem${i}">❌</button></div>`);
        $("#taskHour" + i).val(plans["taskHour" + i]);
    }
}
generateCal();

function addPlans(event) {
    event.preventDefault();
    let plansKey = $(this).siblings('input').attr('data-value');
    let newPlan = $(this).siblings("input").val();
    plans[plansKey] = newPlan;
    localStorage.setItem("plans", JSON.stringify(plans));
}

function removePlans(event) {
    event.preventDefault();
    let plansKey = $(this).siblings('input').attr('data-value');
    $(this).siblings("input").val('');
    let newPlan = $(this).siblings("input").val();
    plans[plansKey] = newPlan;
    localStorage.setItem("plans", JSON.stringify(plans));
}


$(".timeBlock").on('click', `.add`, addPlans);
$(".timeBlock").on('click', `.remove`, removePlans);



console.log(document.body)