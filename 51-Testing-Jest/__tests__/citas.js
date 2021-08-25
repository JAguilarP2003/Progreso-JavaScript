import Citas from '../js/classes/Citas';

describe('Probar la clase de Citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar una nueva Cita', () => {
        const citaObj = {
            id,
            mascota: 'Levi',
            propietario: 'Juan',
            telefono: '123456',
            fecha: '24-08-2021',
            hora:'10:30',
            sintomas: 'No come'
        };

        citas.agregarCita(citaObj);

        // Prueba.

        expect(citas).toMatchSnapshot();

    });

    test('Actualizar Cita', () => {
        const citaActualizada = {
            id, 
            mascota: 'Alfonse',
            propietario: 'Juan',
            telefono: '123456',
            fecha: '24-08-2021',
            hora:'10:30',
            sintomas: 'No come'
        };
        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar Cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
})