
import React from 'react'
import devcards from './devcards/core'
import {Foo, Bar} from './components'
import testComponents from '../test/components'

const dc = devcards()

dc.card(<Foo message="hello"/>, 'foo card')

dc.card(<Foo message="hello world"/>, 'another foo card')

dc.card(<Bar/>, 'bar card')

dc.tape(testComponents, 'component tests 1')

dc.tape(testComponents, 'component tests 2')

export default dc
