const section = document.getElementsByTagName("section").item(0);

const cars = [
	{
		name: "Ferrari 458",
		engine: "V8",
		topSpeed: "325",
	},
	{
		name: "Ferrari 296",
		engine: "V6",
		topSpeed: "330",
	},
	{
		name: "Ferrari Portofino",
		engine: "V8",
		topSpeed: "320",
	},
	{
		name: "Ferrari 812",
		engine: "V12",
		topSpeed: "340",
	},
	{
		name: "Ferrari F50",
		engine: "V12",
		topSpeed: "325",
	},
	{
		name: "Ferrari F12",
		engine: "V12",
		topSpeed: "340",
	},
	{
		name: "Ferrari 430 Scuderia",
		engine: "V8",
		topSpeed: "319",
	},
	{
		name: "Ferrari 360 Modena",
		engine: "V8",
		topSpeed: "295",
	},
	{
		name: "Ferrari 412",
		engine: "V12",
		topSpeed: "250",
	},
];

cars.forEach((car, i) => {
	section.innerHTML += `<div class="flip-card">
	<div class="flip-card-inner">
		<div class="flip-card-front">
			<img src="src/assets/models/car${i + 1}.webp" alt="" class="car car${i + 1}">
		</div>
		<div class="flip-card-back">
			<h3>${car.name}</h3>
			<div class="details">
				<div class="engine inner_details">
					<img src="src/assets/icons/engine.svg" alt="" height="70">
					<div class="innertext">
						Engine
						<span>${car.engine}</span>
					</div>
				</div>
				<div class="speed inner_details">
					<img src="src/assets/icons/speed.svg" alt="" height="55">
					<div class="innertext">
						Top Speed
						<span>${car.topSpeed}kmph</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>`;
});

window.onload = () => {
	document.getElementById('loading').style.display = 'none';
	const cards = [...section.children];
	cards.forEach((card, i) => {
		card.animate(
			[
				{
					transform: `translateY(${200 * Math.pow(-1, i)}%)`,
				},
			],
			{
				duration: 2000,
				direction: "reverse",
				easing: "cubic-bezier(.71,.44,.13,.83)",
			}
		);
	});
};
