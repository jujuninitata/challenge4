const app = document.getElementById('app');
const update = document.getElementById('update');
const fileForm = document.getElementById('file')
const render = (el, html) => { el.innerHTML = html }

init();

function init(){
    if(app){
        let html = ''
        fetch('http://localhost:8000/api/v1/motors')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                data.forEach(el => {
                    html += `<div class="col-3 my-4">
                        <div class="card" style="width: 18rem;">
                            <img src="${el.foto}" height="100" width="100" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${el.manufaktur} - ${el.nama}</h5>
                                <p class="card-text">${el.transmisi}</p>
                                <p class="card-text">${el.tgl_pembuatan}</p>
                                <p class="card-text">${el.harga_sewa}</p> 
                            </div>
                            <div class="card-footer">
                                <a href="/update/${el.id}" class="btn btn-primary">Edit</a>
                            </div>
                        </div>
                    </div>`
                });
                render(app, html);
            });
    }
    if(update){
        onEdit();
    }
}

function add(){

}

function handleUpload(e){
    const image = e.target.files[0];
    let formData = new FormData();
     
    formData.append("image", image);
    fetch('http://localhost:8000/api/v1/uploads', {method:'POST', body:formData})
        .then(res => res.json())
        .then(res => {
            console.log(res);
            document.getElementById('foto').value = res.data;
            document.getElementById('statusUpload').innerHTML = 'Uploaded!';
        })
}

function handleAdd(e, form){ 
    const image = document.getElementById('file').files[0];
    const foto = document.getElementById('foto').value
    const formData = new FormData(form);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
    if(image && !foto){ 
        console.log('wait for upload');
        document.body.insertAdjacentHTML('afterbegin',`
            <div class="alert alert-warning alert-dismissible fade show " role="alert">
                Silahkan tunggu upload!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `)
        return;
    }

    fetch(form.action, {
        headers: { "Content-Type": "application/json" },
        method:'post', 
        body: JSON.stringify(value)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            document.body.insertAdjacentHTML('afterbegin', `
                <div class="alert alert-primary" role="alert">
                    ${res}, halaman akan kembali ke home!
                </div>
            `)

            setTimeout(() => {
                window.location.href = "http://localhost:8000";
            }, 2000)
        })
    
    e.preventDefault();
}

function handleEdit(e, form){
    const image = document.getElementById('file').files[0];
    const foto = document.getElementById('foto').value;
    const id = document.getElementById('id').value;
    const formData = new FormData(form);
    const value = Object.fromEntries(formData.entries());
    console.log(value);
    if(image && !foto){ 
        console.log('wait for upload');
        document.body.insertAdjacentHTML('afterbegin',`
            <div class="alert alert-warning alert-dismissible fade show " role="alert">
                Silahkan tunggu upload!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `)
        return;
    }

    fetch(form.action + `${id}`, {
        headers: { "Content-Type": "application/json" },
        method:'put', 
        body: JSON.stringify(value)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            document.body.insertAdjacentHTML('afterbegin', `
                <div class="alert alert-primary" role="alert">
                    ${res}, halaman akan kembali ke home!
                </div>
            `)

            setTimeout(() => {
                window.location.href = "http://localhost:8000";
            }, 2000)
        })
    
    e.preventDefault();
}

function onEdit(){
    const id = window.location.href.split('/').pop();

    fetch('http://localhost:8000/api/v1/motors/' + id)
        .then((res) => res.json())
        .then((data) => {
            if(data){
                data.forEach(el => {
                    const date = (new Date(el.tgl_pembuatan)).toISOString().substr(0, 10);
                    document.getElementById('id').value = id;
                    document.getElementById('nama').value = el.nama
                    document.getElementById('manufaktur').value = el.manufaktur
                    document.getElementById('transmisi').value = el.transmisi
                    document.getElementById('tgl').value = date
                    document.getElementById('foto').value = el.foto
                    document.getElementById('statusUpload').innerHTML = el.foto
                    document.getElementById('harga').value = el.harga_sewa
                });
            }
        });
    
}