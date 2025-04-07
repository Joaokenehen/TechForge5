import { EmailServico } from "./EmailServico";
import { Notificador } from "./Notificador";

export class EmailAdaptador implements Notificador {
  private emailServico: EmailServico;
  private emailDestino: string;

  constructor(emailServico: EmailServico, emailDestino: string) {
    this.emailServico = emailServico;
    this.emailDestino = emailDestino;
  }

  sendNotificacao(notificacao: string): void {
    this.emailServico.sendEmail(this.emailDestino, "Notificação", notificacao);
  }
}
