$(document).ready(iniciar);

function iniciar() {
	$("#add_serv_guardar").on("click", agregar_servicio);
	$("#eliminar").on("click", eliminar_servicio);
}

function agregar_servicio() {
	var subtitulo = $("#add_serv_titulo").val();
	var icono = $("#add_serv_icono").val();
	var descripcion = $("#add_serv_descripcion").val();

	var new_servicio = `<div class="col-md-4 servicio">
				          <span class="fa-stack fa-4x">
				            <i class="fas fa-circle fa-stack-2x text-primary"></i>
				            <i class="fas `+icono+` fa-stack-1x fa-inverse"></i>
				          </span>
				          <h4 class="service-heading">`+subtitulo+`</h4>
				          <p class="text-muted">`+descripcion+`</p>
				          <button id="eliminar">Eliminar</button>
				        </div>`;

	$("#contenedor_servicios").prepend(new_servicio);

	$("#eliminar").on("click", eliminar_servicio);
}

function eliminar_servicio(){
	$(".servicio").remove();
}






