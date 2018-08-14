<?php

$recepient = "info@mossproduction.com";
$sitename = "MOSS";
$c = true;
foreach ( $_POST as $key => $value ) {
    if ($value != "") {
        $message .= "\n$key: $value";
    }
}
$message = $message;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>