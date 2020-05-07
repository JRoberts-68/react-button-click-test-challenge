import React from 'react';
import {shallow} from 'enzyme';

import Button from './button';

describe('Test button component', () => {
    it('Should call props.onClick when the button is clicked', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<Button onClick={mockCallBack}>Ok!</Button>));
        button.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
    
