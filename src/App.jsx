import heroBanner from './assets/banners/natistores.png'
import boot1 from './assets/boots/b1.png'
import boot2 from './assets/boots/b2.png'
import boot3 from './assets/boots/B02.png'
import boot4 from './assets/boots/P2.png'
import boot5 from './assets/boots/Mer1.jpg'
import trainer1 from './assets/trainers/t1.png'
import trainer2 from './assets/trainers/Tr1.png'
import trainer3 from './assets/trainers/Tr2.png'
import trainer4 from './assets/trainers/Tr3.png'
import trainer5 from './assets/trainers/Tr4.png'
import football1 from './assets/essentials/ba1.png'
import football2 from './assets/essentials/A4.jpg'
import football3 from './assets/essentials/A5.jpg'
import glove1 from './assets/essentials/Gl1.jpg'
import glove2 from './assets/essentials/Glo1.jpg'
import glove3 from './assets/essentials/Glo3.jpg'
import sock1 from './assets/essentials/S1.png'
import sock2 from './assets/essentials/S2.png'
import sock3 from './assets/essentials/S3.png'
import sock4 from './assets/essentials/S4.png'
import React, { useState, useEffect, useRef,} from "react";
import { motion } from "framer-motion";
import { MessageCircle, ShoppingCart, Heart,} from "lucide-react";

