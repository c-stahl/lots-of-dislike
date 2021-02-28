import { shallow } from 'enzyme';
import { server, rest } from './setupTests'
import App from './App';

describe('The main page', () => { 
  it('renders a learn react link to reactjs.org', () => {  
    // Useful to set a mock response to specific statuses locally
    server.use(
      rest.get('https://www.url.com/api/path', 
        (request, response, context) => {
          return response(
            context.status(404),
            context.json({}));
        }
      )
    );

    const wrapper = shallow(<App />);
    
    expect(wrapper.exists('a[href="https://reactjs.org"]')).toBeTruthy();

    const link = wrapper.find('a[href="https://reactjs.org"]').first();
    expect(link.text()).toMatch(/learn react/i);
  });
});
