# fastify-snippets

The official [Fastify](https://www.fastify.dev/) [VSCode](https://code.visualstudio.com/) snippets! 

Install it from the [VSCode marketplace](https://marketplace.visualstudio.com/items?itemName=fastify.fastify-snippets)!

For more information, take a look a the [VSCode documentation](https://code.visualstudio.com/docs/editor/userdefinedsnippets)

## Snippet list

<!-- ##TOC-BUILDER## -->
Snippet|Description|Type
---|---|---
fastify hello server|Create an hello world server|ffhello
fastify register|Add an empty plugin|ffregister, ffplugin
fastify print routes|Print to stdout the routes tree|ffprintroutes
fastify error handler|Add a custom error handler|fferrorhandler
fastify decorate server|Add a server decorator|ffdecorateserver
fastify decorate request|Add a request decorator|ffdecoraterequest
fastify decorate reply|Add a reply decorator|ffdecoratereply
fastify hook onRequest|Add an instance fastify onRequest hook|ffonrequest, hookonrequest
fastify hook preParsing|Add an instance fastify preParsing hook|ffpreparsing, hookpreparsing
fastify hook preValidation|Add an instance fastify preValidation hook|ffprevalidation, hookprevalidation
fastify hook preHandler|Add an instance fastify preHandler hook|ffprehandler, hookprehandler
fastify hook preSerialization|Add an instance fastify preSerialization hook|ffpreserialization, hookpreserialization
fastify hook onError|Add an instance fastify onError hook|ffonerror, hookonerror
fastify hook onRequestAbort|Add an instance fastify onRequestAbort hook|ffonrequestabort, hookonrequestabort
fastify hook onSend|Add an instance fastify onSend hook|ffonsend, hookonsend
fastify hook onResponse|Add an instance fastify onResponse hook|ffonresponse, hookonresponse
fastify hook onTimeout|Add an instance fastify onTimeout hook|ffontimeout, hookontimeout
fastify application hook onReady|Add the fastify onReady application hook|ffonready, hookonready
fastify application hook onListen|Add the fastify onListen application hook|ffonlisten, hookonlisten
fastify application hook preClose|Add the fastify preClose application hook|ffpreclose, hookpreclose
fastify application hook onClose|Add the fastify onClose application hook|ffonclose, hookonclose
fastify application hook onRoute|Add the fastify onRoute application hook|ffonroute, hookonroute
fastify application hook onRegister|Add the fastify onRegister application hook|ffonregister, hookonregister
fastify add schema|Add a shared JSON schema to fastify|ffaddschema, ffsharedschema, ffjsonschema, ffschema
fastify not found handler|Add the default 404 not found handler|ffnotfound, ff404
<!-- ##TOC-BUILDER-END## -->

## Contribute

Feel free to open an issue if you have suggestion o new ideas to improve this snippet!


## How to test

From VSCODE you can run the `Extension` launcher to test your snippet inside an headless VSCODE instance.

## How to release

First, you must be added into the [Fastify publisher](https://marketplace.visualstudio.com/manage/publishers/fastify) to complete succesfully these steps.

- Access to the [Fastify org on Azure](https://dev.azure.com/fastify/)
- Generate a [personal access token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token) (_check the `show all scope` small button-link_)
- Run `npm run vscode:login`
- Manually bump the version in the `package.json`
- Run `npm run vscode:pack`
- Run `npm run vscode:publish`
- Commit&Push the new version to the `main` branch
