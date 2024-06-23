import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";

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
        <form className="px-40 py-10">
          <DetailsSection />
        </form>
      </FormProvider>
    </main>
  );
};

export default ManageHotelForm;
