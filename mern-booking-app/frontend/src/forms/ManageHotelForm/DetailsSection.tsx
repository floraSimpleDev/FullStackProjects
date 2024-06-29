import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
      <label htmlFor="name" className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          autoComplete="off"
          id="name"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-400">{errors.name.message}</span>
        )}
      </label>

      <section className="flex gap-4">
        <label
          htmlFor="city"
          className="text-gray-700 text-sm font-bold flex-1"
        >
          City
          <input
            type="text"
            autoComplete="off"
            id="city"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("city", { required: "This field is required" })}
          />
          {errors.city && (
            <span className="text-red-400">{errors.city.message}</span>
          )}
        </label>

        <label
          htmlFor="country"
          className="text-gray-700 text-sm font-bold flex-1"
        >
          Country
          <input
            type="text"
            autoComplete="off"
            id="country"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("country", { required: "This field is required" })}
          />
          {errors.country && (
            <span className="text-red-400">{errors.country.message}</span>
          )}
        </label>
      </section>

      <label
        htmlFor="description"
        className="text-gray-700 text-sm font-bold flex-1"
      >
        Description
        <textarea
          rows={10}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "This field is required" })}
        />
        {errors.description && (
          <span className="text-red-400">{errors.description.message}</span>
        )}
      </label>

      <label
        htmlFor="pricePerNight"
        className="text-gray-700 text-sm font-bold flex-1 max-w-[50%]"
      >
        Price Per Night
        <input
          type="number"
          min={1}
          id="pricePerNight"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("pricePerNight", { required: "This field is required" })}
        />
        {errors.pricePerNight && (
          <span className="text-red-400">{errors.pricePerNight.message}</span>
        )}
      </label>

      <label
        htmlFor="starRating"
        className="text-gray-700 text-sm font-bold flex-1 max-w-[50%]"
      >
        Star Rating
        <select
          id="starRating"
          className="border rounded w-full p-2 text-gray-700 font-normal"
          {...register("starRating", { required: "This field is required" })}
        >
          <option value="" className="text-sm font-bold">
            Select as Rating
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red-400">{errors.starRating.message}</span>
        )}
      </label>
    </section>
  );
};

export default DetailsSection;
