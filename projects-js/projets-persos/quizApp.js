

let questions = [
    {
        'question': 'Quelle est la capitale de la France?',
        'reponses': ['Paris', 'Londres', 'Berlin', 'Madrid'],
        'bonneReponse': 'Paris'
    },
    
    {
        'question': 'Quel est le plus grand océan du monde?',
        'reponses': ['Atlantique', 'Pacifique', 'Indien', 'Arctique'],
        'bonneReponse': 'Pacifique'
    }
]

function afficherQuestions(questions){
    //* declarer un aleatoire
    const indexQuestion = Math.ceil(Math.random()*2);
    document.write(indexQuestion);

    //* recuperer une question aleatoirement
    let question = questions[indexQuestion];

    //* afficher une question et ses reponses
    document.write(question['question'], "<br>");
    document.write("Reponses: <br>")
    for (i = 0; i < question['reponses'].length; i++){
        document.write(`${i+1}. ${question['reponses'][i]} <br>`);
    }

}

afficherQuestions(questions);