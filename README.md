# ⚽ BetBall

<p>
O software corresponde a um sistema de apostas esportivas, o qual pode ser acessado através de dispositivos móveis e desktop. O objetivo central é permitir aos usuários visualizar jogos de futebol previamente cadastrados e escolher uma partida disponível de sua preferência para realizar uma aposta no jogo vencedor.  Além de fazer o pagamento das apostas, deverá ser possível comprar saldo, sacar o valor disponível em conta e gerar relatórios financeiros. 
</p>

# 📌 Sumário

<ul>
    <li>Como colaborar?</li>
</ul>
<ol> 
    <li>Clone o repositório</li>           
    <li> <a href="#">Crie o ambiente virtual</a></li>           
    <li>Instale o MySQL Workbench</li>      
    <li>Ative o ambiente virtual criado</li>      
    <li>Instale as dependências</li>      
</ol>

# Windows

<div id="ambiente-virtual">

<ol>
    <li>1. Cria um ambiente virtual:</li>

    python -m venv .nome-do-ambiente

</ol>
<ol>
    <li>2. Ativa o ambiente virtual:</li>

    .nome-do-ambiente/Scripts/activate para ativar o ambiente
    
</ol>
<ol>
    <li>3. Instala dependências:</li>

    pip install -r requirements.txt
</ol>
<ol>
    <li>4. Rodando API:</li>

    uvicorn main:app --reload
</ol>

</div>