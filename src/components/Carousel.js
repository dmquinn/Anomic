import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../stylesheets/Carousel.css";

function Slides() {
	return (
		<div className="carouselContainer">
			<div className="carousel">
				<Carousel
					autoPlay
					infiniteLoop
					interval="5000"
					transitionTime="1000"
					dynamicHeight={true}
				>
					<div>
						<img
							alt=""
							src="https://www.psychedelicbabymag.com/wp-content/uploads/2020/09/Niko-Novak-1.jpg"
						/>
						<p className="legend">Niko Novak</p>
					</div>
					<div>
						<img
							alt=""
							src="https://post-punk.com/wp-content/uploads/2020/06/errorr_presspicture3-scaled.jpg"
						/>
						<p className="legend">Errorr</p>
					</div>
					<div>
						<img
							alt=""
							src="https://post-punk.com/wp-content/uploads/2021/03/CM_PROMO_HEADER.png"
						/>
						<p className="legend">Camel Moon</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
}

export default Slides;
