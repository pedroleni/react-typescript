# RTK QUERY

RTK Query es una librería de gestión de caché y consultas para aplicaciones React y Redux Toolkit. Proporciona una forma fácil y sencilla de manejar el estado de los datos que se obtienen de una API, además de incluir varias características útiles, como gestión automática del caché, paginación, reintentos automáticos en caso de errores y mucho más.


RTK Query es una librería independiente de Redux, pero está diseñada para trabajar bien con Redux Toolkit. Utiliza un enfoque basado en el modelo para definir las consultas y mutaciones, y utiliza automáticamente el caché para mejorar el rendimiento y reducir la cantidad de solicitudes a la API. También se integra bien con React Suspense y React Hooks.

Además de la gestión de caché y las consultas de datos, RTK Query también proporciona una forma fácil de realizar mutaciones en la API, con soporte para acciones asincrónicas y control del estado de carga. También incluye una variedad de opciones de configuración para personalizar el comportamiento de las consultas y mutaciones.

En resumen, RTK Query es una herramienta poderosa para simplificar la gestión de datos en una aplicación React/Redux Toolkit, ayudando a reducir la complejidad y mejorar el rendimiento.

Algunas de las propiedades más útiles son:

- **data**: Contiene los datos devueltos por la consulta o la mutación. Si la consulta o la mutación aún no se han completado, **data** será **undefined**.
- **error**: Contiene cualquier error que se haya producido durante la consulta o la mutación. Si la consulta o la mutación se ha completado sin errores, **error** será **null**.
- **isFetching**: Indica si la consulta o la mutación se está realizando en este momento.
- **isError**: Indica si se ha producido un error durante la consulta o la mutación.
- **isSuccess**: Indica si la consulta o la mutación se ha completado con éxito.
- **isLoading**: Indica si la consulta o la mutación se está realizando o si se ha completado con éxito.
- **fulfilledTimeStamp**: Indica la marca de tiempo en la que se completó la consulta o la mutación.
- **requestId**: Un identificador único para la consulta o mutación actual.
- **originalArgs**: Los argumentos originales pasados a la función de consulta o mutación.
- **isLoadingMore**: Indica si se están cargando más datos después de los datos iniciales que se cargaron en la primera consulta.
- **hasPreviousPage**: Indica si hay una página anterior disponible para cargar.
- **hasNextPage**: Indica si hay una página siguiente disponible para cargar.
- **pageParam**: El valor del parámetro de página actual. Puede ser utilizado para paginar los resultados de la consulta.
- **meta**: Un objeto que contiene metadatos sobre la consulta o la mutación, como la marca de tiempo de la última actualización de la caché.
- **endpointName**: El nombre del endpoint que se utilizó para realizar la consulta o la mutación.
- **fulfilledWithValue**: Un objeto que contiene tanto el valor de **fulfilledTimeStamp** como el valor de **data**.
- **isUninitialized**: Indica si la consulta o la mutación aún no se ha iniciado.
- **isStale**: Indica si los datos en caché son antiguos y se debe actualizar.
- **startedTimeStamp**: La marca de tiempo en la que se inició la consulta o la mutación.
- **status**: El estado actual de la consulta o la mutación (por ejemplo, 'idle', 'loading', 'error', 'success').
- **unwrap** y **unwrapResult**: Funciones que se utilizan para obtener los datos devueltos de una consulta o mutación en su formato original. Estas funciones son útiles cuando se utilizan transformaciones personalizadas en los datos devueltos.

Ten en cuenta que no todas estas propiedades están disponibles en todas las consultas o mutaciones, ya que algunas de ellas dependen del tipo de endpoint y de la configuración específica.
