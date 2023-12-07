example that with jest, even when using

```javascript
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/|\\.pnpm/?!.*\\.mjs$|(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)/)'],
```

import { Platform } from '@ionic/angular/standalone'; // This doesnt work
// import { Platform } from '@ionic/angular'; // This works



## update

```
  transformIgnorePatterns: [
    '<rootDir>/node_modules/.pnpm/(?!(@ionic/angular|@ionic/core|ionicons|@stencil/core|@angular/*)@)',
  ],  
  ```

works for this, see the tip about pnpm here:

https://jestjs.io/docs/configuration#transformignorepatterns-arraystring

