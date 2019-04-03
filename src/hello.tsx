//import * as React from 'react'
import React, {useRef, useState, useEffect} from 'react'

export default function Hello() {
  const [value, setValue] = useState('')
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = messageRef.current!.textContent;
    console.log(content)
  }, [value])

  return <div>
    <h1>Hello React</h1>
    <div>
      <input type='text' value={value} onChange={event => setValue(event.currentTarget.value)}/>
      <div ref={messageRef}>Hello, {value}</div>
    </div>
  </div>
};
