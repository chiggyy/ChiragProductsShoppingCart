### Run Locally on Your Machine
You need Node, NPM and MongoDB properly installed.

Clone this repository
``` shell
    git clone https://github.com/chiggyy/ChiragProductsShoppingCart.git
```

Install dependencies
``` shell
    npm install
```

With your mongod service running, this will populate shopping database
``` shell
    node seed/product-seeder.js 
```
This will start dev server at http://localhost:3000 with Nodemon.
``` shell
    npm run dev
```

### Tests
``` shell
    npm test
```

### Technologies
###### Back-end
NodeJS, Express, MongoDB, Mongoose. 
###### Fron-end
Handlebars and Bootstrap.
