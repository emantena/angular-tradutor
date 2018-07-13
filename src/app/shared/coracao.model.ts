export class Coracao {
    public cheio: boolean;
    public urlCoracaoCheio: string;
    public urlCoracaoVazio: string;

    constructor(
        cheio: boolean,
        urlCoracaoCheio: string = '/assets/coracao_cheio.png',
        urlCoracaoVazio: string = '/assets/coracao_vazio.png'
    ) {
        this.cheio = cheio;
        this.urlCoracaoCheio = urlCoracaoCheio;
        this.urlCoracaoVazio = urlCoracaoVazio;
    }

    public exibeCoracao(): string {
        if (this.cheio) {
            return this.urlCoracaoCheio;
        }

        return this.urlCoracaoVazio;
    }
}
