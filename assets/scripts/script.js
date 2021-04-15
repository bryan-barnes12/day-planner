// Capturing current date and current hour for use later in the program.
let currentDate = dayjs().format("MMM Do, YYYY");
let now = dayjs().hour();

// Displaying current date at the top of the page.
$("#currentDay").text(currentDate);

// Declaring an object to handle saves to local storage. If local storage record exists this isn't used.
let plans = {taskHour0: "",taskHour1: "",taskHour2: "",taskHour3: "",taskHour4: "",taskHour5: "",taskHour6: "",taskHour7: "",taskHour8: ""}

// Function for dynamically creating calendar.
function generateCal () {
    if (!localStorage.getItem('plans')) {
        localStorage.setItem('plans',JSON.stringify(plans));
    } else {
        plans = JSON.parse(localStorage.getItem('plans'));
    }
    let hours = ['9:00 a.m.', '10:00 a.m.', '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.', '3:00 p.m.', '4:00 p.m.', '5:00 p.m.']
    for (let i = 0; i < 9; i++) {
        $(".container").append(`<div id="timeSlot${i}" class="timeBlock"></div>`);
        $(`#timeSlot${i}`).append(`<div class="label"><label>${hours[i]}</lable><span id="saveInfo${i}"></span></div>`);
        $(`#timeSlot${i}`).append(`<div class="buttonBlock"><input id="taskHour${i}" data-value="taskHour${i}" value="" /><button class="add" id="taskHourAdd${i}" data-value="${i}">✅</button><button class="remove" id="taskHourRem${i}" data-value="${i}">❌</button></div>`);
        $("#taskHour" + i).val(plans["taskHour" + i]);
        $("#taskHour" + i).attr("data-hour", (i + 9));
        if (($("#taskHour" + i).attr("data-hour")) < now) {
            $("#taskHour" + i).css("background-color", "#cccccc");
        }
        if (($("#taskHour" + i).attr("data-hour")) == now) {
            $("#taskHour" + i).css("background-color", "#e2a2a7");
        }
        if (($("#taskHour" + i).attr("data-hour")) > now) {
            $("#taskHour" + i).css("background-color", "#b4f8c3");
        }
        }
}
// Calling the calendar function.
generateCal();

// Function for saving events to local storage.
function addPlans(event) {
    event.preventDefault();
    let plansKey = $(this).siblings('input').attr('data-value');
    let newPlan = $(this).siblings("input").val();
    plans[plansKey] = newPlan;
    localStorage.setItem("plans", JSON.stringify(plans));
}

// Function for removing events from local storage.
function removePlans(event) {
    event.preventDefault();
    let plansKey = $(this).siblings('input').attr('data-value');
    $(this).siblings("input").val('');
    let newPlan = $(this).siblings("input").val();
    plans[plansKey] = newPlan;
    localStorage.setItem("plans", JSON.stringify(plans));
}

// Event listeners for the save/remove buttons.
$(".timeBlock").on('click', `.add`, addPlans);
$(".timeBlock").on('click', `.remove`, removePlans);