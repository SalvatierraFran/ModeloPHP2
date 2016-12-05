
function Mostrar()
			{			
				var pagina="administrarRemeras.php";				

				$.ajax({
					url: pagina,					
					type: 'POST',
					data: {"quehago":"Mostrar"},
					dataType: "json",
					async: true,
				})
				.done(function (respuesta){									

					var tabla = '<table class="table">';
					tabla +=	'	<thead style="background:rgb(14, 26, 112);color:#fff;">';
					tabla +=	'		<tr>';
					tabla +=	'			<th rowspan="2">  ID </th>';
					tabla +=	'				<th rowspan="2">  Slogan </th>';
					tabla +=	'					<th rowspan="2">  Talla  </th>';
					tabla +=	'					<th rowspan="2">  Precio  </th>';
					tabla +=	'					<th rowspan="2">  Color  </th>';		
					tabla +=	'						<th colspan="2" rowspan="2">';
					tabla +=	'							<table style="width:100%;">';
					tabla +=	'									<tr colspan="2">';	
					tabla +=	'										<td style="text-align:center;color:#fff;" colspan="2">  Manofactura </td>';
					tabla +=	'								    </tr>';
					tabla +=	'								<tr colspan="2">';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Nombre </td>';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Logo </td>';
					tabla +=	'									</tr>';
					tabla +=	'							</table>';
					tabla +=	'						</th>';
					tabla +=	'						<th colspan="2" rowspan="2">';
					tabla +=	'							<table style="width:100%;">';
					tabla +=	'									<tr colspan="2">';	
					tabla +=	'										<td style="text-align:center;color:#fff;" colspan="2">  Locacion </td>';
					tabla +=	'								    </tr>';
					tabla +=	'								<tr colspan="2">';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Pais  </td>';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Ciudad </td>';
					tabla +=	'									</tr>';
					tabla +=	'							</table>';
					tabla +=	'						</th>';
					tabla +=	'					<th rowspan="2">  Eliminar  </th>';
					tabla +=	'					<th rowspan="2">  Modificar  </th>';
					tabla +=	'					</tr>';
					tabla +=	'				</thead>';
							
					for (var i = 0; i < respuesta.length; i++) 
		            {
		                tabla+='<tr>';
		                tabla+='<td>'+respuesta[i]["id"]+'</td>';
		                tabla+='<td>'+respuesta[i]["slogan"]+'</td>';
		                tabla+='<td>'+respuesta[i]["size"]+'</td>';
		                tabla+='<td>'+respuesta[i]["price"]+'</td>';
		                tabla+='<td>'+respuesta[i]["color"]+'</td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["name"]+'</td>';
		                tabla+='<td><img src="'+respuesta[i]["manofacturer"]["logo"]+'"></img></td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["location"]["country"]+'</td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["location"]["city"]+'</td>';
		                tabla+='<td><a id="idEl" onclick="Eliminar('+respuesta[i]["id"]+')" href="#">Eliminar</a></td>';
		                tabla+='<td><a id="idEl" onclick="Modificar('+respuesta[i]["id"]+')" href="#">Modificar</a></td>';	 	                
		                tabla+='</tr>';  
		            }
					
					tabla += '</table>';
					
		            $("#tabladatos").html(tabla);
				})
				 
				
			}

	function Filtrar()
			{			
				var pagina="administrarRemeras.php";				
				var pais=$("#pais").val();

				$.ajax({
					url: pagina,					
					type: 'POST',
					data: {"quehago":"traerRemerasFiltradas","dato":pais},
					dataType: "json",
					async: true,
				})
				.done(function (respuesta){									

					var tabla = '<table class="table">';
					tabla +=	'	<thead style="background:rgb(14, 26, 112);color:#fff;">';
					tabla +=	'		<tr>';
					tabla +=	'			<th rowspan="2">  ID </th>';
					tabla +=	'				<th rowspan="2">  Slogan </th>';
					tabla +=	'					<th rowspan="2">  Talla  </th>';
					tabla +=	'					<th rowspan="2">  Precio  </th>';
					tabla +=	'					<th rowspan="2">  Color  </th>';		
					tabla +=	'						<th colspan="2" rowspan="2">';
					tabla +=	'							<table style="width:100%;">';
					tabla +=	'									<tr colspan="2">';	
					tabla +=	'										<td style="text-align:center;color:#fff;" colspan="2">  Manofactura </td>';
					tabla +=	'								    </tr>';
					tabla +=	'								<tr colspan="2">';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Nombre </td>';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Logo </td>';
					tabla +=	'									</tr>';
					tabla +=	'							</table>';
					tabla +=	'						</th>';
					tabla +=	'						<th colspan="2" rowspan="2">';
					tabla +=	'							<table style="width:100%;">';
					tabla +=	'									<tr colspan="2">';	
					tabla +=	'										<td style="text-align:center;color:#fff;" colspan="2">  Locacion </td>';
					tabla +=	'								    </tr>';
					tabla +=	'								<tr colspan="2">';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Pais  </td>';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Ciudad </td>';
					tabla +=	'									</tr>';
					tabla +=	'							</table>';
					tabla +=	'						</th>';
					tabla +=	'					</tr>';
					tabla +=	'				</thead>';
							
					for (var i = 0; i < respuesta.length; i++) 
		            {
		                tabla+='<tr>';
		                tabla+='<td>'+respuesta[i]["id"]+'</td>';
		                tabla+='<td>'+respuesta[i]["slogan"]+'</td>';
		                tabla+='<td>'+respuesta[i]["size"]+'</td>';
		                tabla+='<td>'+respuesta[i]["price"]+'</td>';
		                tabla+='<td>'+respuesta[i]["color"]+'</td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["name"]+'</td>';
		                tabla+='<td><img src="'+respuesta[i]["manofacturer"]["logo"]+'"></img></td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["location"]["country"]+'</td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["location"]["city"]+'</td>';	                
		                tabla+='</tr>';  
		            }
					
					tabla += '</table>';
					
		            $("#tabladatos").html(tabla);
				})
				 
				
			}	

