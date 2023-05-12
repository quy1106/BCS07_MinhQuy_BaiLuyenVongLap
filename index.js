// bài 2
function haiSo () {
    var x = document.getElementById("so1").value * 1;
    var n = document.getElementById("so2").value * 1;

    console.log(x);
    console.log(n);

    var tong = 0;
    var tich = 1;

    for (i=1; i <= n; i++) {
        tich = tich * x;
        tong += tich;
    }

    console.log(tong);

    document.querySelector(".bg-danger").innerHTML = tong;
}
