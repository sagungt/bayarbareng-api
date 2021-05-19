module.exports = {
  post: {
    tags: ['Services'],
    description: 'Create new service',
    operationId: 'addService',
    parameters: [],
    requestBody: {
      content: {
        'application/x-www-form-urlencoded': {
          schema: {
            $ref: '#/components/schemas/serviceInput',
          },
        },
      },
    },
    responses: {
      201: {
        description: 'Service created successfully',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/service',
            },
          },
        },
      },
      500: {
        description: 'Server error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
    },
  },
};
