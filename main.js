dongvats = [
    { ten: "Chó", anh: "./img/cho1.jpg", thuVien: ["./img/cho2.jpg", "./img/cho3.jpg", "./img/cho4.jpg","./img/cho5.jpg", 
    ] },
    { ten: "đại bàng",anh: "./img/daibang1.jpg", thuVien: ["./img/daibang2.jpg", "./img/daibang3.jpg", "./img/daibang4.jpg","./img/daibang5.jpg", 
    ] },
    { ten: "cá voi sát thủ", anh: "./img/voi1.jpg", thuVien: ["./img/voi2.jpg", "./img/voi3.jpg", "./img/voi4.jpg","./img/voi5.jpg", 
    ] },
    { ten: "quạ",anh: "./img/qua.jpg", thuVien: ["./img/qua2.jpg", "./img/qua3.jpg", "./img/qua4.jpg","./img/qua5.jpg", 
    ] }
];

const dongvat = document.getElementById("danhsach");
const thuVien = document.getElementById("thuvien");

function DanhSachconvat() {
    dongvats.forEach( dongvat1 => {
        const card = document.createElement("div");
        card.className = 'dongvat1-card';
        card.innerHTML = `
            <img src="${dongvat1.anh}" alt="${dongvat1.ten}">
            <h3>${dongvat1.ten}</h3>
        `;
        
        card.onclick = () => hienThi(dongvat1.thuVien);
        
        dongvat.appendChild(card);
    });
}
function hienThi(danhsach) {
    thuVien.innerHTML = "";
    
    danhsach.forEach( duong => {
        const img = document.createElement("img");
        img.src = duong;
        img.className = "gallery-item";
        thuVien.appendChild(img);
    });
}
DanhSachconvat();