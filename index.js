/*Bài 1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... n > 1000 
    */
   document.getElementById('btnTimSo').onclick=function(){
    var tong =0;
   var i = 1;
   while (tong<=1000) {
    tong+=i;
    i++;
   }
   i=i-1;
   document.getElementById('ketQua').innerHTML ='Số cần tìm là: ' + i;
}
//  Bài 2: Viết chương trình nhập vào 2 sô x, n tính tổng: S(n)= x + x^2 + x^3 + ... + x^n (Sử dụng vòng lặp và hàm)
function haiSo () {
    // input: number
    var x = document.getElementById("so1").value * 1;
    var n = document.getElementById("so2").value * 1;
// output: number
var tong = 0;
var i=1
while (i<=n) {
tong = tong + soMu(x,i);
i++;
}
document.getElementById('ketQua2').innerHTML = 'kết quả là: ' + tong;
}

function soMu(x,n) {
    var ketQua=x;
    var i=2;
    while (i<=n) {
        ketQua=ketQua*x;
        i++;
    }
    return ketQua;
}
// Bài 3: TÍnh giai thừa
document.getElementById('btnTinhGiaiThua').onclick=function(){
    // input: number
    var so = +document.getElementById('nhapSo3').value;
    // output: number
    var ketQua3 = 1;
    for (let i = 1; i <= so; i++) {
        ketQua3 *= i;
    }
    document.getElementById('ketQua3').innerHTML = so + '!= ' + ketQua3;
}
// Bài 4: In ra 10 thẻ div
document.getElementById('btnIn').onclick=function(){
    // output: string
    var ketQua4 = '';
    var i=1;
    while (i<=10) {
        if(i%2===0){
            ketQua4+= '<div class="alert bg-danger w-50 mb-2"></div>'
        }else{
            ketQua4 += '<div class="alert bg-primary w-50 mb-2"></div>'
        }
        i++;
    };
    document.getElementById('ketQua4').innerHTML = ketQua4;
}
// Bài 5:
document.getElementById('btnInSoNT').onclick=function(){
    // input: number
    var number = +document.getElementById('nhapSo5').value;
    // output: string
    var ketQua5 ='';
    var soNT ='';
    for (let i = 2; i <=number; i++) {
        var checkSNT = kiemTraSNT(i);
        if (checkSNT) {
            soNT = i +', ';
            ketQua5 += soNT;
        }
    }
    var SNT ='';
    SNT =soNT.replace(',','.');
    ketQua5=ketQua5.replace(soNT,SNT);
    document.getElementById('ketQua5').innerHTML ='Các số nguyên tố là: ' + ketQua5;
}
function kiemTraSNT(so) {
    var checkSNT = true;
    for (let i = 2; i <= Math.sqrt(so); i++) {
        if(so%i===0){
            checkSNT =false;
            break;
        }
    };
    return checkSNT;
    }