function FiltrarDos()
			{			
				var pagina="administrarRemeras.php";
				var dato=$("#dato").val();				
				var opcion=$("#opcion").val();

				$.ajax({
					url: pagina,					
					type: 'POST',
					data: {"quehago":"traerRemerasFiltradasPorCampo","opcion":opcion,"dato":dato},
					dataType: "json",
					async: true,
				})
				.done(function (respuesta){									

					var tabla = '<table class="table">';
					tabla +=	'	<thead style="background:rgb(14, 26, 112);color:#fff;">';
					tabla +=	'		<tr>';
					tabla +=	'			<th rowspan="2">  ID </th>';
					tabla +=	'				<th rowspan="2">  Slogan </th>';
					tabla +=	'					<th rowspan="2">  Talla  </th>';
					tabla +=	'					<th rowspan="2">  Precio  </th>';
					tabla +=	'					<th rowspan="2">  Color  </th>';		
					tabla +=	'						<th colspan="2" rowspan="2">';
					tabla +=	'							<table style="width:100%;">';
					tabla +=	'									<tr colspan="2">';	
					tabla +=	'										<td style="text-align:center;color:#fff;" colspan="2">  Manofactura </td>';
					tabla +=	'								    </tr>';
					tabla +=	'								<tr colspan="2">';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Nombre </td>';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Logo </td>';
					tabla +=	'									</tr>';
					tabla +=	'							</table>';
					tabla +=	'						</th>';
					tabla +=	'						<th colspan="2" rowspan="2">';
					tabla +=	'							<table style="width:100%;">';
					tabla +=	'									<tr colspan="2">';	
					tabla +=	'										<td style="text-align:center;color:#fff;" colspan="2">  Locacion </td>';
					tabla +=	'								    </tr>';
					tabla +=	'								<tr colspan="2">';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Pais  </td>';
					tabla +=	'										<td style="text-align:center;color:#fff;"> Ciudad </td>';
					tabla +=	'									</tr>';
					tabla +=	'							</table>';
					tabla +=	'						</th>';
					tabla +=	'					</tr>';
					tabla +=	'				</thead>';
							
					for (var i = 0; i < respuesta.length; i++) 
		            {
		                tabla+='<tr>';
		                tabla+='<td>'+respuesta[i]["id"]+'</td>';
		                tabla+='<td>'+respuesta[i]["slogan"]+'</td>';
		                tabla+='<td>'+respuesta[i]["size"]+'</td>';
		                tabla+='<td>'+respuesta[i]["price"]+'</td>';
		                tabla+='<td>'+respuesta[i]["color"]+'</td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["name"]+'</td>';
		                tabla+='<td><img src="'+respuesta[i]["manofacturer"]["logo"]+'"></img></td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["location"]["country"]+'</td>';
		                tabla+='<td>'+respuesta[i]["manofacturer"]["location"]["city"]+'</td>';	                
		                tabla+='</tr>';  
		            }
					
					tabla += '</table>';
					
		            $("#tabladatos").html(tabla);
				})
				 
				
			}

