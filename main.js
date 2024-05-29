const noteRegional = document.getElementById("noteRegional");
const noteControlContinu = document.getElementById("noteControlContinu");
const valueBac = document.getElementById("valueBac");

let found = false;

function calculate() {
  // CONVERT 
  const noteBac = parseFloat(valueBac.value);
  const reg = parseFloat(noteRegional.value);
  const Crl = parseFloat(noteControlContinu.value);
  
  // CALCUL
  let n = (4 * noteBac - (Crl + reg)) / 2;

  // CHECK VALUES
  if (isNaN(reg)) {
    noteRegional.style.borderColor = "red";
    noteRegional.placeholder = "أكتب شحال جبتي في الجهوي";
  } else if (isNaN(Crl)) {
    noteControlContinu.style.borderColor = "red";
    noteControlContinu.placeholder = "أكتب معدل عام د مراقبة";
  } else {
    noteRegional.style.borderColor = "black";
    noteControlContinu.style.borderColor = "black";

    const checkInchamps = document.querySelectorAll(".checkInchamps");
    let found = false;

    for(let i = 0 ; i < checkInchamps.length; i++){
      if (parseFloat(checkInchamps[i].value) > 20) {
        found = true;
        break;
      }
    }
    if (found) {
      faqResult();
    } else {
      ShowResult(noteBac, n);
    }
  }
}

function faqResult(noteBac, n){
  Swal.fire({
    title: `وجهك ماشي ديال المزاح البطال `,
    text: `
     `,
    imageUrl: "git imgs/chinwiIMG.png",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "CHINWI ",
  });
}

function ShowResult(noteBac, n) {
  Swal.fire({
    title: `باش تجيب ${noteBac} فالباكلوريا`,
    text: `
     خاصك تخدم باش تجيب ${n} فالوطني.
    لا باغي تعمر جيب خدم وقرا على راسك الحبيب أما لا بقيتي ناعس مايكون فراس مالك تا نص إيترو د لحليب`,
    imageUrl: "git imgs/bacIMG.jpg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "MON BAC",
  });
}

function toggleExpand() {
  valueBac.classList.toggle("show");
}

function shareOnFacebook() {
  const url = encodeURIComponent("https://red12xa.github.io/monbac/"); // Replace with the URL you want to share
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  window.open(
    facebookShareUrl,
    "facebook-share-dialog",
    "width=800,height=600"
  );
  return false;
}

function shareOnWhatsApp() {
  const text = encodeURIComponent(
    "Kheeek had site nadi tay7sab n9ta d bac: https://red12xa.github.io/monbac/"
  );
  const whatsappUrl = `https://wa.me/?text=${text}`;
  window.open(whatsappUrl, "_blank");
}
