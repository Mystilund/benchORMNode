# Bilan

Sequelize est une grosse boite noire avec beaucoup de fonctionnalités mais qui fait aussi un peu de magie.

Le model embarque beaucoup de choses, que ça soit la description de la table, les opérations sur la table/sur les champs ou les validations, mais étrangement il n'embarque pas les associations. Il faut faire un bout de code à part :

    const Player = this.sequelize.define('player', {/* attributes */});
    const Team  = this.sequelize.define('team', {/* attributes */});

    Player.belongsTo(Team)

Il n'y a pas comparé à Bookshelf de supers plugins (il y en a quelques un mais ça m'a pas fait d'effet wouaw). Ca s'explique parce que Sequelize a déjà une tonne de choses embarqué dans sa lib.

Il est possible de remplir un model et de le save comme dans Bookshelf mais la fonction n'est pas très parlante :

    myModel.build({ ... })
    myModel.save()

Comme beaucoup de choses sont abstraites par la librairie, cet ORM est moins verbeux (comparé à sa doc qui est TROP grosse).

---

- NPM : 721k téléchargements en un mois
- Github : 11600+ stars
- 614 contributeurs
- 7700+ commits
- 246 issues
- Date de 2010
