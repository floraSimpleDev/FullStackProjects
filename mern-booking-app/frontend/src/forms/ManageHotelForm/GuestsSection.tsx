import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const GuestsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">Guests</h2>
      <section className="grid grid-cols-2 p-6 gap-5 bg-[#493e99] rounded">
        <label className="text-white text-sm font-semibold">
          Adults
          <input
            type="number"
            placeholder="1"
            min={1}
            className="border rounded w-full py-2 px-3 font-normal text-gray-700"
            {...register("adultCount", { required: "This field is required" })}
          />
          {errors.adultCount?.message && (
            <span className="text-red-400 text-sm font-bold">
              {errors.adultCount?.message}
            </span>
          )}
        </label>
        <label className="text-white text-sm font-semibold">
          Children
          <input
            type="number"
            placeholder="0"
            min={0}
            className="border rounded w-full py-2 px-3 font-normal text-gray-700"
            {...register("childCount", { required: "This field is required" })}
          />
          {errors.childCount?.message && (
            <span className="text-red-400 text-sm font-bold">
              {errors.childCount?.message}
            </span>
          )}
        </label>
      </section>
    </section>
  );
};

export default GuestsSection;
