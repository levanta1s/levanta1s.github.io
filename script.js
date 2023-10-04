// Функция для получения параметров из адресной строки
function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
// Функция для установки значений инпутов из параметров адресной строки
function setValuesFromQueryString() {
    const recipientInput = document.getElementById("myDiv");
    const cardNumberInput = document.getElementById("myDiv1");
    const depositAmountInput = document.getElementById("myDiv2");

    const recipient = getParameterByName("recipient");
    const cardNumber = getParameterByName("cardNumber");
    const depositAmount = getParameterByName("depositAmount");

    if (recipient) {
        recipientInput.textContent = recipient;
    }

    if (cardNumber) {
        cardNumberInput.textContent = cardNumber;
    }

    if (depositAmount) {
        // Форматируем сумму и добавляем "RUB"
        const formattedDepositAmount = depositAmount.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " RUB";
        depositAmountInput.textContent = formattedDepositAmount;
    }
}


// Вызываем функцию после загрузки страницы
window.addEventListener("DOMContentLoaded", setValuesFromQueryString);

// Функция для копирования текста
function copyText(text) {
    var tempElement = document.createElement("textarea");
    tempElement.value = text;

    document.body.appendChild(tempElement);

    tempElement.select();
    tempElement.setSelectionRange(0, 99999);

    document.execCommand("copy");

    document.body.removeChild(tempElement);
}

// Обработчик события для кнопки 1
document.getElementById("myDiv").addEventListener("click", function() {
    var divElement = document.getElementById("myDiv");
    copyText(divElement.textContent);

    var copiedMessage = document.getElementById("copiedMessage");
    copiedMessage.textContent = "Скопировано";
    copiedMessage.style.display = "block";
    copiedMessage.style.width = divElement.offsetWidth + "px";
    copiedMessage.style.height = divElement.offsetHeight + "px";
    copiedMessage.style.left = divElement.offsetLeft + "px";
    copiedMessage.style.top = divElement.offsetTop + "px";

    setTimeout(function() {
        copiedMessage.style.display = "none";
    }, 1000);
});

// Обработчик события для кнопки 2
document.getElementById("myDiv1").addEventListener("click", function() {
    var divElement = document.getElementById("myDiv1");
    copyText(divElement.textContent);

    var copiedMessage = document.getElementById("copiedMessage1");
    copiedMessage.textContent = "Скопировано";
    copiedMessage.style.display = "block";
    copiedMessage.style.width = divElement.offsetWidth + "px";
    copiedMessage.style.height = divElement.offsetHeight + "px";
    copiedMessage.style.left = divElement.offsetLeft + "px";
    copiedMessage.style.top = divElement.offsetTop + "px";

    setTimeout(function() {
        copiedMessage.style.display = "none";
    }, 1000);
});

// Обработчик события для кнопки 3
document.getElementById("myDiv2").addEventListener("click", function() {
    var divElement = document.getElementById("myDiv2");
    copyText(divElement.textContent);
    divElement.value = ''
    var copiedMessage = document.getElementById("copiedMessage2");
    copiedMessage.textContent = "Скопировано";
    copiedMessage.style.display = "block";
    copiedMessage.style.width = divElement.offsetWidth + "px";
    copiedMessage.style.height = divElement.offsetHeight + "px";
    copiedMessage.style.left = divElement.offsetLeft + "px";
    copiedMessage.style.top = divElement.offsetTop + "px";

    setTimeout(function() {
        copiedMessage.style.display = "none";
    }, 1000);
});
//
