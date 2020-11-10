import React from 'react'
import { shallow } from 'enzyme'
import { RecentCommits } from './'

const props = {
    author: {
        avatarUrl: 'http://via.placeholder.com/640x360',
        name: 'Bronwyn'
    },
    committedDate: '2020-11-09T01:01:59.975Z',
    message: ''
}
describe('RecentCommits', () => {
    it('should render the component', () => {
        const component = shallow(<RecentCommits node={props} />)

        expect(component).toMatchSnapshot()
    })
})
