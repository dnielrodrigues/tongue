<?php
    $pageName = "Novo Deck";
    $pageSlug = "criar-deck";
    include 'header.php';
?>

<!-- FORMULÁRIO EDITAR / CRIAR - DECKS / FOLDERS -->
<form action="edit-deck.php" class="f-edit-deck">

    <!-- ABAS -->
    <input type="radio" name="sex" value="male">Editar Deck
    <input type="radio" name="sex" value="female">Editar Pasta

    <!-- PARA DECK -->
    <div class="ctn-tab-edit-deck">
        <input type="text" class="c-title" placeholder="Nome do Deck">
        <textarea name="" id="" cols="30" rows="10" class="t-description" placeholder="Descrição"></textarea>
        <button class="b-save" id="b-save">Salvar Deck</button>
    </div>

    <!-- PARA FOLDER -->
    <div class="ctn-tab-edit-folder">
        <input type="text" class="c-title" placeholder="Nome da Pasta">
        <textarea name="" id="" cols="30" rows="10" class="t-description" placeholder="Descrição"></textarea>
        <button class="b-save" id="b-save">Salvar Pasta</button>
    </div>
</form>

<?php include 'footer.php'; ?>