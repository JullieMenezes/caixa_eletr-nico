function main (){
    
	printf("-> Quanto deseja sacar? R$");
    printf("Caixa Eletronico.\n\nNotas Disponiveis 100,50,10,.\n");
    printf("Valor de Quantia incorreto. Verifique as Notas Disponiveis.\n");
    scanf("%.f", valor);    

    while(valor>=100){
        valor=valor-100;
        n100=n100+1;
    
    }
    while(valor>=50){
        valor=valor-50;
        n50=n50+1;
    }
    while(valor>=10){
        valor=valor-10;
        n10=n10+1;
    }
}
    
    printf("txtSaque:\n");
    printf("%d nota(s) de R$ 100.00\n",n100);
    printf("%d nota(s) de R$ 50.00\n",n50);
    printf("%d nota(s) de R$ 10.00\n",n10);
   
    
    return 0;