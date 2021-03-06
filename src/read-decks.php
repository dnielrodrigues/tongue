<?php 
	$pageName = "Listar Decks";
    $pageSlug = "read-decks";
	include 'header.php';
?>

<!-- APLICATION SCREEN -->
<section class="ctn-pages">

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
                    <button class="b-listar"></button>
                    <button class="b-editar"></button>
                    <button class="b-deletar"></button>
                    <button class="b-duplicar"></button>
                    <button class="b-mover"></button>
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
                    <button class="b-listar"></button>
                    <button class="b-editar"></button>
                    <button class="b-deletar"></button>
                    <button class="b-duplicar"></button>
                    <button class="b-mover"></button>
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
                    <button class="b-listar"></button>
                    <button class="b-editar"></button>
                    <button class="b-deletar"></button>
                    <button class="b-duplicar"></button>
                    <button class="b-mover"></button>
                </div>
            </li>
        </ul>
    </section>

<!-- span.icon-popup
span.icon-search
span.icon-earth -->

</section>

<?php include 'footer.php'; ?>