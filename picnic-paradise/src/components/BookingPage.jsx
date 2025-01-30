import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import TextField from "@mui/material/TextField"; // Import Material UI TextField
import Button from "@mui/material/Button"; // Import Material UI Button (optional)
import image1 from '../assets/event1.jpg';
import image2 from '../assets/event2.jpg';
import image3 from '../assets/event3.jpg';

function BookingPage() {
  const [booking, setBooking] = useState({ name: "", email: "", phone: "", package: "" });
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    setMessage("Booking successful! Confirmation sent to your email.");
  };

  return (
    <div className="container mx-auto p-12 sm:p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Welcome to Picnic Paradise</h1>
        <p className="text-lg text-gray-600">Sip, relax, and enjoy curated events.</p>
      </motion.div>

      {/* Swiper Hero Slider */}
      <Swiper spaceBetween={20} slidesPerView={1} className="rounded-xl overflow-hidden">
        <SwiperSlide>
          <img src={image1} alt="Event 1" className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Event 2" className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="Event 3" className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover" />
        </SwiperSlide>
      </Swiper>

      {/* Booking Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 bg-white p-4 sm:p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Book Your Experience</h2>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={booking.name}
          onChange={(e) => setBooking({ ...booking, name: e.target.value })}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={booking.email}
          onChange={(e) => setBooking({ ...booking, email: e.target.value })}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={booking.phone}
          onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
        />
        <TextField
          label="Preferred Package"
          variant="outlined"
          fullWidth
          margin="normal"
          value={booking.package}
          onChange={(e) => setBooking({ ...booking, package: e.target.value })}
        />
        <Button variant="contained" onClick={handleBooking} className="w-full mt-4">
          Confirm Booking
        </Button>
        {message && <p className="mt-2 text-green-600">{message}</p>}
      </motion.div>

      {/* Contact Support */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 bg-gray-100 p-4 sm:p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
        <TextField
          label="Write your message here..."
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" className="w-full mt-4">
          Send Message
        </Button>
      </motion.div>

      {/* Explore Events & Delicacies */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold mb-4">Explore Events & Delicacies</h2>
        <Swiper spaceBetween={20} slidesPerView={1} className="rounded-xl overflow-hidden">
          <SwiperSlide>
            <img src={image1} alt="Food 1" className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="Drink 1" className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Event 4" className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover" />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}

export default BookingPage;