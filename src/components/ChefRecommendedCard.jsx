import React from "react";
import useAuth from "./Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "./Hooks/useCart";

const ChefRecommendedCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [, refetch] = useCart();
  const { name, recipe, image, price, _id } = item;
  const handleAddToCart = async (item) => {
    if (user) {
      //TODO: add to the cart in database
      const cartItems = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price,
      };

      const { data } = await axios.post(
        "http://localhost:5000/carts",
        cartItems
      );
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} added to your cart`,
          showConfirmButton: false,
          timer: 1500,
        });
        //refetch the cart for cart item count
        refetch();
      }
    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login to add this cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div>
      <div className="card bg-[#F3F3F3]">
        <figure>
          <img className="w-full h-72" src={image} alt="Shoes" />
        </figure>
        <p className="absolute bg-slate-900 text-white right-0 p-1 mr-4 mt-4">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="uppercase btn hover:bg-neutral bg-[#E8E8E8] border-b-4 border-b-[#BB8506] text-[#BB8506] hover:text-[#BB8506] hover:border-none"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommendedCard;
