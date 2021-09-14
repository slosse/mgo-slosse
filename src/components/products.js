const products = [
    { id: 1, name: 'Pugliese', description: 'Magia', stock: 12, price: 1700 },
    { id: 2, name: 'Troilo', description: 'Aventura', stock: 10, price: 1340 },
    { id: 3, name: 'Darienzo', description: 'Rock & Roll', stock: 15, price: 1500 },
    { id: 4, name: 'Di Sarli', description: 'Soñar', stock: 20, price: 1250 },
]

export default function getProducts() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000)
    })
}