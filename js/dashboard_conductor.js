document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    const topUsersList = document.getElementById('top-users-list');
    const totalAmountParagraph = document.getElementById('total-amount');

    // Simulando los datos de los viajes realizados por el conductor (array de objetos)
    const tripsData = [
        { usuario: 'Juan', cantidad: 5 },
        { usuario: 'Maria', cantidad: 3 },
        { usuario: 'Pedro', cantidad: 2 },
        { usuario: 'Luis', cantidad: 1 },
        { usuario: 'Ana', cantidad: 1 },
        { usuario: 'Diego', cantidad: 3 },
        { usuario: 'Laura', cantidad: 2 },
        { usuario: 'Carlos', cantidad: 1 },
        { usuario: 'Marta', cantidad: 3 },
        { usuario: 'Roberto', cantidad: 2 }
    ];

    // Función para mostrar los usuarios que más abordaron el vehículo del conductor
    function showTopUsers() {
        topUsersList.innerHTML = '';
        tripsData.forEach(trip => {
            const listItem = document.createElement('li');
            listItem.textContent = `${trip.usuario}: ${trip.cantidad} viajes`;
            topUsersList.appendChild(listItem);
        });
    }

    // Función para calcular el monto total de viajes realizados
    function calculateTotalAmount() {
        let totalAmount = 0;
        tripsData.forEach(trip => {
            totalAmount += trip.cantidad;
        });
        totalAmountParagraph.textContent = totalAmount;
    }

    // Evento para el botón de "Salir"
    logoutButton.addEventListener('click', function() {
        // Eliminar la sesión de inicio de sesión del LocalStorage
        localStorage.removeItem('SESION');
        // Redirigir al conductor a la página de inicio de sesión
        window.location.href = 'index.html';
    });

    // Mostrar los usuarios que más abordaron el vehículo del conductor
    showTopUsers();

    // Calcular el monto total de viajes realizados
    calculateTotalAmount();
});
