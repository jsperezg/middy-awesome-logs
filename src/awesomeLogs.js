const awesomeLogs = (config) => {
  const defaults = {
    logger: data => console.log(JSON.stringify(data, null, 2)),
  };

  const options = Object.assign({}, defaults, config);

  return ({
    before: (handler, next) => {
      const { event } = handler;

      if (typeof options.logger === 'function') {
        options.logger({ event });
      }

      return next();
    },
    after: (handler, next) => {
      const { response } = handler;

      if (typeof options.logger === 'function') {
        options.logger({ response });
      }

      return next();
    },
    onError: (handler, next) => {
      const { error } = handler;

      if (typeof options.logger === 'function') {
        options.logger({ error });
      }

      return next();
    },
  });
};

module.exports = awesomeLogs;
