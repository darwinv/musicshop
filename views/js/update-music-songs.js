$(document).ready(function() {
	$('.update-nombres').click(function() {
  var ruta=$('#musicsContent').data('urlaux');
  var idmusica=$(this).data('idcancion');
  var nombre_cancion=$('.nomb_cancion_'+idmusica).val();
  var nombre_autor=$('.nomb_autor_'+idmusica).val();
  var nombre_genero=$('.nomb_genero_'+idmusica).val();
	var product_virtual=$('#virtual_product_'+idmusica).val();

//Split para sacar los datos y el archivo a ejecutar del getAdminLink
//dividiendo en variables

  var splitgeneral=ruta.split("?");//split para sacar archivo ej. index.php
  var archivo=splitgeneral[0];

  var splitcampos=splitgeneral[1].split("&"); //split para sacar campos

  var splitDatosController=splitcampos[0].split("="); //controlador
  var splitDatosToken=splitcampos[1].split("=");//token
  var splitDatosProduct=splitcampos[2].split("=");//Producto

  var controlador=splitDatosController[0];
  var controladorValor=splitDatosController[1];

  var token=splitDatosToken[0];
  var tokenValor=splitDatosToken[1];

  var product=splitDatosProduct[0];
  var productValor=splitDatosProduct[1];

document.location.href = "index.php?controller=" + controladorValor + "&token="+tokenValor
+"&id_product="+productValor+"&configure=roanjamusicshop"+"&actualizarcancion="+idmusica
+"&cancion="+nombre_cancion+"&autor="+nombre_autor+"&genero="+nombre_genero+"&virtualproduct="+product_virtual;

});



});
