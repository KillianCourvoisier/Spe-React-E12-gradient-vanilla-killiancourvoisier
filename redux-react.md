# React et Redux

Pour relier React et Redux, on va utiliser une librairie qui s'appelle React-Redux. Cette librairie va nous offrir 2 façons distinctes de relier nos composants au state fourni par Redux.

Pour que notre app React ai accès au store de redux, je dois englober mon composant principal (App) dans le composant qui s'appelle Provider. Ce composant est fourni par react-redux, et attend que je lui donne en prop mon store. Grâce à ça, tous les composants à l'intérieur de mon App vont pouvoir se connecter au store.

![](Synthèse%20React%20Redux.jpg)

## Les hooks

React-Redux nous fourni des hooks que l'on peut utiliser directement à l'intérieur de nos composants React, soit pour consulter le state, soit pour pouvoir dispatcher des actions.

* useSelector -> consulter le state
* useDispatch -> modifer le state

Les hooks sont très pratique à utiliser, MAIS il y a un prix à payer:
Nos composants ne s'occupent plus uniquement de l'affichage, mais aussi d'aller chercher de la data, ou de faire du code pour modifier de la data, et donc ils ne sont PLUS réutilisables en dehors de mon application.

## Containers

Notre objectif c'est de TOUJOURS faire en sorte que les composants React qui servent à afficher quelque-chose soient réutilisables. Donc toutes les infos ou les actions qu'ils peuvent exécuter doivent venir des props.

Ces composants sont appelés par convention des "dumb Components", parfois, on les appelle aussi simplement "components".

Pour donner à ces composants (dumb components) les props qui permettent de consulter le state, ou de le modifier, on va créer des nouveaux composants, qui ne serviront qu'à ça: Containers (ou smart Components).

Ces composants là iront chercher dans le state ce qu'on veut donner en tant que props aux dumbComponents, et donneront aussi en tant que props les fonctions qui peuvent modifier le state.

> Un container prend un composant React et lui donne tous les props dont il a besoin. Avant, on avait aussi cette logique, sauf que tout était fait dans App. Maintenant, je vais pouvoir avoir autant de containers que je veux, chaque container pourra prendre dans le state uniquement ce dont il a besoin.