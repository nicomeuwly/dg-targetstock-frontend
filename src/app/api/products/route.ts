export async function GET() {
    const data = [
        {
            "brand": "Apple",
            "product": "iPhone 15",
            "details": "128 GB, Blue, 6.10\", SIM + eSIM, 48 Mpx, 5G",
            "price": 709,
            "imageURL": "/im/productimages/2/1/2/0/6/3/5/0/2/7/0/3/2/9/4/3/5/5/8/ff8fbf16-cd09-48b7-8f4d-84e234fa488b.jpg?impolicy=product&resizeWidth=320",
            "category": "Smartphones"
        },
        {
            "brand": "LEGO",
            "product": "Mercedes-Benz G 500 PROFESSIONAL Line",
            "details": "42177, LEGO Technic",
            "price": 195,
            "imageURL": "/im/productimages/9/1/6/4/4/7/9/9/6/7/3/4/9/8/0/4/1/7/6/8cd7e0d1-1a79-42fb-8357-c83569b0e737.png?impolicy=product&resizeWidth=320",
            "category": "LEGO"
        },
        {
            "brand": "Onyx",
            "product": "Boox Note Air 3 C",
            "details": "10.31\", 64 GB, Cosmic Black",
            "price": 530,
            "imageURL": "/im/productimages/7/0/3/8/2/7/3/8/8/9/3/6/6/2/7/6/8/6/4/2a9b6872-617c-4fb5-826f-ec988d72fbc9_cropped.jpg?impolicy=product&resizeWidth=320",
            "category": "eReaders"
        },
        {
            "brand": "Pampers",
            "product": "Premium Protection",
            "details": "Size 4, Monthly box, 174 Piece",
            "price": 48.40,
            "imageURL": "/im/productimages/4/6/2/5/3/1/4/4/5/0/5/2/4/6/2/3/3/9/0/99b41047-a91e-4c49-8881-7d2740ede972_cropped.jpg?impolicy=product&resizeWidth=320",
            "category": "Diapers"
        },
        {
            "brand": "Swiffer",
            "product": "Trap & Lock Dusting Refills",
            "details": "20 pcs.",
            "price": 18.90,
            "imageURL": "/im/productimages/6/2/6/4/8/7/3/2/9/7/8/8/0/5/1/3/7/6/8975f4f0-09b1-405e-9484-0dda06a3fa5c_cropped.jpg?impolicy=product&resizeWidth=320",
            "category": "Cleaning utensils"
        },
        {
            "brand": "Stadler Form",
            "product": "Leo",
            "details": "57 dB",
            "price": 93.70,
            "imageURL": "/im/productimages/6/6/0/6/0/2/6/0/5/3/2/2/8/0/5/6/3/7/4/ea4d9c3a-5398-4e12-a63d-677c72c4c351_cropped.jpg?impolicy=product&resizeWidth=320",
            "category": "Fan"
        },];
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}