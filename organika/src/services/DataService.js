import axios from 'axios'

export const catalog = [
    {
        "title": "Apple",
        "image": "/images/apple.jpg",
        "price": 1.49,
        "category": "Fruit",
        "_id": "1"
    },
    {
        "title": "Banana",
        "image": "/images/banana.jpg",
        "price": 1.99,
        "category": "Fruit",
        "_id": "2"
    },
    {
        "title": "Cheese",
        "image": "/images/cheese.jpg",
        "price": 5.99,
        "category": "Dairy & Eggs",
        "_id": "3"
    },
    {
        "title": "Mango",
        "image": "/images/mango.jpg",
        "price": 3.99,
        "category": "Fruit",
        "_id": "4"
    },
    {
        "title": "Milk",
        "image": "/images/milk.jpg",
        "price": 4.99,
        "category": "Dairy & Eggs",
        "_id": "5"
    },
    {
        "title": "Orange",
        "image": "/images/orange.jpg",
        "price": 2.99,
        "category": "Fruit",
        "_id": "6"
    },
    {
        "title": "Orange Juice",
        "image": "/images/orangejuice.jpg",
        "price": 3.99,
        "category": "Beverages",
        "_id": "7"
    },
    {
        "title": "Yogurt",
        "image": "/images/yogurt.jpg",
        "price": 0.99,
        "category": "Dairy & Eggs",
        "_id": "8"
    }
];

export const categories = ['Fruit', 'Vegetables', 'Merchandise', 'Dairy & Eggs', 'Beverages'];

class DataService {
    
    async getProducts(){
        let response = axios.get("http://127.0.0.1:5000/api/products");
        return response.data;
    }

    async saveProduct(product){
        let response = await axios.post("http://127.0.0.1:5000/api/products", product);
        return response.data;
    }

}

export default new DataService();