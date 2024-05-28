const noteRegional = document.getElementById("noteRegional");
const noteControlContinu = document.getElementById("noteControlContinu");
let valueBac = document.getElementById("valueBac");
let message;
function calculate() {
  let noteBac = parseFloat(valueBac.value);
  let reg = parseFloat(noteRegional.value);
  let Crl = parseFloat(noteControlContinu.value);
  let n = (4 * noteBac - (Crl + reg)) / 2;
  console.log(noteBac);
  console.log(reg);
  console.log(Crl);
  if (isNaN(reg, Crl)) {
    noteRegional.style.borderColor = "red";
    noteControlContinu.style.borderColor = "red";
    noteRegional.placeholder = "أكتب شحال جبتي في الجهوي";
    noteControlContinu.placeholder = "أكتب معدل عام د مراقبة";
  } else {
    Swal.fire({
      title: `باش تجيب ${noteBac} فالباكلوريا`,
      text: `
       خاصك تخدم باش تجيب ${n} فالوطني.
      لا باغي تعمر جيب خدم وقرا على راسك الحبيب أما لا بقيتي ناعس مايكون فراس مالك تا نص إيترو د لحليب`
      ,
      imageUrl:
        "/imgs/bacIMG.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "MON BAC",
    });
  }
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
  ); // Customize the text
  const whatsappUrl = `https://wa.me/?text=${text}`;
  window.open(whatsappUrl, "_blank");
}
