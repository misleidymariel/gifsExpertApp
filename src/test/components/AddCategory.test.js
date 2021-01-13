import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";



describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);


    beforeEach( () => {
        jest.clearAllMocks();
        wrapper= shallow(<AddCategory setCategories={setCategories} />);


    })



    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    })


    test('debe de cambiar la caja de texto ', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('Change', { target: { value} });


    })

    test('No debe de postear la informacion con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(setCategories).not.toHaveBeenCalled();
        
    })

    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {

        const value = 'Hola Mundo';

        // simula el inputChange
        wrapper.find('input').simulate('Change', { target: { value} });

        // simula el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // setCategories se debe de haber llamado
        expect( setCategories).toHaveBeenCalled();


        // el valor del input debe de estar
        expect( wrapper.find('input').prop('value')).toBe('');




        
    })
    

    

})
