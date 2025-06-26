# tcsk vscode common

Provides the basic capabilities of the vs code extensions

### Webview

Webview base class for flat web

```ts
import { FlatWebview } from '@tcsk-vscode/common';

export class SomePanel extends FlatWebview {
  private webviewPanel: WebviewPanel;

  get moduleName() {
    return 'module';
  }

  constructor() {
    super();
  }
  // ...Implement abstract method
}
```

### PostMessage

The basic webview provides communication methods

You can use `this.sendAsyncMessage`

The arguments is here

```ts
{
  name: string; // The method you're going to call is in the webview
  params: any; // The params for method
}

this.sendAsyncMessage({
  name: 'onChange',
  params: text,
});
```

If it is a webview asynchronous call and wait for the return，You can use `this.sendAsyncCallBackMessage`

eg:

```ts
this.sendAsyncCallBackMessage({
  hash: 'xxx', // The webview will be passed when it is called
  params: text,
});
```
