// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Enzyme
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// Mocking external fetch requests
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://www.url.com/api/path', 
    (request, response, context) => {
      return response(
        context.status(200),
        context.json({}));
  }),
  rest.get('*', 
    (request, response, context) => {
      console.error(`Missing mock request for ${request.url.toString()}`);
      return response(
        context.status(500),
        context.json({error: `Missing mock request for ${request.url.toString()}`}));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export {server, rest};
