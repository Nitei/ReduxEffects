/*

1 Crear carpetas actions, effects, reducers
2 ACCIONES - src\app\store\actions\usuarios.actions.ts
  2.1 Crear constantes de las acciones
  2.2 Crear las acciones
  2.3 Exportar tipos de las acciones
3 REDUCER - src\app\store\reducers\usuarios.reducer.ts
  3.1 Crear la interfaz del state
  3.2 Crear constate con el estado inicial de el state
  3.3 Crear el reducer que modificará el state
4 STORE Crear el app.reducers - src\app\store\app.reducers.ts
  4.1 Crear la interfaz del store "AppState"
  4.2 Crear el actionReducerMap que es la combinación de todos los
     reducers que usa la interface de "AppState"
  4.3 Agregar AppReducers en el storeModule de app.module.ts
5 EFECTOS instalar @ngrx/effects - src\app\store\effects\usuarios.effects.ts
  5.1 Se crean los efectos que escucharan a los dispatchs
  5.2 Se crea un array de efectos que se servirán para el EffectsModule
  5.3 Importamos el EffectsModule.forRoot( fooEfects ) en el app.module.ts

*/