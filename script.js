let img, imgs;
window.onload = function() {
    img = document.getElementById("imgq");
    imgs = img.style;
}

function change() {
    let link = document.getElementById("url").value;
    if(link == "") return;
    img.src = link;
}

function addfilter(fn, val, unit = "%") {
    let f = fn+"("+val+unit+")";
    let fltarr = imgs.filter.split(" ");

    let nfltarr = [];
    for(let flt of fltarr) {
        if(flt.includes(fn)) continue;
        nfltarr.push(flt);
    }
    fltarr = nfltarr;
    fltarr.push(f);

    imgs.filter = fltarr.join(" ");
}


function rot() {
    imgs.transform += "rotate("+90+"deg)";
}

function blurf(val) {
    addfilter("blur", val, "px");
}

function brightness(val) {
    addfilter("brightness", val);
}

function sepia(val) {
    addfilter("sepia", val);
}

function opacity(val) {
    imgs.opacity = val;
}

function contrast(val) {
    addfilter("contrast", val);
}

function gray(val) {
    addfilter("grayscale", val);
}
