# Bilan

Librairie plus jeune que les autres, TypeORM a l'avantage d'avoir été créé avec de nouvelles fonctionnalités de base.
TypeORM est écrit en Typescript et a une part de documentation en TS mais cohabite avec du javascript et contrairement à la doc d'Angular par exemple, il y a de vrais exemples en JS natif (ES5-6-7). Il y a meme des repos d'exemple ce qui est trèèès sympathique.

La lib possède aussi une vraie doc avec pas mal de choses, on s'y retrouve assez facilement (en plus avec le typage du Typescript, on sait avec quoi on travaille).

Point positif, la déclaration de la table et l'entité sont vraiment deux choses distinctes. L'avantage, c'est que pour utilisé le model sous forme de class, c'est aussi simple que Sequelize, sans tout embarqué en une fois. On suit vraiment la logique "une classe, un but".

La connexion est trèèès simple à mettre en place (une promesse et voilà).
Il existe plusieurs manières de sauvegarder ; directement avec l'instance de base de données ou alors grace au repository (la représentation de la table, coucou Symfony).

    // connection est la connexion à la DB
    let user = new User(my_data)
    try {
      await connection.manager.save(user) // peut etre un tableau d'objets
    } catch (e) {
      console.log(e)
    }

ou

    // connection est la connexion à la DB
    let user = new User(my_data)
    let repo = connection.getRepository(User)
    try {
      await repo.save(user)
    } catch (e) {
      console.log('Error update', e)
    }


Il existe [une plétore d'exemple](https://github.com/typeorm/typeorm/tree/master/sample)

Le README est bien garni aussi (c'est notamment là qu'on peut trouver les repos d'exemple avec TypeORM & JS ou des implémentations comme TypeORM & Express).

TypeORM possède aussi des extensions, cf le bas du [README](https://github.com/typeorm/typeorm).

---

- NPM : 28000+ téléchargements en un mois
- Github : 3400+ stars
- 74 contributeurs
- 1700 commits
- 110 issues
- Date de Février 2016
