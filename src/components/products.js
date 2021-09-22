const products = [
    { id: 1, name: 'Pugliese', category: 'tango', stock: 5, price: 1700 },
    { id: 2, name: 'Troilo', category: 'tango', stock: 10, price: 1340 },
    { id: 3, name: 'Darienzo', category: 'tango', stock: 15, price: 1500 },
    { id: 4, name: 'Di Sarli', category: 'tango', stock: 20, price: 1250 },
    { id: 5, name: 'Los redonditos de ricota', category: 'rock', stock: 5, price: 1700 },
    { id: 6, name: 'Los abuelos de la nada', category: 'rock', stock: 10, price: 1340 },
    { id: 7, name: 'Soda stereo', category: 'rock', stock: 15, price: 1500 },
    { id: 8, name: 'Bersuit Vergarabat', category: 'rock', stock: 20, price: 1250 }
]

const time = 1000

const categories = [{id:'tango',description:'Tango'},{id:'rock',description:'Rock'},{id:'jazz',description:'Jazz'}]

export function getProducts(category) {
    
    return new Promise((resolve, reject) => {
        
        if(category===undefined) {
            setTimeout(() => resolve(products), time)
        } else {
            setTimeout(() => resolve(products.filter(prod =>prod.category === category)), time)
        }
        
    })
}

export function getProductById(id) {
    
    return new Promise((resolve, reject) => {
        const product = products.find(prod =>prod.id == id)
        setTimeout(() => resolve(product), time)
    })
}


export function getCategories()  {
    return categories
}

export function getStockByProduct(id) {
    
    return new Promise((resolve, reject) => {
        const product = products.find(prod =>prod.id == id)
        setTimeout(() => resolve(product.stock), time)
    })

}
