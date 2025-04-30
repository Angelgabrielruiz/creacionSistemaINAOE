document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("selectorProyecto");

  config.proyectos.forEach((proyecto, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = proyecto.nombre;
    selector.appendChild(option);
  });

  const hash = window.location.hash;
  if (hash) {
    const index = parseInt(hash.replace('#', ''));
    if (!isNaN(index)) {
      selector.value = index;
      mostrarProyecto(config.proyectos[index]);
    }
  }

  selector.addEventListener("change", (e) => {
    const index = e.target.value;
    mostrarProyecto(config.proyectos[index]);
    window.location.hash = index;
  });

  function mostrarProyecto(proyecto) {
    const contenedor = document.getElementById("contenidoProyecto");

    const colorClase = proyecto.avance < 30
      ? 'rojo'
      : proyecto.avance < 70
      ? 'amarillo'
      : 'verde';

    contenedor.innerHTML = `
      <div class="card">
        <h2>${proyecto.nombre}</h2>
        <div class="info-row">
          <span><strong>Institución:</strong> ${proyecto.institucion}</span>
          <span><strong>Fecha del reporte:</strong> ${proyecto.fechaReporte}</span>
        </div>

        <div class="section-container">
          <h3>Descripción</h3>
          <p>${proyecto.descripcionGeneral}</p>
        </div>

        <div class="section-container">
          <h3>Objetivo Principal</h3>
          <p>${proyecto.descripcionGeneral}</p>
        </div>

        <div class="section-container">
          <h3>Objetivos Específicos</h3>
          <ul>
            ${proyecto.objetivos.map(obj => `<li>${obj.objetivo} - ${obj.estado} (${obj.responsable})</li>`).join('')}
          </ul>
        </div>

        <div class="section-container">
          <h3>Proceso Actual</h3>
          <p>Actualmente el sistema se encuentra en la fase <strong>${proyecto.estadoGeneral.fase}</strong>.</p>
          <div class="progress-wrapper">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill ${colorClase}" style="width: ${proyecto.avance}%;">
                ${proyecto.avance}%
              </div>
            </div>
          </div>
        </div>

        <div class="section-container">
          <h3>Flujo del Proceso</h3>
          <img src="${proyecto.flujoImagen}" alt="Diagrama de Flujo del Sistema" style="max-width: 100%; border: 1px solid #ccc;" />
        </div>

        <div class="section-container">
          <h3>Próximas Mejoras</h3>
          <ul>${proyecto.mejoras.map(m => `<li>${m}</li>`).join('')}</ul>
        </div>

        <div class="section-container">
          <h3>Roles y Responsables</h3>
          <table class="estado-table">
            <thead>
              <tr>
                <th>Rol</th>
                <th>Responsabilidad</th>
                <th>Persona / Área</th>
              </tr>
            </thead>
            <tbody>
              ${proyecto.roles.map(r => `
                <tr>
                  <td>${r.rol}</td>
                  <td>${r.responsabilidad}</td>
                  <td>${r.persona}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>

        <div class="section-container">
          <h3>Participantes Clave</h3>
          <ul>
            ${proyecto.roles.map(r => `<li>${r.persona} (${r.rol})</li>`).join('')}
          </ul>
        </div>

        <div class="section-container">
          <h3>Versiones Liberadas</h3>
          <ul>
            ${proyecto.versiones.map(v => `<li>Versión ${v.version} - ${v.cambios} (${v.fecha})</li>`).join('')}
          </ul>
        </div>

        <div class="section-container">
          <h3>Calendario de Implementación (Gantt)</h3>
          <table class="gantt-table">
            <thead>
              <tr>
                <th>Tarea</th>
                <th>Responsable</th>
                <th>Inicio</th>
                <th>Fin</th>
              </tr>
            </thead>
            <tbody>
              ${proyecto.tareas.map(t => `
                <tr>
                  <td>${t.nombre}</td>
                  <td>${t.responsable}</td>
                  <td>${t.fechaInicio}</td>
                  <td>${t.fechaFin}</td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>

        <div class="section-container">
          <h3>Contacto</h3>
          <div><strong>Líder:</strong> ${proyecto.contacto.lider}</div>
          <div><strong>Correo:</strong> ${proyecto.contacto.correo}</div>
          <div><strong>Soporte:</strong> ${proyecto.contacto.soporte}</div>
        </div>
      </div>
    `;
  }
});
