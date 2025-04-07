export class EmailServico {
  enviarEmail(to: string, subject: string, body: string): void {
    console.log(
      `Enviando email para ${to} com assunto "${subject}" e corpo "${body}"`
    );
  }
}
