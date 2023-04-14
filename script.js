var charset = document.getElementById("password");
// comment array to be compared against time elapsed
const comment = ["so very poor", "underperforming in many aspects", "quite dissapointing", "... At least your have something", "What are you hiding that requires such extremities"];

var sw = {
    // (A) PROPERTIES
    etime: null, // html time display
    erst: null,  // html reset button
    ego: null,   // html start/stop button
    timer: null, // timer object
    now: 0,      // current elapsed time

    // (B) INITIALIZE
    init: () => {
        // (B1) GET HTML ELEMENTS
        sw.etime = document.getElementById("sw-time");
        sw.erst = document.getElementById("sw-rst");
        sw.ego = document.getElementById("sw-go");

        // (B2) ENABLE BUTTON CONTROLS
        sw.erst.onclick = sw.reset;
        sw.ego.onclick = sw.start;
        sw.erst.disabled = false;
        sw.ego.disabled = false;
    },

    // (C) START!
    start: () => {
        sw.timer = setInterval(sw.tick, 1000);
        sw.ego.value = "Stop";
        sw.ego.onclick = sw.stop;
    },

    // (D) STOP
    stop: () => {
        clearInterval(sw.timer);
        sw.timer = null;
        sw.ego.value = "Start";
        sw.ego.onclick = sw.start;
    },

    // (E) TIMER ACTION
    tick: () => {
        // (E1) CALCULATE HOURS, MINS, SECONDS
        sw.now++;
        let hours = 0, mins = 0, secs = 0,
            remain = sw.now;
        hours = Math.floor(remain / 3600);
        remain -= hours * 3600;
        mins = Math.floor(remain / 60);
        remain -= mins * 60;
        secs = remain;

        // (E2) UPDATE THE DISPLAY TIMER
        if (hours < 10) { hours = "0" + hours; }
        if (mins < 10) { mins = "0" + mins; }
        if (secs < 10) { secs = "0" + secs; }
        sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
    },

    // (F) RESET
    reset: () => {
        if (sw.timer != null) { sw.stop(); }
        sw.now = -1;
        sw.tick();
    }
};
window.addEventListener("load", sw.init);

// (CRACK)
function crack(value) {
    console.time('crack')
    function toRadix(N, radix) {
        var HexN = "",
            Q = Math.floor(Math.abs(N)),
            R,
            strv = charset,
            radix = strv.length;
        while (true) {
            R = Q % radix;
            HexN = strv.charAt(R) + HexN;
            Q = (Q - R) / radix;
            if (Q == 0)
                break;
        };
        return ((N < 0) ? "-" + HexN : HexN);
    };
    var start = (new Date()) * 1,
        cracked = false,
        index = 0;
    while (!cracked) {
        if (toRadix(index) == value)
            cracked = true;
        else
            index++;
    };
    alert(((new Date()) * 1) - start);
    console.timeEnd('crack')
};
