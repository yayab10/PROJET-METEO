

    // Initialiser la carte Leaflet
    // var maCarte = L.map('maCarte').setView([46.6031, 1.7369], 6);

    let map = L.map('maCarte', {
        center: [46.6031, 1.7369],
        zoom: 6
    })
    // Ajouter une couche de tuiles (par exemple, OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // let lille = L.marker([50.633333, 3.066667]).addTo(map)
    // let lilleContent = "Bonjour Lille"
    // lille.bindPopup(lilleContent)

    function ajoutMarkerVille(coordonnes, contenuPopup) {
        let marker = L.marker(coordonnes).addTo(map);
        marker.bindPopup(contenuPopup);
    }
    ajoutMarkerVille([50.633333, 3.066667], "Vous êtes à Lille");
    ajoutMarkerVille([48.8534, 2.3488], "Vous êtes à Paris")
    ajoutMarkerVille([48.5833, 7.75], "Vous êtes à Strasbourg")
    ajoutMarkerVille([47.2173, -1.5534], "Vous ")
    ajoutMarkerVille([45.75, 4.85])
    ajoutMarkerVille([44.8333, -0.5667])
    ajoutMarkerVille([43.6043, 1.4437])
    ajoutMarkerVille([43.7031, 7.2661])
    ajoutMarkerVille([43.3 , 5.4])
    ajoutMarkerVille([51.05, 2.3667])

