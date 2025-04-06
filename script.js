function cv()
{
    window.location.href='cv.html'
}
function changeCouleur()
{
    document.getElementById("left").style.backgroundColor='#73b8d8';
    document.getElementById("first-black").style.backgroundColor="white";
    document.getElementById("first-black").style.color="black";
    document.getElementById("second-black").style.backgroundColor="white";
    document.getElementById("second-black").style.color="black";
    document.getElementById("right").style.backgroundColor="#594E59";
    document.getElementById("right").style.color="white";
    console.log("click")
}
function telechargeCV(id)
{
    var element = document.getElementById(id);
    var opt = {
    margin:       1,//pour les marges du pdf
    filename:     'cv.pdf',//pour le nom du fichier
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    {mode: ['avoid-all','css','legacy']}
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();
}
function retour()
{
    window.location.href='index.html'
}