


architecture


structure



Top Level Folders



A
app
pages
public



B  [O]
public
src
--app
--pages


app: App Router
pages: Pages Router
public: Static assets to be served
src: Optional application source folder



Top Level Files

next.config.js
instrumentation

# Routing Conventions

## Routing Files
app  
└── layout  
└── page  
└── loading  
└── not-found  
└── error  
└── global-error-----------------------------------------------------------[?]  
└── route: API endpoint----------------------------------------------------[?]  
└── template: Re-rendered layout-------------------------------------------[?]    
└── default: Parallel route fallback page----------------------------------[?]  

## Nested Routes

└── folder: Route segment  
└── folder/folder: Nested route segment  

## Dynamic Routes

└── [folder]: Dynamic route segment----------------------------------------[?]  
└── [...folder]: Catch-all route segment--------------------------------------[?]  
└── [[...folder]]: Optional catch-all route segment----------------------------[?]  

## Route Groups and Private Folders

└── (folder): Group routes without affecting routing  
└── _folder: Opt folder and all child segments out of routing-----------------[?]  

## Parallel and Intercepted Routes

└── @folder: Named slot-----------------------------------------------------[?]  
└── (.)folder: Intercept same level--------------------------------------------[?]  
└── (..)folder: Intercept one level above---------------------------------------[?]  
└── (..)(..)folder: Intercept two levels above-----------------------------------[?]  
└── (...)folder: Intercept from root--------------------------------------------[?]  
