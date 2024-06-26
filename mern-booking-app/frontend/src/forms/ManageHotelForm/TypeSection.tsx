import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";
import { hotelTypes } from "../../config/hotel-options-config";

const TypeSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");

  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <section className="grid grid-cols-5 gap-2 text-center">
        {hotelTypes.map((type) => (
          <label
            key={type}
            className={
              typeWatch === type
                ? "cursor-pointer bg-[#f09d7c] text-[#493e99] text-sm rounded-full p-2 font-semibold"
                : "cursor-pointer bg-[#493e99] text-white text-sm rounded-full p-2 font-semibold"
            }
          >
            <input
              type="radio"
              value={type}
              {...register("type", { required: "This field is required" })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </section>
      {errors.type && (
        <span className="text-red-400 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </section>
  );
};

export default TypeSection;
