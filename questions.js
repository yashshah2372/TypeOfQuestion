const a = document.getElementById("hide");
const b = document.getElementById("hide2");
const c = document.getElementById("hide3");
const d = document.getElementById("first");
const e = document.getElementById("second");
const f = document.getElementById("third");
function func() {  //Crypto
    d.style.display = "block";
    e.style.display = "none";
    f.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    if (a.style.display === "none") {
        a.style.display = "block"
    }
    else {
        a.style.display = "none"
        e.style.display = "block";
        f.style.display = "block";
    }
};
function func1() {
    e.style.display = "block";
    d.style.display = "none";
    f.style.display = "none";
    a.style.display = "none";
    c.style.display = "none";
    if (b.style.display === "none") {
        b.style.display = "block"
    }
    else {
        b.style.display = "none"
        d.style.display = "block";
        f.style.display = "block";
    }
};
function func2() {
    f.style.display = "block";
    d.style.display = "none";
    e.style.display = "none";
    a.style.display = "none";
    b.style.display = "none";
    if (c.style.display === "none") {
        c.style.display = "block"
    }
    else {
        c.style.display = "none"
        d.style.display = "block";
        e.style.display = "block";
    }
};
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}