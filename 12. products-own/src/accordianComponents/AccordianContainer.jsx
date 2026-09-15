import { useState } from 'react'
import AccordianCard from './AccordianCard';

const questions = [
  {
    id: 1,
    question: "What products do you offer?",
    answer:
      "We offer a wide range of products across multiple categories, including electronics, clothing, footwear, accessories, home essentials, beauty products, and lifestyle items. Our collection is regularly updated with new products so customers can find the latest and most popular items in one convenient place."
  },

  {
    id: 2,
    question: "How can I find the right product for me?",
    answer:
      "You can find the right product by browsing categories, using the search bar, applying filters, and comparing product specifications, prices, ratings, and customer reviews. Each product page provides detailed information to help you understand its features and choose an option that best matches your requirements."
  },

  {
    id: 3,
    question: "Are the products available in different sizes and colors?",
    answer:
      "Yes, many products are available in multiple sizes, colors, and variants. The available options are displayed on the individual product page. Before adding an item to your cart, select your preferred size, color, or variant and check its availability to make sure you receive exactly what you want."
  },

  {
    id: 4,
    question: "How do I know if a product is available?",
    answer:
      "Product availability is displayed directly on the product page. If an item is available, you can select its available variant and add it to your cart. Products that are currently unavailable may be marked as out of stock. You can check the product page later for availability updates."
  },

  {
    id: 5,
    question: "Are product images accurate?",
    answer:
      "We try to provide clear and accurate product images so customers can understand what they are purchasing. However, slight differences in color, texture, or appearance may occur because of lighting conditions, screen settings, photography, or manufacturing variations. Product descriptions and specifications should also be checked before ordering."
  },

  {
    id: 6,
    question: "How can I check the product specifications?",
    answer:
      "Detailed product specifications are available on the individual product page. Depending on the product, specifications may include dimensions, weight, material, color, storage capacity, compatibility, technical features, or other important information. We recommend reviewing these details carefully before purchasing to ensure the product meets your requirements."
  },

  {
    id: 7,
    question: "How can I check product reviews and ratings?",
    answer:
      "Customer reviews and ratings can usually be found on the product details page. Reviews provide useful information about product quality, appearance, performance, and customer experience. Reading several reviews can help you make a more informed decision, especially when comparing similar products with different ratings and features."
  },

  {
    id: 8,
    question: "Are your products genuine and original?",
    answer:
      "We aim to provide genuine and quality products sourced through reliable suppliers and authorized channels wherever applicable. Product authenticity may depend on the brand and category. Customers should review the product information, brand details, warranty information, and seller information available on the product page before completing their purchase."
  },

  {
    id: 9,
    question: "How do I add a product to my shopping cart?",
    answer:
      "To add a product to your shopping cart, open the product details page, select the required size, color, or other available variant, and click the Add to Cart button. The product will then be added to your cart, where you can review the quantity, price, and other order details."
  },

  {
    id: 10,
    question: "Can I change the quantity of a product in my cart?",
    answer:
      "Yes, you can change the quantity of most products directly from your shopping cart. Use the quantity controls to increase or decrease the number of items you want to purchase. The total price will automatically update based on the selected quantity and the current product price."
  },

  {
    id: 11,
    question: "How can I search for a specific product?",
    answer:
      "You can search for a specific product by entering its name, brand, category, or relevant keyword in the search bar. The search results will display products matching your query. You can further narrow the results using filters such as price range, category, rating, brand, size, or availability."
  },

  {
    id: 12,
    question: "Can I compare different products before purchasing?",
    answer:
      "Yes, comparing products is useful when several items have similar features or prices. You can compare important details such as price, specifications, ratings, sizes, materials, features, and customer reviews. Comparing these factors can help you select a product that provides the best combination of quality, features, and value."
  },

  {
    id: 13,
    question: "What payment methods are available for purchasing products?",
    answer:
      "Depending on your location and order, multiple payment options may be available, including credit cards, debit cards, UPI, net banking, digital wallets, and other supported payment methods. Available payment options are displayed during checkout. Always verify the final order amount before confirming your payment."
  },

  {
    id: 14,
    question: "How can I track my product order?",
    answer:
      "After your order has been confirmed and shipped, you can track its delivery status using the order tracking option available in your account. Tracking information may include order confirmation, processing, shipping, dispatch, and delivery updates. You may also receive notifications when your order status changes."
  },

  {
    id: 15,
    question: "How long does product delivery usually take?",
    answer:
      "Delivery time depends on the product, shipping location, availability, and selected delivery method. An estimated delivery date is generally shown during checkout or in your order details. Remote locations may require additional time. Once the product has been shipped, tracking information can provide more accurate delivery updates."
  },

  {
    id: 16,
    question: "Can I return a product after purchasing it?",
    answer:
      "Many products can be returned within the applicable return period, provided they meet the return policy requirements. Products may need to be unused, undamaged, and returned with their original packaging, accessories, and documentation. Return eligibility can vary depending on the product category, brand, and reason for the return."
  },

  {
    id: 17,
    question: "What should I do if I receive a damaged product?",
    answer:
      "If your product arrives damaged, contact customer support as soon as possible and provide your order details along with clear photographs or videos showing the damage. Keep the original packaging and accessories until the issue is resolved. Our support team can guide you through the applicable replacement or return process."
  },

  {
    id: 18,
    question: "What happens if the product I received is different from what I ordered?",
    answer:
      "If you receive a product that is different from the item shown in your order, first verify the product details and order information. If the item is incorrect, contact customer support with your order number and photographs of the received product. The support team can help arrange an eligible return, replacement, or resolution."
  },

  {
    id: 19,
    question: "Do products come with a warranty?",
    answer:
      "Warranty availability depends on the product and manufacturer. Products that include a warranty will normally have warranty information mentioned on the product page or included with the product documentation. Warranty coverage, duration, and conditions can vary between brands, so customers should review the specific warranty terms before purchasing."
  },

  {
    id: 20,
    question: "How can I get help if I have a problem with my product?",
    answer:
      "If you experience any issue with a purchased product, you can contact our customer support team with your order number and product details. For faster assistance, provide a clear description of the problem and any relevant photographs or videos. Our support team will help you with troubleshooting, returns, replacements, or other available solutions."
  }
];

const AccordianContainer = () => {
  let [allData, setAllData] = useState(questions);
  return (
    <div>
      {allData.map((el) => {
        return <AccordianCard el={el} />
      })}
    </div>
  )
}

export default AccordianContainer