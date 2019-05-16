const middy = require('middy');
const awesomeLogs = require('../awesomeLogs');

describe('📦 Middleware Awesome Logs', () => {
  let logger;
  const eventData = { foo: 'bar', fuu: 'baz' };
  const responseData = { message: 'here we go' };
  const errorData = { errorCode: 1, errorMessage: 'Something is rotten in the state of Denmark' };

  beforeEach(() => {
    logger = jest.fn();
  });

  it('should log event', () => {
    const handler = middy((event, context, cb) => {
      cb(null, responseData);
    });

    handler.use(awesomeLogs({ logger }));

    // eslint-disable-next-line no-unused-vars
    handler(eventData, {}, (_, response) => {
      expect(logger).toHaveBeenCalledWith({ event: eventData });
    });
  });

  it('should log the response', () => {
    const handler = middy((event, context, cb) => {
      cb(null, responseData);
    });

    handler.use(awesomeLogs({ logger }));

    // eslint-disable-next-line no-unused-vars
    handler(eventData, {}, (_, response) => {
      expect(logger).toHaveBeenCalledWith({ response: responseData });
    });
  });

  it('should log errors', () => {
    const handler = middy((event, context, cb) => {
      cb(errorData, null);
    });

    handler.use(awesomeLogs({ logger }));

    // eslint-disable-next-line no-unused-vars
    handler(eventData, {}, (_, response) => {
      expect(logger).toHaveBeenCalledWith({ error: errorData });
    });
  });
});
