var charset = document.getElementById("password");
// comment array to be compared against time elapsed
const comment = ["so very poor", "underperforming in many aspects", "quite dissapointing", "... At least your have something", "What are you hiding that requires such extremities"];

var sw = {
    // (STOPWATCH) PROPERTIES
    etime: null,  // html time display
    erst: null,   // html reset button
    ego: null,    // html start/stop button
    timer: null,  // timer object
    now: 0,       // current elapsed time
};

// (STOPWATCH) INITIALIZE
init: () => {
    // GET HTML ELEMENTS
    sw.etime = document.getElementById("sw-time");
    sw.erst = document.getElementById("sw-rst");
    sw.ego = document.getElementById("sw-go");

    // ENABLE BUTTON CONTROLS
    sw.erst.onclick = sw.reset;
    sw.ego.onclick = sw.start;
    sw.erst.disabled = false;
    sw.ego.disabled = false;
},
    window.addEventListener("load", sw.init);

// START!
start: () => {
    sw.timer = setInterval(sw.tick, 1000);
    sw.ego.value = "Stop";
    sw.ego.onclick = sw.stop;
},

    // STOP
    stop : () => {
        clearInterval(sw.timer);
        sw.timer = null;
        sw.ego.value = "Start";
        sw.ego.onclick = sw.start;
    },

        // RESET
        reset : () => {
            if (sw.timer != null) { sw.stop(); }
            sw.now = -1;
            sw.tick();
        }

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
