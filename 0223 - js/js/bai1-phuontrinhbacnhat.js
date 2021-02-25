// Cho phương trình bậc nhất như sau
// a*x + b= 0
// Với a, b là số nguyên => tạo ngẫu nhiên
// Hiển thị kết quả của x ra màn hình 


var a = prompt("Nhập giá trị a:")
console.log("a = " + a)
var b = prompt("Nhập giá trị b:")
console.log("b = " + b)

if (isNaN(a) || isNaN(b)){
    alert("Hãy nhập vào số!")
}
else if (a == 0){
    alert("Phương trình vô nghiệm!")
}
else if (b == 0) {
    alert("Phương trình có vô số nghiệm!")
}
else{
    x = -b/a
    console.log(x)
    alert("Kết quả x là: " + x)
}
