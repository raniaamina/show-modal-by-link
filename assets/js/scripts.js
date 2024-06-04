const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function runMasonry() {
    let msnry = new Masonry('#masonrow', {
        percentPosition: true
    });
}

setTimeout(() => {
    runMasonry()
}, 200);


let links = document.querySelectorAll('.openModal')
let imgTarget = document.getElementById('modal-img')
links.forEach(link => {
    // console.log(link)
    link.addEventListener("click", function (e) {
        console.log(e.target.src)
        imgTarget.src = e.target.src
    })
});


if (urlParams.get('id') == null || "" || 0) {
    console.log('Tidak melakukan apapun')
    // window.location.replace('/')
} else {
    var posId = urlParams.get('id')
    if (document.getElementById(posId)) {
        console.log("Membuka: "+ posId)
        document.getElementById(posId).children[0].click()
    } else {
        let show404 = new bootstrap.Modal(document.getElementById('show404'));
        show404.show();
    }
}