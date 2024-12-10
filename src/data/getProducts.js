const getProducts = () => {
  const products = [
    {
      productId: "1",
      productBrand: "Nike",
      productDetails: "Random Nike sneaker",
      productImages: [
        {
          alt: "Image",
          url: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-shoes-WrLlWX.png",
        },
      ],
      productPrice: 1000,
      productPriceCurrency: "INR",
      productTitle: "Nike Sneaker",
      productUrl:
        "https://www.nike.com/in/t/air-force-1-07-shoes-WrLlWX/315122-111",
    },
  ];
  return Promise.resolve({ products });
};

export default getProducts;