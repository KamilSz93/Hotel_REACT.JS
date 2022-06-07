 import { useState } from 'react'

function useStateStorage(key, defaultValue) {
const[state, setState] = useState(defaultValue)
    
    return [value, setValue]
}

export default useStateStorage;