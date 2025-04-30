window.config = window.config || { proyectos: [] };

window.config.proyectos.push({
  nombre: "Sistemas de ayuntamiento",
  institucion: "Univercidad politecnica de chiapas",
  fechaReporte: "2025-04-29",
  descripcionGeneral: "El Sistema de Continuidad de Beca de Posgrado tiene como objetivo registrar y validar mensualmente la situación académica de los estudiantes becarios del INAOE, cumpliendo con los lineamientos establecidos por la SECIHTI.",
  avance: 40,
  flujoImagen: "/public/flujo.webp",
  estadoGeneral: {
    fase: "Producción",
    version: "2.3",
    ultimaActualizacion: "2025-04-25"
  },
  funcionalidades: [],
  objetivos: [
    { objetivo: "Implementar módulo de solicitud estudiantil", estado: "Completado", responsable: "Equipo Desarrollo" },
    { objetivo: "Desarrollar flujo de validación por asesores", estado: "Completado", responsable: "Equipo Desarrollo" },
    { objetivo: "Crear interfaz para coordinadores", estado: "En progreso (90%)", responsable: "Equipo Frontend" }
  ],
  roles: [
    { rol: "Estudiante", responsabilidad: "Solicitar continuidad", persona: "Estudiantes becarios" },
    { rol: "Asesor", responsabilidad: "Validar situación académica", persona: "Investigadores" }
  ],
  versiones: [
    { version: "1.0", fecha: "Ene 2023", cambios: "Lanzamiento inicial" },
    { version: "2.3", fecha: "Jul 2023", cambios: "Mejoras de usabilidad" }
  ],
  mejoras: [
    "Integración con sistema institucional",
    "Dashboard analítico",
    "Exportación de reportes",
    "Alertas automáticas"
  ],
  contacto: {
    lider: "Dra. María Pérez",
    correo: "maria.perez@inaoe.mx",
    soporte: "soporte@inaoe.mx"
  },
  tareas: [
    {
      id: 1,
      nombre: "Diseñar interfaz",
      responsable: "Ana",
      fechaInicio: "2025-05-01",
      fechaFin: "2025-05-03",
      avance: 40
    },
    {
      id: 2,
      nombre: "Implementar backend",
      responsable: "Luis",
      fechaInicio: "2025-05-04",
      fechaFin: "2025-05-10",
      avance: 60
    }
  ]
});
