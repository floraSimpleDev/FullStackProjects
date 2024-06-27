import { hotelFacilities } from "../../config/hotel-options-config";
import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">Facilities</h2>
      <section className="grid grid-cols-5 gap-3">
        {hotelFacilities.map((facility) => (
          <label className="text-sm flex gap-1 text-gray-700">
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) return true;
                  else return "At least one facility is required";
                },
              })}
            />
            {facility}
          </label>
        ))}
      </section>
      {errors.facilities && (
        <span className="text-red-400 text-sm font-bold">
          {errors.facilities.message}
        </span>
      )}
    </section>
  );
};

export default FacilitiesSection;
