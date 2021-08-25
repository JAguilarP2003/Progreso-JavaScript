import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    test('Agregar una nueva Cita', () => {
        const citaObj = {
            mascota: 'Levi',
            propietario: 'Juan',
            telefono: '123456',
            fecha: '24-08-2021',
            hora:'10:30',
            sintomas: 'No come'
        };

        citaObj.id = Date.now();
        citas.agregarCita(citaObj);

        // Prueba.

        expect(citas).toMatchSnapshot();

    });
})