import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import TypeSection from "./TypeSection";
import FacilitiesSection from "./FacilitiesSection";

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
  return (
    <main className="border-[#493e99] border rounded-xl">
      <FormProvider {...formMethods}>
        <form className="flex flex-col gap-10 px-40 py-10">
          <DetailsSection />
          <TypeSection />
          <FacilitiesSection />
        </form>
      </FormProvider>
    </main>
  );
};

export default ManageHotelForm;
