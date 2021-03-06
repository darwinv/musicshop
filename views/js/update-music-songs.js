/*
* 2007-2016 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2016 PrestaShop SA
*  @version  Release: $Revision$
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/


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

var $myMP3 = $("#musics");
$myMP3.sortable({
	opacity: 0.6,
	cursor: "move",
	update: function() {
	var order = $(this).sortable("serialize") + "&action=updateMusicPosition";
	$.ajax({
					 data: order,
					 type: 'POST',
					 url: '../../ajax_roanjamusicshop'
			 });
	}
});
$myMP3.hover(function() {
	$(this).css("cursor","move");
},
function() {
	$(this).css("cursor","auto");
});



});
