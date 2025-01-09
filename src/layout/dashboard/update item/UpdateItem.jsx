import React, { useEffect } from "react";
import SectionHeading from "../../../components/section heading/SectionHeading";
import useAxiosPublic from "../../../components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const item = useLoaderData();
  const { category, image, name, price, recipe, _id } = item;

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    //upload to image bb to get url
    const imageFile = { image: data.image[0] };
    // console.log(imageFile);
    const res = await axiosPublic.post(image_upload_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data.data.display_url);

    if (res.data.success) {
      //now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        //show popup
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} updated to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };
  return (
    <div>
      <SectionHeading
        subHeading="update info"
        heading="Update"
      ></SectionHeading>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              placeholder="Recipe Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="desert">desert</option>
                <option value="drinks">drinks</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("details", { required: true })}
              defaultValue={recipe}
              className="textarea textarea-bordered"
              placeholder="Bio"
            ></textarea>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              //   defaultValue={image}
              type="file"
              className="file-input mt-5"
            />
          </div>
          <div className="mt-6">
            <button className="btn btn-primary">Update item</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
