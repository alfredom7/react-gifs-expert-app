
import React from 'react';
import { shallow } from 'enzyme'
import { AddCategory } from '../components/AddCategory';

describe('Pruebas en el <AddCategory/>', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
  
  beforeEach(()=>{
    wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
  })
  
  test('Deberia tomar una snapshot del componente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Deberia devolver el texto enviado como argumento en la funcion', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';

    input.simulate('change', { target: { value }})
    expect(wrapper.find('p').text().trim()).toBe(value)
    
  });

  test('No debe postear la información con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault(){} });
    expect( setCategories ).not.toHaveBeenCalled();
  });

  test('Debe llamar el setCategories y limpiar la caja de texto', () => {
    const value = 'Hola mundo';
    // 1. Simular el inputChange
    wrapper.find('input').simulate('change', { target: { value }})
    // 2. Simular el submit
    wrapper.find('form').simulate('submit', { preventDefault(){} });

    // 3. setCategories debe haber sido llamado
    expect(setCategories).toHaveBeenCalled()
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function) )
    

    // 4. El valor del input debe estar en ''
    expect(wrapper.find('input').prop('value')).toBe('')
    
  });

});