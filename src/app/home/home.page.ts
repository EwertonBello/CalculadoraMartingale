import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	public rendimento1: number = 0;
	public perda1: number = 0;
	public adicional1: number = 0;	
	public resultado1;	

	public banca: number = 0;
	public rendimento2: number = 0;
	public lucro: number = 0;
	public resultado2;	

	constructor() {}

	calcularSobrePerda() 
	{
		let resultado: number = (this.perda1+this.adicional1)/(this.rendimento1/100);
		this.resultado1 = resultado
	}  

	calcularMartingales() 
	{
    let valor_inicial = (this.lucro)/(this.rendimento2/100);

    let cont: number = 1
    let total_martingale = valor_inicial
    let niveis: string = "Investimento "+cont+": "+valor_inicial
	    while(this.banca >= total_martingale) 
	    {  	
	    	cont += 1
	    	let nivel_atual = ((total_martingale+this.lucro)/(this.rendimento2/100))
	        total_martingale += nivel_atual
	        if (total_martingale <= this.banca)
	            niveis += "\nInvestimento "+cont+": "+nivel_atual
	    }

	    this.resultado2 = niveis
	}
}
