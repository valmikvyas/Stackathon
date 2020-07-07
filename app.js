const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h2");
const text2 = intro.querySelector(".fadein1");
const text3 = intro.querySelector(".fadein2");
const text4 = intro.querySelector(".fadein3");
const text5 = intro.querySelector(".fadein4");

//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

const end2 = document.querySelector(".end");
const video2 = end2.querySelector(".vid2");
const text6 = end2.querySelector("h3");
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();


//image scene

// images
	let images = [
    "/imgs/seq/lamp03_Interactive LightMix0000.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0001.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0002.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0003.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0004.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0005.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0006.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0007.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0008.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0009.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0010.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0011.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0012.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0013.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0014.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0015.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0016.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0017.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0018.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0019.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0020.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0021.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0022.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0023.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0024.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0025.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0026.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0027.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0028.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0029.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0030.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0031.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0032.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0033.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0034.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0035.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0036.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0037.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0038.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0039.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0040.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0041.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0042.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0043.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0044.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0045.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0046.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0047.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0048.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0049.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0050.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0051.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0052.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0053.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0054.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0055.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0056.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0057.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0058.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0059.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0060.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0061.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0062.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0063.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0064.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0065.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0066.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0067.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0068.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0069.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0070.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0071.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0072.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0073.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0074.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0075.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0076.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0077.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0078.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0079.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0080.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0081.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0082.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0083.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0084.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0085.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0086.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0087.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0088.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0089.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0090.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0091.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0092.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0093.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0094.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0095.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0096.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0097.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0098.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0099.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0100.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0101.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0102.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0103.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0104.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0105.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0106.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0107.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0108.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0109.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0110.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0111.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0112.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0113.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0114.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0115.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0116.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0117.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0118.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0119.jpg",
    "/imgs/seq/lamp03_Interactive LightMix0120.jpg"
  ];
  
  let images2 = [
    '/imgs/seq/LIGHTS-ON_00000.jpg',
    '/imgs/seq/LIGHTS-ON_00001.jpg',
    '/imgs/seq/LIGHTS-ON_00002.jpg',
    '/imgs/seq/LIGHTS-ON_00003.jpg',
    '/imgs/seq/LIGHTS-ON_00004.jpg',
    '/imgs/seq/LIGHTS-ON_00005.jpg',
    '/imgs/seq/LIGHTS-ON_00006.jpg',
    '/imgs/seq/LIGHTS-ON_00007.jpg',
    '/imgs/seq/LIGHTS-ON_00008.jpg',
    '/imgs/seq/LIGHTS-ON_00009.jpg',
    '/imgs/seq/LIGHTS-ON_00010.jpg',
    '/imgs/seq/LIGHTS-ON_00011.jpg',
    '/imgs/seq/LIGHTS-ON_00012.jpg',
    '/imgs/seq/LIGHTS-ON_00013.jpg',
    '/imgs/seq/LIGHTS-ON_00014.jpg',
    '/imgs/seq/LIGHTS-ON_00015.jpg',
    '/imgs/seq/LIGHTS-ON_00016.jpg',
    '/imgs/seq/LIGHTS-ON_00017.jpg',
    '/imgs/seq/LIGHTS-ON_00018.jpg',
    '/imgs/seq/LIGHTS-ON_00019.jpg',
    '/imgs/seq/LIGHTS-ON_00020.jpg',
    '/imgs/seq/LIGHTS-ON_00021.jpg',
    '/imgs/seq/LIGHTS-ON_00022.jpg',
    '/imgs/seq/LIGHTS-ON_00023.jpg',
    '/imgs/seq/LIGHTS-ON_00024.jpg',
    '/imgs/seq/LIGHTS-ON_00025.jpg',
    '/imgs/seq/LIGHTS-ON_00026.jpg',
    '/imgs/seq/LIGHTS-ON_00027.jpg',
    '/imgs/seq/LIGHTS-ON_00028.jpg',
    '/imgs/seq/LIGHTS-ON_00029.jpg',
    '/imgs/seq/LIGHTS-ON_00030.jpg',
    '/imgs/seq/LIGHTS-ON_00031.jpg',
    '/imgs/seq/LIGHTS-ON_00032.jpg',
    '/imgs/seq/LIGHTS-ON_00033.jpg',
    '/imgs/seq/LIGHTS-ON_00034.jpg',
    '/imgs/seq/LIGHTS-ON_00035.jpg',
    '/imgs/seq/LIGHTS-ON_00036.jpg',
    '/imgs/seq/LIGHTS-ON_00037.jpg',
    '/imgs/seq/LIGHTS-ON_00038.jpg',
    '/imgs/seq/LIGHTS-ON_00039.jpg',
    '/imgs/seq/LIGHTS-ON_00040.jpg',
    '/imgs/seq/LIGHTS-ON_00041.jpg',
    '/imgs/seq/LIGHTS-ON_00042.jpg',
    '/imgs/seq/LIGHTS-ON_00043.jpg',
    '/imgs/seq/LIGHTS-ON_00044.jpg',
    '/imgs/seq/LIGHTS-ON_00045.jpg',
    '/imgs/seq/LIGHTS-ON_00046.jpg',
    '/imgs/seq/LIGHTS-ON_00047.jpg'
    ]

	// TweenMax can tween any property of any object. We use this object to cycle through the array
	let obj = {curImg: 0};
	let obj2 = {curImg: 0};

	// tween images for Video1
	let videoTween1 = TweenMax.to(obj, 0.1,
		{
			curImg: images.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
      repeat: 0,
      useFrames: true,
      smoothChildTiming: true,
			immediateRender: true,			// load first image automatically
			ease: Linear.easeInOut,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg").attr("src", images[obj.curImg]); // set the image source
			}
		}
  );

  //tween images for Video2 
  let videoTween2 = TweenMax.to(obj2, 0.1,
		{
			curImg: images2.length - 1,	// animate propery curImg to number of images
			roundProps: "curImg",				// only integers so it can be used as an array index
      repeat: 0,			
      useFrames: true,
      smoothChildTiming: true,						// repeat 3 times
			immediateRender: true,			// load first image automatically
			ease: Linear.easeInOut,			// show every image the same ammount of time
			onUpdate: function () {
			  $("#myimg2").attr("src", images2[obj2.curImg]); // set the image source
			}
		}
  );
  

	// build scene
	let scene = new ScrollMagic.Scene({triggerElement: intro, duration: 4000, triggerHook: 0})
          .setTween(videoTween1)
          .setPin(intro)
					.addTo(controller);


          let sceneImgs2 = new ScrollMagic.Scene({triggerElement: end2, duration: 2000, triggerHook: 0})
          .setTween(videoTween2)
          .setPin(end2)
					.addTo(controller);


