class Table extends Render{
    static tableEl = "";

    constructor(){
        super();
    }

    init(el){
        el.innerHTML +=
            `<table id="table" class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Plate</th>
                        <th scope="col">Manufaktur</th>
                        <th scope="col">Model</th>
                        <th scope="col">Capacity</th>
                        
                        <th scope="col">Type Driver</th>
                        <th scope="col">Available At</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
          `
        
        this.tableEl = document.getElementById('table')
    }
    renderBody(data){
        // const tbody = this.tableEl.childNodes[3];
        const tbody = this.tableEl.querySelector('tbody');
        let result = "";
        for(let i = 0; i < data.length; i++){
            result +=`<tr>
                <td>${i+1}</td>
                <td>${data[i].plate}</td>
                <td>${data[i].manufacture}</td>
                <td>${data[i].model}</td>
                <td>${data[i].capacity}</td>
                <td>${data[i].typesewa}</td>
                <td>${data[i].availableAt}</td>
            </tr>`
        }
        tbody.innerHTML = result;
    }
}