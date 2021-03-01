import { shallow } from 'enzyme';
import { server, rest } from './setupTests'
import App from './App';

describe('The main page', () => { 
  // Test that the search input is saved to state
  // Test that the right data is retrieved and stored when the search button is pressed
  // Test error handling from the api

  // TODO: Show a list of parking lots from Yelp in that location with
    // the address
    // an image if available
    // star rating
    // review count
    // link to the Yelp page.
    // a parking lot score that factors in number of reviews and ratings
      // using the formula: score = ( number of reviews * rating ) / (number of reviews + 1)

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
