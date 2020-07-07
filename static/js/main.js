const context = {
    title: 'Welcome to Musicon',
    body: 'Musicon is a budding musical storefront with a mission to share the joy of mus' +
            'ic. These magnificent auditory tools are designed with musical creators, like ' +
            'you, in mind. Hobbyists, beginners, and experts alike can appreciate the respl' +
            'endent sounds supplied by each and every instrument we carry. Join us in deliv' +
            'ering the euphoric vibrations of melodia to the citizens of the world!',
    instruments: [
        {
            image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/e' +
                    'lectronic-keyboard.png',
            name: 'Electronic Keyboard',
            description: 'A piano welcomed to the 21th century. Pianists celebrate the compact form fact' +
                    'or and the diversity of synthesized rhythms all in one masterful musical machi' +
                    'ne.',
            price: '$1,999.00',
            sale: '$1,699.89'
        }, {
            image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/e' +
                    'lectric-guitar.png',
            name: 'Electric Guitar',
            description: 'Join the legends of the \'50s and \'60s when the marriage of guitar and electr' +
                    'icity created the most influential instrument of a generation. Note: picks sol' +
                    'd separately.',
            price: '$599.99'
        }, {
            image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/b' +
                    'ass-guitar.png',
            name: 'Bass Guitar',
            description: 'Experience the embodiment of funkadelic frequencies that is the bass guitar. L' +
                    'et the deep low notes of the bass guitar resonate with heartbeats everywhere.',
            price: '$624.99'
        }, {
            image: 'https://s3.amazonaws.com/codecademy-content/courses/learn-handlebars/musicon/d' +
                    'rum-kit.png',
            name: 'Drum Kit',
            description: 'Ever thought, "one instrument isn\'t enough?" Find an answer in the drum kit. ' +
                    'Coordinate a collections of drums and cymbals to dictate the rhythm of musical' +
                    ' masterpiece.',
            price: '$649.00',
            sale: '$349.00'
        }
    ]
};

const templateElement = document.getElementById('templateHB');

const templateSource = templateElement.innerHTML;

const template = Handlebars.compile(templateSource);

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;