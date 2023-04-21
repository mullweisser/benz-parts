const apiData = {
	"fin": "W1K2132161B032145",
	"categoryId": "VBELT",
	"imageGroups": [
		{
			"heading": "Kilrem, remspännare, bryttrissa",
			"images": [
				{
					"name": "",
					"thumbnailUrl": "https://webparts.mercedes-benz.com:443/webparts-reg/ws/api/v1/getMediaImage?filename=dVViL0ZocVhrblo0SUVjbHdyZE51NWhXK0ZCNEFIZndXTW1mT2VQeWJlR1JzZ2ptcDNxS3UzT3prbjFtaEpFaWZSMTRCV1JURGprRXQ3TjBvUit6Nnc9PQ&isoCountryCode=SE&embedder=PTCopy.GetAnOffer",
					"imageId": "drawing_PV000.010.164.872_version_001",
					"imageUrl": "https://webparts.mercedes-benz.com:443/webparts-reg/ws/api/v1/getMediaImage?filename=dVViL0ZocVhrblo2bU4veFhkd1hXellWM09mdDYzUkFtK0RuYkJpclVLdXhXQ0FjbmFsM1RBd2hiYW82VXRXOEwrTjNpUGEwSVRzPQ&isoCountryCode=SE&embedder=PTCopy.GetAnOffer",
					"callouts": [
						{
							"id": "10",
							"x": 866,
							"y": 227,
							"highlighted": true,
							"parts": [
								{
									"partId": "drawing_PV000.010.164.872_version_001#00026",
									"partNumber": "A 003 993 65 96",
									"name": "V-RIBBED BELT (RIBBAD KILREM)",
									"description": "",
									"leftHandDrive": false,
									"rightHandDrive": false,
									"footnotes": [],
									"recommendedQuantity": 1,
									"subparts": [],
									"replacementPart": false,
									"automaticGearbox": false,
									"manualGearbox": false,
									"isRemanPart": false,
									"hasRemanParts": false,
									"colorInfos": [],
									"showColorRemark": false,
									"isStarPart": false,
									"hasStarParts": false
								}
							],
							"parentCalloutId": ""
						},
						{
							"id": "80",
							"x": 540,
							"y": 533,
							"highlighted": false,
							"parts": [],
							"parentCalloutId": ""
						},
						{
							"id": "90",
							"x": 649,
							"y": 486,
							"highlighted": false,
							"parts": [],
							"parentCalloutId": ""
						},
						{
							"id": "100",
							"x": 331,
							"y": 549,
							"highlighted": false,
							"parts": [],
							"parentCalloutId": ""
						}
					]
				}
			]
		}
	]
};

document.addEventListener('DOMContentLoaded', () => {
    displayAPIData();
});

function displayAPIData() {
    const apiDataContainer = document.getElementById('api-data');
    
    apiData.imageGroups.forEach(imageGroup => {
        const imageGroupElement = document.createElement('div');
        imageGroupElement.className = 'image-group';

        const heading = document.createElement('h2');
        heading.textContent = imageGroup.heading;
        imageGroupElement.appendChild(heading);

        imageGroup.images.forEach(image => {
            const imageElement = document.createElement('div');
            imageElement.className = 'image';

            const img = document.createElement('img');
            img.src = image.thumbnailUrl;
            img.alt = image.name;
            imageElement.appendChild(img);

            const calloutsList = document.createElement('ul');
            image.callouts.forEach(callout => {
                if (callout.parts.length > 0) {
                    const calloutElement = document.createElement('li');
                    calloutElement.className = 'callout';
                    calloutElement.textContent = `ID: ${callout.id} - ${callout.parts[0].name} (${callout.parts[0].partNumber})`;
                    calloutsList.appendChild(calloutElement);
                }
            });

            imageElement.appendChild(calloutsList);
            imageGroupElement.appendChild(imageElement);
        });

        apiDataContainer.appendChild(imageGroupElement);
    });
}
