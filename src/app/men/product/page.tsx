"use client";
import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartItem } from "@/redux/cartSlice";

import {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/cartSlice";

import {
  picture,
  image55,
  image59,
  star,
  image60,
  van,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  pricing1,
  sustainability,
  cap,
} from "@/assets";

const data = [
  {
    id: 1,
    src: picture.src,
    title: "Rewool Jacket",
    title1: "Small | Black",
    price: 238,
    discountedPrice: 167,
  },
  {
    id: 2,
    src: image55.src,
    title: "Everlane Coat",
    title1: "Small | Black",
    price: 238,
    discountedPrice: 167,
  },
  {
    id: 3,
    src: image59.src,
    title: "The Rewool @ Oversized Shirt Jacket",
    title1: "Small | Black",
    price: 238,
    discountedPrice: 167,
  },
  {
    id: 4,
    src: image60.src,
    title: "The Rewool @ Oversized Shirt Jacket",
    title1: "Small | Black",
    price: 238,
    discountedPrice: 167,
  },
  {
    id: 5,
    src: image61.src,
    title: "The Rewool @ Oversized Shirt Jacket",
    title1: "Small | Black",
    price: 238,
    discountedPrice: 167,
  },
  {
    id: 6,
    src: image62.src,
    title: "The Rewool @ Oversized Shirt Jacket",
    title1: "Small | Black",
    price: 238,
    discountedPrice: 167,
  },
];

const data1 = [
  {
    id: 1,
    src: image63.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
    price: "$60",
  },
  {
    id: 2,
    src: image64.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
    price: "$60",
  },
  {
    id: 3,
    src: image65.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
    price: "$60",
  },
  {
    id: 4,
    src: image66.src,
    title: "The Waffle Long-Sleeve Crew",
    title1: "Bone",
    price: "$60",
  },
];

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "XXS",
  "3XL",
  "4XL",
  "5XL",
  "6XL",
  "7XL",
];

const reviewData = [
  {
    id: 1,
    name: "Jane Doe",
    comment: "Loved the quality, very warm and comfy!",
    rating: 5,
  },
  {
    id: 2,
    name: "John Smith",
    comment: "It's okay, a bit too oversized for my taste.",
    rating: 3,
  },
  {
    id: 3,
    name: "Alex Ray",
    comment: "Not great, expected better fabric.",
    rating: 5,
  },
];

