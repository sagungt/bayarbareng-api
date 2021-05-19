module.exports = {
  get: {
    tags: ['Users'],
    description: 'Get users by id',
    operationId: 'getUserById',
    parameters: [
      {
        name: 'userId',
        in: 'path',
        schema: {
          $ref: '#/components/schema/userId',
        },
        required: true,
        description: 'An user id',
      },
    ],
    responses: {
      200: {
        description: 'User obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/user',
            },
          },
        },
      },
      404: {
        description: 'User not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/error',
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
