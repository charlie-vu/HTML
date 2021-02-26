var a, b, s, h, m, d;

function nhap_a(){
    a = prompt("Nhập số a:")
    document.writeln("Số a nhập vào là: " + a)
    document.writeln("<br/>")
}
function nhap_b(){
    b = prompt("Nhập số b:")
    document.writeln("Số b nhập vào là: " + b)
    document.writeln("<br/>")

}
function cong(){
    s = parseInt(a) + parseInt(b);
}
function tru(){
    h = parseInt(a) - parseInt(b);
}
function nhan(){
    m = parseInt(a)*parseInt(b);
}
function chia(){
    d = parseInt(a)/parseInt(b);
}
function inketqua(){
    document.writeln(a + " + " + b + " = " + s)
    document.writeln("<br/>")
    document.writeln(a + " - " + b + " = " + h)
    document.writeln("<br/>")
    document.writeln(a + " x " + b + " = " + m)
    document.writeln("<br/>")
    document.writeln(a + " : " + b + " = " + d)
    document.writeln("<br/>")
}


nhap_a()
nhap_b()
cong()
tru()
nhan()
chia()
inketqua()

