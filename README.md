# isJava.js

This library contains a set of tools that'll help you determine if you are currently on any Java's environment

### Out Of the box

```js
import { isJava } from 'is-java';

console.log(isJava());
```

### Other examples

You can use this asynchronous example if needed:

```js
import { isJavaAsync } from 'is-java';

const example = async () => {
  const result = await isJavaAsync();
  return result;
}

example.then((result) => console.log(result));
```

This package can be kinda useful specially if you need to understand the relationship between Java and Javascript.
