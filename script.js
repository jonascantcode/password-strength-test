var charset = document.getElementById("password");
// comment array to be compared against time elapsed
const comment = ["so very poor", "underperforming in many aspects", "quite dissapointing", "... At least your have something", "What are you hiding that requires such extremities"];

console.time('crack')

function crack(value){
    function toRadix(N,radix) {
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
    while(!cracked){
        if(toRadix(index) == value)
            cracked = true;
        else
            index++;
    };
    alert(((new Date()) * 1) - start);
};

console.timeEnd('crack')