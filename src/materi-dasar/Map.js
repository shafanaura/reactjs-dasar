import React from "react";

const makanans = [
	{
		nama: "Soto",
		harga: 4500,
	},
	{
		nama: "Bakso",
		harga: 10000,
	},
	{
		nama: "Indomie",
		harga: 3000,
	},
	{
		nama: "Rujak",
		harga: 7000,
	},
];

// reduce
const total_harga = makanans.reduce(
	(total_harga, makanan) => total_harga + makanan.harga,
	0,
);

const Map = () => {
	return (
		<div>
			<h3>Map sederhana</h3>
			<ul>
				{makanans.map((makanan, index) => (
					<li>
						{index + 1}. {makanan.nama} - {makanan.harga}
					</li>
				))}
			</ul>

			<h3>Map Filter harga lebih dari 5000</h3>
			<ul>
				{makanans
					.filter((makanan) => makanan.harga > 5000)
					.map((makanan, index) => (
						<li>
							{index + 1}. {makanan.nama} - {makanan.harga}
						</li>
					))}
			</ul>
			<h3>Total Bayar : {total_harga}</h3>
		</div>
	);
};

export default Map;
