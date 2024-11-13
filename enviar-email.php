<?php
header('/');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    $to = "";
    $subject = "Nova mensagem do formulário de contato";
    $body = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        header('/');
        echo "Mensagem enviada com sucesso!";
    } else {
        header('/');
        echo "Erro ao enviar mensagem.";
    }
}



