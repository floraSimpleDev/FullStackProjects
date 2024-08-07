import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<HotelFormData>();

  // image urls for dispayed
  const existingImageUrls = watch("imageUrls");

  // handle delete button
  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    imageUrl: string
  ) => {
    // a button in a form, while being clicked, will cause the submit error
    event.preventDefault();
    setValue(
      "imageUrls",
      existingImageUrls.filter((url) => url !== imageUrl)
    );
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <section className="border rounded p-4 flex flex-col gap-4">
        {existingImageUrls && (
          <section className="grid grid-cols-6 gap-4">
            {existingImageUrls.map((url, index) => (
              <section key={index} className="relative group">
                <img
                  src={url}
                  alt="hotel image"
                  className="min-h-full object-cover"
                />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                >
                  Delete
                </button>
              </section>
            ))}
          </section>
        )}
        <input
          type="file"
          multiple //add multiple images
          accept="image/*" // accept only image type files
          className="w-full text-gray-700 font-normal"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength =
                imageFiles.length + (existingImageUrls?.length || 0);

              if (totalLength === 0)
                return "At least one image should be added";

              if (totalLength > 6)
                return "Total number of images cannot be more than 6";

              return true;
            },
          })}
        />
        {errors.imageFiles && (
          <span className="text-red-400 text-sm font-bold">
            {errors.imageFiles.message}
          </span>
        )}
      </section>
    </section>
  );
};

export default ImagesSection;
