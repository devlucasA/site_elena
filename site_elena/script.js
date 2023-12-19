// Funções para exibir e fechar o modal de doação
function openDonationModal() {
    document.getElementById('donationModal').style.display = 'block';
}

function closeDonationModal() {
    document.getElementById('donationModal').style.display = 'none';
}

// Função para rolar para a próxima seção
document.querySelector('.scroll-down').addEventListener('click', function() {
    document.querySelector('#game-details').scrollIntoView({
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typed-text');
    const text = "fsfsdfs";
    let index = 0;

    function typeText() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 50); // Ajuste o valor do timeout conforme necessário
        }
    }

    typeText();
});