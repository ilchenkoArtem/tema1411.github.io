<?php

$recepient = "shoschoooool@gmail.com";
$sitename = "Shoschool";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["comment"]);
$email = trim($_POST["mail"]);
$services = trim($_POST["whence"]);

$message = "Имя: $name \nТелефон: $phone \nТекст: $text \nEmail: $email \nServices: $services";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");