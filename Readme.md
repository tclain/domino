#Domino, a lightweight glue library

## Quickstart
- In your html

```
<div id="app">
    {{value}}
</div>
```

- In your js/ts
```
import Domino from 'domino';

app = new Domino('#app', {
    value : "test"
})

// displayed : test
app.data.value = "a new value";
// displayed : a new value
```
