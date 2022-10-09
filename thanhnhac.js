const song0 = document.getElementById("song0");
const playBtn = document.querySelector(".player-inner");
let isPlaying = true;
playBtn.addEventListener("click", playPause);
function playPause() {
    if (isPlaying) {
        song0.play();
        playBtn.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying = false;
    } else {
        song0.pause();
        playBtn.innerHTML = `<div class="player-inner"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying = true;
    }
}
const song1 = document.getElementById("song1");
const playBtn1 = document.querySelector(".player-inner-1");
let isPlaying1 = true;
playBtn1.addEventListener("click", playPause1);
function playPause1() {
    if (isPlaying1) {
        song1.play();
        playBtn1.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying1 = false;
    } else {
        song1.pause();
        playBtn1.innerHTML = `<div class="player-inner-1"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying1 = true;
    }
}
const song2 = document.getElementById("song2");
const playBtn2 = document.querySelector(".player-inner-2");
let isPlaying2 = true;
playBtn2.addEventListener("click", playPause2);
function playPause2() {
    if (isPlaying2) {
        song2.play();
        playBtn2.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying2 = false;
    } else {
        song2.pause();
        playBtn2.innerHTML = `<div class="player-inner-2"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying2 = true;
    }
}
const song3 = document.getElementById("song3");
const playBtn3 = document.querySelector(".player-inner-3");
let isPlaying3 = true;
playBtn3.addEventListener("click", playPause3);
function playPause3() {
    if (isPlaying3) {
        song3.play();
        playBtn3.innerHTML = `<p><a class="pause-3">❚❚</a></p>`;
        isPlaying3 = false;
    } else {
        song3.pause();
        playBtn3.innerHTML = `<div class="player-inner-3"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying3 = true;
    }
}
const song4 = document.getElementById("song4");
const playBtn4 = document.querySelector(".player-inner-4");
let isPlaying4 = true;
playBtn4.addEventListener("click", playPause4);
function playPause4() {
    if (isPlaying4) {
        song4.play();
        playBtn4.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying4 = false;
    } else {
        song4.pause();
        playBtn4.innerHTML = `<div class="player-inner-4"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying4 = true;
    }
}
const song5 = document.getElementById("song5");
const playBtn5 = document.querySelector(".player-inner-5");
let isPlaying5 = true;
playBtn5.addEventListener("click", playPause5);
function playPause5() {
    if (isPlaying5) {
        song5.play();
        playBtn5.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying5 = false;
    } else {
        song5.pause();
        playBtn5.innerHTML = `<div class="player-inner-5"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying5 = true;
    }
}
const song6 = document.getElementById("song6");
const playBtn6 = document.querySelector(".player-inner-6");
let isPlaying6 = true;
playBtn6.addEventListener("click", playPause6);
function playPause6() {
    if (isPlaying6) {
        song6.play();
        playBtn6.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying6 = false;
    } else {
        song6.pause();
        playBtn6.innerHTML = `<div class="player-inner-6"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying6 = true;
    }
}
const song7 = document.getElementById("song7");
const playBtn7 = document.querySelector(".player-inner-7");
let isPlaying7 = true;
playBtn7.addEventListener("click", playPause7);
function playPause7() {
    if (isPlaying7) {
        song7.play();
        playBtn7.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying7 = false;
    } else {
        song7.pause();
        playBtn7.innerHTML = `<div class="player-inner-7"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying7 = true;
    }
}
const song8 = document.getElementById("song8");
const playBtn8 = document.querySelector(".player-inner-8");
let isPlaying8 = true;
playBtn8.addEventListener("click", playPause8);
function playPause8() {
    if (isPlaying8) {
        song8.play();
        playBtn8.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying8 = false;
    } else {
        song8.pause();
        playBtn8.innerHTML = `<div class="player-inner-8"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying8 = true;
    }
}
const song9 = document.getElementById("song9");
const playBtn9 = document.querySelector(".player-inner-9");
let isPlaying9 = true;
playBtn9.addEventListener("click", playPause9);
function playPause9() {
    if (isPlaying9) {
        song9.play();
        playBtn9.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying9 = false;
    } else {
        song9.pause();
        playBtn9.innerHTML = `<div class="player-inner-9"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying9 = true;
    }
}
const song10 = document.getElementById("song10");
const playBtn10 = document.querySelector(".player-inner-10");
let isPlaying10 = true;
playBtn10.addEventListener("click", playPause10);
function playPause10() {
    if (isPlaying10) {
        song10.play();
        playBtn10.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying10 = false;
    } else {
        song10.pause();
        playBtn10.innerHTML = `<div class="player-inner-10"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying10 = true;
    }
}
const song11 = document.getElementById("song11");
const playBtn11 = document.querySelector(".player-inner-11");
let isPlaying11 = true;
playBtn11.addEventListener("click", playPause11);
function playPause11() {
    if (isPlaying11) {
        song11.play();
        playBtn11.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying11 = false;
    } else {
        song11.pause();
        playBtn11.innerHTML = `<div class="player-inner-11"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying11 = true;
    }
}
const song12 = document.getElementById("song12");
const playBtn12 = document.querySelector(".player-inner-12");
let isPlaying12 = true;
playBtn12.addEventListener("click", playPause12);
function playPause12() {
    if (isPlaying12) {
        song12.play();
        playBtn12.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying12 = false;
    } else {
        song12.pause();
        playBtn12.innerHTML = `<div class="player-inner-12"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying12 = true;
    }
}
const song13 = document.getElementById("song13");
const playBtn13 = document.querySelector(".player-inner-13");
let isPlaying13 = true;
playBtn13.addEventListener("click", playPause13);
function playPause13() {
    if (isPlaying13) {
        song13.play();
        playBtn13.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying13 = false;
    } else {
        song13.pause();
        playBtn13.innerHTML = `<div class="player-inner-13"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying13 = true;
    }
}
const song14 = document.getElementById("song14");
const playBtn14 = document.querySelector(".player-inner-14");
let isPlaying14 = true;
playBtn14.addEventListener("click", playPause14);
function playPause14() {
    if (isPlaying14) {
        song14.play();
        playBtn14.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying14 = false;
    } else {
        song14.pause();
        playBtn14.innerHTML = `<div class="player-inner-14"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying14 = true;
    }
}
const song15 = document.getElementById("song15");
const playBtn15 = document.querySelector(".player-inner-15");
let isPlaying15 = true;
playBtn15.addEventListener("click", playPause15);
function playPause15() {
    if (isPlaying15) {
        song15.play();
        playBtn15.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying15 = false;
    } else {
        song15.pause();
        playBtn15.innerHTML = `<div class="player-inner-15"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying15 = true;
    }
}
const song16 = document.getElementById("song16");
const playBtn16 = document.querySelector(".player-inner-16");
let isPlaying16 = true;
playBtn16.addEventListener("click", playPause16);
function playPause16() {
    if (isPlaying16) {
        song16.play();
        playBtn16.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying16 = false;
    } else {
        song16.pause();
        playBtn16.innerHTML = `<div class="player-inner-16"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying16 = true;
    }
}
const song17 = document.getElementById("song17");
const playBtn17 = document.querySelector(".player-inner-17");
let isPlaying17 = true;
playBtn17.addEventListener("click", playPause17);
function playPause17() {
    if (isPlaying17) {
        song17.play();
        playBtn17.innerHTML = `<p><a class="pause-1">❚❚</a></p>`;
        isPlaying17 = false;
    } else {
        song17.pause();
        playBtn17.innerHTML = `<div class="player-inner-17"><p><a class="play-icon-1">▶</a></p></div>`;
        isPlaying17 = true;
    }
}
const song18 = document.getElementById("song18");
const playBtn18 = document.querySelector(".player-inner-18");
let isPlaying18 = true;
playBtn18.addEventListener("click", playPause18);
function playPause18() {
    if (isPlaying18) {
        song18.play();
        playBtn18.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying18 = false;
    } else {
        song18.pause();
        playBtn18.innerHTML = `<div class="player-inner-18"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying18 = true;
    }
}const song19 = document.getElementById("song19");
const playBtn19 = document.querySelector(".player-inner-19");
let isPlaying19 = true;
playBtn19.addEventListener("click", playPause19);
function playPause19() {
    if (isPlaying19) {
        song19.play();
        playBtn19.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying19 = false;
    } else {
        song19.pause();
        playBtn19.innerHTML = `<div class="player-inner-19"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying19 = true;
    }
}
const song20 = document.getElementById("song20");
const playBtn20 = document.querySelector(".player-inner-20");
let isPlaying20 = true;
playBtn20.addEventListener("click", playPause20);
function playPause20() {
    if (isPlaying20) {
        song20.play();
        playBtn20.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying20 = false;
    } else {
        song20.pause();
        playBtn20.innerHTML = `<div class="player-inner-20"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying20 = true;
    }
}
const song21 = document.getElementById("song21");
const playBtn21 = document.querySelector(".player-inner-21");
let isPlaying21 = true;
playBtn21.addEventListener("click", playPause21);
function playPause21() {
    if (isPlaying21) {
        song21.play();
        playBtn21.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying21 = false;
    } else {
        song21.pause();
        playBtn21.innerHTML = `<div class="player-inner-21"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying21 = true;
    }
}
const song22 = document.getElementById("song22");
const playBtn22 = document.querySelector(".player-inner-22");
let isPlaying22 = true;
playBtn22.addEventListener("click", playPause22);
function playPause22() {
    if (isPlaying22) {
        song22.play();
        playBtn22.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying22 = false;
    } else {
        song22.pause();
        playBtn22.innerHTML = `<div class="player-inner-22"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying22 = true;
    }
}
const song23 = document.getElementById("song23");
const playBtn23 = document.querySelector(".player-inner-23");
let isPlaying23 = true;
playBtn23.addEventListener("click", playPause23);
function playPause23() {
    if (isPlaying23) {
        song23.play();
        playBtn23.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying23 = false;
    } else {
        song23.pause();
        playBtn23.innerHTML = `<div class="player-inner-23"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying23 = true;
    }
}
const song24 = document.getElementById("song24");
const playBtn24 = document.querySelector(".player-inner-24");
let isPlaying24 = true;
playBtn24.addEventListener("click", playPause24);
function playPause24() {
    if (isPlaying24) {
        song24.play();
        playBtn24.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying24 = false;
    } else {
        song24.pause();
        playBtn24.innerHTML = `<div class="player-inner-24"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying24 = true;
    }
}
const song25 = document.getElementById("song25");
const playBtn25 = document.querySelector(".player-inner-25");
let isPlaying25 = true;
playBtn25.addEventListener("click", playPause25);
function playPause25() {
    if (isPlaying25) {
        song25.play();
        playBtn25.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying25 = false;
    } else {
        song25.pause();
        playBtn25.innerHTML = `<div class="player-inner-25"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying25 = true;
    }
}
const song26 = document.getElementById("song26");
const playBtn26 = document.querySelector(".player-inner-26");
let isPlaying26 = true;
playBtn26.addEventListener("click", playPause26);
function playPause26() {
    if (isPlaying26) {
        song26.play();
        playBtn26.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying26 = false;
    } else {
        song26.pause();
        playBtn26.innerHTML = `<div class="player-inner-26"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying26 = true;
    }
}
const song27 = document.getElementById("song27");
const playBtn27 = document.querySelector(".player-inner-27");
let isPlaying27 = true;
playBtn27.addEventListener("click", playPause27);
function playPause27() {
    if (isPlaying27) {
        song27.play();
        playBtn27.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying27 = false;
    } else {
        song27.pause();
        playBtn27.innerHTML = `<div class="player-inner-27"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying27 = true;
    }
}
const song28 = document.getElementById("song28");
const playBtn28 = document.querySelector(".player-inner-28");
let isPlaying28 = true;
playBtn28.addEventListener("click", playPause28);
function playPause28() {
    if (isPlaying28) {
        song28.play();
        playBtn28.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying28 = false;
    } else {
        song28.pause();
        playBtn28.innerHTML = `<div class="player-inner-28"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying28 = true;
    }
}
const song29 = document.getElementById("song29");
const playBtn29 = document.querySelector(".player-inner-29");
let isPlaying29 = true;
playBtn29.addEventListener("click", playPause29);
function playPause29() {
    if (isPlaying29) {
        song29.play();
        playBtn29.innerHTML = `<p><a class="pause">❚❚</a></p>`;
        isPlaying29 = false;
    } else {
        song29.pause();
        playBtn29.innerHTML = `<div class="player-inner-29"><p><a class="play-icon">▶</a></p></div>`;
        isPlaying29 = true;
    }
}