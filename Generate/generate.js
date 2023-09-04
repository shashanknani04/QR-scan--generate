const wrapper = document.querySelector(".wrapper"),
generationBtn = wrapper.querySelector(".form button"),
qrInput = wrapper.querySelector(".form input"),
qrImg = wrapper.querySelector(".qr-code img"),
downloadBtn = wrapper.querySelector("#button");

generationBtn.addEventListener("click",() => {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    generationBtn.innerText = "Vastundhi apuko..";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrValue)}&size=170x170`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generationBtn.innerText = "Vastundhi ";
        downloadButton.style.display = "block";
    });
    downloadBtn.addEventListener("click",async()=>{
        const response = await fetch(qrImg.src);
        const blob  = await response.blob();
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = "qrcode.jpg";
        downloadLink.click();
});
});
qrInput.addEventListener("keyup", () =>{
    if(!qrInput.value){
        wrapper.classList.add("active");
    }
});
