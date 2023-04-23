// ================to disable right click====================
document.body.addEventListener('contextmenu', (e) => {
    alert("You were not allowed to right click on this page")
    e.preventDefault();
})
// page swap = = = = = = = == = = = = = = = = =
function run1() {
    document.getElementById("sec1").classList.remove("none")
    document.getElementById("sec2").classList.add("none")
    document.getElementById("sec3").classList.add("none")
    document.getElementById("sec4").classList.add("none")
}
function run2() {
    document.getElementById("sec2").classList.remove("none")
    document.getElementById("sec1").classList.add("none")
    document.getElementById("sec3").classList.add("none")
    document.getElementById("sec4").classList.add("none")
}
function run3() {
    document.getElementById("sec3").classList.remove("none")
    document.getElementById("sec2").classList.add("none")
    document.getElementById("sec1").classList.add("none")
    document.getElementById("sec4").classList.add("none")
}
function run4() {
    document.getElementById("sec4").classList.remove("none")
    document.getElementById("sec2").classList.add("none")
    document.getElementById("sec1").classList.add("none")
    document.getElementById("sec3").classList.add("none")
}


// timer = = = = = = = = = = = = = = =
let time1 = "april 23, 2023 12:00:00"
// let time2 = "april 21, 2022 10:35:00"
// let time3 = "oct 8, 2022 10:40:00"
// let time4 = "oct 8, 2022 12:30:00"
let time5 = "april 23, 2023 13:30:00"


let interval = setInterval(() => {
    const till = new Date(time1).getTime();
    const now = till - new Date().getTime();
    const days = Math.floor(now / (1000 * 60 * 60 * 24));
    const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor(now % (1000 * 60) / 1000);
    if (now < 0) {
        document.getElementById("type1").classList.remove("none")
        document.getElementById("sec1").classList.remove("none")
        document.getElementById("before").classList.add("none")
            // document.getElementById('png1').src = "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg"
            document.getElementById('png1').src = "./images/img1.png"
            document.getElementById('png2').src = "./images/img2.png"
            document.getElementById('png3').src = "./images/img3.png"
            document.getElementById('png4').src = "./images/img4.png"
            // console.log(document.getElementsByClassName('reqlist'));
        forth();
        clr()
    }
    else {
        // console.log(document.getElementById("time_info"))
        document.getElementById("time_info").innerHTML = `&#160;&#160;&#160; Battle start in:`
        document.getElementById("hrs").innerText = `  ${hours}`
        document.getElementById("min").innerText = `:  ${minute}`
        document.getElementById("sec").innerText = `:  ${second}`
    }
}, 1000);
function clr() {
    clearInterval(interval)
}

// function first() {
//     let interval0 = setInterval(() => {
//         const till = new Date(time2).getTime();
//         const now = till - new Date().getTime();
//         const days = Math.floor(now / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
//         const second = Math.floor(now % (1000 * 60) / 1000);
//         if (now < 0) {
//             document.getElementById("type2").classList.remove("none")
//             Second();
//             clr0()
//         }
//         else {
//             document.getElementById("time_info").innerHTML = `&#160;&#160;&#160; Next image in:`
//             document.getElementById("hrs").innerText = `  ${hours}`
//             document.getElementById("min").innerText = `:  ${minute}`
//             document.getElementById("sec").innerText = `:  ${second}`
//         }
//     }, 1000);
//     function clr0() {
//         clearInterval(interval0);
//     }
// }

// function Second() {
//     let interval1 = setInterval(() => {
//         const till = new Date(time3).getTime();
//         const now = till - new Date().getTime();
//         const days = Math.floor(now / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
//         const second = Math.floor(now % (1000 * 60) / 1000);
//         if (now < 0) {
//             document.getElementById("type3").classList.remove("none")
//             forth()
//             clr1()
//         }
//         else {
//             document.getElementById("time_info").innerHTML = `&#160;&#160;&#160; Next image in:`
//             document.getElementById("hrs").innerText = `  ${hours}`
//             document.getElementById("min").innerText = `:  ${minute}`
//             document.getElementById("sec").innerText = `:  ${second}`
//         }
//     }, 1000);
//     function clr1() {
//         clearInterval(interval1);
//     }
// }

// function third() {
//     let interval2 = setInterval(() => {
//         const till = new Date(time4).getTime();
//         const now = till - new Date().getTime();
//         const days = Math.floor(now / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
//         const second = Math.floor(now % (1000 * 60) / 1000);
//         if (now < 0) {
//             document.getElementById("type4").classList.remove("none")
//             forth()
//             clr2()

//             document.getElementById("hrs").innerText = `  00`
//             document.getElementById("min").innerText = `:  00`
//             document.getElementById("sec").innerText = `:  00`
//         }
//         else {
//             document.getElementById("time_info").innerHTML = `&#160;&#160;&#160; Next image in:`
//             document.getElementById("hrs").innerText = `  ${hours}`
//             document.getElementById("min").innerText = `:  ${minute}`
//             document.getElementById("sec").innerText = `:  ${second}`
//         }
//     }, 1000);
//     function clr2() {
//         clearInterval(interval2);
//     }
// }
function forth() {
    let interval2 = setInterval(() => {
        const till = new Date(time5).getTime();
        const now = till - new Date().getTime();
        const days = Math.floor(now / (1000 * 60 * 60 * 24));
        const hours = Math.floor((now % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minute = Math.floor((now % (1000 * 60 * 60)) / (1000 * 60));
        const second = Math.floor(now % (1000 * 60) / 1000);
        if (now < 0) {
            document.getElementById("after").classList.remove("none")
            clr3()
            document.getElementById("time_info").innerHTML = `Battle over`
            document.getElementById("time_info").style.color = `red`
            document.getElementById("time_info").style.fontSize = `2rem`
            document.getElementById("inner_time").style.display = `none`
            document.getElementById("time").classList.add("center")

        }
        else {
            document.getElementById("time_info").innerHTML = `&#160;&#160;&#160; Battle over in:`
            document.getElementById("hrs").innerText = `  ${hours}`
            document.getElementById("min").innerText = `:  ${minute}`
            document.getElementById("sec").innerText = `:  ${second}`
        }
    }, 1000);
    function clr3() {
        clearInterval(interval2);
    }
}

// copy to clip board
var copyText = document.querySelectorAll("#cpy");

copyText.forEach((e) => {
    e.addEventListener("click", () => {
        navigator.clipboard.writeText(e.innerText);
        document.getElementById("cpyalrt").classList.add("showAlrt");
        let temp = setInterval(() => {
            document.getElementById("cpyalrt").classList.remove("showAlrt");
            clrtemp()
        }, 3000)
        function clrtemp() {
            clearInterval(temp)
        }
    })
})

// animation for timer to go up
window.addEventListener('scroll', () => {
    const htop = document.getElementById("heading").getBoundingClientRect().bottom;
    if (htop < 0) {
        document.getElementById("time").classList.add("up")
    } else {
        document.getElementById("time").classList.remove("up")
    }
});
