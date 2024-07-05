export async function GET() {
    const data = [
        {
            "brand": "Maurten",
            "product": "Gel 100",
            "details": "",
            "price": "44.90 ",
            "imageURL": "/im/productimages/3/4/0/6/0/6/7/4/0/6/6/3/5/6/7/6/5/3/6/666ace18-20d2-44d0-a559-c6d06bd34776_cropped.jpg?impolicy=ProductTileImage&resizeWidth=314&resizeHeight=314&cropWidth=314&cropHeight=314"
        },
        {
            "brand": "Nutriathletic",
            "product": "Collagen",
            "details": "Neutre, 1 pcs, 700 g",
            "price": "59.– ",
            "imageURL": "/im/productimages/2/7/8/6/0/7/4/4/9/3/3/8/3/0/9/4/5/4/0/447d9c7c-7ea1-4e63-b500-0aa10502eaff_cropped.jpg?impolicy=ProductTileImage&resizeWidth=314&resizeHeight=314&cropWidth=314&cropHeight=314"
        },
        {
            "brand": "Dymatize",
            "product": "Iso 100",
            "details": "",
            "price": "84.– ",
            "imageURL": "/im/productimages/8/1/0/0/0/1/7/5/6/5/1/8/7/6/5/9/4/9/7/caf3adf1-4d26-46a6-b9d0-3bfeebc0a219_cropped.jpg?impolicy=ProductTileImage&resizeWidth=314&resizeHeight=314&cropWidth=314&cropHeight=314"
        },
        {
            "brand": "Sponser",
            "product": "Whey Isolate 94",
            "details": "Vanille, 1 pcs, 1500 g",
            "price": "78.90 ",
            "imageURL": "/im/productimages/8/7/7/8/2/3/7/2/7/9/0/2/5/4/7/0/1/3/4/9017ef46-0584-4112-b86f-b4ceeb7fd2e6_cropped.jpg?impolicy=ProductTileImage&resizeWidth=314&resizeHeight=314&cropWidth=314&cropHeight=314"
        },
        {
            "brand": "Nutriathletic",
            "product": "Whey Protein Isolate",
            "details": "Chocolat suisse, 1 pcs, 800 g",
            "price": "59.– ",
            "imageURL": "/im/productimages/4/4/9/8/0/2/3/3/0/3/0/5/7/0/9/6/1/4/7/101c8205-d2c4-4c44-81be-6a9e31e4519c_cropped.jpg?impolicy=ProductTileImage&resizeWidth=314&resizeHeight=314&cropWidth=314&cropHeight=314"
        },
        {
            "brand": "Sponser",
            "product": "Whey Isolate 94",
            "details": "Neutre, 1 pcs, 1500 g",
            "price": "85.90 ",
            "imageURL": "/im/productimages/9/1/1/6/3/0/8/8/8/9/0/4/5/2/8/6/9/3/2/9058d515-77e9-4e19-af80-e6d78478bed0_cropped.png?impolicy=ProductTileImage&resizeWidth=314&resizeHeight=314&cropWidth=314&cropHeight=314"
        },];
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}