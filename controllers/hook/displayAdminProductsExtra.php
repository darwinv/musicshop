<?php
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
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/
class RoanjaMusicShopDisplayAdminProductsExtraController
{
	public function __construct($module, $file, $path)
	{
		$this->file = $file;
		$this->module = $module;
		$this->context = Context::getContext();
		$this->_path = $path;
	}

	public function run()
	{
 $virtual_products= RoanjaMusicShop::getVirtualProducts ();

    $musics = RoanjaMusicShop::getMusic();
//  $valores=$musics;
		// Build ajax url
$ajax_action_url =$this->context->link->getAdminLink('AdminModules', true);
$ajax_action_url = str_replace('index.php', 'ajax-tab.php',$ajax_action_url);
$action_url = $this->context->link->getAdminLink('AdminRoanjaMusicShop', true);

    foreach ($musics as $key => $music)
    {

      $musics[$key]['status'] = RoanjaMusicShop::displayStatus($music['id_music'], $music['active']);
      $associated_shop_ids = RoanjaMusic::getAssociatedIdsShop((int)$music['id_music']);
      if ($associated_shop_ids && count($associated_shop_ids) > 1)
        $musics[$key]['is_shared'] = true;
      else
        $musics[$key]['is_shared'] = false;
    }
$ui_path = Media::getJqueryUIPath('ui.sortable', 'base',true);
$urlScipt = array_pop($ui_path['js']);
$this->context->smarty->assign('path',$urlScipt);
		$this->context->smarty->assign('virtualproduct',$virtual_products);
		$this->context->smarty->assign('action_url', $action_url);
		$this->context->smarty->assign('ajax_action_url', $ajax_action_url);
		$this->context->smarty->assign('pc_base_dir', __PS_BASE_URI__.'modules/'.$this->module->name.'/');
    $this->context->smarty->assign(
      array(
        'id_product' => (int)Tools::getValue('id_product'),
        'link' => $this->context->link,
        'musics' => $musics,
        'music_baseurl' => $this->_path.'mp3/'
      )
    );

		return $this->module->display($this->file, 'list.tpl');
	}

}
