import React from 'react';
import {shallow} from 'enzyme'
import { GifGridItem } from '../components/GifGridItem';

const title = 'My test title';
const url = 'myapp.alfredo.com'
const wrapper = shallow(<GifGridItem title={title} url={url}/>);

describe('Pruebas en <GifGridItem/>', () => {
  
  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe tener un parrafo con el titulo', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('Debe tener la imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.props().src).toBe(url)
  });

  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div.mycard');
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true)
  });


});