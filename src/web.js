export const handler = (event, context, callback) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello Codemotion!',
          input: event,
        },
        null,
        2
      ),
    };
    callback(null, response);
  };
  