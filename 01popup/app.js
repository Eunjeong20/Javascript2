

// 로드 이벤트가 발생했을 때 해당 리스너 함수를  실행해줘
// window.onload = function() {}  
window.addEventListener("load", function() {
    let btn = document.querySelector("#btnOpenPopup");
    let modal = document.querySelector("#modal-container");
    let selectOption = document.querySelector("#popupOption");

    btn.addEventListener("click", function() {
        modal.classList.add(selectOption.value);
    });

    modal.addEventListener("click", function(e) {
        // console.log(e);
        modal.classList.add("out");  // 닫힐 때 out을 달아준다

        //1.3초 이후에 out과 on을 둘 다 빼줘야 함
        setTimeout(function() {
            modal.classList.remove(selectOption.value, "out");
        },  1300);
    });
});

// js 이벤트 전파 -> 버블링, 캡쳐링, 위임



/*
function Add (a, b) {
    return a+b;
}

function Test (value, callback) {
    console.log(arguments);
    console.log(value);
    return callback(2, 3);
}

Test(10, Add);
*/