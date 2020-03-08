
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJsaWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sImZpbGUiOiJsaWIuanMifQ==

(function () {
    let nav = document.querySelector('.nav');
    let closeBtn = nav.querySelector('.close');
    let menu = document.querySelector('.header__menu-btn');
    closeBtn.addEventListener('click', ()=>{
        nav.style.right = '-530px';
    });
    menu.addEventListener('click', ()=>{
        nav.style.right = '0px';
    });
}());
let nav = document.querySelector('.nav');
let navDateHeader = nav.querySelector('.nav__date-header');
let navDate = nav.querySelector('.nav__date');
let navCountry = nav.querySelector('.nav__country');
let navType = nav.querySelector('.nav__type-wrapper');
let datePicker = nav.querySelector('.date-picker-area');
let footerContact = nav.querySelector('.footer__contact');
navDateHeader.addEventListener('click', ()=>{
   // footerContact.classList.toggle('none');
   datePicker.classList.toggle('none');
   navType.classList.toggle('none');
   navCountry.classList.toggle('none');
   navDate.classList.toggle('width280');
});


function createCalendar(id, year, month) {

    var div = document.getElementById(id);

    var date = new Date(year, month);
    var lastMonthDate = new Date(date.getFullYear(), (date.getMonth() + 1), 0);
    var lastMonthDay = lastMonthDate.getDate();
    var firstMonthDay = date;
    firstMonthDay.setDate(1);
    // var differenceDay = lastMonthDay - date.getDate();

    var arrMonth = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь"
    ]


    function createHeaderCal () {
        var table = document.createElement("table");
        table.setAttribute("cols", 7);
        var caption = document.createElement("caption");
        var currentMonth = date.getMonth();
        caption.textContent = arrMonth[currentMonth] + " " + date.getFullYear();
        var tbody = document.createElement("tbody");
        var tr = document.createElement("tr");

        var arrDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

        for (var i = 0; i < 7; i++) {
            var th = document.createElement("th");
            if (i === 5 || i === 6) {
                th.className = "dayOff";
            }
            th.textContent = arrDays[i];
            tr.appendChild(th);
        }

        tbody.appendChild(tr);
        table.appendChild(caption);
        table.appendChild(tbody);
        div.appendChild(table);
    }
    createHeaderCal();


    function checkOfRows(date) {

        var a = firstMonthDay.getDay();
        a = (a !== 0) ? a : 7;
        console.log("первый день месяца - " + a);

        // проверка на высокосный год

        function checkleapYear() {
            if ( (lastMonthDay === 28) && (a === 1) ) {
                return 4;
            } else if ( ((lastMonthDay === 31) && (a === 6)) ||
                ((lastMonthDay === 30) && (a === 7)) ||
                ((lastMonthDay === 31) && (a === 7))    ) {
                return 6;
            } else {
                return 5;
            }
        }

        console.log("количество строк в календаре = " + checkleapYear());

        var objFirstMonthDay = {
            firstMonthDay: a,
            quantytysRows: checkleapYear()
        };
        return objFirstMonthDay;
    }
    // checkOfRows(date);

    function createBodyCal() {

        var quantytysRows = +checkOfRows(date).quantytysRows;
        var dayOfWeek = checkOfRows(date).firstMonthDay;
        var tbody = document.getElementsByTagName("tbody")[0];
        var q = 1;
        var v = 1;

        for (var i = 0; i < quantytysRows; i++) {
            var tr = document.createElement("tr");
            for (var n = 0; n < 7; n++) {
                var td = document.createElement("td");
                if (n === 5 || n === 6) {
                    td.className = "dayOff";
                }
                if ( (q >= dayOfWeek) && (v <= lastMonthDay) ) {
                    td.textContent = v;
                    console.log("q = " + q + "; v = " + v);
                    v++;
                } else {
                    td.textContent = " ";
                }

                tr.appendChild(td);
                q++;
            }
            tbody.appendChild(tr);
        }
    }

    createBodyCal()
}

var year  = /* prompt("Введите интересующий Вас год", " */2020/* ") */;
var month  = /* +prompt("Введите интересующий Вас месяц", " */2/* ") - 1 */;

function right() {
    var a = document.getElementById("cal");
    a.innerHTML = "";
    month = month + 1;
    createCalendar("cal", year, month);
}

function left() {
    var a = document.getElementById("cal");
    a.innerHTML = "";
    month = month - 1;
    createCalendar("cal", year, month);
}

