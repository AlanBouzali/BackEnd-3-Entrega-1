## Desarrollo de Primera Entrega Backend 3
Se agregan los endpoints:
- /api/mocks/mockingusers  --> Devuelve 50 Usuarios 
  - ![MockingUsers](https://github.com/user-attachments/assets/647425c3-8350-42a5-8ed7-4a07b3de3186)
- - /api/mocks/mockingpets  --> Devuelve 100 Pets 
  - ![MockingPets](https://github.com/user-attachments/assets/fb21dbad-48c2-4436-b222-b0eac8eeb9ed)
- /api/mocks/generateData/:cantUsers/:cantPets  --> genera {cantUsers} usuarios y {cantPets} pets, los guarda en mongo y muestra los datos
  - ![GenerateData-numUsers-numPets](https://github.com/user-attachments/assets/274f4934-1c73-4cdd-97c9-87c3feefac3e)
- /api/mocks/users --> Devuelve todos los usuarios de Mongo
  - ![Users](https://github.com/user-attachments/assets/a2714475-3ba0-4cd3-9b84-b8d6be4e6e84)
- /api/mocks/pets --> Devuelve todos los Pets de Mongo
  - ![Pets](https://github.com/user-attachments/assets/5a8cc1b7-bd10-4cf0-a4d4-2bb1a9bb8031)
Por ultimo adjunto capturas de MongoDB mostrando el funcionamiento:
- Usuarios:
  - ![MongoUsers](https://github.com/user-attachments/assets/de34badc-e35d-4665-bc75-c95f276e9d3a)
- Pets: 
  - ![MongoPets](https://github.com/user-attachments/assets/bf2ef8a5-b4c1-45af-81d5-6aba9c299bc9)

Utilizando la biblioteca Faker generamos aleatoriamente de manera rapida y solo con una configuracion. 
Esto nos facilita realizar pruebas de manejo de datos en desarrollo sin utilizar datos reales.
