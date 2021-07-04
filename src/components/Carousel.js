import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../stylesheets/Carousel.css";

function Slides() {
	return (
		<div>
			<div className="carousel">
				<Carousel
					autoPlay
					infiniteLoop
					interval="5000"
					transitionTime="1000"
				>
					<div>
						<img src="https://post-punk.com/wp-content/uploads/2020/06/errorr_presspicture3-scaled.jpg" />
						<p className="legend">Errorr</p>
					</div>
					<div>
						<img src="https://www.periskop-berlin.org/wp-content/uploads/2019/11/NIKO-NOVAK-1024x613.jpg" />
						<p className="legend">Niko Novak</p>
					</div>
					<div>
						<img src="https://post-punk.com/wp-content/uploads/2021/03/CM_PROMO_HEADER.png" />
						<p className="legend">Camel Moon</p>
					</div>
				</Carousel>
			</div>
		</div>
	);
}

export default Slides;
