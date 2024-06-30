import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import * as apiClient from "../api-client";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import { HotelType } from "../../../backend/shared/types";

const MyHotels = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

  return (
    <section className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-[#493e99] border-2 border-[#9389df] text-white text-xl font-bold p-2 hover:bg-[#8075d3]"
        >
          Add Hotel
        </Link>
      </span>

      <section className="grid grid-cols-1 gap-8">
        {Array(hotelData).map((hotel: HotelType) => (
          <section
            key={hotel._id}
            data-testid="hotel-card"
            className="flex flex-col justify-between border border-[#493e99] rounded-lg p-8 gap-5"
          >
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <section className="whitespace-pre-line">
              {hotel.description}
            </section>
            <section className="grid grid-cols-5 gap-2">
              <section className="border border-[#9389df] rounded-sm p-3 flex items-center">
                <BsMap className="mr-1" />
                {hotel.city}, {hotel.country}
              </section>
              <section className="border border-[#9389df] rounded-sm p-3 flex items-center">
                <BsBuilding className="mr-1" />
                {hotel.type}
              </section>
              <section className="border border-[#9389df] rounded-sm p-3 flex items-center">
                <BiMoney className="mr-1" />${hotel.pricePerNight} per night
              </section>
              <section className="border border-[#9389df] rounded-sm p-3 flex items-center">
                <BiHotel className="mr-1" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </section>
              <section className="border border-[#9389df] rounded-sm p-3 flex items-center">
                <BiStar className="mr-1" />
                {hotel.starRating} Star Rating
              </section>
            </section>

            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-[#493e99] border-2 border-[#9389df] text-white text-xl font-bold p-2 hover:bg-[#8075d3]"
              >
                View Details
              </Link>
            </span>
          </section>
        ))}
      </section>
    </section>
  );
};

export default MyHotels;
