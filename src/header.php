<?php include 'Lib.php'; ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Tongue</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="images/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="css/estilo.css">

    <!--[if lt IE 9]>
        <script src="http://www.sinteronibus.com.br/wp-content/themes/sinteronibus/js/html5shiv.js"></script>
    <![endif]-->

    <!-- SEO -->
        <meta name="description" content="Descrição"/>
        <link rel="canonical" href="http://www.exemplo.com.br/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="exemplo de título para social media" />
        <meta property="og:description" content="descrição para social media" />
        <meta property="og:url" content="http://www.exemplo.com.br/" />
        <meta property="og:site_name" content="Luz.vc" />
    <!-- /SEO -->

    <!-- CROSS BROWSER SCRIPT -->
    <script src="http://polyfill.io"></script>
</head>
<body>

<!-- MENU GERAL -->
<nav class="menu-pri">
    <a href="javascript:void();" class="l-men-pri"><span class="icone">ICONE</span></a>
    span.icon-logout
</nav>

<!-- TOPO -->
<header class="top-bar">
    <?php 
        //BOTAO SUPERIOR ESQUERDO
        switch ($pageSlug) {
            case 'read-decks':
                ?> <button class="b-menu-pri" id="b-menu-pri"></button> <?php
                break;
            
            default:
                ?> <button class="b-go-back" id="b-go-back"></button> <?php
                break;
        }
    ?>
    <h1 class="tit-page"><?php echo $pageName; ?></h1>
    <?php
        //BOTAO SUPERIOR DIREITO
        switch ($pageSlug) {
            case 'read-decks':
                echo '<a href="edit-deck" class="l-add-deck" id="l-add-deck"></a>';
                break;
            
            default:
                echo '';
                break;
        }
    ?>
</header>


















