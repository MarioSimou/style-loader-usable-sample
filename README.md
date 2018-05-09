# style-loader-usable-sample
Sample of working style-loader in usable mode

This sample shows how is working style-loader' use()/unuse() methods.
React renders components in reverse mode - from inner to most outer, so styles applies in that order too.
This behavior breaks default behavior - applying styles from most outer component to inner.

In this sample App component styles declare color variable: 

```
:root {
    --color: blue;
}
```

PageLayout component is overriding this variable:

```
:root {
    --color: red;
}
```

Page1 component render div with class which is using this variable:

```
.class1 {
    color: var(--color);
}
```

Because of the reverse order, the resulting text color will not be red, but blue, because PageLayout styles will be attached first and then App styles.
App styles override styles of the AppLayout component although there should be the opposite.

Steps to run project:
- clone project to local place:
```
git clone https://github.com/budarin/style-loader-usable-sample.git
```

- change active folder to created above one:
```
cd style-loader-usable-sample
```
- load dependencies:
```
npm install
``` 
- start project - it will open browser with the app's page:
```
npm start
```
- open devtools in console tab and have a look on a reversed order of rendered components - it would be:

```
    Page1 styles added
    PageLayout styles added
    App styles added
```
   though should be:
```
    App styles added
    PageLayout styles added
    Page1 styles added    
```

Also you could inspect html and see styles in head of the page