<?php

$recepient = "yexifuf@travala10.com";
$sitename = "MOSS";

$name = trim($_POST["name"]);
$text = trim($_POST["comment"]);
$email = trim($_POST["email"]);


$message = "Name: $name \nComment: $text \nEmail: $email;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");