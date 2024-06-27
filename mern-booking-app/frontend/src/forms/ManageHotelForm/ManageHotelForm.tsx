import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestsSection";
import ImagesSection from "./ImagesSection";

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
  adultCount: number;
  childCount: number;
};

const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit(() => {});

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
              type="submit"
              className="bg-[#493e99] text-white p-2 px-4 rounded-md font-bold hover:bg-[#2e2e7b]"
            >
              Save
            </button>
          </section>
        </form>
      </FormProvider>
    </main>
  );
};

export default ManageHotelForm;