createCalendar("cal", year, month);


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xyXG4gICAgbGV0IGNsb3NlQnRuID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xyXG4gICAgbGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51LWJ0bicpO1xyXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIG5hdi5zdHlsZS5yaWdodCA9ICctNTMwcHgnO1xyXG4gICAgfSk7XHJcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICBuYXYuc3R5bGUucmlnaHQgPSAnMHB4JztcclxuICAgIH0pO1xyXG59KCkpO1xyXG5sZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xyXG5sZXQgbmF2RGF0ZUhlYWRlciA9IG5hdi5xdWVyeVNlbGVjdG9yKCcubmF2X19kYXRlLWhlYWRlcicpO1xyXG5sZXQgbmF2RGF0ZSA9IG5hdi5xdWVyeVNlbGVjdG9yKCcubmF2X19kYXRlJyk7XHJcbmxldCBuYXZDb3VudHJ5ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2NvdW50cnknKTtcclxubGV0IG5hdlR5cGUgPSBuYXYucXVlcnlTZWxlY3RvcignLm5hdl9fdHlwZS13cmFwcGVyJyk7XHJcbmxldCBkYXRlUGlja2VyID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlLXBpY2tlci1hcmVhJyk7XHJcbmxldCBmb290ZXJDb250YWN0ID0gbmF2LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXJfX2NvbnRhY3QnKTtcclxubmF2RGF0ZUhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgIC8vIGZvb3RlckNvbnRhY3QuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpO1xyXG4gICBkYXRlUGlja2VyLmNsYXNzTGlzdC50b2dnbGUoJ25vbmUnKTtcclxuICAgbmF2VHlwZS5jbGFzc0xpc3QudG9nZ2xlKCdub25lJyk7XHJcbiAgIG5hdkNvdW50cnkuY2xhc3NMaXN0LnRvZ2dsZSgnbm9uZScpO1xyXG4gICBuYXZEYXRlLmNsYXNzTGlzdC50b2dnbGUoJ3dpZHRoMjgwJyk7XHJcbn0pO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFyKGlkLCB5ZWFyLCBtb250aCkge1xyXG5cclxuICAgIHZhciBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCk7XHJcbiAgICB2YXIgbGFzdE1vbnRoRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgKGRhdGUuZ2V0TW9udGgoKSArIDEpLCAwKTtcclxuICAgIHZhciBsYXN0TW9udGhEYXkgPSBsYXN0TW9udGhEYXRlLmdldERhdGUoKTtcclxuICAgIHZhciBmaXJzdE1vbnRoRGF5ID0gZGF0ZTtcclxuICAgIGZpcnN0TW9udGhEYXkuc2V0RGF0ZSgxKTtcclxuICAgIC8vIHZhciBkaWZmZXJlbmNlRGF5ID0gbGFzdE1vbnRoRGF5IC0gZGF0ZS5nZXREYXRlKCk7XHJcblxyXG4gICAgdmFyIGFyck1vbnRoID0gW1xyXG4gICAgICAgIFwi0K/QvdCy0LDRgNGMXCIsXHJcbiAgICAgICAgXCLQpNC10LLRgNCw0LvRjFwiLFxyXG4gICAgICAgIFwi0JzQsNGA0YJcIixcclxuICAgICAgICBcItCQ0L/RgNC10LvRjFwiLFxyXG4gICAgICAgIFwi0JzQsNC5XCIsXHJcbiAgICAgICAgXCLQmNGO0L3RjFwiLFxyXG4gICAgICAgIFwi0JjRjtC70YxcIixcclxuICAgICAgICBcItCQ0LLQs9GD0YHRglwiLFxyXG4gICAgICAgIFwi0KHQtdC90YLRj9Cx0YDRjFwiLFxyXG4gICAgICAgIFwi0J7QutGC0Y/QsdGA0YxcIixcclxuICAgICAgICBcItCd0L7Rj9Cx0YDRjFwiLFxyXG4gICAgICAgIFwi0JTQtdC60LDQsdGA0YxcIlxyXG4gICAgXVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXJDYWwgKCkge1xyXG4gICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0YWJsZS5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIDcpO1xyXG4gICAgICAgIHZhciBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhcHRpb25cIik7XHJcbiAgICAgICAgdmFyIGN1cnJlbnRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gYXJyTW9udGhbY3VycmVudE1vbnRoXSArIFwiIFwiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHZhciB0Ym9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICB2YXIgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgICAgIHZhciBhcnJEYXlzID0gW1wi0J/QvVwiLCBcItCS0YJcIiwgXCLQodGAXCIsIFwi0KfRglwiLCBcItCf0YJcIiwgXCLQodCxXCIsIFwi0JLRgVwiXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gNSB8fCBpID09PSA2KSB7XHJcbiAgICAgICAgICAgICAgICB0aC5jbGFzc05hbWUgPSBcImRheU9mZlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoLnRleHRDb250ZW50ID0gYXJyRGF5c1tpXTtcclxuICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGNhcHRpb24pO1xyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRib2R5KTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGFibGUpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlSGVhZGVyQ2FsKCk7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrT2ZSb3dzKGRhdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIGEgPSBmaXJzdE1vbnRoRGF5LmdldERheSgpO1xyXG4gICAgICAgIGEgPSAoYSAhPT0gMCkgPyBhIDogNztcclxuICAgICAgICBjb25zb2xlLmxvZyhcItC/0LXRgNCy0YvQuSDQtNC10L3RjCDQvNC10YHRj9GG0LAgLSBcIiArIGEpO1xyXG5cclxuICAgICAgICAvLyDQv9GA0L7QstC10YDQutCwINC90LAg0LLRi9GB0L7QutC+0YHQvdGL0Lkg0LPQvtC0XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrbGVhcFllYXIoKSB7XHJcbiAgICAgICAgICAgIGlmICggKGxhc3RNb250aERheSA9PT0gMjgpICYmIChhID09PSAxKSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA0O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAoKGxhc3RNb250aERheSA9PT0gMzEpICYmIChhID09PSA2KSkgfHxcclxuICAgICAgICAgICAgICAgICgobGFzdE1vbnRoRGF5ID09PSAzMCkgJiYgKGEgPT09IDcpKSB8fFxyXG4gICAgICAgICAgICAgICAgKChsYXN0TW9udGhEYXkgPT09IDMxKSAmJiAoYSA9PT0gNykpICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDY7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCLQutC+0LvQuNGH0LXRgdGC0LLQviDRgdGC0YDQvtC6INCyINC60LDQu9C10L3QtNCw0YDQtSA9IFwiICsgY2hlY2tsZWFwWWVhcigpKTtcclxuXHJcbiAgICAgICAgdmFyIG9iakZpcnN0TW9udGhEYXkgPSB7XHJcbiAgICAgICAgICAgIGZpcnN0TW9udGhEYXk6IGEsXHJcbiAgICAgICAgICAgIHF1YW50eXR5c1Jvd3M6IGNoZWNrbGVhcFllYXIoKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIG9iakZpcnN0TW9udGhEYXk7XHJcbiAgICB9XHJcbiAgICAvLyBjaGVja09mUm93cyhkYXRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCb2R5Q2FsKCkge1xyXG5cclxuICAgICAgICB2YXIgcXVhbnR5dHlzUm93cyA9ICtjaGVja09mUm93cyhkYXRlKS5xdWFudHl0eXNSb3dzO1xyXG4gICAgICAgIHZhciBkYXlPZldlZWsgPSBjaGVja09mUm93cyhkYXRlKS5maXJzdE1vbnRoRGF5O1xyXG4gICAgICAgIHZhciB0Ym9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF07XHJcbiAgICAgICAgdmFyIHEgPSAxO1xyXG4gICAgICAgIHZhciB2ID0gMTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxdWFudHl0eXNSb3dzOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDc7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gPT09IDUgfHwgbiA9PT0gNikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRkLmNsYXNzTmFtZSA9IFwiZGF5T2ZmXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIChxID49IGRheU9mV2VlaykgJiYgKHYgPD0gbGFzdE1vbnRoRGF5KSApIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZC50ZXh0Q29udGVudCA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJxID0gXCIgKyBxICsgXCI7IHYgPSBcIiArIHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIHYrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSBcIiBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgICAgICBxKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCb2R5Q2FsKClcclxufVxyXG5cclxudmFyIHllYXIgID0gLyogcHJvbXB0KFwi0JLQstC10LTQuNGC0LUg0LjQvdGC0LXRgNC10YHRg9GO0YnQuNC5INCS0LDRgSDQs9C+0LRcIiwgXCIgKi8yMDIwLyogXCIpICovO1xyXG52YXIgbW9udGggID0gLyogK3Byb21wdChcItCS0LLQtdC00LjRgtC1INC40L3RgtC10YDQtdGB0YPRjtGJ0LjQuSDQktCw0YEg0LzQtdGB0Y/RhlwiLCBcIiAqLzIvKiBcIikgLSAxICovO1xyXG5cclxuZnVuY3Rpb24gcmlnaHQoKSB7XHJcbiAgICB2YXIgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsXCIpO1xyXG4gICAgYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbW9udGggPSBtb250aCArIDE7XHJcbiAgICBjcmVhdGVDYWxlbmRhcihcImNhbFwiLCB5ZWFyLCBtb250aCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxlZnQoKSB7XHJcbiAgICB2YXIgYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FsXCIpO1xyXG4gICAgYS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgbW9udGggPSBtb250aCAtIDE7XHJcbiAgICBjcmVhdGVDYWxlbmRhcihcImNhbFwiLCB5ZWFyLCBtb250aCk7XHJcbn1cclxuXHJcbmNyZWF0ZUNhbGVuZGFyKFwiY2FsXCIsIHllYXIsIG1vbnRoKTtcclxuXHJcbiJdLCJmaWxlIjoibWFpbi5qcyJ9
