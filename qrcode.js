function Generate() {
  const qrtext=document.getElementById('qrtext');
  const qrimage=document.getElementById('qrimage');
  const btn=document.getElementById('btn');
  
  qrimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
}