//Video Scene
// let scene = new ScrollMagic.Scene({
//   duration: 4000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .setPin(intro)
//   .addTo(controller);

// //Video2  Demo
// let sceneVid2 = new ScrollMagic.Scene({
//   duration: 4000,
//   triggerElement: end2,
//   triggerHook: 0,
//   offset: 0
// })
//   .setPin(end2)
//   .addTo(controller);

//Intro Text Animation
const textAnim = TweenMax.fromTo(
  text,
  3,
  { opacity: 1, scale: 1 },
  {
    opacity: 0,
    scale: 1.5
  }
);

const textAnim2 = TweenMax.fromTo(
  text2,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power1.easeInOut, y: "-=50px" }
);
const textAnim3 = TweenMax.fromTo(
  text2,
  1,
  { opacity: 1 },
  { opacity: 0, ease: Power1.easeInOut }
);

const textAnim4 = TweenMax.fromTo(
  text3,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power1.easeInOut, y: "-=50px" }
);
const textAnim5 = TweenMax.fromTo(
  text3,
  1,
  { opacity: 1 },
  { opacity: 0, ease: Power1.easeInOut }
);

const textAnim6 = TweenMax.fromTo(
  text4,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power1.easeInOut, y: "-=50px" }
);
const textAnim7 = TweenMax.fromTo(
  text4,
  1,
  { opacity: 1 },
  { opacity: 0, ease: Power1.easeInOut }
);

const textAnim8 = TweenMax.fromTo(
  text5,
  1,
  { opacity: 0 },
  { opacity: 1, ease: Power1.easeInOut, x: "+=100px" }
);
const textAnim9 = TweenMax.fromTo(
  text5,
  1,
  { opacity: 1 },
  { opacity: 0, ease: Power1.easeInOut }
);

const textAnim10 = TweenMax.fromTo(
  text6,
  1,
  { opacity: 0, scale:1 },
  { opacity: 1, ease: Power1.easeInOut, scale:1.5 }
);

//bold intro
let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//right-on
let scene3 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 1000
})
  .setTween(textAnim2)
  .addTo(controller);

//right-off
// let scene4 = new ScrollMagic.Scene({
//   duration: 500,
//   triggerElement: section,
//   triggerHook: 1,
//   offset: -2000
// })
//   .setTween(textAnim3)
//   .addTo(controller);

//top-on
let scene5 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 500
})
  .setTween(textAnim4)
  .addTo(controller);

//top-off
// let scene6 = new ScrollMagic.Scene({
//   duration: 500,
//   triggerElement: section,
//   triggerHook: 1,
//   offset: -3000
// })
//   .setTween(textAnim5)
//   .addTo(controller);

//left-on
let scene7 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 2000
})
  .setTween(textAnim6)
  .addTo(controller);

//left-off
// let scene8 = new ScrollMagic.Scene({
//   duration: 500,
//   triggerElement: section,
//   triggerHook: 1,
//   offset: -1000
// })
//   .setTween(textAnim7)
//   .addTo(controller);

//right- bullet list on
let scene9 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0,
  offset: 2700
})
  .setTween(textAnim8)
  .addTo(controller);


let scene10 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: end2,
  triggerHook: 0,
  offset: 0
})
  .setTween(textAnim10)
  .addTo(controller);



//Video Animation
let accelamount = 1.0;
let scrollpos = 0;
let delay = 0;
let scrollpos2 = scrollpos;
let delay2 = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 2000;
});

sceneImgs2.on("update", e => {
  scrollpos = e.scrollPos / 2000;
});

// sceneVid2.on("update", e => {
//   scrollpos2 = e.scrollPos / 3000;
// });

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  // console.log(scrollpos, delay);
  delay2 += (scrollpos2 - delay2) * accelamount;

  // video.currentTime = delay;
  // video2.currentTime = delay2;
}, 33.3);
