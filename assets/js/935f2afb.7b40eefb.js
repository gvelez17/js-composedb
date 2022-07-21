"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"link","label":"Introduction","href":"/js-composedb/docs/introduction","docId":"introduction"},{"type":"category","collapsed":false,"label":"Getting Started","items":[{"type":"link","label":"Installation","href":"/js-composedb/docs/installation","docId":"installation"},{"type":"link","label":"Your first Composite","href":"/js-composedb/docs/first-composite","docId":"first-composite"},{"type":"link","label":"Client setup","href":"/js-composedb/docs/client-setup","docId":"client-setup"}],"collapsible":true},{"type":"category","collapsed":false,"label":"Guides","items":[{"type":"link","label":"Concepts overview","href":"/js-composedb/docs/guides/concepts-overview","docId":"guides/concepts-overview"},{"type":"link","label":"Data composition","href":"/js-composedb/docs/guides/data-composition","docId":"guides/data-composition"},{"type":"category","label":"Using Composites","items":[{"type":"link","label":"Introduction","href":"/js-composedb/docs/guides/using-composites/introduction","docId":"guides/using-composites/introduction"},{"type":"link","label":"Discovery","href":"/js-composedb/docs/guides/using-composites/discovery","docId":"guides/using-composites/discovery"},{"type":"link","label":"Deployment","href":"/js-composedb/docs/guides/using-composites/deployment","docId":"guides/using-composites/deployment"},{"type":"link","label":"Customization","href":"/js-composedb/docs/guides/using-composites/customization","docId":"guides/using-composites/customization"}],"collapsed":true,"collapsible":true},{"type":"link","label":"Creating Composites","href":"/js-composedb/docs/guides/creating-composites","docId":"guides/creating-composites"},{"type":"category","label":"Interacting with data","items":[{"type":"link","label":"Querying the graph","href":"/js-composedb/docs/guides/interacting/queries","docId":"guides/interacting/queries"},{"type":"link","label":"Performing mutations","href":"/js-composedb/docs/guides/interacting/mutations","docId":"guides/interacting/mutations"},{"type":"link","label":"Using Apollo","href":"/js-composedb/docs/guides/interacting/using-apollo","docId":"guides/interacting/using-apollo"},{"type":"link","label":"Using Relay","href":"/js-composedb/docs/guides/interacting/using-relay","docId":"guides/interacting/using-relay"}],"collapsed":true,"collapsible":true}],"collapsible":true}],"api":[{"type":"category","collapsed":false,"label":"Client module","items":[{"type":"link","label":"Overview","href":"/js-composedb/docs/api/modules/client","docId":"api/modules/client"},{"type":"link","label":"ComposeClient class","href":"/js-composedb/docs/api/classes/client.ComposeClient","docId":"api/classes/client.ComposeClient"},{"type":"link","label":"Context class","href":"/js-composedb/docs/api/classes/client.Context","docId":"api/classes/client.Context"}],"collapsible":true},{"type":"category","collapsed":false,"label":"Developer tools","items":[{"type":"link","label":"Generic developer tools","href":"/js-composedb/docs/api/modules/devtools","docId":"api/modules/devtools"},{"type":"link","label":"Node.js developer tools","href":"/js-composedb/docs/api/modules/devtools_node","docId":"api/modules/devtools_node"},{"type":"link","label":"Composite class","href":"/js-composedb/docs/api/classes/devtools.Composite","docId":"api/classes/devtools.Composite"}],"collapsible":true}]},"docs":{"api/classes/client.ComposeClient":{"id":"api/classes/client.ComposeClient","title":"Class: ComposeClient","description":"client.ComposeClient","sidebar":"api"},"api/classes/client.Context":{"id":"api/classes/client.Context","title":"Class: Context","description":"client.Context","sidebar":"api"},"api/classes/devtools.Composite":{"id":"api/classes/devtools.Composite","title":"Class: Composite","description":"devtools.Composite","sidebar":"api"},"api/index":{"id":"api/index","title":"ComposeDB API","description":"Modules"},"api/modules/client":{"id":"api/modules/client","title":"Module: client","description":"ComposeDB client.","sidebar":"api"},"api/modules/devtools":{"id":"api/modules/devtools","title":"Module: devtools","description":"Development tools library.","sidebar":"api"},"api/modules/devtools_node":{"id":"api/modules/devtools_node","title":"Module: devtools-node","description":"Node.js-specific development tools.","sidebar":"api"},"client-setup":{"id":"client-setup","title":"Client setup","description":"Compiling the Composite","sidebar":"docs"},"first-composite":{"id":"first-composite","title":"Your first Composite","description":"TODO: Quick intro to composites as set of models, focus on usage.","sidebar":"docs"},"guides/concepts-overview":{"id":"guides/concepts-overview","title":"Concepts overview","description":"ComposeDB provides a graph structure for interacting with data on the Ceramic network.","sidebar":"docs"},"guides/creating-composites":{"id":"guides/creating-composites","title":"Creating Composites","description":"Composites are the abstraction ComposeDB tools and client use to represent and manipulate data models used by applications.","sidebar":"docs"},"guides/data-composition":{"id":"guides/data-composition","title":"Data composition","description":"Models composition","sidebar":"docs"},"guides/interacting/mutations":{"id":"guides/interacting/mutations","title":"Performing mutations","description":"Enabling mutations","sidebar":"docs"},"guides/interacting/queries":{"id":"guides/interacting/queries","title":"Querying the graph","description":"The ComposeClient automatically generates a GraphQL Schema from the runtime Composite definition.","sidebar":"docs"},"guides/interacting/using-apollo":{"id":"guides/interacting/using-apollo","title":"Using Apollo","description":"The ComposeDB client can be used with the Apollo client by creating a custom Apollo link, as shown in the example below:","sidebar":"docs"},"guides/interacting/using-relay":{"id":"guides/interacting/using-relay","title":"Using Relay","description":"The ComposeDB client can be used with Relay by creating a custom network layer, as shown in the example below:","sidebar":"docs"},"guides/using-composites/customization":{"id":"guides/using-composites/customization","title":"Composites customization","description":"Merging Composites","sidebar":"docs"},"guides/using-composites/deployment":{"id":"guides/using-composites/deployment","title":"Composites deployment","description":"Valid Composites can be deployed to any supporting Ceramic node, by ensuring the Model streams described in the Composite are available on the node, and that the node is configured to index theses models.","sidebar":"docs"},"guides/using-composites/discovery":{"id":"guides/using-composites/discovery","title":"Composites discovery","description":"ComposeDB does not yet provide a way to discover Composites directly, however it is possible to create Composites from known Models.","sidebar":"docs"},"guides/using-composites/introduction":{"id":"guides/using-composites/introduction","title":"Using Composites","description":"Composites are the primary representation for data models used by ComposeDB. They allow developers to create, share, reuse and combine Model streams together in a consistent way.","sidebar":"docs"},"installation":{"id":"installation","title":"Installation","description":"Requirements","sidebar":"docs"},"introduction":{"id":"introduction","title":"Welcome to ComposeDB","description":"","sidebar":"docs"}}}')}}]);