const carousel = document.getElementsByClassName("carousel")[0];
const images = [...carousel.children];
images.shift();
const tagLine = document.querySelector(".text");
let interval = null;

window.onload = () => {
	document.getElementById('loading').style.display = 'none';
	images.forEach((img, i) => {
		img.animate(
			[
				{
					transform: `translateY(${`${100 * Math.pow(-1, i + 1)}`}%)`,
				},
			],
			{
				duration: 2000,
				iterations: 1,
				direction: "reverse",
				easing: "cubic-bezier(.71,.44,.13,.83)",
			}
		);
	});

	tagLine.animate(
		[
			{
				transform: "scaleX(0)",
			},
		],
		{
			duration: 1000,
			delay: 100,
			direction: "reverse",
			easing: "cubic-bezier(.71,.44,.13,.83)",
		}
	);
};

images.forEach((img) => {
	img.onmouseover = (i) => {
		const { target } = i;
		const text = [...target.children][0];
		text ? (text.style.display = "block") : null;
	};
	img.onmouseout = (i) => {
		const { target } = i;
		const text = [...target.children][0];
		text ? (text.style.display = "") : null;
	};
	[...img.children][0].onmouseover = (i) => {
		i.target.style.display = "block";
	};
});
