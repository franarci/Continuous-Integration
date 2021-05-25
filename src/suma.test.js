import React from 'react'
import {screen, render} from '@testing-library/react'
import {toBeInTheDocument, toBe} from '@testing-library/jest-dom/matchers';
//import '../setupTests'
//import 'mocha'

const suma = require('./suma')

test('2+5=7', () => {
    
    expect(suma(2,5)).toBe(7)
     
})