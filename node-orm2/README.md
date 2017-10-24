# Bilan

Node-ORM partait très bien, le système pour mettre en place la connexion était plus simple qu'avec Bookshelf (qui doit instancier Knex avant). Il faut là aussi définir ses models avant ce qui n'est pas génant (j'ai juste eu à copier coller ce que j'avais fait pour Bookshelf et j'ai juste changé la définition du model)

Là où ça se complique, c'est qu'il n'y a quasi aucune doc.
Tout ce qu'on a c'est le [Readme](https://github.com/dresende/node-orm2) et le [wiki github](https://github.com/dresende/node-orm2/wiki).
Aucune définition exacte des méthodes d'un objet, j'ai été obligé de print les méthodes pour savoir quoi appeler.
En plus, les fonctions ne sont pas logiques. Quand on utilise une fonction `set`, on s'attend à ce qu'elle retourne l'objet pour la chainer avec un save après par exemple. Et bien ce n'est pas le cas...

Pour finir, la lib n'utilise pas les promesses natives mais les promesses [Bluebird](http://bluebirdjs.com/docs/api-reference.html) ce qui ajoute une dépendance inutile

Au niveau des protocoles, les autres gèrent par exemple mysql et mysql2 (axé sur les perfs), node-orm ne gère pas mysql2.
Autre truc étrange, la lib gère MongoDB.... mais en node 6+... mais pas en node 8... et il manque les features d'aggregation. Bon en bref l'orm ne gère pas mongo :D

Point positif, l'ajout de plugins :
- [node-orm-mysql-fts](http://dresende.github.io/node-orm-mysql-fts)
- [node-orm-paging](http://dresende.github.io/node-orm-paging)
- [node-orm-transaction](http://dresende.github.io/node-orm-transaction)
- [node-orm-timestamps](http://github.com/SPARTAN563/node-orm-timestamps)
- [node-migrate-orm2](https://github.com/locomote/node-migrate-orm2)
- ...

Là aussi les validations sont embarquées dans la définition du model, mais il est possible d'ajouter des fonctions customs. Par exemple :

    ...
    fullName: function () {
      return this.name + ' ' + this.surname;
    }
    ...

C'est en quelque sorte des "computed methods" (les devs Vue connaissent ;) ;).

---

Ces statistiques sont à joindre avec Knex qui est la base SQL de cet ORM :
- NPM : 6500+ téléchargements en un mois
- Github : 2600+ stars
- 55 contributeurs
- 1500 commits
- 209 issues
- Date de 2012 (le projet a eu beaucoup de commits de 2012 à mi 2014 et ensuite a eu peu beaucoup moins d'implication)
