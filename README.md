# DOCUMENTACIÓN OFICINAL DE TYPESCRIPT
[DOC oficial](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## INSTALAR TYPESCRIPT
```
npm install -g typescript
```

## CREAR ARCHIVO tsconfig.json
```
tsc --init
```

## DEFINIR MODO STRICTO EN ARCHIVO tsconfig.json
![MODO STRICTO IMG](/IMG/1_modo_stricto.png "Modo Stricto png")

## EJECUTAR ARCHIVO CON TYPESCRIPT
```
tsc app
```

## EJECUTAR TODOS LOS ARCHIVOS CON TYPESCRIPT
```
tsc
```

## EJECUTAR TODOS LOS ARCHIVOS CON TYPESCRIPT CON ACTUALIZACION AUTOMATICA
```
tsc -w
tsc --watch
```


```
// Se debe poner el tipo de datos en los parametros de una función
function sayHello(msg:string) {
    console.log(msg);
}
```