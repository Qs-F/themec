import * as riot from 'riot'
import Test from './test.riot'
import {
  Themec
} from '../../dist/themec.js'

riot.register('test-riot', Test)
riot.mount('test-riot', { themec: new Themec() })
