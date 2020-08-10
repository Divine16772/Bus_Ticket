var images = [];
for (i = 1; i < 30; i++) {
    images = [...images, "./images/bus (" + i + ").jpg"];
}
Promise.resolve($(".card.reserve.step1").css("transform", "translateY(-230px)"))
    .then(() => {


    })

var places = ["kumba", "yaounde","buea", "bamenda", "ngoundere", "douala","limbe","mamfe","edea","tiko","ebolowa","adamawa"];
var times = ["7:00 AM", "9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
var categories = ["First class", "V.I.P", "normal"]

function goToNext() {
    $(".search-result").css("visibility","hidden");
    if($(".step1 form input")[0].value==$(".step1 form input")[1].value && $(".step1 form input")[1].value==$(".step1 form input")[2].value && $(".step1 form input")[1].value==''){
        return;
    }
    $("#dest").html($("#dest-input").val())
    $(".card.reserve.step1").css("transform", "translateX(-1000px)").fadeToggle(800, () => {
        $(".card.reserve.step2").show(800).css("transform", "translateY(-230px) translateX(0px)");
        $(".hero-img").fadeToggle(400, () => {
            setHeroImg();
            $("html").scrollTop(160);
        }).fadeToggle(600)

    });
    
    console.log(3);

}

function goBack() {
    $(".card.reserve.step2").css("transform", "translateX(-1000px)").hide(800, () => {
        $(".card.reserve.step1").fadeToggle(800).css("transform", "translateY(-230px) translateX(0px)");
        $("html").scrollTop(90);
    });

}

var scroll = 0;

function toogleHeader(event) {
    console.log("in")
    console.log($(event).scroll())
}

function destinationResult(places, selector) {
    var field = "",
        array;
    field = (selector == ".search-result.time") ? "#time-input" : (selector == ".search-result.dest") ? "#dest-input" : "#cat-input";

    $(selector).css("visibility", "visible").html(places.map((place, index) => (`<div onclick='changeValue(${index},"${selector}","${field}")' class="item link">${place}</div>`)))

}
//, selector,"#time-input"
function suggest(event) {
    const value = event.target.value.toLowerCase();
    $(".search-result").css("visibility", "hidden");

    if (event.target.id == 'dest-input') {
        const selector = '.search-result.dest'
        destinationResult(places.filter(place => (place.toLowerCase().match(value))), selector);
        $(".search-result.dest").css("visibility", "visible");
    } else if (event.target.id == 'time-input') {
        const selector = '.search-result.time'
        destinationResult(times.filter(time => (time.toLowerCase().match(value))), selector)
        $(".search-result.time").css("visibility", "visible");
    } else if (event.target.id == 'cat-input') {
        const selector = '.search-result.cat'
        destinationResult(categories.filter(category => (category.toLowerCase().match(value))), selector)
        $(".search-result.cat").css("visibility", "visible");
    } else {
        confirm("eroor")
    }
}

function changeValue(index, selector, inputField) {
    const value = $(inputField).val()
    const array = (selector == ".search-result.time") ? times : (selector == ".search-result.dest") ? places : categories;

    const p = array.filter(element => (element.match(value)));
    console.log()
    $(inputField).val("" + p[index]).show(100, () => {
        $(selector).css("visibility", "hidden");
    });
}

function dismissSugg() {

}

//var places = ["kumba", "buea", "canada", "yaounde", "bamenda", "maroua","douala",
//"limbe","mamfe","edea","tiko","ebolowa","adamawa"];
function setHeroImg() {
    var n;
    switch ($("#dest-input").val()) {
        case "kumba":
            n = 16;
            break;
        case "buea":
            n = 11;
            break;
        case "yaounde":
            n = 14;
            break;
        case "bamenda":
            n = 10;
            break;
        case "ngoundere":
            n = 20;
            break;
        case "maroua":
            n = 22;
            break;
        case "douala":
            n = 9;
            break;
        case "limbe":
            n = 15;
           break;
           
        case "mamfe":
            n = 3;
           break;
           
        case "edea":
            n = 5;
           break;
           
        case "ebolowa":
            n = 12;
           break;
           
        case "adamawa":
            n = 19;
           break;
           
        case "tiko":
            n = 9;
           break;
    
        default:
            n = 30
            break;
    }
    $(".hero-img")[0].src = $(".hero-img")[1].src = images[n - 1];

}

$("input").blur(() => {
    // $(".search-result").css("visibility","hidden");
})