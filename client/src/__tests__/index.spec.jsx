import React from 'react';
import { shallow } from 'enzyme';
import CarouselMain from '../carousel/carouselMain'

let wrapper; 

beforeEach(() => {
  wrapper = shallow(<CarouselMain/>)
});

describe('placeholder', () => {
  it('should pass', () => {
    expect(true).toBe(true); 
  })
});