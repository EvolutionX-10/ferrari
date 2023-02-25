const bullets = document.querySelectorAll(".about");
window.onload = () => {
	document.getElementById('loading').style.display = 'none';
	[...bullets].forEach((bullet, i) => {
		bullet.animate(
			[
				{
					transform: `translateX(${`${100 * Math.pow(-1, i + 1)}`}%)`,
				},
			],
			{
				duration: 2000,
				iterations: 1,
				direction: "reverse",
				delay: 100,
				easing: "cubic-bezier(.97,.09,.71,1)",
			}
		);
	});
};
