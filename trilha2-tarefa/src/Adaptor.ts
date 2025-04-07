import { EmailServico } from "./EmailServico";
import { Notificador } from "./Notificador";
import { EmailAdaptador } from "./EmailAdaptador";

const emailServico = new EmailServico();
const notificacao: Notificador = new EmailAdaptador(
  emailServico,
  "usuario@exemplo.com"
);

notificacao.sendNotificacao("Esta é uma notificação de teste.");
