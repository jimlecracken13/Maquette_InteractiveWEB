function cv()
{
    window.location.href='cv.html'
}

function changeColor(value)
{
    let body = document.getElementById('cv-body')
    body.style.setProperty("--left-bg", value);
    body.style.setProperty("--haut-bas", "white");
    body.style.setProperty("--progressbar", value)
    if(value==="#000000")
    {
        body.style.setProperty("--left-bg", "#F8F4F4");
    }
    document.getElementById('first-black').style.color="black";
    document.getElementById('second-black').style.color="black";
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