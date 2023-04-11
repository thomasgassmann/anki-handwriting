import genanki

model = genanki.Model(
    1607392319,
    'Hanzi-Writing',
    fields=[
        {'name': 'Hanzi'},
    ],
    css=open('src/styles.css').read(),
    templates=[
        {
            'name': 'Writing',
            'qfmt': open('dist/front.html').read(),
            'afmt': open('dist/back.html').read()
        },
    ])


deck = genanki.Deck(
    2059400110,
    'Country Capitals')

deck.add_model(model)

deck.add_note(genanki.Note(
    model=model,
    fields=['你']))

print('Writing apkg...')
genanki.Package(deck).write_to_file('output.apkg')
