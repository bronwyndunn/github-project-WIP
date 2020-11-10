import React, { useState as useStateMock } from 'react'

import { shallow } from 'enzyme'
import { App } from './'

export const setHookState = (newState = {}) =>
    jest.fn().mockImplementation((state) => [newState, (newState) => {}])

describe('App', () => {
    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should render the component', () => {
        const wrapper = shallow(<App />)
        // const setState = jest.fn();
        // const useStateSpy = jest.spyOn(React, "useState");
        // useStateSpy.mockImplementation((init) => [init, setState]);
        expect(wrapper).toMatchSnapshot()
    })

    it('should render two inputs', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('input')).toHaveLength(2)
    })

    it('should not render the Dashboard for initial state', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('Dashboard').exists()).toBeFalsy()
    })

    it('should render the Dashboard if showRepos is true', () => {
        const wrapper = shallow(<App />)
        setHookState({
            inputValue: '',
            searchTerm: '',
            showRepos: true
        })
        expect(wrapper.find('Dashboard').exists())
    })

    // it("should call handleSearch when the user the user clicks on the button", () => {
    //   const mockedHandleSearch = jest.fn();
    //   const wrapper = shallow(<App onClick={mockedHandleSearch} />);
    //   // wrapper.instance().handleSearch = mockedHandleSearch;
    //   // const spy = jest.spyOn(wrapper.instance(), "handleSearch");
    //   // const instance = wrapper.instance();
    //   // jest.spyOn(instance, "handleSearch");
    //   // wrapper.instance().forceUpdate();
    //   const button = wrapper.find('input[type="button"]').at(0).simulate("click");
    //   expect(mockedHandleSearch).toHaveBeenCalled();
    // });
})
