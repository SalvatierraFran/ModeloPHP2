<?php
$quehago=isset($_POST["quehago"])?$_POST["quehago"]:null;

switch ($quehago) 
{
	case 'Mostrar':

			$datos=file_get_contents("archivos/remeras.json");
			$encodato=json_encode(json_decode($datos));

			echo $encodato;

		break;
	
	case 'traerRemerasFiltradas':
	
			$datoObtenido=$_POST["dato"];

			$datos=file_get_contents("archivos/remeras.json");

			$decodato=json_decode($datos,true);

			$nuevoArr=array();

			for ($i=0; $i < count($decodato); $i++) 
			{ 
				if (strcasecmp($decodato[$i]["manofacturer"]["location"]["country"], $datoObtenido)==0) 
				{
					array_push($nuevoArr, $decodato[$i]);
				}
			}

			$encodato=json_encode($nuevoArr);

			echo $encodato;

		break;

	case 'traerRemerasFiltradasPorCampo':
	
			$datoObtenido=$_POST["dato"];
			$opcion=$_POST["opcion"];

			$datos=file_get_contents("archivos/remeras.json");

			$decodato=json_decode($datos,true);

			$nuevoArr=array();

			switch ($opcion) 
			{
				case 'Tamano':
							for ($i=0; $i < count($decodato); $i++) 
							{ 
								if (strcasecmp($decodato[$i]["size"], $datoObtenido)==0) 
								{
									array_push($nuevoArr, $decodato[$i]);
								}
							}
					break;
				
				case 'Color':

						for ($i=0; $i < count($decodato); $i++) 
							{ 
								if (strcasecmp($decodato[$i]["color"], $datoObtenido)==0) 
								{
									array_push($nuevoArr, $decodato[$i]);
								}
							}
					
					break;

				case 'Pais':

						for ($i=0; $i < count($decodato); $i++) 
						{ 
							if (strcasecmp($decodato[$i]["manofacturer"]["location"]["country"], $datoObtenido)==0) 
							{
								array_push($nuevoArr, $decodato[$i]);
							}
						}

					break;
			}

			$encodato=json_encode($nuevoArr);

			echo $encodato;

		break;

		case 'agregarRemera':

			$objeto=$_POST["objeto"];

			$datos=file_get_contents("archivos/remeras.json");

			$deco=json_decode($datos,true);

			array_push($deco, $objeto);

			$puntero=fopen("archivos/remeras.json", "w");

			$encodato=json_encode($deco);

			fwrite($puntero, $encodato);

			fclose($puntero);

			echo "se guardo";

		break;

	case 'Eliminar':

			$id=$_POST["id"];

			$datos=file_get_contents("archivos/remeras.json");

			$deco=json_decode($datos,true);

			for ($i=0; $i < count($deco); $i++) 
			{ 
				if ($deco[$i]["id"]==$id) 
				{
					array_splice($deco, $i,1);
					break;
				}
			}

			$puntero=fopen("archivos/remeras.json", "w");

			$encodato=json_encode($deco);

			fwrite($puntero, $encodato);

			fclose($puntero);

			echo "se Elimino";

		break;


		case 'traerDatos':

			$objeto=$_POST["id"];

			$datos=file_get_contents("archivos/remeras.json");

			$deco=json_decode($datos,true);

			$objetoEnviar=null;

			for ($i=0; $i < count($deco); $i++) 
			{ 
				if ($deco[$i]["id"]==$objeto) 
				{
					$objetoEnviar=json_encode($deco[$i]);
					break;
			 	}			
			}

			echo $objetoEnviar;

		break;

		case 'modificarRemera':

			$objeto=$_POST["objeto"];
			$id_oculto=$_POST["idOculto"];

			$encoobjeto=json_decode(json_encode($objeto));			

			$datos=file_get_contents("archivos/remeras.json");

			$deco=json_decode($datos,true);

			for ($i=0; $i < count($deco); $i++) 
			{ 
				if ($deco[$i]["id"]==$id_oculto) 
				{
					//$deco[$i]=$objeto;
					array_splice($deco, $i,1,array($objeto));
					break;
				}
			}

			$puntero=fopen("archivos/remeras.json", "w");

			$encodato=json_encode($deco);

			fwrite($puntero, $encodato);

			fclose($puntero);



		break;		
}

?>