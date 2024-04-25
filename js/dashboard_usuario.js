document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    const showMoreButton = document.getElementById('show-more-button');
    const lastTripsList = document.getElementById('last-trips-list');
    const allTripsList = document.getElementById('all-trips-list');

    // Simulando los viajes del usuario (array de objetos)
    const userTrips = [
        { id: 1, duracion: '3 horas', fecha: '2024-04-01', origen: 'Ciudad Lima', destino: 'Playa', conductor: 'Juan' },
        { id: 2, duracion: '2 horas', fecha: '2024-03-15', origen: 'Ciudad Huanuco', destino: 'Montaña', conductor: 'María' },
        { id: 3, duracion: '4 horas', fecha: '2024-03-05', origen: 'Ciudad Arequipa', destino: 'Plaza', conductor: 'Pedro' },
        { id: 4, duracion: '5 horas', fecha: '2024-02-20', origen: 'Ciudad Trujillo', destino: 'Campo', conductor: 'Luis' },
        { id: 5, duracion: '6 horas', fecha: '2024-02-10', origen: 'Ciudad Cajamarca', destino: 'Bosque', conductor: 'Ana' },
        { id: 6, duracion: '3 horas', fecha: '2024-01-25', origen: 'Ciudad Huaraz', destino: 'Lago', conductor: 'Diego' },
        { id: 7, duracion: '4 horas', fecha: '2024-01-10', origen: 'Ciudad Tarapoto', destino: 'Cascada', conductor: 'Laura' },
        { id: 8, duracion: '2 horas', fecha: '2023-12-20', origen: 'Ciudad Piura', destino: 'Desierto', conductor: 'Carlos' },
        { id: 9, duracion: '3 horas', fecha: '2023-12-05', origen: 'Ciudad Iquitos', destino: 'Selva', conductor: 'Marta' },
        { id: 10, duracion: '5 horas', fecha: '2023-11-20', origen: 'Ciudad Ucayali', destino: 'Parque nacional', conductor: 'Roberto' }
    ];

    // Función para mostrar los últimos 4 viajes
    function showLastTrips() {
        lastTripsList.innerHTML = '';
        const last4Trips = userTrips.slice(0, 4);
        last4Trips.forEach(trip => {
            const listItem = document.createElement('li');
            listItem.textContent = `Viaje de ${trip.duracion} - Fecha: ${trip.fecha} - Origen: ${trip.origen} - Destino: ${trip.destino} - Conductor: ${trip.conductor}`;
            lastTripsList.appendChild(listItem);
        });
    }

    // Función para mostrar todos los viajes
    function showAllTrips() {
        allTripsList.innerHTML = '';
        userTrips.forEach(trip => {
            const listItem = document.createElement('li');
            listItem.textContent = `Viaje de ${trip.duracion} - Fecha: ${trip.fecha} - Origen: ${trip.origen} - Destino: ${trip.destino} - Conductor: ${trip.conductor}`;
            allTripsList.appendChild(listItem);
        });
        allTripsList.style.display = 'block';
        showMoreButton.style.display = 'none';
    }

    // Evento para el botón de "Salir"
    logoutButton.addEventListener('click', function() {
        // Eliminar la sesión de inicio de sesión del LocalStorage
        localStorage.removeItem('SESION');
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'index.html';
    });

    // Evento para el botón de "Ver más"
    showMoreButton.addEventListener('click', showAllTrips);

    // Mostrar los últimos 4 viajes al cargar la página
    showLastTrips();
});