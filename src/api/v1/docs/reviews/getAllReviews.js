module.exports = {
  get: {
    tags: ['Reviews'],
    description: 'Get all reviews',
    operationId: 'getAllReviews',
    parameters: [],
    responses: {
      200: {
        description: 'Reviews were obtained',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/reviews',
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
