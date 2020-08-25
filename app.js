class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }    
}

class UI {
    addProduct(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4" >
            <div class="card-body">
                <strong>Product name</strong>: ${product.name}
                <strong>Product price</strong>: ${product.price}
                <strong>Product year</strong>: ${product.year}
                <a href="#" class="btn btn-outline-danger" name="delete">Danger</a>
            </div>
        </div>
        `;
        productList.appendChild(element);
        this.resetForm();
    }

    resetForm(){
        document.getElementById('product-form').reset();
    }

    deleteProduct(element){
        if(element.name === 'delete'){
            element.parentElement.parentElement.remove();
            this.showMessage('Product Deleted Successfully',  'info');
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement('div');
        //div.className = 'alert alert-' + cssClass;
        div.className = `alert alert-${cssClass} mt-4`; 
        div.appendChild(document.createTextNode(message));
        //showing in DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function(){
            document.querySelector('.alert').remove();
        }, 3000);
    }
}


// DOM Events
document.getElementById('product-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);

    const ui = new UI();

    if(name === '' || price === '' || year === ''){
        ui.showMessage('Complete fields please', 'danger');
    }else{
        ui.addProduct(product);
        ui.showMessage('Product added successfully', 'success');

    }
    
    e.preventDefault();
})


document.getElementById('product-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteProduct(e.target);
})
