<?php
        $apiKey = "AIzaSyCk9_RSXaJN9ct-ESURPxi3agl3rY0aWFM"; // My personal API key. NOTE: Copy here API key. You can generate yours here https://console.developers.google.com/apis/
        $browserId = "000333518738124520541:hhchaiog79u"; // Not my personal browser key. NOTE: Copy here your browser ID. You can create a browser here https://cse.google.fr/cse/all
        $search = "rabbit"; // Here is your google search
        $url = "https://www.googleapis.com/customsearch/v1?key=".$apiKey."&cx=".$browserId."&q=".$search."&callback=hndlr&searchType=image";
?>

<!-- <script async src="https://cse.google.com/cse.js?cx=346f9534733624e36">
</script>
<div class="gcse-search"></div> 

$searchAPI = "AIzaSyCk9_RSXaJN9ct-ESURPxi3agl3rY0aWFM"-->