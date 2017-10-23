# Bilan

Bookshelf est plus verbeux pour l'initialisation, mais du coup moins magique. 
Par exemple avec Sequelize, un simple

    myModel.sync()

permet de créer la table si elle n'existe pas, et il se sert des attributs pour créer la table.

Avec Bookshelf il faut vraiment dire à quoi ressemble la table (plus proche du SQL). Mais j'ai plus ou moins automatisé la chose, il serait meme possible de setter les attributs à la classe et de se baser dessus pour créer la table, c'est tout à faire possible.
Il serait même possible d'avoir un système comme les migrations des frameworks MVC.

Autre différence, on se fiche du coté création ou update, il suffit de faire 

    myModel.set({ ... })

pour assigner les champs puis de faire un 

    myModel.save()

pour sauvegarder l'objet, que ça soit un nouveau ou une update.
Je trouve que c'est un gros plus, pas besoin d'avoir soit un create soit un update.

Dans ce prototype, je ne l'ai pas intégré, mais il est possible dans un model d'avoir :

    tags: function() {
      return this.belongsToMany(Tag);
    }
    
pour avoir sous forme d'attributs les objets liés

---
Dans le cas où on veut valider les models, c'est un plugin à part. La librairie possède d'ailleurs plusieurs extensions, voici quelques liens :
- [bookshelf-json-columns](https://www.npmjs.com/package/bookshelf-json-columns)
- [bookshelf-uuid](https://www.npmjs.com/package/bookshelf-uuid)
- [bookshelf-paranoia](https://www.npmjs.com/package/bookshelf-paranoia)
- [hapi-bookshelf-serializer](https://www.npmjs.com/package/hapi-bookshelf-serializer)
- [chai-bookshelf](https://www.npmjs.com/package/chai-bookshelf)
- [bookshelf-validate](https://www.npmjs.com/package/bookshelf-validate)
- ...

---
Bookshelf est aussi basé sur Knex qui est une couche SQL simplifiée. Il est donc possible d'utiliser la couche plutot haut niveau (ORM) avec Bookshelf ou d'utiliser des éléments de Knux si un besoin de perf ou un besoin précis est nécessaire.

---

En terme de stats :
- NPM : 69k téléchargements en un mois
- Github : 4400+ stars
- 119 contributeurs
- 1200 commits
- 228 issues
- Date de 2013
- A été "abandonné" par les créateurs après plusieurs années de support mais a été légué à une toute nouvelle équipe qui va pousser de nouvelles choses en fonction des besoins utilisateurs (basés sur les issue) ([source](https://github.com/bookshelf/bookshelf/issues/1600))

Ces statistiques sont à joindre avec Knex qui est la base SQL de cet ORM :
- NPM : 333k téléchargements en un mois
- Github : 5400+ stars
- 208 contributeurs
- 1850+ commits
- 431 issues
- Date de 2013
