<?php 
	$pageName = "Listar Decks";
    $pageSlug = "listar-decks";
	include 'header.php';
?>

<!-- MENU GERAL -->
<nav class="menu-pri">
    <a href="javascript:void();" class="l-men-pri"><span class="icone">ICONE</span></a>
    span.icon-logout
</nav>

<!-- APLICATION SCREEN -->
<section class="ctn-app">

    <!-- TOPO -->
    <header class="top-bar">
        <button class="b-menu-pri" id="b-menu-pri"></button>
        <h1 class="tit-page">Meus Decks</h1>
        <button class="b-add-deck" id="new-deck"></button>
    </header>

    <!-- CORPO -->
    <section class="body-app">
        <ul class="deck-list" id="deck-list">
            <li class="deck-item">
                <a href="" class="l-folder">
                    <span class="i-folder"></span>
                    <span class="tit-deck">Nome da Pasta</span>
                    <span class="info-small">00 decks |</span>
                    <info class="info-small">00 pts.</info>
                </a>
                <button class="b-hyde-options"></button>
                <button class="b-show-options"></button>
                <div class="more-options">
                    <span class="icon-list"></span>
                    <span class="icon-pencil"></span>
                    <span class="icon-trash"></span>
                    <span class="icon-popup"></span>
                    <span class="icon-arrow"></span>
                </div>
            </li>

            <li class="deck-item">
                <a href="" class="l-deck">
                    <span class="i-deck"></span>
                    <span class="tit-deck">Nome do Deck</span>
                    <span class="info-small">00 cards |</span>
                    <info class="info-small">00 pts.</info>
                </a>
                <button class="b-hyde-options"></button>
                <button class="b-show-options"></button>
                <div class="more-options">
                    <span class="icon-list"></span>
                    <span class="icon-pencil"></span>
                    <span class="icon-trash"></span>
                    <span class="icon-popup"></span>
                    <span class="icon-arrow"></span>
                </div>
            </li>

            <li class="deck-item">
                <a href="" class="l-deck">
                    <span class="i-deck"></span>
                    <span class="tit-deck">Nome do Deck</span>
                    <span class="info-small">00 cards |</span>
                    <info class="info-small">00 pts.</info>
                </a>
                <button class="b-hyde-options"></button>
                <button class="b-show-options"></button>
                <div class="more-options">
                    <span class="icon-list"></span>
                    <span class="icon-pencil"></span>
                    <span class="icon-trash"></span>
                    <span class="icon-popup"></span>
                    <span class="icon-arrow"></span>
                </div>
            </li>
        </ul>
    </section>

<!-- span.icon-popup
span.icon-search
span.icon-earth -->

</section>

<?php include 'footer.php'; ?>