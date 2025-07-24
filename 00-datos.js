export const productosTiendaCompleto = [
  {
    id: 1,
    nombre: "Teclado Mecánico RGB",
    precio: 85000,
    categoria: "perifericos",
    stock: 15,
    valoracion: 4.5,
  },
  {
    id: 2,
    nombre: "Mouse Inalámbrico Gaming",
    precio: 45000,
    categoria: "perifericos",
    stock: 5,
    valoracion: 4.2,
  }, // Stock bajo para prueba
  {
    id: 3,
    nombre: "SSD 1TB NVMe",
    precio: 250000,
    categoria: "almacenamiento",
    stock: 10,
    valoracion: 4.7,
  },
  {
    id: 4,
    nombre: "Audífonos Bluetooth Noise Cancelling",
    precio: 120000,
    categoria: "audio",
    stock: 0,
    valoracion: 4.8,
  }, // Stock agotado
  {
    id: 5,
    nombre: 'Monitor Curvo 27"',
    precio: 750000,
    categoria: "monitores",
    stock: 25,
    valoracion: 4.6,
  }, // Stock alto
  {
    id: 6,
    nombre: "Webcam Full HD",
    precio: 35000,
    categoria: "perifericos",
    stock: 8,
    valoracion: 3.9,
  },
  {
    id: 7,
    nombre: "Memoria RAM 16GB DDR4",
    precio: 180000,
    categoria: "componentes",
    stock: 7,
    valoracion: 4.4,
  },
  {
    id: 8,
    nombre: "Router Wi-Fi 6",
    precio: 90000,
    categoria: "redes",
    stock: 18,
    valoracion: 4.1,
  },
  {
    id: 9,
    nombre: "Disco Duro Externo 4TB",
    precio: 150000,
    categoria: "almacenamiento",
    stock: 12,
    valoracion: 4.0,
  },
  {
    id: 10,
    nombre: "Computadora de Escritorio Gamer",
    precio: 3500000,
    categoria: "computadoras",
    stock: 2,
    valoracion: 4.9,
  }, // Stock muy bajo
  {
    id: 11,
    nombre: "Silla Gamer Ergonómica",
    precio: 300000,
    categoria: "muebles",
    stock: 5,
    valoracion: 4.3,
  },
  {
    id: 12,
    nombre: "Smartwatch Deportivo",
    precio: 200000,
    categoria: "wearables",
    stock: 1,
    valoracion: 4.2,
  }, // Stock muy bajo
];

export const transaccionesBancarias = [
  { id: "t1", tipo: "deposito", monto: 1000, fecha: "2023-01-05" },
  { id: "t2", tipo: 200, fecha: "2023-01-07" }, // Nota: 'tipo' es un número aquí para un ejercicio
  { id: "t3", tipo: "compra", monto: 150, fecha: "2023-01-08" },
  { id: "t4", tipo: "deposito", monto: 500, fecha: "2023-01-10" },
  { id: "t5", tipo: "retiro", monto: 300, fecha: "2023-02-01" },
  { id: "t6", tipo: "compra", monto: 50, fecha: "2023-02-03" },
];

export const configuracionApp = {
  tema: "oscuro",
  notificaciones: {
    email: true,
    sms: false,
    push: true,
  },
  idioma: "es",
  version: "1.2.0",
  permisos: {
    camara: "denegado",
    microfono: "permitido",
  },
};

export const nuevosAjustes = {
  tema: "claro",
  notificaciones: {
    sms: true,
  },
};

export const listaTareas = [
  { id: "a1", descripcion: "Comprar víveres", completada: false, prioridad: "alta" },
  { id: "a2", descripcion: "Enviar informe", completada: true, prioridad: "media" },
  { id: "a3", descripcion: "Llamar a cliente", completada: false, prioridad: "alta" },
  { id: "a4", descripcion: "Pagar facturas", completada: false, prioridad: "baja" },
  { id: "a5", descripcion: "Hacer ejercicio", completada: true, prioridad: "media" },
];
