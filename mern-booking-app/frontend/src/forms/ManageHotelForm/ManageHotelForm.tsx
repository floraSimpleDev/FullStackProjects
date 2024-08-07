import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";
import { HotelType } from "../../../../backend/shared/types";
import { useEffect } from "react";

export type HotelFormData = {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
  pricePerNight: number;
  starRating: number;
  facilities: string[];
  imageFiles: FileList;
  imageUrls: string[];
  adultCount: number;
  childCount: number;
};

type Props = {
  hotel?: HotelType;
  onSave: (hotelFormData: FormData) => void;
  isLoading: boolean;
};

const ManageHotelForm = ({ hotel, onSave, isLoading }: Props) => {
  let formMethods = useForm<HotelFormData>();
  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    reset(hotel);
  }, [hotel, reset]);

  const onSubmit = handleSubmit((formDataJson: HotelFormData) => {
    // create new FormData object & call our API
    const formData = new FormData();

    if (hotel) {
      formData.append("hotelId", hotel._id);
    }

    // append the "add hotel" form data into the HotelFormData
    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    // overwrite the old imageUrls list
    if (formDataJson.imageUrls) {
      formDataJson.imageUrls.forEach((url, index) => {
        formData.append(`imageUrls[${index}]`, url);
      });
    }

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });

    // save formData
    onSave(formData);
  });

  return (
    <main className="border-[#493e99] border rounded-xl">
      {/* in case to create multiple hotel forms */}
      <FormProvider {...formMethods}>
        <form className="flex flex-col gap-10 px-40 py-10" onSubmit={onSubmit}>
          <DetailsSection />
          <TypeSection />
          <FacilitiesSection />
          <GuestsSection />
          <ImagesSection />
          <section className="flex justify-end">
            <button
              disabled={isLoading} /* cannot save while loading */
              type="submit"
              className="bg-[#493e99] text-white p-2 px-4 rounded-md font-bold hover:bg-[#2e2e7b] disabled:bg-gray-500"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </section>
        </form>
      </FormProvider>
    </main>
  );
};

export default ManageHotelForm;
