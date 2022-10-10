const app = document.getElementById("app");
const typesewa = document.getElementsByName('typesewa')[0]
const capacity = document.getElementsByName('capacity')[0];
// const manufaktur = document.getElementsByName('manufaktur')[0];
const search = document.getElementById('cari');
const date = document.getElementById('date');
const time = document.getElementById('timeSelected');
const searchButton = document.getElementById("search");
let currentSort = '';
const table = new Table();
const filter = {
    typesewa: '',
    capacity: '',
    // manufaktur: '', 
    time:'',
    date:''
}

table.init(app);

table.renderBody(mobil);

const tableHeader = document.getElementById('table').querySelectorAll('th');

for (let i = 1; i < tableHeader.length; i++) {
    tableHeader[i].addEventListener("click", function() {
        sortMobil(tableHeader[i].textContent.toLowerCase())
    });
}

function sortMobil(sortBy){
    if(currentSort === sortBy){
        currentSort = ''
        mobil.sort(function(a, b){
            if(a[sortBy] > b[sortBy]) { return -1; }
            if(a[sortBy] < b[sortBy]) { return 1; }
            return 0;
        })
    }else{
        currentSort = sortBy
        mobil.sort(function(a, b){
            if(a[sortBy] < b[sortBy]) { return -1; }
            if(a[sortBy] > b[sortBy]) { return 1; }
            return 0;
        })
    }

    table.renderBody(mobil);
}

function filterMobil(){
    const filteredMobil = mobil.filter(function(el) {
        const filtertypesewa = filter.typesewa ? el.typesewa.includes(filter.typesewa) : true;
        const filtercapacity = filter.capacity <= el.capacity.valueOf(filter.capacity);
        // console.log(filter.date)
        // const filterdate = filter.date < el.date.Date.parse(filter.date);
        // return filtertypesewa && filtercapacity && filterdate
        return filtertypesewa && filtercapacity
    });

    table.renderBody(filteredMobil);
}

typesewa.addEventListener('change', function(event){
    const val = event.target.value
    filter.typesewa = val === 'typesewa' ? '' : val 
    filterMobil()
})

capacity.addEventListener('input', function(event){
    const val = event.target.value
    filter.capacity = val
    filterMobil()
})
date.addEventListener('change', function(event){
    const val = event.target.value
    filter.date = val
    filterMobil()
})

// manufaktur.addEventListener('input', function(event){
//     const val = event.target.value
//     filter.manufaktur = val
//     filterMobil()
// })

searchButton.addEventListener('click', (e) => {
    const cari = search.value.toLowerCase();
    const findMobil = mobil.filter(o => {
        return o.nama.toLowerCase().includes(cari) 
        || o.date.toLowerCase().includes(cari) 
        || o.capacity.toLowerCase().includes(cari)
    })
    console.log(findMobil, cari)
    if(!findMobil) return;
    table.renderBody(findMobil);
})