import React, { useEffect, useState } from "react";

const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);

useEffect(() => {
	const fetchCharacters = async () => {
		try {
			const res = await fetch("https://rickandmortyapi.com/api/character");
			const data = await res.json();
			setCharacters(data.results);
		} catch (err) {
			console.error("Error fetching character data", err);
		} finally {
			setLoading(false);
		}
	};

	fetchCharacters();
}, []);

return (
	<div className="max-w-6xl mx-auto px-4 py-12">
		<h1 className="text-3xl font-bold text-center text-green-600 mb-10">
			Rick & Morty Characters
		</h1>
		{loading ? (
			<p className="text-center text-gray-500">Loading Characters...</p>
		) : (
			<div className="grid grid-cols-1 sm:grid-col-2 md:grid-col-3 gap-6">
				{characters.map((char) => (
					<div
						key={char.id}
						className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center"
					>
						<img
							src={char.image}
							alt={char.name}
							className="w-32 h-32 rounded-full mb-4"
						/>
						<h2 className="text-xl font-semibold mb-4">{char.name}</h2>
                        <p className="text-xl text-gray-600">{char.status}</p>
                        <p>{char.species}</p>
                        <p>{char.gender}</p>
					</div>
				))}
			</div>
		)}
	</div>
);
};

export default Characters;