function agregar()
{

	var pagina="administrarRemeras.php";

				var id=$("#_id").val();
				var slogan=$("#slogan").val();
				var tamano=$("#tamano").val();
				var price=$("#price").val();
				var color=$("#color").val();
				var nombre=$("#nombre").val();
				var country=$("#country").val();
				var city=$("#city").val();

				var logo="https://robohash.org/authicperferendis.bmp?size=50x50&set=set1";

				var objeto={"id":id,"slogan":slogan,"size":tamano,"price":price,"color":color,"manofacturer":{"name":nombre,"logo":logo,"location":{"country":country,"city":city}}}
				$.ajax({
					url: pagina,					
					type: 'POST',
					data: {"quehago":"agregarRemera","objeto":objeto},
					dataType: "text",
					async: true,
				})
				.done(function (respuesta){								

					Mostrar();
				})

}


function Eliminar(idRecibido)
{

	var pagina="administrarRemeras.php";

				var id=idRecibido;

				$.ajax({
					url: pagina,					
					type: 'POST',
					data: {"quehago":"Eliminar","id":id},
					dataType: "text",
					async: true,
				})
				.done(function (respuesta){								

					Mostrar();

				})

}


function Modificar(idRecibido)
{
	var pagina="administrarRemeras.php";
				
				var id=idRecibido;

				$.ajax({
					url: pagina,					
					type: 'POST',
					data: {"quehago":"traerDatos","id":id},
					dataType: "json",
					async: true,
				})
				.done(function (respuesta){	
					
				$("#id").val(respuesta["id"]);
				$("#slo").val(respuesta["slogan"]);
				$("#tam").val(respuesta["size"]);
				$("#pri").val(respuesta["price"]);
				$("#col").val(respuesta["color"]);
				$("#nom").val(respuesta["manofacturer"]["name"]);
				$("#count").val(respuesta["manofacturer"]["location"]["country"]);
				$("#cit").val(respuesta["manofacturer"]["location"]["city"]);
				$("input[name=oculto]").val(respuesta["id"]);

				})

}

function modificarObjeto()
{

	var pagina="administrarRemeras.php";

				var id=$("#id").val();
				var slogan=$("#slo").val();
				var tamano=$("#tam").val();
				var price=$("#pri").val();
				var color=$("#col").val();
				var nombre=$("#nom").val();
				var country=$("#count").val();
				var city=$("#cit").val();
				var id_remera=$("input[name=oculto]").val();
				var logo="https://robohash.org/authicperferendis.bmp?size=50x50&set=set1";

				var objeto={"id":id,"slogan":slogan,"size":tamano,"price":price,"color":color,"manofacturer":{"name":nombre,"logo":logo,"location":{"country":country,"city":city}}};
				$.ajax({
					url: pagina,					
					type: 'POST',
					data: {"quehago":"modificarRemera","objeto":objeto,"idOculto":id_remera},
					dataType: "text",
					async: true,
				})
				.done(function (respuesta){								

					$("#id").val("");
					$("#slo").val("");
					$("#tam").val("");
					$("#pri").val("");
					$("#col").val("");
					$("#nom").val("");
					$("#count").val("");
					$("#cit").val("");
					$("input[name=oculto]").val("");
					Mostrar();
				})

}