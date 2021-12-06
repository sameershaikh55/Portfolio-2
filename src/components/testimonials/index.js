import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Context
import { testimonials } from "../../Context/Context";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Autoplay } from "swiper";

// FADE
import Fade from "react-reveal/Fade";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Autoplay]);

const Testimonials = () => {
	return (
		<div className="testimonials_container">
			<div className="section-title">
				<span>Clients</span>
				<Fade duration={1000}>
					<h2 style={{ fontSize: "6rem" }}>
						<b>Feedback</b>
					</h2>
				</Fade>
				<p>
					My reviews below are based on my some clients' experiences on
					different platforms and profiles
				</p>
			</div>

			<div className="container">
				<Swiper
					slidesPerView={2}
					spaceBetween={30}
					effect={"fade"}
					navigation={true}
					pagination={{
						clickable: true,
					}}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					className="mySwiper"
				>
					{testimonials.map((prev, i) => {
						return (
							<SwiperSlide>
								<div key={i} className="testi_indi">
									<img src={prev} alt="" />
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
