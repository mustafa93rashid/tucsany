import BookingForm from "@/components/BookingForm"

const BookBike = () => {
  return (
    <section className="bg-gradient-to-b from-orange-100 via-orange-200 to-orange-300 mt-[120px] px-[4.1025641%] lg:px-[5.55555556%] xl:px-[13.0208333%] relative">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col-reverse  py-[60px] lg:flex-row gap-10 h-full ">
          <BookingForm />
          <div >
            <img  src="/images/booking/bike.png" alt="bike"
              className="scale-x-[-1] lg:pt-[170px]  lg:absolute  w-1/2 lg:w-[624px] right-[4.1025641%] lg:right-5.55555556% xl:right-[13.0208333%] z-10 mx-auto lg:mx-0 "
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default BookBike
