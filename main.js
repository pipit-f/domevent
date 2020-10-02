

//kita buat sebuah fungsi untuk
//memunculkan MODAL

const showModal = ()=>{
    //kita dapatkan element modal
    //yang mau dimunculkan
   let modal = document.getElementById('modalMenu')
   
   //kita atur styling element modalnya
   modal.style.display = 'flex'

}

const closeModal = ()=>{
    let modal = document.getElementById('modalMenu')
    modal.style.display = 'none'
}

//Kita ambil dulu element yang diinginkan
//pindahkan ke element div
let showcase = document.getElementById('wrapper_showcase')

//kita inject elementnya dengan syntax HTML
//showcase.innerHTML +='
// <img src="https://picsum.photos/seed/13/300"alt="gambar no 13"/>
//`

for(var i = 0 ; i < 24 ; i++){
showcase.innerHTML += `
    <img src='https://picsum.photos/seed/${24 + i}/150' alt='gambar ke ${1}'/>
`

}

