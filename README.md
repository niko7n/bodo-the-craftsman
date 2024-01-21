# bodo-the-craftsman
Spice up your console outputs with a personalized message from your favourite imaginary human being: Bodo the Craftsman!

## Usage
```js
import "bodo-the-craftsman";

// Just print the image
console.bob();

// Print the image as well as a speech bubble
console.bob("Hello world!");

// Specify a variant of Bodo
console.bob("Hello world!", "angry");
```

If no variant is specified, a random one is picked based on predetermined probabilities instead. Currently, the following variants are available:
| Variant | Probability |
|---------|-------------|
| regular | 45%         |
| angry   | 9%          |
| cringe  | 9%          |
| eyeless | 5%          |
| gimp    | 5%          |
| sad     | 23%         |
| torn    | 5%          |
