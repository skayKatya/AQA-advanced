let residents = [];

// Function to fetch residents from planets in a specific film
async function fetchResidentsFromFilm(filmUrl) {
	try {
		// Fetch film data
		const filmResponse = await fetch(filmUrl);
		if (!filmResponse.ok) {
			throw new Error('Failed to fetch film data');
		}
		const filmData = await filmResponse.json();
		const planetUrls = filmData.planets; // Array of planet URLs in the film

		console.log(residents); // Log all fetched residents
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

// Specify the film URL
const filmUrl = 'https://swapi.dev/api/films/3/';

// Call the function to fetch residents from planets in the specified film
fetchResidentsFromFilm(filmUrl);
