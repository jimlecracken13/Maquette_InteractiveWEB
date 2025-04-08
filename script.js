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
    let element = document.getElementById(id);
    let opt = {
        margin: 0, // Marges réduites au minimum
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 1 }, // Qualité max
        html2canvas: { 
            scale: 2, // Augmenté pour meilleure qualité
            scrollX: 250,
            scrollY: 0,
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight,
            useCORS: true, //pour la securité concernant les liens externes
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
        },
        
    };

    html2pdf().set(opt).from(element).save();
}
function retour()
{
    window.location.href='index.html';
}