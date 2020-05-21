# Recuperação de Senha

**RF**

- O user deve poder recuperar sua senha informando o seu e-mail;
- O user deve receber um e-mail com instruções de recuperação de senha;
- O user deve poder resetar sua senha.

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (background job)

**RN**

- O link enviado por e-mail para resetar a senha, deve expirar em 2h;
- O user precisa confirmar a nova senha ao resetar sua senha.

# Atualização do perfil

**RF**

- O user deve poder atualizar o seu nome, e-mail e senha.

**RN**

- O user não pode alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senha, o user deve informar a senha antiga;
- Para atualizar sua senha, o user deve confirmar a senha antiga;


# Painel do prestador

# Agendamento de serviços

**RF**

- O user deve poder listar todos os prestadores de serviços cadastrados;
- O user deve poder listar os dias de um mês com horário disponível

**RNF**

**RN**