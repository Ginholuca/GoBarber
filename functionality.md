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

**RF**

- O user deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber um notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Sockert.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;

# Agendamento de serviços

**RF**

- O user deve poder listar todos os prestadores de serviços cadastrados;
- O user deve poder listar os dias de um mês com horário disponível de um prestador;
- O user deve poder listar horários disponíveis em um dia específico de um prestador;
- O user deve poder realizar um novo agendamento com um prestador.

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar uma hora;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17h);
- O user não pode agendar em um horário já ocupado;
- O user não pode ajudar em umm horário que já passou;
- O user não pode agendar serviços consigo mesmo;