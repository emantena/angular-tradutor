import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
    public frases: Frase[] = FRASES;
    public instrucao = 'Traduza a frase';
    public resposta: string;
    public rodada = 0;
    public rodadaFrase: Frase;
    public progresso = 0;
    public tentativas = 3;
    @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.ObterRodada();
    }

    atualizaResposta(resposta: Event): void {
        this.resposta = (<HTMLInputElement>resposta.target).value;
    }

    verificarResposta(): void {
        if (this.rodadaFrase.frasePortugues === this.resposta) {
            this.rodada++;

            if (this.rodada === this.frases.length) {
                this.encerrarJogo.emit('vitoria');
                return;
            }

            this.ObterRodada();
            this.progresso += 100 / this.frases.length;
            return;
        }

        this.tentativas--;
        if (this.tentativas === -1) {
            this.encerrarJogo.emit('derrota');
        }
    }

    private ObterRodada(): void {
        this.rodadaFrase = this.frases[this.rodada];
        this.resposta = '';
    }

    ngOnInit() {}
}
