# DeBouncing : 
    - typing slow = key stroke 200ms []
    - fast typing = 120ms    [User behaviour - no need of intermediate suggestion]


# Performance 
 -

 # Debouncing with 200ms
    - if difference between 2 key strokes is <200ms - decline api call


key - i
render the component
useEffect() - based on search filter
start timer -> make api call after 200ms


key -> ip
destroy the component (useEffect return method)
re-render
useEffect()
starttimer - > make after 200ms api call