const products = [

  {
    id: 1,

    category: "Boots",

    variants: [

      {
        image: boot1,

        name: "NATI Phantom Elite FG (Black / Red Boots)",

        price: 4500,

        stock: 8,

        size: ["39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Control Every Move) Elite performance football boots designed for speed, precision, and total control on firm ground surfaces. Lightweight, stylish, and built for modern footballers.",
      },

      {
        image: boot2,

        name: "NATI StrikeForce Elite FG (White / Red Boots)",

        price: 4800,

        stock: 5,

        size: ["39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Explosive Speed. Ruthless Precision)The NATI StrikeForce Elite FG is engineered for attacking players who thrive on pace, quick turns, and deadly finishing.",
      },

      {
        image: boot3,

        name: "NATI Messi Velocity X (Blue Messi Boots)",

        price: 5500,

        stock: 5,

        size: ["39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Built for Visionaries) Inspired by elite playmakers, the NATI Messi Velocity X combines ultra-light responsiveness with precision touch technology for total control in tight spaces. Perfect for creative midfielders and fast attackers.",
      },

      {
        image: boot4,

        name: "NATI Predator Fusion+ (Grey Predator Boots)",

        price: 5800,

        stock: 5,

        size: ["39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Own The Midfield) Built for precision players, the NATI Predator Fusion+ delivers superior ball grip, enhanced passing accuracy, and aggressive control zones for next-level performance under pressure.",
      },

      {
        image: boot5,

        name: "NATI Mercurial Blaze Pro (Orange Mercurials)",

        price: 6000,

        stock: 5,

        size: ["39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Leave Defenders Behind) The NATI Mercurial Blaze Pro is crafted for explosive acceleration and elite-level agility. Its dynamic sock-fit collar provides lockdown support while the lightweight chassis helps maximize top speed.",
      },
    ],
  },

  {
    id: 2,

    category: "Trainers",

    variants: [

      {
        image: trainer1,

        name: "NATI StreetControl TF (Black Adidas Indoor Trainer)",

        price: 3500,

        stock: 12,

        size: ["38", "39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Train Anywhere) The NATI StreetControl TF combines comfort, durability, and grip for indoor courts and artificial turf. Designed for everyday footballers who value stability and style.",
      },

      {
        image: trainer2,

        name: "NATI FlexRunner Turf (Black/Green Trainer)",

        price: 3200,

        stock: 7,

        size: ["38", "39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Comfort Meets Control) Lightweight and flexible, the NATI FlexRunner Turf delivers excellent traction and shock absorption for quick-paced training sessions and five-a-side football.",
      },
      
      {
        image: trainer3,

        name: "NATI Mundial Classic TF (White Turf Trainer)",

        price: 3900,

        stock: 7,

        size: ["38", "39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Classic Performance) The NATI Mundial Classic TF blends timeless football aesthetics with modern comfort technology for players who appreciate traditional football craftsmanship.",
      },

      {
        image: trainer4,

        name: "NATI Maxima Turf Pro (Black/Orange Trainer)",

        price: 3700,

        stock: 7,

        size: ["38", "39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Engineered For Intensity) Built for intense turf performance, the NATI Maxima Turf Pro offers exceptional grip, responsive cushioning, and superior durability for aggressive play.",
      },
      
      {
        image: trainer5,

        name: "NATI ThunderStrike TF (Black/Yellow Trainer)",

        price: 3800,

        stock: 7,

        size: ["38", "39", "40", "41", "42", "43", "44", "45"],

        description:
          "(Power Every Step) The NATI ThunderStrike TF combines aggressive traction with enhanced ankle support for explosive movement and high-speed transitions.",
      },

    ],
  },
{
    id: 3,

    category: "Accessories",

    variants: [

      {
        image: football2,

        name: "NATI Trinity Match Ball (2023 FIFA Style Ball)",

        price: 2500,

        stock: 15,

        size: ["4", "5"],

        description:
          "(Matchday Ready) The NATI Trinity Match Ball delivers professional-level flight control, precision balance, and durable match-grade construction for competitive football.",
      },

      {
        image: football3,

        name: "NATI Champions Pro Ball (Champions League Style Ball)",

        price: 2800,

        stock: 15,

        size: ["4", "5"],

        description:
          "(Play Like Champions) Designed for elite-level performance, the NATI Champions Pro Ball provides consistent flight stability and responsive touch for competitive gameplay.",
      },

      {
        image: football1,

        name: "NATI Match Ball (Black & White NATI Ball)",

        price: 1800,

        stock: 15,

        size: ["4", "5"],

        description:
          "(Football Starts Here) Durable, reliable, and ideal for daily training sessions, the NATI Classic Training Ball is perfect for players of all skill levels.",
      },

      {
        image: glove1,

        name: "NATI AeroGrip Elite (Blue/Red Gloves)",

        price: 3500,

        stock: 11,

        size: ["7", "8", "9", "10", "11"],

        description:
          "(Save Everything) The NATI AeroGrip Elite goalkeeper gloves offer enhanced finger flexibility, premium grip technology, and superior comfort for elite shot stopping.",
      },

      {
        image: glove2,

        name: "NATI Predator Keeper Pro (Orange/Black Gloves)",

        price: 4200,

        stock: 11,

        size: ["7", "8", "9", "10", "11"],

        description:
          "(Command The Box) Built for modern goalkeepers, the NATI Predator Keeper Pro combines powerful wrist support with high-grip latex palms for ultimate control.",
      },

    ],
  },
  
  {
    id: 4,

    category: "Accessories",

    variants: [

      {
        image: glove3,

        name: "NATI ShadowGuard GK (Black/Orange Reusch Style Gloves)",

        price: 4500,

        stock: 15,

        size: ["7", "8", "9", "10", "11"],

        description:
          "(Fearless Between The Posts) The NATI ShadowGuard GK gloves provide maximum finger protection, impact absorption, and all-weather grip performance for competitive goalkeepers.",
      },

      {
        image: sock1,

        name: "NATI ProFit Socks — Black Edition",

        price: 850,

        stock: 15,

        size: ["4", "5"],

        description:
          "(Built For Matchday) Premium compression football socks designed for comfort, breathability, and muscle support during high-intensity matches.",
      },

      {
        image: sock2,

        name: "NATI ProFit Socks — Green Edition",

        price: 850,

        stock: 15,

        size: ["4", "5"],

        description:
          "(Confidence In Every Step) High-performance football socks with moisture control technology and reinforced ankle stability for all-day comfort.",
      },

      {
        image:sock3,

        name: "NATI ProFit Socks — Blue Edition",

        price: 850,

        stock: 11,

        size: ["S", "M", "L"],

        description:
          "(Performance Without Limits) Lightweight and breathable football socks optimized for speed, comfort, and durability on the pitch.",
      },

      {
        image: sock4,

        name: "NATI ProFit Socks — Red Edition",

        price: 850,

        stock: 11,

        size: ["S", "M", "L"],

        description:
          "(Play Hard. Stay Ready) Designed for maximum flexibility and long-lasting comfort during training and competitive football.",
      },

    ],
  },

];
function App() {
  const [cartItems, setCartItems] = useState([]);
  const cartCount = cartItems.length;
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [activeVariant, setActiveVariant] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("");
  const [ additionalNotes, setAdditionalNotes,] = useState("");
  const [showChatPopup, setShowChatPopup] = useState(false);
  const searchInputRef = useRef(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

const [quoteName, setQuoteName] = useState("");
const [quotePhone, setQuotePhone] = useState("");
const [quoteProduct, setQuoteProduct] = useState("");
const [quoteQuantity, setQuoteQuantity] = useState("");
const [quoteDeadline, setQuoteDeadline] = useState("");
const [quoteNotes, setQuoteNotes] = useState("");
  const [showMpesaModal, setShowMpesaModal] =
  useState(false);

const [mpesaPhone, setMpesaPhone] =
  useState("");
  const [darkMode, setDarkMode] =
  useState(

    localStorage.getItem("theme")

      ? localStorage.getItem("theme") === "dark"

      : window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches

  );
  const [wishlistItems, setWishlistItems] = useState([]);
  const [reviews, setReviews] = useState([
  {
    name: "Brian",
    rating: 5,
    comment:
      "Excellent quality boots. Delivery was fast."
  },

  {
    name: "Kevin",
    rating: 5,
    comment:
      "The ThunderStrike trainers are very comfortable."
  },

  {
    name: "James",
    rating: 4,
    comment:
      "Great customer service and easy WhatsApp ordering."
  }
  ]);
  const [showReviewModal, setShowReviewModal] =
  useState(false);

  const [reviewName, setReviewName] =
  useState("");

  const [reviewRating, setReviewRating] =
  useState(5);

  const [reviewComment, setReviewComment] =
  useState("");
  const [recentlyViewed, setRecentlyViewed] =
  useState(() => {

    const saved =
      localStorage.getItem(
        "recentlyViewed"
      );

    return saved
      ? JSON.parse(saved)
      : [];

  });
  const [featuredDeal] = useState({
  title: "🔥 Weekend Sale",
  description: "Get 15% OFF on all Football Boots",
  code: "NATI15"
  })
  const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})
const [couponCode, setCouponCode] = useState("")
const [discount, setDiscount] = useState(0)
const [orders, setOrders] = useState(() => {

  const savedOrders =
    localStorage.getItem("orders")

  return savedOrders
    ? JSON.parse(savedOrders)
    : []

    const newOrder = {

  id: Date.now(),

  date: new Date()
    .toLocaleDateString(),

  items: [...cartItems],

  total: finalTotal,

  status: "Pending"

}

setOrders(prev => [
  newOrder,
  ...prev
])
})
const [expandedOrder, setExpandedOrder] =
  useState(null)
  const [isAdmin, setIsAdmin] =
  useState(false)
const [expandedAdminOrder, setExpandedAdminOrder] =
  useState(null)

  const resetForms = () => {

  setCustomerName("");
  setCustomerPhone("");
  setDeliveryLocation("");
  setAdditionalNotes("");

  setActiveVariant(null);

  setQuoteName("");
  setQuotePhone("");
  setQuoteProduct("");
  setQuoteQuantity("");
  setQuoteDeadline("");
  setQuoteNotes("");
  setSelectedSize(null);
  setSelectedSizes({});

};
const addToWishlist = (product) => {

  const exists = wishlistItems.some(
    item =>
      item.name === product.name
  );

  if (exists) {
    alert("This item is already in your wishlist ❤️");
    return;
  }

  setWishlistItems([
    ...wishlistItems,
    product
  ]);

  alert("Added to wishlist ❤️");
};
const removeFromWishlist = (productName) => {

  setWishlistItems(
    wishlistItems.filter(
      item => item.name !== productName
    )
  );

};
  const submitReview = () => {

  if (
    !reviewName ||
    !reviewComment
  ) {

    alert(
      "Please fill all fields."
    );

    return;
  }

  setReviews([
    {
      name: reviewName,
      rating: reviewRating,
      comment: reviewComment
    },

    ...reviews
  ]);

  setReviewName("");
  setReviewRating(5);
  setReviewComment("");

  setShowReviewModal(false);

  alert(
    "Review submitted successfully."
  );
};
  const addToRecentlyViewed = (product) => {

  const filtered = recentlyViewed.filter(
    item => item.name !== product.name
  );

  setRecentlyViewed([
    product,
    ...filtered
  ].slice(0, 6));

  };
  const applyCoupon = () => {

  const code = couponCode.trim().toUpperCase()

  const coupons = {
  NATI15: 15,
  WELCOME10: 10,
  BOOTS20: 20,
  TRAINER5: 5,
}

if (coupons[code]) {

  setDiscount(coupons[code])

  alert(
    `${coupons[code]}% discount applied!`
  )

} else {

  setDiscount(0)

  alert("Invalid coupon code")

}
}
  const subtotal = cartItems.reduce(
  (total, item) =>
    total + (Number(item.price) || 0),
  0
);

const deliveryFee = 300;

const totalAmount =
  subtotal + deliveryFee;
const discountAmount =
  subtotal * (discount / 100)

const finalTotal =
  subtotal - discountAmount + deliveryFee
  useEffect(() => {

  const timer = setTimeout(() => {

    setShowChatPopup(true);

  }, 4000);

  return () => clearTimeout(timer);

}, []);
useEffect(() => {

  localStorage.setItem(

    "theme",

    darkMode ? "dark" : "light"
  );

}, [darkMode]);
useEffect(() => {

  localStorage.setItem(
    "wishlistItems",
    JSON.stringify(wishlistItems)
  );

}, [wishlistItems]);
useEffect(() => {

  localStorage.setItem(
    "recentlyViewed",

    JSON.stringify(
      recentlyViewed
    )

  );

}, [recentlyViewed]);

useEffect(() => {

  const saleEndDate =
  new Date("2026-07-01T23:59:59")
  const timer = setInterval(() => {

    const now = new Date()

    const difference =
      saleEndDate - now

    if (difference <= 0) {

      clearInterval(timer)

      return

    }

    const days = Math.floor(
      difference /
      (1000 * 60 * 60 * 24)
    )

    const hours = Math.floor(
      (difference %
        (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    )

    const minutes = Math.floor(
      (difference %
        (1000 * 60 * 60)) /
      (1000 * 60)
    )

    const seconds = Math.floor(
      (difference %
        (1000 * 60)) /
      1000
    )

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    })

  }, 1000)

  return () =>
    clearInterval(timer)

  }, [])
  useEffect(() => {

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  )

}, [orders])

const filteredProducts =
  products.flatMap((product) =>

    product.variants

      ?.filter((variant) =>

        variant.name
          ?.toLowerCase()

          .includes(
            searchTerm.toLowerCase()
          )
      )

      .map((variant) => ({

        ...variant,

        parentProduct: product,

      }))

  );

  if (page === "cart") {
  return (
    <div

  className={`

    min-h-screen

    transition-all
    duration-500

    ${
  darkMode

    ? `
      bg-gradient-to-br
      from-black
      via-zinc-950
      to-zinc-900

      text-white
    `

    : `
      bg-gradient-to-br
      from-gray-100
      via-white
      to-gray-200

      text-black
    `
}

  `}
>
      <h1 className="text-4xl font-bold mb-6">
        Your Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-4 rounded-xl flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1">
  <h2 className="text-xl font-bold">
    {item.name}
  </h2>

  <p className="text-red-500">
    {item.price}
  </p>
<p className="text-gray-400 mt-1">
  Size: {item.selectedSize}
</p>
  <button
    className="bg-red-700 px-4 py-2 rounded-lg mt-3"
    onClick={() => {
      const updatedCart = cartItems.filter(
        (_, i) => i !== index
      );

      setCartItems(updatedCart);
      
    }}
  >
    Remove
  </button>
</div>
            </div>
          ))}
        </div>
      )}
<div className="bg-zinc-900 p-6 rounded-2xl mt-6">
  <h2 className="text-2xl font-bold mb-4">
    Order Summary
  </h2>

  <div className="flex justify-between mb-2">
    <span>Subtotal</span>
    <span>
      KES {subtotal.toLocaleString()}
    </span>
  </div>

  <div className="flex justify-between mb-2">
    <span>Delivery</span>
    <span>KES 300</span>
  </div>

  <div className="border-t border-zinc-700 my-4"></div>

  <div className="flex justify-between text-xl font-bold">
    <span>Total</span>
    <span>
      KES {finalTotal.toLocaleString()}
    </span>
  </div>

  <button
    className="w-full bg-green-600 py-3 rounded-xl mt-6"
    onClick={() => setPage("checkout")}
  >
    Proceed to Checkout
  </button>
</div>
      <button
        onClick={() => setPage("home")}
        className="bg-red-600 px-6 py-3 rounded-xl mt-6"
      >
        Continue Shopping
      </button>
    </div>
  );
}
const getOrderStatus = (order) => {

       const hoursPassed =

    (Date.now() -
      order.createdAt) /

    (1000 * 60 * 60)

  if (hoursPassed < 1)
    return "Pending"

  if (hoursPassed < 4)
    return "Processing"

  if (hoursPassed < 12)
    return "Dispatched"

  if (hoursPassed < 24)
    return "Out For Delivery"

  return "Delivered"

}
if (
  page === "admin" &&
  isAdmin
) {

  return (

    <div className="min-h-screen bg-black text-white p-6">

      <h1 className="text-4xl font-bold mb-8">

        Admin Dashboard

      </h1>

      <button
        onClick={() =>
          setPage("home")
        }
        className="
          bg-zinc-800
          px-4
          py-2
          rounded-xl
          mb-8
        "
      >
        ← Back Home
      </button>

      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-zinc-900 p-5 rounded-2xl">

          <h2>Total Orders</h2>

          <p className="text-3xl font-bold">
            {orders.length}
          </p>

        </div>

        <div className="bg-zinc-900 p-5 rounded-2xl">

          <h2>Wishlist Items</h2>

          <p className="text-3xl font-bold">
            {wishlistItems.length}
          </p>

        </div>

        <div className="bg-zinc-900 p-5 rounded-2xl">

          <h2>Products</h2>

          <p className="text-3xl font-bold">
            {products.length}
          </p>

        </div>
        <div className="mt-10">

  <h2 className="text-2xl font-bold mb-6">
    Customer Orders
  </h2>

  <div className="space-y-4">

    {orders.map(order => (

      <div
        key={order.id}
        className="
          bg-zinc-900
          p-5
          rounded-2xl
        "
      >

        <h3 className="font-bold">

          Order #{order.id}

        </h3>

        <p>
          Customer:
          {order.customerName}
        </p>

        <p>
          Phone:
          {order.customerPhone}
        </p>

        <p>
          Delivery:
          {order.deliveryLocation}
        </p>

        <p>
          Total:
          KES {order.total}
        </p>

        <p>
          Status:
          {order.status}
        </p>
        <button
  onClick={() =>

    setExpandedAdminOrder(

      expandedAdminOrder === order.id
        ? null
        : order.id

    )

  }
  className="
    bg-blue-600
    px-4
    py-2
    rounded-xl
    mt-3
  "
>

  {expandedAdminOrder === order.id

    ? "Hide Details ▲"

    : "View Details ▼"

  }

</button>
{expandedAdminOrder === order.id && (

  <div className="mt-6 space-y-4">

    <div className="bg-zinc-800 p-4 rounded-xl">

      <h4 className="font-bold mb-2">
        Customer Information
      </h4>

      <p>
        Customer:
        {order.customerName}
      </p>

      <p>
        Phone:
        {order.customerPhone}
      </p>

      <p>
        Delivery:
        {order.deliveryLocation}
      </p>

      <p>
        Date:
        {order.date}
      </p>

    </div>

    <div className="bg-zinc-800 p-4 rounded-xl">

      <h4 className="font-bold mb-2">
        Payment Details
      </h4>

      <p>
        Coupon:
        {order.coupon || "None"}
      </p>

      <p>
        Discount:
        KES {order.discountAmount || 0}
      </p>

      <p>
        Total:
        KES {order.total}
      </p>

    </div>

    <div className="bg-zinc-800 p-4 rounded-xl">

      <h4 className="font-bold mb-4">
        Ordered Products
      </h4>

      {order.items?.map((item, index) => (

        <div
          key={index}
          className="
            flex
            gap-4
            mb-4
          "
        >

          <img
            src={item.image}
            alt={item.name}
            className="
              w-20
              h-20
              rounded-lg
              object-cover
            "
          />

          <div>

            <p className="font-bold">
              {item.name}
            </p>

            <p>
              Size:
              {item.selectedSize}
            </p>

            <p>
              KES {item.price}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

)}
        <div className="mt-4">

  <h4 className="font-bold mb-3">
    Ordered Products
  </h4>

  {order.items?.map((item, index) => (

    <div
      key={index}
      className="
        flex
        items-center
        gap-4
        bg-zinc-800
        p-3
        rounded-xl
        mb-3
      "
    >

      <img
        src={item.image}
        alt={item.name}
        className="
          w-20
          h-20
          object-cover
          rounded-lg
        "
      />

      <div>

        <p className="font-bold">
          {item.name}
        </p>

        <p>
          Size:
          {item.selectedSize}
        </p>

        <p>
          KES {item.price}
        </p>

      </div>

    </div>

  ))}

</div>
      </div>

    ))}

  </div>

</div>
      </div>

    </div>

  )

}
if (page === "orders") {

  return (

    <div className="min-h-screen bg-black text-white p-6">

      <button
        onClick={() =>
          setPage("home")
        }
        className="
          bg-zinc-800
          px-4
          py-2
          rounded-xl
          mb-6
        "
      >
        ← Back Home
      </button>

      <h1 className="text-4xl font-bold mb-8">
        My Orders
      </h1>

      {orders.length === 0 ? (

        <p>
          No orders yet.
        </p>

      ) : (

        <div className="space-y-6">

          {orders.map(order => (

            <div
              key={order.id}
              className="
                bg-zinc-900
                p-5
                rounded-2xl
              "
            >

              <div className="flex justify-between">

                <h2 className="font-bold">
                  Order #{order.id}
                </h2>

               <span
  className={`

    ${
      getOrderStatus(order) ===
      "Delivered"

        ? "text-green-500"

      : getOrderStatus(order) ===
        "Out For Delivery"

        ? "text-blue-500"

      : getOrderStatus(order) ===
        "Dispatched"

        ? "text-purple-500"

      : getOrderStatus(order) ===
        "Processing"

        ? "text-orange-500"

      : "text-yellow-500"

    }

  `}
>

  {getOrderStatus(order)}

</span>
<div className="mt-4">

  <div className="w-full h-3 bg-zinc-800 rounded-full">

    <div

      className={`

        h-3

        rounded-full

        ${
          getOrderStatus(order) ===
          "Pending"

            ? "w-[20%] bg-yellow-500"

          : getOrderStatus(order) ===
            "Processing"

            ? "w-[40%] bg-orange-500"

          : getOrderStatus(order) ===
            "Dispatched"

            ? "w-[60%] bg-purple-500"

          : getOrderStatus(order) ===
            "Out For Delivery"

            ? "w-[80%] bg-blue-500"

          : "w-full bg-green-500"

        }

      `}

    />

  </div>

</div>
              </div>

              <p className="text-zinc-400">
                {order.date}
              </p>

              <p className="mt-3">
                Total:
                KES {order.total}
              </p>
              <select

  value={order.status}

  onChange={(e) => {

    const updatedOrders =

      orders.map(o =>

        o.id === order.id

          ? {
              ...o,

              status:
                e.target.value
            }

          : o

      )

    setOrders(
      updatedOrders
    )

  }}

  className="
    bg-zinc-800
    p-2
    rounded-xl
    mt-3
  "
>

  <option>
    Pending
  </option>

  <option>
    Processing
  </option>

  <option>
    Dispatched
  </option>

  <option>
    Out For Delivery
  </option>

  <option>
    Delivered
  </option>

</select>
              <button
  onClick={() =>

    setExpandedOrder(

      expandedOrder === order.id
        ? null
        : order.id

    )

  }
  className="
    bg-red-600
    px-4
    py-2
    rounded-xl
    mt-3
  "
>

  {expandedOrder === order.id
    ? "Hide Details"
    : "View Details"}

</button>
{expandedOrder === order.id && (

  <div className="mt-6 space-y-4">

    <div>

      <p>
        Customer:
        {order.customerName}
      </p>

      <p>
        Phone:
        {order.customerPhone}
      </p>

      <p>
        Delivery:
        {order.deliveryLocation}
      </p>

    </div>

    <div>

      <p>
        Coupon:
        {order.coupon || "None"}
      </p>

      <p>
        Discount:
        KES {order.discountAmount || 0}
      </p>

    </div>

    <div>

      <h3 className="font-bold mb-3">
        Ordered Items
      </h3>

      {order.items?.map(
        (item, index) => (

          <div
            key={index}
            className="
              flex
              gap-4
              bg-zinc-800
              p-3
              rounded-xl
              mb-3
            "
          >

            <img
              src={item.image}
              alt={item.name}
              className="
                w-20
                h-20
                rounded-lg
                object-cover
              "
            />

            <div>

              <p className="font-bold">
                {item.name}
              </p>

              <p>
                Size:
                {item.selectedSize}
              </p>

              <p>
                KES {item.price}
              </p>

            </div>

          </div>

        )
      )}

    </div>

  </div>

)}

            </div>

          ))}

        </div>

      )}

    </div>

  )

}
if (page === "profile") {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-6">
        My Profile 👤
      </h1>

      <p>User account information goes here.</p>

      <button
        onClick={() => setPage("home")}
        className="bg-red-600 px-6 py-3 rounded-xl mt-6"
      >
        Back Home
      </button>
    </div>
  );
}
  if (page === "product" && selectedProduct) {
    const relatedProducts = products.filter(
    (product) =>
      product.category ===
        selectedProduct.category &&
      product.id !==
        selectedProduct.id
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <button
        onClick={() => setPage("home")}
        className="bg-zinc-800 px-4 py-2 rounded-xl mb-6"
      >
        ← Back to Products
      </button>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="overflow-hidden rounded-3xl">

  <img
    src={
  activeVariant?.image ||
  selectedProduct.image
}
    alt={activeVariant?.name ||
  selectedProduct.name}
    className="
      w-full
      rounded-3xl
      shadow-2xl
      transition
      duration-500
      hover:scale-125
      cursor-zoom-in
    "
  />

</div>
        <div className="flex gap-3 mt-4 flex-wrap">

  {selectedProduct.variants?.map(
    (variant, index) => (

      <img
        key={index}

        src={variant.image}

        alt=""

        onClick={() => {

  setActiveVariant(variant)

  addToRecentlyViewed(variant)

}}

        className="
          w-24
          h-24
          object-cover
          rounded-xl
          cursor-pointer
          border-2
          border-zinc-700
          hover:border-red-500
          transition
        "
      />

    )
  )}

</div>
          
        <div>

          <p className="text-red-500 mb-2">
            {selectedProduct.category}
          </p>

          <h1 className="text-5xl font-bold">
            {activeVariant?.name ||
  selectedProduct.name}
          </h1>

          <p className="text-3xl text-red-500 mt-4">
            KES {activeVariant?.price ||
  selectedProduct.price}
          </p>

          <p className="text-gray-300 mt-6 leading-7">
            {activeVariant?.description ||
  selectedProduct.description}
          </p>

          <p className="text-green-500 mt-4">
            In Stock: {activeVariant?.stock ||
  selectedProduct.stock}
          </p>

          <div className="mt-6">
            <h3 className="font-bold mb-3">
              Select Size
            </h3>

            <div className="flex flex-wrap gap-3">
              {(activeVariant?.size ||
 selectedProduct.size)?.map((size, index) => (
                <button
  key={index}
  onClick={() => setSelectedSize(size)}
  className={`
    px-5 py-3 rounded-xl transition

    ${
      selectedSize === size
        ? "bg-red-600"
        : "bg-zinc-800 hover:bg-zinc-700"
    }
  `}
>
  {size}
</button>
              ))}
              {/* Related {selectedProduct.category} */}

<div className="mt-16">

  <h2 className="text-3xl font-bold mb-6">
    Related {selectedProduct.category}
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {relatedProducts.map((product) => (

      <div
        key={product.id}
        className="
          bg-zinc-900
          rounded-2xl
          overflow-hidden
          cursor-pointer
          hover:scale-105
          transition
        "
        onClick={() => {

          setSelectedProduct(product);

          setActiveVariant(
          product.variants[0]
        );
           addToRecentlyViewed(
           product.variants[0]
          );

          setSelectedSize(null);

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });

        }}
      >

        <img
          src={product.variants[0].image}
          alt={product.variants[0].name}
          className="
            w-full
            h-48
            object-cover
          "
        />

        <div className="p-4">

          <h3 className="font-bold">
            {product.variants[0].name}
          </h3>

          <p className="text-red-500 mt-2">
            KES {product.variants[0].price}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>
            </div>
          </div>
  
  <button
  onClick={() => {

    if (!selectedSize) {

      alert(
        "Please select a size before adding to wishlist."
      );

      return;
    }

    addToWishlist({

      ...(activeVariant ||
          selectedProduct.variants[0]),

      selectedSize,

    });

  }}
  className="
    w-full
    bg-pink-600
    hover:bg-pink-700
    text-white
    py-3
    rounded-xl
    mb-2
    transition
  "
>
  ❤️ Add to Wishlist
</button>          
<button
            className="w-full bg-red-600 py-4 rounded-2xl text-xl font-bold mt-8"
  onClick={() => {

  if (!selectedSize) {

    alert("Please select a size first.");

    return;
  }

  if (!activeVariant) {

    alert("Please select a product variant.");

    return;
  }

  setCartItems([
    ...cartItems,

    {
      ...activeVariant,

      selectedSize,
    },
  ]);

  alert("Added to cart successfully.");

}}
          >
            Add to Cart
          </button>

          <button
  className="
    w-full
    bg-green-600
    py-4
    rounded-2xl
    text-xl
    font-bold
    mt-4
  "

  onClick={() => {

  if (!selectedSize) {

    alert("Please select a size first.");

    return;
  }

  if (!activeVariant) {

    alert("Please select a product variant.");

    return;
  }

  const checkoutItem = {

    id:
      `${selectedProduct.id}-${activeVariant.name}`,

    image:
      activeVariant.image,

    name:
      activeVariant.name,

    price:
      Number(activeVariant.price),

    stock:
      activeVariant.stock,

    description:
      activeVariant.description,

    selectedSize,

    category:
      selectedProduct.category,
  };

  setCartItems([checkoutItem]);


  setPage("checkout");

}}
>
  Order via WhatsApp
</button>

        </div>
      </div>

    </div>
  );
}
  const whatsappMessage = `
Hello NATI STORES,

Name: ${customerName}

Phone: ${customerPhone}

Location: ${deliveryLocation}

Additional Notes: ${additionalNotes}

Order:
${cartItems
  .map(
    (item) =>
      `- ${item.name} (Size ${item.selectedSize})`
  )
  .join("\n")}

Subtotal:
KES ${subtotal}

Discount:
KES ${discountAmount}

Delivery Fee:
KES ${deliveryFee}

Total:
KES ${finalTotal}

Coupon:
${couponCode || "None"}
`;
const productWhatsappMessage = `
Hello NATI STORES,

I would like to order:

Product: ${selectedProduct?.name}

Size: ${selectedSize || "Not Selected"}

Price: KES ${selectedProduct?.price}
`;
if (page === "checkout") {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button
        onClick={() => setPage("cart")}
        className="mb-6 bg-zinc-800 px-4 py-2 rounded-xl"
      >
        ← Back to Cart
      </button>

      <h1 className="text-4xl font-bold mb-6">
        Checkout
      </h1>

      <div className="bg-zinc-900 p-6 rounded-2xl space-y-4">

       <input
  type="text"
  placeholder="Full Name"
  value={customerName}
  onChange={(e) =>
    setCustomerName(e.target.value)
  }
  className="w-full p-4 rounded-xl bg-zinc-800"
/>

        <input
  type="tel"
  placeholder="Phone Number"
  value={customerPhone}
  onChange={(e) =>
    setCustomerPhone(e.target.value)
  }
  className="w-full p-4 rounded-xl bg-zinc-800"
/>

        <input
  type="text"
  placeholder="Delivery Location"
  value={deliveryLocation}
  onChange={(e) =>
    setDeliveryLocation(e.target.value)
  }
  className="w-full p-4 rounded-xl bg-zinc-800"
/>

        <textarea

  value={additionalNotes}

  onChange={(e) =>
    setAdditionalNotes(
      e.target.value
    )
  }

  placeholder="
    Additional Notes
    (Optional)
  "

  className="
    w-full

    bg-zinc-900

    border
    border-zinc-700

    rounded-xl

    p-4

    h-32

    resize-none

    outline-none

    focus:border-green-500
  "
/>

        
{/* Checkout Summary */}

<div
  className="
    bg-zinc-900
    rounded-2xl
    p-5
    mb-6
    border
    border-zinc-800
  "
>

  <h2 className="text-xl font-bold mb-4">
    Order Summary
  </h2>

  {/* Cart Items */}
  <div className="space-y-3 mb-5">

    {cartItems.map((item, index) => (

      <div
        key={index}

        className="
          flex
          justify-between
          items-center
        "
      >

        <div className="flex items-center gap-3">

          <img
            src={item.image}

            alt=""

            className="
              w-14
              h-14
              object-cover
              rounded-lg
            "
          />

          <div>

            <p className="font-semibold">
              {item.name}
            </p>

            <p className="text-sm text-zinc-400">
              Size: {item.selectedSize}
            </p>

          </div>

        </div>

        <p className="font-bold">
          KES {Number(item.price).toLocaleString()}
        </p>

      </div>

    ))}

  </div>

  {/* Totals */}
  <div className="space-y-2 border-t border-zinc-700 pt-4">

    <div className="flex justify-between">

      <span className="text-zinc-400">
        Subtotal
      </span>

      <span>
        KES {subtotal.toLocaleString()}
      </span>

    </div>

    <div className="flex justify-between">

      <span className="text-zinc-400">
        Delivery Fee
      </span>

      <div className="flex justify-between mb-2">

  <span>Discount</span>

  <span className="text-green-500">
    - KES {discountAmount.toLocaleString()}
  </span>

</div>

      <span>
        KES {deliveryFee.toLocaleString()}
      </span>

    </div>

    <div
      className="
        flex
        justify-between

        text-xl
        font-bold

        pt-3
      "
    >

      <span>Total</span>

      <span>
        KES {finalTotal.toLocaleString()}
      </span>

    </div>

  </div>

</div>
<div className="mt-6">

  <label className="block mb-2 font-bold">
    Coupon Code
  </label>

  <div className="flex gap-2">

    <input
      type="text"
      value={couponCode}
      onChange={(e) =>
        setCouponCode(e.target.value)
      }
      placeholder="Enter Coupon"
      className="
        flex-1
        p-3
        rounded-xl
        bg-zinc-800
      "
    />

    <button
      onClick={applyCoupon}
      className="
        bg-green-600
        px-4
        rounded-xl
      "
    >
      Apply
    </button>

  </div>

</div>
<button  
  onClick={() => {
  if (
    !customerName ||
    !customerPhone ||
    !deliveryLocation
  ) {

    alert(
      "Please fill in checkout details first."
    );

    return;
  }
  setShowMpesaModal(true);

}}

  className="
    w-full
    bg-green-600
    py-4
    rounded-xl
    text-xl
    font-bold
  "
>
  Pay with M-Pesa
</button>

        <button

  onClick={() => {

    if (
      !customerName ||
      !customerPhone ||
      !deliveryLocation
    ) {

      alert(
        "Please fill in all checkout details first."
      );

      return;
    }

    window.open(

      `https://wa.me/254101709129?text=${encodeURIComponent(
        whatsappMessage
      )}`,

      "_blank"
    );
 const newOrder = {
  id: Date.now(),
  date: new Date().toLocaleDateString(),
  createdAt: Date.now(),

  customerName,
  customerPhone,
  deliveryLocation,

  items: [...cartItems],

  subtotal,
  discountAmount,
  deliveryFee,
  total: finalTotal,

  coupon: couponCode,

  status: "Pending"
}

setOrders(prev => [
  newOrder,
  ...prev
])
    setTimeout(() => {

  resetForms();

  setCartItems([]);

  setSelectedSize(null);

  setSelectedSizes({});

  setCouponCode("")

  setDiscount(0)
}, 300);

  }}

  className="
    w-full
    bg-green-500
    hover:bg-green-600
    py-4
    rounded-xl
    font-bold
  "
>

  Order via WhatsApp

</button>
{/* MPESA MODAL */}

{showMpesaModal && (

  <div
    className="
      fixed
      inset-0

      bg-black/70

      flex
      items-center
      justify-center

      z-50
    "
  >

    <div
      className="
        bg-zinc-900

        p-6

        rounded-3xl

        w-[90%]
        max-w-md
      "
    >

      <h2
        className="
          text-2xl
          font-bold
          mb-4
        "
      >
        M-Pesa Payment
      </h2>

      <input

        type="text"

        placeholder="07XXXXXXXX"

        value={mpesaPhone}

        onChange={(e) =>
          setMpesaPhone(
            e.target.value
          )
        }

        className="
          w-full

          p-4

          rounded-2xl

          bg-zinc-800

          border
          border-zinc-700

          mb-5
        "
      />

      <div className="flex gap-4">

        <button

          onClick={() =>
            setShowMpesaModal(false)
          }

          className="
            flex-1

            py-4

            rounded-2xl

            bg-zinc-700
          "
        >

          Cancel

        </button>

        <button

          onClick={() => {

            if (!mpesaPhone) {

              alert(
                "Enter M-Pesa number."
              );

              return;
            }

            setShowMpesaModal(false);

            handleMpesaPayment(
            mpesaPhone
            );
            
          }}

          className="
            flex-1

            py-4

            rounded-2xl

            bg-green-500

            font-bold
          "
        >

          Send Prompt

        </button>

      </div>

    </div>

  </div>
  )}
  
      </div>
    </div>
  );
}
const handleMpesaPayment =
  async (phone) => {

    try {

      const response = await fetch(

        "https://nati-stores-backend.onrender.com/stkpush",

        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({

            amount: finalTotal,

            phone: phone,

          }),

        }
      );

      const data =
        await response.json();

      console.log(data);

      alert(
        "M-Pesa prompt sent to your phone."
      );
      resetForms();

      setCartItems([]);

      setSelectedSize(null);

      setSelectedSizes({});
    }

    catch (error) {

      console.log(error);

      alert("Payment failed.");

    }

};
const handleQuoteRequest = () => {

  if (
    !quoteName ||
    !quotePhone ||
    !quoteProduct
  ) {
    alert("Please fill the required fields.");
    return;
  }

  const message = `QUOTE REQUEST

Name: ${quoteName}
Phone: ${quotePhone}

Product Type: ${quoteProduct}
Quantity: ${quoteQuantity}

Deadline: ${quoteDeadline}

Notes:
${quoteNotes}

Please send me a quotation.`;

  window.open(
    `https://wa.me/254101709129?text=${encodeURIComponent(message)}`,
    "_blank"
  );
  
  resetForms();

  setShowQuoteModal(false);
};

if (page === "wishlist") {

  return (

    <div
  className="
    min-h-screen
    bg-gradient-to-b
    from-black
    via-zinc-900
    to-black
    text-white
    p-6
  "
>

      <h1 className="text-3xl font-bold mb-6">
        My Wishlist ❤️
      </h1>
      <button
  onClick={() => setPage("home")}
  className="
    mb-6
    px-5
    py-2
    rounded-xl
    bg-zinc-800
    text-white
    hover:bg-zinc-700
    transition
  "
>
  ← Back to Home
</button>

      {wishlistItems.length === 0 ? (

        <p>
          Your wishlist is empty.
        </p>

      ) : (

        <div className="grid gap-4">

          {wishlistItems.map((item) => (

            <div
  key={item.name}
  className="
    bg-zinc-900
    border
    border-zinc-700
    rounded-2xl
    p-4
    shadow-lg
  "
>

              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-48
                  object-cover
                  rounded-lg
                "
              />

              <h3 className="font-bold mt-3">
                {item.name}
              </h3>

              <p>
                KES {item.price}
              </p>
              <button
  onClick={() => {

    const parentProduct = products.find(
      p =>
        p.variants.some(
          v => v.name === item.name
        )
    );

    setSelectedProduct(parentProduct);

    setActiveVariant(item);

    setPage("product");

  }}
  className="
    bg-blue-600
    text-white
    px-4
    py-2
    rounded-lg
    mt-3
    mr-2
  "
>
  View Product
</button>
<button
  onClick={() => {

    setCartItems([
      ...cartItems,
      item
    ]);

    removeFromWishlist(item.name);

  }}
  className="
    bg-green-600
    text-white
    px-4
    py-2
    rounded-lg
    mt-3
  "
>
  Move to Cart
</button>
              <button
                onClick={() =>
                  removeFromWishlist(
                    item.name
                  )
                }
                className="
                  bg-red-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  mt-3
                "
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}
if (page === "portfolio") {

  return (

    <div className="min-h-screen bg-black text-white p-6">

      <button
        onClick={() => setPage("home")}
        className="
          bg-zinc-800
          px-4
          py-2
          rounded-xl
          mb-6
        "
      >
        ← Back Home
      </button>

      <h1 className="text-4xl font-bold mb-8">
        NATI STORES Portfolio
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {products.flatMap(product =>
          product.variants.map((item,index) => (

            <div
              key={index}
              className="
                bg-zinc-900
                rounded-2xl
                overflow-hidden
              "
            >

              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-64
                  object-cover
                "
              />

              <div className="p-4">

                <h3 className="font-bold">
                  {item.name}
                </h3>

                <p className="text-red-500 mt-2">
                  KES {item.price}
                </p>

              </div>

            </div>

          ))
        )}

      </div>

    </div>

  );

}
  return (
    <div className="min-h-screen bg-black text-white">
      <header

  className={`

    sticky
    top-0

    z-50

    backdrop-blur-xl

    ${
      darkMode

        ? "bg-black/40"

        : "bg-white/40"
    }

  `}
>
        <button
  className="md:hidden text-3xl"
  onClick={() =>
    setMobileMenuOpen(!mobileMenuOpen)
  }
>
  ☰
</button>
        <div className="flex items-center gap-2 text-red-500 font-bold text-xl">
          <span>☰</span>
          NATI STORES
        </div>

        <div className="flex gap-4">
<button

  onClick={() => {

    document
      .getElementById(
        "search-section"
      )

      ?.scrollIntoView({

        behavior: "smooth",

        block: "center",
      });

    setTimeout(() => {

      searchInputRef.current?.focus();

    }, 700);

  }}

  className="
    hover:scale-110
    transition
  "
>
  <div
  className="relative cursor-pointer"
  onClick={() => setPage("wishlist")}
>

  <Heart size={24} />

  {wishlistItems.length > 0 && (

    <div
      className="
        absolute
        -top-2
        -right-2
        bg-pink-600
        text-white
        text-xs
        w-5
        h-5
        rounded-full
        flex
        items-center
        justify-center
      "
    >
      {wishlistItems.length}
    </div>

  )}

</div>

</button>
 <button
  onClick={() =>
    setPage("orders")
  }
>
  📦 
</button>
          <div
  className="cursor-pointer"
  onClick={() => setPage("profile")}
>
  👤
</div>
<button

  onClick={() =>
    setDarkMode(!darkMode)
  }

  className={`

    relative

    w-16
    h-9

    flex
    items-center

    rounded-full

    px-1

    transition-all
    duration-500

    ${
      darkMode

        ? "bg-zinc-800"

        : "bg-yellow-400"
    }

  `}
>

  <div

    className={`

      w-7
      h-7

      rounded-full

      flex
      items-center
      justify-center

      bg-white

      shadow-lg

      text-sm

      transition-all
      duration-500

      ${
        darkMode

          ? "translate-x-7"

          : "translate-x-0"
      }

    `}
  >

    {darkMode ? "🌙" : "☀️"}

  </div>

</button>          
<div
  className="relative cursor-pointer"
  onClick={() => setPage("cart")}
>

  <span className="text-2xl">
    🛒
  </span>

  {cartCount > 0 && (

    <div
      className="
        absolute
        -top-2
        -right-2
        bg-red-600
        text-white
        text-xs
        w-6
        h-6
        rounded-full
        flex
        items-center
        justify-center
        font-bold
      "
    >
      {cartCount}
    </div>

  )}


</div>
<button
  onClick={() => {

    const password =
      prompt(
        "Enter Admin Password"
      )

    if (
      password === "nati123"
    ) {

      setIsAdmin(true)

      setPage("admin")

    }

    else {

      alert(
        "Invalid password"
      )

    }

  }}
>
  👨‍💼 Admin
</button>
        </div>
      </header>
      <div
  className="
    bg-red-600
    text-white
    text-center
    p-4
    font-bold
  "
>
  <div>{featuredDeal.title}</div>

  <div className="text-sm">
    {featuredDeal.description}
  </div>

  <div className="mt-2">
    Code: {featuredDeal.code}
  </div>
  <div
  className="
    flex
    justify-center
    gap-4
    mt-4
    flex-wrap
  "
>

  <div className="bg-black px-4 py-2 rounded-xl">
    {timeLeft.days}
    <div className="text-xs">
      Days
    </div>
  </div>

  <div className="bg-black px-4 py-2 rounded-xl">
    {timeLeft.hours}
    <div className="text-xs">
      Hours
    </div>
  </div>

  <div className="bg-black px-4 py-2 rounded-xl">
    {timeLeft.minutes}
    <div className="text-xs">
      Minutes
    </div>
  </div>

  <div className="bg-black px-4 py-2 rounded-xl">
    {timeLeft.seconds}
    <div className="text-xs">
      Seconds
    </div>
  </div>

</div>
</div>
<button
  onClick={() => {

    document
      .getElementById("products")
      ?.scrollIntoView({
        behavior: "smooth"
      })

  }}
  className="
    mt-3
    bg-white
    text-red-600
    px-5
    py-2
    rounded-xl
    font-bold
  "
>
  Shop Now
</button>
      {mobileMenuOpen && (

  <div className="bg-zinc-900 p-6 md:hidden">

    <div
      className="py-3 border-b border-zinc-700 cursor-pointer"
      onClick={() => {
        setPage("home");
        setMobileMenuOpen(false);
      }}
    >
      Home
    </div>

    <div
      className="py-3 border-b border-zinc-700 cursor-pointer"
      onClick={() => {
        setPage("cart");
        setMobileMenuOpen(false);
      }}
    >
      Cart
    </div>

    <div
      className="py-3 border-b border-zinc-700 cursor-pointer"
      onClick={() => {
        setPage("profile");
        setMobileMenuOpen(false);
      }}
    >
      Profile
    </div>

  </div>

)}
      <section
  className="h-[500px] bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${heroBanner})` }}
>
  <div className="text-center">
    <h1 className="text-5xl font-bold text-white">
      NATI STORES ⚽
    </h1>

    <p className="text-xl text-gray-200 mt-4">
      Elite Football Boots & Trainers
    </p>

    <button
  className="bg-red-600 px-6 py-3 rounded-xl mt-6"
  onClick={() => {
    document
      .getElementById("products")
      .scrollIntoView({ behavior: "smooth" });
  }}
>
  Shop Now
</button>
  </div>
</section>
<button
  onClick={() => setShowQuoteModal(true)}
  className="
    px-6
    py-3
    rounded-xl
    bg-blue-600
    text-white
    font-semibold
  "
>
  Request Quote
</button>
{showReviewModal && (

  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-white p-6 rounded-2xl w-[90%] max-w-lg">

      <h2 className="text-2xl font-bold mb-4 text-black">
        Leave a Review
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={reviewName}
        onChange={(e) =>
          setReviewName(e.target.value)
        }
        className="
          w-full
          border
          p-3
          mb-3
          rounded-lg
          text-black
        "
      />

      <select
        value={reviewRating}
        onChange={(e) =>
          setReviewRating(
            Number(e.target.value)
          )
        }
        className="
          w-full
          border
          p-3
          mb-3
          rounded-lg
          text-black
        "
      >
        <option value="5">⭐⭐⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="2">⭐⭐</option>
        <option value="1">⭐</option>
      </select>

      <textarea
        placeholder="Your Review"
        value={reviewComment}
        onChange={(e) =>
          setReviewComment(
            e.target.value
          )
        }
        className="
          w-full
          border
          p-3
          mb-4
          rounded-lg
          text-black
        "
      />

      <div className="flex gap-3">

        <button
          onClick={() =>
            setShowReviewModal(false)
          }
          className="
            flex-1
            bg-gray-500
            text-white
            py-3
            rounded-lg
          "
        >
          Cancel
        </button>

        <button
          onClick={submitReview}
          className="
            flex-1
            bg-green-500
            text-white
            py-3
            rounded-lg
          "
        >
          Submit
        </button>

      </div>

    </div>

  </div>

)}
  <section className="p-6">

  <h2 className="text-3xl font-bold mb-6">
    Recently Viewed
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {recentlyViewed.map((item) => (

      <div
        key={item.name}
        className="
          bg-zinc-900
          rounded-2xl
          overflow-hidden
          cursor-pointer
        "
        onClick={() => {

          const parentProduct =
            products.find(
              p =>
                p.variants.some(
                  v =>
                    v.name === item.name
                )
            );

          setSelectedProduct(
            parentProduct
          );

          setActiveVariant(item);

          setPage("product");

        }}
      >

        <img
          src={item.image}
          alt={item.name}
          className="
            w-full
            h-48
            object-cover
          "
        />

        <div className="p-4">

          <h3 className="font-bold">
            {item.name}
          </h3>

          <p className="text-red-500">
            KES {
              Number(item.price)
                .toLocaleString()
            }
          </p>

        </div>

      </div>

    ))}

  </div>

  </section>
      <section id="products" className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          Featured Products
        </h2>
          <div className="flex gap-3 mb-6 flex-wrap">

  <button
    onClick={() => setSelectedCategory("All")}
    className="bg-red-600 px-4 py-2 rounded-xl"
  >
    All
  </button>

  <button
    onClick={() => setSelectedCategory("Boots")}
    className="bg-zinc-800 px-4 py-2 rounded-xl"
  >
    Boots
  </button>

  <button
    onClick={() => setSelectedCategory("Trainers")}
    className="bg-zinc-800 px-4 py-2 rounded-xl"
  >
    Trainers
  </button>

  <button
    onClick={() => setSelectedCategory("Accessories")}
    className="bg-zinc-800 px-4 py-2 rounded-xl"
  >
    Accessories
  </button>
<div id="search-section">
</div>
<input
  ref={searchInputRef}
  type="text"
  placeholder="Search products..."
  value={searchTerm}
  onChange={(e) =>
    setSearchTerm(e.target.value)
  }
  className={`

  w-full

  p-4

  rounded-2xl

  border-2

  outline-none

  transition-all
  duration-300

  ${
    darkMode

      ? `
        bg-zinc-900/80
        border-zinc-700
        text-white

        focus:border-green-500
        focus:shadow-[0_0_20px_rgba(34,197,94,0.5)]
      `

      : `
        bg-white/80
        border-zinc-300
        text-black

        focus:border-green-500
        focus:shadow-[0_0_20px_rgba(34,197,94,0.3)]
      `
  }

`}
/>
{searchTerm && (

  <div
    className={`

      mt-4

      rounded-2xl

      overflow-hidden

      shadow-2xl

      ${
        darkMode

          ? "bg-zinc-900"

          : "bg-white"
      }

    `}
  >

    {filteredProducts.length > 0 ? (

      filteredProducts.map(
        (product, index) => (

          <div

            key={index}

  onClick={() => {

  setSelectedProduct(
    product.parentProduct
  );

  setActiveVariant(product);

  setPage("product");

  setSearchTerm("");

  }}

            className={`

              flex
              items-center
              gap-4

              p-4

              cursor-pointer

              transition

              hover:bg-green-500/10

              border-b

              ${
                darkMode

                  ? "border-zinc-800"

                  : "border-zinc-200"
              }

            `}
          >

<img
  src={product.image}
  alt={product.name}
  className="
    w-16
    h-16
    object-cover
    rounded-xl
  "
/>

            <div>

             <p className="font-bold">
  {product.name}
</p>

              <p className="text-sm text-zinc-400">
  KES {Number(product.price).toLocaleString()}
</p>

            </div>

          </div>

        )
      )

    ) : (

      <div className="p-4 text-zinc-400">

        No products found.

      </div>

    )}

  </div>

)}
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products
  .filter((product) => {

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory;

   const matchesSearch =
  product.variants.some(variant =>

    variant.name
      .toLowerCase()
      .includes(
        searchTerm.toLowerCase()
      )

  );

    return matchesCategory && matchesSearch;
  })

  .map((product, index) => (
            <div 
            key={`${product.id}-${index}`}

  className={`

    rounded-2xl

    transition-all

    overflow-hidden

    ${
      darkMode

        ? "bg-zinc-900"

        : "bg-white shadow-xl"
    }

  `}
>              
<img
  src={product.variants[0].image}
  alt={product.variants[0].name}
  className="w-full h-52 object-cover cursor-pointer"
  onClick={() => {
    setSelectedProduct(product);

setActiveVariant(
  product.variants?.[0]
);
addToRecentlyViewed(
    product.variants[0]
  );

setPage("product");
  }}
/>

              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {product.variants[0].name}
                </h3>
                 <p className="text-sm text-gray-400 mt-1">
    {product.category}
  </p>
                <p className="text-red-500 mt-2">
                  KES {product.variants[0].price}
                </p>
                <p className="text-green-500 text-sm mt-1">
    In Stock: {product.variants[0].stock}
  </p>
  <div className="flex flex-wrap gap-2 mt-4">

  {product.variants[0].size?.map((size, index) => (

    <button
      key={index}

      onClick={() =>
        setSelectedSizes({
          ...selectedSizes,
          [product.id]: size,
        })
      }

      className={`
        px-3 py-2 rounded-lg text-sm transition

        ${
          selectedSizes[product.id] === size
            ? "bg-red-600"
            : "bg-zinc-800 hover:bg-zinc-700"
        }
      `}
    >
      {size}
    </button>

  ))}

</div>

<button
onClick={() => {

  const chosenSize =
    selectedSizes[product.id];

  if (!chosenSize) {

    alert(
      "Please select a size before adding to wishlist."
    );

    return;
  }

  addToWishlist({

    ...product.variants[0],

    selectedSize: chosenSize,

  });

}}
  className="
    w-full
    bg-pink-600
    text-white
    py-3
    rounded-xl
    mb-2
  "
>
  ❤️ Add to Wishlist
</button>
               <button
  className="w-full bg-red-600 py-3 rounded-xl mt-4"
 onClick={() => {

  const chosenSize =
    selectedSizes[product.id];

  if (!chosenSize) {

    alert("Please select a size first.");

    return;
  }

  const selectedVariant =
    product.variants?.[0];

  if (!selectedVariant) {

    alert("Product variant missing.");

    return;
  }

  setCartItems([
    ...cartItems,

    {
      ...selectedVariant,

      selectedSize: chosenSize,

      category: product.category,
    },
  ]);

}}
>
  Add to Cart
</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-6">

  <h2 className="text-3xl font-bold mb-6">
    ⭐ Customer Reviews
  </h2>
  <button
  onClick={() =>
    setShowReviewModal(true)
  }
  className="
    bg-yellow-500
    px-5
    py-3
    rounded-xl
    mb-6
    text-black
    font-bold
  "
>
  Leave a Review
</button>
  <div className="grid md:grid-cols-3 gap-6">

    {reviews.map((review,index) => (

      <div
        key={index}
        className="
          bg-zinc-900
          rounded-2xl
          p-5
        "
      >

        <div className="text-yellow-400 text-xl mb-3">

          {"⭐".repeat(review.rating)}

        </div>

        <p className="text-zinc-300">
          "{review.comment}"
        </p>

        <p className="mt-4 font-bold">
          — {review.name}
        </p>

      </div>

    ))}

  </div>

</section>
      <footer className="fixed bottom-0 w-full bg-zinc-950 border-t border-zinc-800 flex justify-around p-4">
        <div
  className="cursor-pointer"
  onClick={() => setPage("home")}
>
  🏠
</div>
<div
  className="cursor-pointer"
  onClick={() => setPage("portfolio")}
>
  📸 Portfolio
</div>
        <button
  onClick={() =>
    setPage("orders")
  }
>
  📦 Orders
</button>

        <div
  className="relative cursor-pointer"
  onClick={() => setPage("cart")}
>

  <span className="text-2xl">
    🛒
  </span>

  {cartCount > 0 && (

    <div
      className="
        absolute
        -top-2
        -right-2
        bg-red-600
        text-white
        text-xs
        w-6
        h-6
        rounded-full
        flex
        items-center
        justify-center
        font-bold
      "
    >
      {cartCount}
    </div>

  )}

</div>
        <div
  className="cursor-pointer"
  onClick={() => setPage("profile")}
>
  👤
</div>
      </footer>
      {/* Chat Popup */}

{showChatPopup && (

  <div
    className="
      fixed
      bottom-28
      right-6
      z-50

      bg-zinc-900/95
      backdrop-blur-md

      border
      border-zinc-700

      rounded-2xl

      p-5

      w-72

      shadow-2xl

      animate-fade-in
    "
  >

    {/* Close Button */}
    <button

      onClick={() =>
        setShowChatPopup(false)
      }

      className="
        absolute
        top-2
        right-3
        text-zinc-400
        hover:text-white
      "
    >
      ✕
    </button>

    <p className="text-lg font-bold mb-2">
      👋 Need Help?
    </p>

    <p className="text-sm text-zinc-300 mb-4">
      Chat with NATI STORES for:
      boots, sizing, delivery,
      payments & product support.
    </p>

    <a
      href="https://wa.me/254101709129?text=Hello%20NATI%20STORES,%20I%20need%20help."

      target="_blank"

      rel="noopener noreferrer"

      className="
        block
        text-center

        bg-green-500
        hover:bg-green-600

        py-3

        rounded-xl

        font-bold

        transition
      "
    >
      Chat on WhatsApp
    </a>

  </div>

  )}
      <a
  href="https://wa.me/254101709129?text=Hello%20NATI%20STORES,%20I%20need%20assistance."

  target="_blank"

  rel="noopener noreferrer"

  className="
    fixed
    bottom-6
    right-6
    z-50
    group
  "
  >

  {/* Notification Badge */}
  <div
    className="
      absolute
      -top-2
      -right-2
      bg-red-600
      text-white
      text-xs
      w-6
      h-6
      rounded-full
      flex
      items-center
      justify-center
      animate-pulse
      shadow-lg
    "
  >
    1
  </div>

  {/* Main Button */}
  <div
    className="
      flex
      items-center
      gap-4

      bg-green-500/90
      backdrop-blur-md

      hover:bg-green-600

      px-5
      py-4

      rounded-full

      shadow-2xl

      transition-all
      duration-300

      group-hover:scale-105

      animate-bounce
    "
  >

    {/* WhatsApp Icon */}
    <div
      className="
        bg-white
        text-green-600

        w-12
        h-12

        rounded-full

        flex
        items-center
        justify-center
      "
    >
      <MessageCircle size={28} />
    </div>

    {/* Text */}
    <div className="hidden sm:block">

      <p className="font-bold text-white">
        NATI STORES
      </p>

      <p className="text-sm text-white/90">
        Online now
      </p>

    </div>

  </div>
    </a>
    {showQuoteModal && (

  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl p-6 w-[90%] max-w-lg">

      <h2 className="text-2xl font-bold mb-4">
        Request a Quote
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={quoteName}
        onChange={(e) => setQuoteName(e.target.value)}
        className="w-full
    border
    p-3
    mb-3
    rounded-lg
    bg-white
    text-black
    placeholder-gray-500"
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={quotePhone}
        onChange={(e) => setQuotePhone(e.target.value)}
        className="w-full
    border
    p-3
    mb-3
    rounded-lg
    bg-white
    text-black
    placeholder-gray-500"
      />

      <input
        type="text"
        placeholder="Product Type"
        value={quoteProduct}
        onChange={(e) => setQuoteProduct(e.target.value)}
        className="w-full
    border
    p-3
    mb-3
    rounded-lg
    bg-white
    text-black
    placeholder-gray-500"
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quoteQuantity}
        onChange={(e) => setQuoteQuantity(e.target.value)}
        className="w-full
    border
    p-3
    mb-3
    rounded-lg
    bg-white
    text-black
    placeholder-gray-500"
      />

      <input
        type="date"
        value={quoteDeadline}
        onChange={(e) => setQuoteDeadline(e.target.value)}
        className="w-full
    border
    p-3
    mb-3
    rounded-lg
    bg-white
    text-black
    placeholder-gray-500"
      />

      <textarea
        placeholder="Additional Notes"
        value={quoteNotes}
        onChange={(e) => setQuoteNotes(e.target.value)}
        className="w-full
    border
    p-3
    mb-3
    rounded-lg
    bg-white
    text-black
    placeholder-gray-500"
      />

      <div className="flex gap-3">

        <button
          onClick={() => setShowQuoteModal(false)}
          className="flex-1 bg-gray-500 text-white py-3 rounded-lg"
        >
          Cancel
        </button>

        <button
          onClick={handleQuoteRequest}
          className="flex-1 bg-green-500 text-white py-3 rounded-lg"
        >
          Send Quote Request
        </button>

      </div>

    </div>

  </div>

)}

</div>
  );
}
export default App;
