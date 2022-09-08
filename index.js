const inputProduct = document.getElementById('ipt-product');
const inputQtd = document.getElementById('ipt-qtd');
const lista = document.getElementById('lista');

function adicionar() {
    let produto = {
        name: null,
        qtd: null
    };

    produto.name = inputProduct.value;
    produto.qtd = inputQtd.value;

    // validando para que o nome seja preenchido
    if (produto.name == null || produto.name == '') {
        alert("Por favor, informe o nome do produto.");

        // dando foco no input do nome
        inputProduct.focus();
        return;
    }

    const novaLinha = gerarItem(produto);
    lista.appendChild(novaLinha);
    
    limpar();
}

function limpar() {
    inputProduct.value = '';
    inputQtd.value = 1;
}

function gerarItem (produto) {

    const items = document.getElementsByClassName('product-item');
    const id = items.length + 1;

    const elementTR = document.createElement('tr');
    elementTR.classList = ['product-item'];
    elementTR.id = `item-${id}`;


    // bloco para criação da informação do ID
    const elementTdId = document.createElement('td');
    elementTdId.innerText = id;
    elementTR.appendChild(elementTdId);
    
    // bloco para criação da informação do nome
    const elementTdProduct = document.createElement('td');
    elementTdProduct.innerText = produto.name;
    elementTR.appendChild(elementTdProduct);

    // bloco para criação da informação da qtd
    const elementTdQtd = document.createElement('td');
    elementTdQtd.innerText = produto.qtd;
    elementTR.appendChild(elementTdQtd);

    // bloco para criação das ações
    const elementTdActions = document.createElement('td');

    const btnRemove = document.createElement('button');
    btnRemove.innerText = 'Remover';
    btnRemove.onclick = removerItem;
    btnRemove.id = `delete-item-${id}`;

    elementTdActions.appendChild(btnRemove);

    elementTR.appendChild(elementTdActions);

    return elementTR;
}

function removerItem () {
    const target = this.id.replace('delete-', '');
    
    const elements = document.getElementsByClassName('product-item');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id == target){
            lista.removeChild(elements[i]);
            return;
        }
    }
}