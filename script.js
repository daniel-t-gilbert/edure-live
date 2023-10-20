        // --disabled--
// RANDOM ITEM CODE
/*
function random(min, max) {
	const randOut = Math.floor(Math.random() * (max - min + 1)) + min;
	return randOut;
}

let container = document.querySelector(".container");

let colors = [
	"#8B0000",
	"#00008B",
	"#006400",
	"#9400D3",
	"#FF8C00",
	"#654321",
	"#A9A9A9",
	"#9932CC",
	"#00CED1",
	"#008B8B",
	"#4B0082",
	"#8B008B",
	"#008080",
	"#734F18",
	"#800000",
	"#556B2F",
	"#FF4500",
	"#E9967A",
	"#2F4F4F",
	"#FFBF00",
	"#9932CC",
	"#A52A2A",
	"#A9A9A9",
	"#4F7942",
	"#6B4423",
	"#A1A9A4",
	"#8A2BE2",
	"#9B1B30",
	"#98FB98",
	"#483C32",
	"#000080",
	"#9932CC",
	"#3CB371",
	"#FFD700",
	"#FFBF00",
	"#5C0120",
	"#874C62",
	"#8B4513",
	"#FF6F61",
	"#228B22",
	"#6F2DA8",
	"#9932CC",
	"#3E4095",
	"#704214",
	"#2F4F4F",
	"#556B2F",
	"#00CED1",
	"#9400D3",
	"#8B5A00",
	"#8B7E66"
];

for (var i = 1; i <= 200; i++) {
	let color = colors[Math.floor(Math.random() * colors.length)];
	let elem = document.createElement("div");
	elem.style.height = `${random(100, 300)}px`;
	elem.style.background = color;
	elem.innerHTML = `<b>${i}</b>`;
	container.append(elem);
}

 */


// document.addEventListener('DOMContentLoaded', function() {
// 	const masonryItems = document.querySelectorAll('.masonry-item');
  
// 	masonryItems.forEach(item => {
// 	  const iframe = item.querySelector('iframe');
// 	  const img = item.querySelector('.main-img:hover');
  
// 	  if (iframe) {
// 		img.style.display = 'none';
// 	  }
// 	});
//   });
  


document.addEventListener('DOMContentLoaded', function() {
	const masonryItems = document.querySelectorAll('.masonry-item');
	
// 	const masonry = document.querySelector('.masonry');
// 	const masonryPx = masonry.offsetHeight;
	
// 	const masonryPxHeight = masonryPx + 50 ;
// 	const masonryPxHeightFinal = masonryPxHeight + "px"
//   console.log("masonry height = " + masonryPxHeightFinal);

// 	masonry.style.height = masonryPxHeightFinal

  
	masonryItems.forEach(item => {
	  const iframe = item.querySelector('iframe');
	  const img = item.querySelector('.main-img');
	  const imageShadowOverlay = item.querySelector('.image-shadow-overlay');
	  const starRating = item.querySelector('.star-rating');
	  const review = item.querySelector('.review');
	  const studentImageLogo = item.querySelector('.student-image-logo');
	//   const masonryItem = item.querySelector('.masnory-item');
	  
		

	if (img && iframe) {

		
		
	  item.addEventListener('mouseenter', function() {
		if (iframe && img) {
			const iframeHeight = img.offsetHeight;
	  const iframeHeightPx = iframeHeight + "px";

	//   console.log(iframeHeightPx)

		  img.style.opacity = '0%dd';
		//   img.style.zIndex = '10'
		  img.style.transition = 'opacity 3s';
		  img.style.display = 'none';
		  iframe.style.display = 'block'
		  iframe.style.height = iframeHeightPx;
		  imageShadowOverlay.style.display = 'none'
		  starRating.style.display = 'none'
		  review.style.display = 'none'
		  studentImageLogo.style.bottom = '5%'
		  iframe.style.opacity = '100%'
		  iframe.style.transition = 'opacity 10s'

		//   studentImageLogo.style.transition = 'bottom 2s'

		}
	  });
  
	  item.addEventListener('mouseleave', function() {
		// Revert the style when mouse leaves
		img.style.opacity = '1';
		img.style.zIndex = '0'
		img.style.transition = 'opacity 3s';
		img.style.display = 'block'; 
		iframe.style.display = 'none'
		imageShadowOverlay.style.display = 'block'
		starRating.style.display = 'block'
		review.style.display = 'block'
		studentImageLogo.style.bottom = '128px'
		// studentImageLogo.style.transition = 'bottom 2s'
	  });
	  
	}
	});
	
  });
  



