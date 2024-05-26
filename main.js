const noteRegional = document.getElementById("noteRegional");
const noteControlContinu = document.getElementById("noteControlContinu");
let valueBac = document.getElementById("valueBac");

function calculate() {
  let noteBac = valueBac.value
  let reg = noteRegional.value 
  let Crl = noteControlContinu.value 
  let n = (4 * noteBac - reg - Crl) / 2 ;
  let finalResult = n / 2;
  console.log(finalResult);
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
