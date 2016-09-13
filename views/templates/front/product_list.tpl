

<h1>Product_list.tpl</h1>
<div class="music-container">
{assign var="assoc_increment" value=1}
{foreach from=$associated_mp3 item=items}
    <p class="music_shop_item">
        <a data-href="{$modules_dir}prestamusicshop/mp3/{$items.mp3_name}" title="{$items.author}-{$items.mp3_title}" class="sm2_button">{$items.author}-{$items.mp3_title}</a>
        <span class="music_title">{$assoc_increment}. {$items.author|truncate:10}-{$items.mp3_title|truncate:10}</span>
    </p>
{$assoc_increment = $assoc_increment + 1}
{/foreach}

</div>
