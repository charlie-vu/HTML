var a,b,x;
function nhap_a(){
    a = prompt("Nhập giá trị a:");
    console.log("a = " + a)

    if (isNaN(a)){
        alert("Hãy nhập vào số!");

        document.getElementById("button-a").classList.replace("alert-none", "alert-NaN");
        document.getElementById("button-a").classList.replace("alert-ok", "alert-NaN");
        document.getElementById("alert-text").style.display = "block";
    }
    else{
        document.getElementById("button-a").classList.replace("alert-none", "alert-ok");
        document.getElementById("button-a").classList.replace("alert-NaN", "alert-ok");
        document.getElementById("alert-text").style.display = "none";
    }

    if (!isNaN(a) && !isNaN(b)){
        document.getElementById("alert-text-ok").style.display = "block";
        // document.getElementById("alert-text").style.display = "none";
    }
    else {
        document.getElementById("alert-text-ok").style.display = "none";
        // document.getElementById("alert-text").style.display = "block";
    }
}

function nhap_b(){
    b = prompt("Nhập giá trị b:");
    console.log("b = " + b)

    if (isNaN(b)){
        alert("Hãy nhập vào số!");

        document.getElementById("button-b").classList.replace("alert-none", "alert-NaN");
        document.getElementById("button-b").classList.replace("alert-ok", "alert-NaN");
        // document.getElementById("alert-text").style.display = "block";
    }
    else{
        document.getElementById("button-b").classList.replace("alert-none", "alert-ok");
        document.getElementById("button-b").classList.replace("alert-NaN", "alert-ok");
        // document.getElementById("alert-text").style.display = "none";
    }
    if (!isNaN(a) && !isNaN(b)){
        document.getElementById("alert-text-ok").style.display = "block";
    } else document.getElementById("alert-text-ok").style.display = "none";
}

function in_ket_qua(){
    if (a == 0){
        alert("Phương trình vô nghiệm!");
    }
    else if (b == 0){
        alert("Phương trình có vô số nghiệm!");
    }
    else{
        x = -b/a;
        console.log(x);

        if (isNaN(x)){
            alert("Giá trị a và b phải là số!")
        }
        else alert("Kết quả x là: " + x);
    }
}
function reset(){
    location.reload()
}


