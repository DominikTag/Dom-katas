$("html").ready(function () {
    $(".dice").click(async function () {
        const adviceObject = await getAdvice();
        updateAdviceNumber(adviceObject.adviceID);
        updateAdviceText(adviceObject.adviceText);
    })
})

async function getAdvice() {
    const response = await $.ajax({
        url: "https://api.adviceslip.com/advice",
        type: "GET"
    })
    const result = JSON.parse(response);

    return {
        adviceID: result.slip.id,
        adviceText: result.slip.advice
    }
}

function updateAdviceNumber(adviceID) {
    $("#adviceNumber").fadeOut(700, function() {
        $(this).text(`Advice #${adviceID}`).fadeIn(700);
    })
}

function updateAdviceText(adviceText) {
    $("#adviceText").fadeOut(700, function() {
        $(this).text(`${adviceText}`).fadeIn(700);
    })
}