const Product = ({ productId }: { productId: string }) => {
  const [showAllSizes, setShowAllSizes] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  const [showCart, setShowCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("XS");
  {
    /*const selectedProduct = data.find((item) => item.id === productId);*/
  }
  const id = Number(productId);
  const selectedProduct = data.find((item) => String(item.id) === String(id));
  console.log("Looking for product with ID:", productId);
  console.log(
    "Data available:",
    data.map((d) => d.id)
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId || !loading) return;

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [productId, loading]);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const [sortOrder, setSortOrder] = useState("highest");
  const sortedReviews = [...reviewData].sort((a, b) => {
    if (sortOrder === "lowest") return a.rating - b.rating;
    return b.rating - a.rating; // default: highest
  });

  const handleAddToCart = (item: CartItem) => {
    console.log("Adding to Cart:", item);
    const alreadyInCart = cartItems.find(
      (cartItem) =>
        cartItem.id === item.id &&
        cartItem.size === item.size &&
        cartItem.color === item.color
    );

    if (!alreadyInCart) {
      dispatch(addToCart(item));
    } else {
    }

    setShowCart(true);
  };

  const handleRemoveFromCart = (itemId: CartItem) => {
    dispatch(removeFromCart(itemId));
  };

  const handleDecreaseQuantity = (itemId: number | undefined) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleIncreaseQuantity = (itemId: number | undefined) => {
    dispatch(increaseQuantity(itemId));
  };

  const totalReviews = reviewData.length;

  const ratingCounts = reviewData.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {} as { [key: number]: number });

  const averageRating =
    totalReviews === 0
      ? 0
      : reviewData.reduce((sum, review) => sum + review.rating, 0) /
        totalReviews;

  return (
    <>
      <Drawer
        open={showCart}
        onClose={() => setShowCart(false)}
        direction="right"
        size="45vw"
        enableOverlay={false}
        zIndex={1300}
        className="custom-cart-drawer"
      >
        <div style={{ padding: "20px" }}>
          <h3 className="text-lg font-semibold mb-4">Your Cart</h3>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-600 hover:text-black text-sm font-medium"
            title="Close"
          >
            ✕
          </button>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}-${item.color}`}
                className="mb-4 flex items-start justify-between"
              >
                <img
                  src={item.src || "fallback.png"}
                  alt={item.title}
                  className="w-20 h-30 object-cover bg-gray-100"
                />

                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.title1}</p>
                  <div className="flex items-center gap-2">
                    {item.discountedPrice ? (
                      <>
                        <p className="text-sm mt-8 line-through">
                          ${item.price}
                        </p>
                        <p className="text-sm text-gray-500 mt-8">
                          ${item.discountedPrice}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm text-black font-medium">
                        ${item.price}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => {
                      handleRemoveFromCart(item);
                    }}
                    className="text-red-500 self-start hover:text-black mb-2 cursor-pointer"
                    title="Remove item"
                  >
                    <FaTrashAlt size={16} />
                  </button>

                  <div className="flex items-center border border-gray-300  w-fit ">
                    <button
                      className="px-2 py-1 text-sm hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-sm">{item.quantity}</span>
                    <button
                      className="px-2 py-1 text-sm hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <p className="ml-5 text-lg font-semibold">Before You Go</p>
        <div>
          <div className="flex items-start border border-gray-300  p-4 ">
            {/* Image on the left */}
            <img
              src={cap.src}
              alt="Merino Wool Beanie"
              className="w-20 h-25 object-cover "
            />

            {/* Title and subtitle in the center */}

            <div className="flex flex-col ml-3 flex-grow">
              <p className="font-semibold text-sm text-gray-800">
                The Good Merino Wool Beanie
              </p>
              <p className="text-sm text-gray-500 mt-1">
                One Size | Chambray Blue
              </p>

              <p className="text-sm font-semibold text-black mt-8 ">$45</p>
            </div>

            {/* Add button on the right */}
            <div className="mt-auto">
              <button
                className="bg-black text-white px-4 py-2 text-sm hover:bg-gray-800 transition cursor-pointer"
                onClick={() =>
                  handleAddToCart({
                    id: 99,
                    src: cap.src,
                    title: "The Good Merino Wool Beanie",
                    title1: "One Size | Chambray Blue",
                    price: 45,
                    quantity: 1,
                    size: "One Size",
                    color: "Chambray Blue",
                  })
                }
              >
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-15 pt-4 px-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-medium text-gray-700">
              Subtotal ({totalItems} item{totalItems !== 1 ? "s" : ""})
            </p>
            <p className="text-lg font-semibold text-black">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <button
            className="w-full py-3 bg-black text-white text-sm font-semibold hover:bg-gray-800 transition"
            onClick={() => setShowCart(false)}
          >
            CONTINUE TO CHECKOUT
          </button>
          <p className="text-sm font-semibold text-center mt-8">
            Psst,get it now before it sells out.
          </p>
        </div>
      </Drawer>

      <div className="flex flex-col lg:flex-row justify-between gap-8 max-w-[1400px] px-4 md:px-12 xl:px-20 mx-auto mt-16">
        <div className="w-full lg:w-[55%] grid grid-cols-2 gap-4">
          {data.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-2">
              <img
                src={item.src}
                alt={`Product ${item.id}`}
                className="w-auto h-full object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>

        {/* Right Content: Text */}
        <div className="w-full lg:w-[40%] flex flex-col justify-start">
          <h2 className="mb-1 tracking-[0.2px] leading-[16px] text-[12px] font-normal font-maison-neue text-gray-500 hover:underline cursor-pointer hover:decoration-blue-400">
            Men / Outerwear - Jackets & Coats
          </h2>

          <div className="leading-[33.24px] text-[24px] font-normal font-maison-neue">
            <p className="text-gray-700 text-lg hover:underline hover:decoration-blue-400 cursor-pointer">
              The ReWool&reg;{" "}
              <span className="line-through text-gray-400 ml-4">$238</span>
              <span className="ml-2">$167</span>
            </p>
            <p className="hover:underline hover:decoration-blue-400 cursor-pointer">
              Oversized Shirt Jacket
            </p>
          </div>

          <div className="flex gap-2 mt-2">
            <img src={star.src} alt="star rating" />
            <span className="text-sm text-gray-600 hover:underline hover:decoration-blue-400 cursor-pointer">
              5.0 <span className="text-gray-400">(2 Reviews)</span>
            </span>
          </div>

          <hr className=" mt-4" />

          {/* Color Info */}
          <div className="mt-1">
            <p className="text-sm text-gray-600 mb-2 tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
              Color
              <span className="font-medium text-black ml-2 tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
                Black / Olive
              </span>
            </p>
            <div className="flex gap-4">
              <div
                className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer ${
                  selectedColor === "black" ? "ring-2 ring-gray-500" : ""
                }`}
                style={{ backgroundColor: "black" }}
                onClick={() => setSelectedColor("black")}
              ></div>

              <div
                className={`w-6 h-6 rounded-full border border-gray-300 cursor-pointer ${
                  selectedColor === "olive" ? "ring-2 ring-black" : ""
                }`}
                style={{ backgroundColor: "#708238" }}
                onClick={() => setSelectedColor("olive")}
              ></div>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-3">
            <div className="flex items-center justify-between w-full max-w-md mb-2">
              <p className="text-sm text-gray-600 tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
                Size
              </p>
              <button
                className="text-sm text-gray-600 border-b border-gray-400 hover:text-black hover:border-black cursor-pointer tracking-[0.2px] leading-[16px] text-[12px] font-semibold font-maison-neue"
                onClick={() => setShowAllSizes(!showAllSizes)}
              >
                {showAllSizes ? "Hide Sizes" : "Select Size"}
              </button>
            </div>

            <div className="grid grid-cols-6 gap-x-2 gap-y-1 max-w-md">
              {(showAllSizes ? sizes : sizes.slice(0, 6)).map((size) => (
                <div
                  key={size}
                  className={`w-12 h-8 border flex items-center justify-center text-sm cursor-pointer transition ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-gray-100 text-gray-700 border-gray-300 hover:border-black hover:text-black"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Bag Button */}
          <div className="flex justify-center mt-5">
            <button
              className="w-full py-2 bg-black text-white cursor-pointer hover:bg-gray-800 transition "
              onClick={() =>
                selectedProduct
                  ? handleAddToCart({
                      id: selectedProduct.id,
                      src: selectedProduct.src,
                      title: selectedProduct.title,
                      title1: `${selectedSize} | ${selectedColor}`,
                      size: selectedSize,
                      color: selectedColor,
                      price: selectedProduct.price,
                      discountedPrice: selectedProduct.discountedPrice,
                      quantity: 1,
                    })
                  : console.error("No product selected.")
              }
            >
              Add to Bag
            </button>
          </div>

          <hr className="mt-5" />
          <div className="flex items-start gap-4 mt-4">
            <img src={van.src} alt="Van Icon" className="w-8 h-8 mt-1" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-black tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
                Free Shipping
              </p>
              <p className="text-sm text-gray-600 tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
                Free shipping on all U.S. orders over $100.{""}
                <a
                  href="#"
                  className="text-sm text-gray-800 underline hover:text-black mt-1"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-4">
            <img src={van.src} alt="Van Icon" className="w-8 h-8 mt-1" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-black tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
                Easy Returns
              </p>
              <p className="text-sm text-gray-600 tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
                Extended returns through January 31.{""}
                <a
                  href="#"
                  className="text-sm text-gray-800 underline hover:text-black mt-1"
                >
                  Return Details
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 mt-4">
            <img src={van.src} alt="Van Icon" className="w-8 h-8 mt-1" />
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-black tracking-[0.42px] leading-[21px] text-[14px] font-semibold cursor-pointer font-maison-neue hover:underline hover:decoration-blue-400">
                Send It As A Gift Card
              </p>
              <p className="text-sm text-gray-600 tracking-[0.42px] leading-[21px] text-[14px] font-semibold font-maison cursor-pointer hover:underline hover:decoration-blue-400">
                Add a free personalized note during checkout.{""}
              </p>
            </div>
          </div>

          <hr className="mt-4"></hr>

          <p className="tracking-[0.2px] leading-[24px] text-[16px] font-semibold font-maison-neue mt-4 cursor-pointer hover:underline hover:decoration-blue-400">
            Part shirt, part jacket, all style.
          </p>
          <p className=" tracking-[1.4px] leading-[16.8px] text-[14px] font-normal font-maison-neue mt-4">
            Meet your new chilly weather staple. The<br></br> ReWool&reg;
            Oversized Shirt Jacket has all the<br></br> classic shirt
            detailing-collar , cuffs with buttons ,<br></br> and a shirttail hem
            , along with two front chest flap <br></br> pockets and on-seam
            pockets. The sleeves are<br></br> fully lines for added warmth and
            it&apos; made with a <br></br>GRS-certified recycled Italian Wool
            and GRS-<br></br> certified recycled nylon blend. Think cozy, comfy,
            <br></br>and oh-so easy to layer.With the goal of<br></br>{" "}
            increasing the use of recycled materials <br></br>and reducing the
            harmful impacts of production , the <br></br>Global Recycled
            Standards (GRS) sets requirements<br></br> for third party
            certification of recycled input in
            <br></br>products-including chain of custody , social and <br></br>
            environmental practices , and chemical <br></br> restrictions
          </p>

          <div className="flex gap-12">
            <h3 className="tracking-[0.2px] leading-[24px] text-[16px] font-semibold font-maison-neue mt-4 cursor-pointer hover:underline hover:decoration-blue-400">
              Model
            </h3>
            <p className="mt-5 tracking-[1.4px] leading-[16.8px] text-[14px] cursor-pointer hover:underline hover:decoration-blue-400  font-normal">
              Model is 6'2" , wearing a size M
            </p>
          </div>

          <hr className="mt-2"></hr>

          <div className="flex gap-20">
            <h3 className="mt-4 tracking-[0.2px] leading-[24px] text-[16px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
              Fit
            </h3>
            <div className="mt-4 tracking-[1.4px] leading-[16.8px] text-[14px] font-normal hover:underline hover:decoration-blue-400 cursor-pointer">
              <p>Questions about fit?</p>
              <p>Contact Us</p>
              <p>Size Guide</p>
            </div>
          </div>

          <hr className="mt-4"></hr>

          <p className="mt-4 tracking-[0.2px] leading-[24px] text-[16px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-400">
            Sustainability
          </p>
          <div>
            <img src={sustainability.src} alt="" />
          </div>

          <hr className="mt-4"></hr>
        </div>
      </div>

      <div>
        <p className="pl-6 md:pl-58 mt-15 tracking-[0.2px] leading-[24px] text-[16px] font-semibold font-maison-neue cursor-pointer hover:underline hover:decoration-blue-300">
          Recommended Products
        </p>
        <div className="flex gap-4 pl-6 md:pl-58 mt-4">
          {data1.map((data1) => (
            <div key={data1.id}>
              <img src={data1.src} alt="data1.title" />
              <div className="flex justify-between items-center mt-4 text-[12px] font-normal font-maison-neue cursor-pointer hover:underline hover:decoration-blue-300">
                <p className="tracking-[0.2px]">{data1.title}</p>
                <p className="text-gray-700 ml-4">{data1.price}</p>
              </div>

              <p className="tracking-[0.2px] text-gray-500 leading-[16px] text-[12px] font-normal font-maison-neue mt-2 cursor-pointer hover:underline hover:decoration-blue-300">
                {data1.title1}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className="leading-[33.24px] text-[24px] font-semibold font-maison-neue text-center mt-8">
        Reviews
      </p>

      <div className="max-w-5xl mx-auto mt-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 bg-neutral-100 p-12">
        <div className="text-center md:text-left ml-12">
          <p className="text-xl tracking-[0.2px] font-bold text-gray-800">
            {averageRating.toFixed(1)} Overall Rating
          </p>

          <div className="flex justify-center md:justify-start mt-2 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < Math.round(averageRating) ? "★" : "☆"}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          {[5, 4, 3, 2, 1].map((rating, index) => {
            const count = ratingCounts[rating] || 0;
            const percentage = (count / totalReviews) * 100;

            return (
              <div key={rating} className="flex items-center space-x-3">
                {/* Rating Number */}
                <span className="w-4 text-sm text-gray-700">{rating}</span>

                {/* Star Icon */}
                <span className="text-yellow-500">★</span>

                {/* Line (bar) */}
                <div className="h-1 w-45 bg-gray-200 relative">
                  <div
                    className="absolute top-0 left-0 h-1 bg-yellow-400"
                    style={{ width: `${(count / 2) * 100}%` }} 
                  ></div>
                </div>

                {/* Review count */}
                <span className="text-sm text-gray-700 w-4 text-right">
                  {count}
                </span>
              </div>
            );
          })}
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-bold text-gray-600">Runs Slightly Large</p>

          {/* Scale boxes */}
          <div className="flex justify-center md:justify-end mt-6 space-x-1 relative -translate-x-4">
            {[1, 2, 3, 4, 5].map((box) => (
              <div
                key={box}
                className={`w-14 h-2 border ${
                  box === 4 ? "bg-gray-800" : "bg-gray-300"
                }`}
              ></div>
            ))}
            {/* "Runs Large" label positioned under the last box */}
            <span className="absolute -bottom-5 right-0 text-xs text-gray-500 -translate-x-1">
              Runs Large
            </span>
          </div>

          {/* "Runs Small" aligned under the first box */}
          <div className="flex justify-start mt-2 text-xs text-gray-500">
            <span>Runs Small</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto flex justify-between items-center mt-6 px-4">
        {/* Filter Section */}
        <div className="flex justify-between items-center w-40 border border-gray-300 px-6 py-4">
          <p className="text-sm font-medium text-gray-800 mr-5 ">Filter</p>
          <div className="w-3 h-3 flex flex-col justify-between gap-[2px]">
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
            <span className="w-full h-[2px] bg-black"></span>
          </div>
        </div>

        {/* Sort By Section */}
        <div className="flex flex-col items-start w-48 border border-gray-300 px-4 py-2 ">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="text-sm bg-transparent focus:outline-none cursor-pointer w-full"
          >
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>

          <span className="text-xs text-gray-500 mt-1">
            Highest to Lowest Rating
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-6 px-4">
        {sortedReviews.map((review) => (
          <div
            key={review.id}
            className="mb-6 border-b pb-6 flex flex-col md:flex-row justify-between gap-4"
          >
            {/* Left: Reviewer Info */}
            <div className="w-full md:w-1/3">
              <p className="font-semibold text-gray-800">{review.name}</p>
              <div className="flex items-center text-sm mt-2">
                <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center mr-2">
                  <span className="text-white text-[10px] leading-none">✓</span>
                </div>
                <span className="font-normal text-[12px] leading-[16px] tracking-[0.2px]">
                  Verified
                </span>
              </div>
              <div className="mt-2 text-xs text-gray-700 font-semibold">
                <p>
                  <b>Height</b>: 5'9"
                </p>
                <p>
                  <b>Weight</b>: 160 lbs
                </p>
                <p>
                  <b>Body Type</b>: Athletic
                </p>
              </div>
              <div className="mt-2 text-xs text-gray-700 font-semibold">
                <p>
                  <b>Size Purchased</b>: M
                </p>
                <p>
                  <b>Usual Size</b>: M
                </p>
              </div>
            </div>

            {/* Center: Stars and Comment */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="flex justify-center md:justify-start gap-1 text-yellow-500 text-lg">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < review.rating ? "" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mt-3">{review.comment}</p>
            </div>

            {/* Right: Date */}
            <div className="w-full md:w-1/6 text-right text-xs text-gray-500 mt-2 md:mt-0">
              14 days ago
            </div>
          </div>
        ))}
      </div>

      <p className="leading-[33.24px] text-[24px] font-semibold font-maison-neue flex justify-center cursor-pointer hover:underline hover:decoration-blue-400">
        Transparent Pricing
      </p>
      <p className="text-center mt-4 tracking-[1.4px] leading-[16.8px] text-[14px] font-normal font-maison-neue">
        We publish what it costs us to make every one of our products. There are
        a lot of costs<br></br>we can&apos;t neatly account for - like design,
        fittings, wear testing, rent on office and retail <br></br>space - but
        we believe you deserve to know what goes into making the products you{" "}
        <br></br>love.
      </p>

      <div className="mt-5 flex mb-6 justify-center">
        <img src={pricing1.src} alt="price" />
      </div>
    </>
  );
};

export default Product;
