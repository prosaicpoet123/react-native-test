import React from 'react'
global.fetch = require('jest-fetch-mock')

/* eslint-env jest */
jest.mock('react-native-ratings', () => {
  return {
    __esModule: true,
    Rating: ({ startingValue }) => {
      return <>{startingValue}</>
    },
  }
})
