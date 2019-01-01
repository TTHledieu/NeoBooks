// @flow

export type Book = {
  title: string,
  author: string,
  synopsis: string,
  img: string,
  price: string,
  commentary: { [string]: string },
}

export default [
  {
    title: "L'arracheuse de dents",
    author: 'GIESBERT F.O.',
    synopsis:
      'Sous le plancher de sa maison de famille, un professeur retrouve par hasard les Mémoires inédits de son aïeule Lucile Bradsock, réfugiée en pleine Révolution française chez un célèbre dentiste parisien qui lui a appris le métier. Sa vie claque comme une épopée. Devenue l’une des premières femmes dentistes de l’Histoire, cette scandaleuse soigne Robespierre aussi bien que le fils du roi, avant de partir en Amérique sur un bateau négrier.',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/df/a8/8a/9087199/1540-1/tsp20180126120522/L-arracheuse-de-dents.jpg',
    price: '21',
    commentary: {
      author: 'Barbara',
      from: 'Neobooks Lyon ',
      title: 'Une femme de caractère !',
      text:
        "Prise dans le tourbillon de l'histoire, Lucile, femme libre de moeurs et d'esprit, sillonne le monde avec sang-froid. Elle raconte avec verve la Révolution et ses grands hommes, l'esclavage, les guerres indiennes, l'exil de Napoléon. Un grand roman d'aventure qui se lit d'une traite!",
    },
  },
  {
    title: 'Rien où poser sa tête',
    author: 'FRENKEL F.',
    synopsis:
      "En 1921, Françoise Frenkel, une jeune femme passionnée par la langue et la culture françaises, fonde la première librairie française de Berlin, «La Maison du Livre». Rien où poser sa tête raconte son itinéraire : contrainte en 1939 de fuir l'Allemagne, où il est devenu impossible de diffuser livres et journaux français, elle gagne la France, où elle espère trouver refuge.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/de/a8/8a/9087198/1540-1/tsp20180126120522/Rien-ou-poser-sa-tete.jpg',
    price: '16.90',
    commentary: {
      author: 'Nadine',
      from: 'Neobooks Lyon ',
      title: 'Une course contre la montre',
      text:
        "Françoise Frenkel, jeune juive polonaise fonde une librairie française à Berlin. Elle fuit la ville en 1939 et se réfugie à Paris. Mais l'armée allemande avance, l'obligeant à tenter de gagner la Suisse en traversant la France occupée et...divisée. Un récit haletant et une démonstration de courage.",
    },
  },
  {
    title: 'Un clafoutis aux tomates cerises',
    author: 'DE BURE V.',
    synopsis:
      "Jeanne, 90 ans, décide d'écrire son journal intime. Du premier jour du printemps au dernier jour de l'hiver, d'événements minuscules en réflexions désopilantes, elle consigne pendant toute une année ses humeurs, ses souvenirs, sa petite vie de Parisienne exilée dans l'Allier, dans sa maison posée au milieu des prés, des bois et des vaches.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/21/a9/8a/9087265/1507-1/tsp20180108160744/Un-clafoutis-aux-tomates-cerises.jpg',
    price: '19.90',
    commentary: {
      author: 'Manon',
      from: 'Neobooks Aix-En-Provence',
      title: 'Une grand-mère adorable !',
      text:
        "Le journal de Jeanne nous emmène à la campagne où elle nous fait partager sa vie simple. Elle nous raconte ses parties de bridge avec ses copines, comment elle s'occupe de son jardin, les visites de ses enfants et petits-enfants. Parfois elle évoque le temps passé avec nostalgie mais sans tristesse.",
    },
  },
  {
    title: 'La Valse des arbres et du ciel',
    author: 'GUENASSIA J-M.',
    synopsis:
      'Auvers-sur-Oise, été 1890. Marguerite Gachet est une jeune fille qui étouffe dans le carcan imposé aux femmes de cette fin de siècle. Elle sera le dernier amour de Van Gogh. Leur rencontre va bouleverser définitivement leurs vies.',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/a2/76/79/7960226/1507-1/tsp20160601120442/La-valse-des-arbres-et-du-ciel.jpg',
    price: '19.50',
    commentary: {
      author: 'Julie',
      from: 'Neobooks Paris',
      title: 'La passion de la peinture',
      text:
        "Guenassia nous raconte les derniers jours et la dernière romance de Van Gogh avec Marguerite Gachet. Des personnages interéssants qu'on a pas envie de lâcher, des descriptions de tableaux qui donnent envie de retourner voir toute l'oeuvre du peintre, une histoire tragique et magnifique... Une réussite !",
    },
  },
  {
    title: 'Débâcle',
    author: 'SPIT L.',
    synopsis:
      'A Bovenmeer, un petit village flamand, seuls trois bébés sont nés en 1988 : Laurens, Pim et Eva. Enfants, les "trois mousquetaires" sont inséparables, mais à l\'adolescence leurs rapports, insidieusement, se fissurent. Un été de canicule, les deux garçons conçoivent un plan : faire se déshabiller devant eux, et plus si possible, les plus jolies filles du village. Pour cela, ils imaginent un stratagème : la candidate devra résoudre une énigme en posant des questions; à chaque erreur, il lui faudra enlever un vêtement.',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/91/2b/8b/9120657/1507-1/tsp20171120092210/Debacle.jpg',
    price: '23',
    commentary: {
      author: 'Manon',
      from: 'Neobooks Aix-En-Provence',
      title: 'Éprouvant !',
      text:
        "Ce livre vous laissera avec un sentiment de révolte et un goût amer! Eva, adolescente, découvre la puberté, la sexualité et les méandres de l'amitié. Pourtant, dans cette banalité sous-jacente se cache des secrets douloureux et l'ombre de la mort de Jan, dont on ne sait rien. Personne n'en sortira indemne. Puissant!",
    },
  },
  {
    title: 'Il est toujours minuit quelque part',
    author: 'LALAURY C.',
    synopsis:
      "Bill Herrington est un homme heureux. La cinquantaine approchant, mari et père comblé, il occupe un poste de professeur de littérature dans une prestigieuse université américaine. Tout va pour le mieux dans le meilleur des mondes... jusqu'au jour où il trouve dans son casier l'exemplaire d'un roman à sensation publié par un mystérieux inconnu : Richard Philip Kirkpatrick. Pas de quoi chambouler Bill. À un détail près : ce roman raconte une histoire vraie.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/f0/2b/8b/9120752/1507-1/tsp20180131112300/Il-est-toujours-minuit-quelque-part.jpg',
    price: '15.90',
    commentary: {
      author: 'Nadine',
      from: 'Neobooks Lyon ',
      title: 'Un thriller psychologique redoutablement bon !',
      text:
        "Bill, prof d'université à la vie bien rangée, voit sa vie voler en éclats suite à la parution et l'apparition d'un livre qui relate un pan de sa vie, qu'il pensait enfoui à tout jamais. Beaucoup de surprises, de suspens, de secrets livrés en plusieurs fois et de rebondissements dans ce premier roman réussi de A à Z !",
    },
  },
  {
    title: 'Les Bracelets rouges',
    author: 'ESPINOSA A.',
    synopsis:
      "De 14 à 24 ans, Albert Espinosa a vécu à l'hôpital, entouré d'adolescents de son âge, tous atteints d'un cancer. Ensemble, ces êtres Soleil, comme il les appelle, ont essayé de mener une vie normale et d'être solidaires pour lutter contre la maladie. Donner un sens à la vie. Croire en l'amitié, en nos rêves, pour qu'ils deviennent réalité. Etre capables d'accueillir ces êtres Soleil chaleureux et rassurants qui nous apprennent à nous aimer chaque jour tels que nous sommes.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/17/0c/59/5835799/1507-1/tsp20180213154648/Les-Bracelets-rouges.jpg',
    price: '16.90',
    commentary: {
      author: 'Claire',
      from: 'Neobooks Lyon ',
      title: 'Aussi bon que la série',
      text:
        "Inspiré d'une histoire vraie, ce roman vous permet de retrouver les personnages attachants qui en font le succès dans une série télévisée.",
    },
  },
  {
    title: 'La Chair',
    author: 'MONTERO R.',
    synopsis:
      "Soledad engage un gigolo pour l'accompagner à l'opéra et rendre jaloux l'amant qui l'a quittée. Mais à la sortie un événement inattendu et violent bouleverse la situation et marque le début d'une relation trouble, volcanique et peut-être dangereuse. Elle a 60 ans, le jeune homme en a 32.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/d0/90/80/8425680/1507-1/tsp20170125175148/La-chair.jpg',
    price: '18',
    commentary: {
      author: 'Stéphane',
      from: 'Neobooks Aix-En-Provence',
      title: 'Efficace, cruel, sur le temps qui passe.',
      text:
        "Soledad la soixantaine se fait quitter par son amant plus jeune qu'elle.Elle décide de faire appel à un escort, et va dépenser des sommes folles, tant elle est prise dans une sorte de folie.Dans le même temps elle prépare une exposition sur les écrivains maudits, et c'est grâce à la culture qu'elle pense son mal être.",
    },
  },
  {
    title: 'Peur',
    author: 'KURBJUWEIT D.',
    synopsis:
      "Un roman social sous tension qui s'attaque à une question morale universelle : jusqu'où est-on capable d'aller pour protéger sa famille ?",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/52/4c/8b/9129042/1507-1/tsp20171116152621/Peur.jpg',
    price: '20',
    commentary: {
      author: 'Charlotte',
      from: 'Neobooks Paris',
      title: 'Très prenant et dérangeant...',
      text:
        "Dès les premières pages le lecteur est complètement happé par le récit et pour cause: il commence presque par la fin puis remonte le cours des évènements qui ont conduit à... La Peur est l'élément central qui fige le personnage principal et le fait s'enliser dans cette situation intenable...",
    },
  },
  {
    title: 'Le café des petits miracles',
    author: 'BARREAU N.',
    synopsis:
      "Une fois encore Nicolas Barreau nous embarque dans une magnifique histoire d'amour, qui nous enseigne que laisser tomber son sac dans le Grand Canal, faire confiance à un vénitien à la beauté ténébreuse et sentir la terre se dérober sous les pieds peut aussi être une chance.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/44/6c/8b/9137220/1507-1/tsp20180117163001/Le-Cafe-des-petits-miracles.jpg',
    price: '18',
    commentary: {
      author: 'Manon',
      from: 'Neobooks Paris',
      title: 'Une leçon de vie',
      text:
        "Éléonore Delacourt a vingt cinq ans; Elle n'est a priori pas le genre de fille qui, de but en blanc, vide son compte en banque et, par une froide matinée de janvier, saute dans un train à destination de Venise ! Mais parfois la vie est imprévisible et une phrase énigmatique retrouvée dans un vieux livre peut avoir des conséquences inattendues...",
    },
  },
  {
    title: 'Madame Einstein',
    author: 'BENEDICT M.',
    synopsis:
      "Zurich, 1886. Mileva Maric quitte sa Serbie natale et décide de braver la misogynie de l'époque pour vivre sa passion de la science. À l'Institut polytechnique, cette étrangère affublée d'une jambe boiteuse, seule femme de sa promotion, est méprisée par tous ses camarades. Tous, sauf un étudiant juif farfelu, aux cheveux ébouriffés, stigmatisé par sa religion. C'est Albert Einstein.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/17/6c/8b/9137175/1507-1/tsp20180117162956/Madame-Einstein.jpg',
    price: '20.50',
    commentary: {
      author: 'Manon',
      from: 'Neobooks Aix-En-Provence',
      title: "Découverte d'une oubliée",
      text:
        "Dans un récit à la première personne aux poignants accents de vérité, Marie Benedict rend hommage à l'une des femmes les plus bafouées de l'histoire du xxe siècle, dont la contribution à la théorie de la relativité a donné lieu à un virulent débat, et brosse un portrait nuancé, toujours documenté de celui qui reçut à lui seul tous les honneurs.",
    },
  },
  {
    title: 'Sainte-Croix les Vaches',
    author: 'RAVALVEC V.',
    synopsis:
      'Imaginez un désert rural. Un endroit où… il n’y a rien. Plus de médecin. Plus d’école ni de gendarmerie. Pourtant, les quelques habitants de Sainte-Croix-les-Vaches semblent assez heureux… Loin de se laisser aller, ils ont mis en place un système D… très efficace ! Thomas Sorlut, leur maire, s’est transformé en Parrain rural. Escroquerie aux subventions, plantations de cannabis, base arrière pour des équipes de braqueurs… Un petit business florissant dans lequel s’épanouissent ses administrés !',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/8d/b9/8b/9157005/1540-1/tsp20171119080341/Sainte-Croix-les-Vaches.jpg',
    price: '18',
    commentary: {
      author: 'Claire',
      from: 'Neobooks Lyon ',
      title: 'Un retour aux sources',
      text:
        "Vincent Ravalec retrouve la verve de ces premiers livres dans cette histoire qui colle à l'actualité et que j'imaginerais bien portée à l'écran.",
    },
  },
  {
    title: 'Vous aimer',
    author: 'BONGRAND C.',
    synopsis:
      "Il lui dit qu'il la trouvait belle. Qu'il avait regardé son corps, qu'il devinait splendide, ses hanches, ses jambes, ses mains, ses pieds, adorables dans ses chaussures ouvertes, la manière qu'elle avait de tenir sa tête, son rire, sa voix, ses poignets, et son visage, et ses yeux, si merveilleux.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/ab/6b/8b/9137067/1507-1/tsp20180125092228/Vous-aimer.jpg',
    price: '17.50',
    commentary: {
      author: 'Magali',
      from: 'Neobooks Paris',
      title: "Une histoire d'amour, mais pas que",
      text:
        "Une histoire d'amour, oui, mais très contemporaine dans l'ambiance, l'écriture et les mots. Aux antipodes de 50 shades, mais tellement, incroyablement, plus intense. Le courage d'exposer les sentiments authentiques, la force et la densité de la vérité, l'intensité de l'intimité décrite avec juste ce qu'il faut, tout en pudeur. Et c'est certainement là toute la magie: l'esprit et le cœur de chacun font le reste. Cet équilibre parfait sucré/amer qui fait la toute différence entre un grand cocktail et une boisson écoeurante. L'universalité des sentiments vrais qui parle aussi bien aux hommes qu'aux femmes.",
    },
  },
  {
    title: "Les rois d'Islande",
    author: 'GUDMUNDSSON E. M.',
    synopsis:
      'Le clan Knudsen règne depuis plus de deux siècles sur Tangavík – petit port de pêche battu par les vents ou fief d’armateurs, question de point de vue.',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/98/0d/8b/9112984/1540-1/tsp20180222091358/Les-rois-d-Islande.jpg',
    price: '21',
    commentary: {
      author: 'Julie',
      from: 'Neobooks Aix-En-Provence',
      title: 'Lecture jubilatoire !',
      text:
        "Faites-vous plaisir et plongez dans ce roman extraordinaire qui vous fera découvrir un pays, et surtout une société, qui suscitent de nombreux fantasmes. L'auteur détricote tout ça et porte un regard plein d'humour, mais toujours humain, sur ses contemporains et ses illustres ancêtres !",
    },
  },
  {
    title: 'Le fracas du temps',
    author: 'BARNES J.',
    synopsis:
      'Dans la Russie de Staline, un trait de plume du tyran suffit à vous condamner à mort et à faire disparaître votre oeuvre. Le jour où le jeune compositeur Dmitri Chostakovitch, au succès international, découvre dans la Pravda un article qui l\'accuse de "déviationnisme élitiste et bourgeois" , il comprend que sa famille et lui sont menacés.',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/b4/a8/8a/9087156/1540-1/tsp20180202114348/Le-fracas-du-temps.jpg',
    price: '19',
    commentary: {
      author: 'Claire',
      from: 'Neobooks Aix-En-Provence',
      title: 'Une mise à nu poignante de la vie de Chostakovitch',
      text:
        "Ce n'est pas facile d'écrire une biographie romanesque parfaitement historique, magistralement accordée à la tragédie politique, artistique, humaine d'une époque, tout en réinventant l'intimité complexe et chahutée, constamment partagée entre terreur et ironie d'un artiste authentique.",
    },
  },
  {
    title: 'Comment Baptiste est mort',
    author: 'BLOTTIÈRE A.',
    synopsis:
      'Enlevé dans le désert par un groupe de djihadistes avec ses parents et ses frères, Baptiste, après plusieurs semaines de captivité, est le seul à être libéré.',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/dd/a8/8a/9087197/1540-1/tsp20180305120635/Comment-Baptiste-est-mort.jpg',
    price: '18.50',
    commentary: {
      author: 'Manon',
      from: 'Neobooks Aix-En-Provence',
      title: 'De la manipulation.',
      text:
        "On sort groggy de ce roman, où comme le héros, le lecteur se fait manipuler. On trouvera dans ce roman troublant bien des échos avec l'actualité.",
    },
  },
  {
    title: 'Appelle-moi par ton nom',
    author: 'ACIMAN A.',
    synopsis:
      'Elio Perlman se souvient de l’été de ses 17 ans, à la fin des années quatre-vingt. Comme tous les ans, ses parents accueillent dans leur maison sur la côte italienne un jeune universitaire censé assister le père d’Elio, éminent professeur de littérature.',
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/1f/2c/8b/9120799/1540-1/tsp20180205122621/Appelle-moi-par-ton-nom.jpg',
    price: '20.90',
    commentary: {
      author: 'Charlotte',
      from: 'Neobooks Lyon ',
      title: "C'est l'histoire d'Elio...",
      text:
        "C'est le récit du premier amour qu'on n'oublie pas, l'histoire des premières fois, du passage de l'adolescence à l'âge adulte. C'est une histoire belle et émouvante, pleine de sentiments, parfois tristes, parfois heureux. C'est une écriture, une narration, un style magnifique. C'est à lire absolument.",
    },
  },
  {
    title: 'Marcher à Kerguelen',
    author: 'GARDE F.',
    synopsis:
      "Pendant vingt-cinq jours, dans la pluie, le vent et le froid, en l'absence de tout sentier, François Garde et ses compagnons ont réalisé la traversée intégrale de Kerguelen à pied en autonomie totale. Une aventure unique, tant sont rares les expéditions menées sur cette île déserte du sud de l'océan Indien aux confins des quarantièmes rugissants, une des plus inaccessibles du globe.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/d6/60/89/9003222/1540-1/tsp20180214092226/Marcher-a-Kerguelen.jpg',
    price: '19.50',
    commentary: {
      author: 'Barbara',
      from: 'Neobooks Lyon ',
      title: 'Lancez-vous !',
      text:
        "Cette marche au milieu de paysages sublimes et inviolés, à laquelle l'auteur avait longtemps rêvé, l'a confronté quotidiennement à ses propres limites. Mais le poids du sac, les difficultés du terrain et du climat, les contraintes de l'itinérance, l'impossibilité de faire demi-tour n'empêchent pas l'esprit de vagabonder. Au fil des étapes, dans les traversées de rivières, au long des plages de sable noir, lors des bivouacs ou au passage des cols, le pas du marcheur entre en résonance avec le silence et le mystère de cette île et interroge le sens même de cette aventure. A lire absolument !",
    },
  },
  {
    title: 'Le cas singulier de Benjamin T.',
    author: 'ROLLAND C.',
    synopsis:
      "Et si l'on vivait nos vies à l'envers ? Depuis quelque temps, plus rien ne va dans la vie de Benjamin Teillac. Quitté par sa femme, rejeté par son fils, il risque maintenant de perdre son travail d'ambulancier. En cause : ses crises d'épilepsie, qui ont recommencé brutalement et que les traitements conventionnels ne suffisent plus à contrôler.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/f0/7a/8b/9140976/1540-1/tsp20180110172642/Le-cas-singulier-de-Benjamin-T.jpg',
    price: '18.90',
    commentary: {
      author: 'Barbara',
      from: 'Neobooks Paris',
      title: 'Une œuvre bien singulière !',
      text:
        "Entre le présent et le passé, l'ennemi intérieur ou extérieur, on tremble pour Benjamin complètement isolé dans les affres de la communication impossible.. Je recommande !",
    },
  },
  {
    title: 'Sous les étoiles silencieuses',
    author: 'MCVEIGH L.',
    synopsis:
      "Afsana, 15 ans, se trouve à bord du Transsibérien vers la Russie. Elle vient de loin. De très loin. Sa ville, Kaboul, l'endroit où elle se sentait jadis chez elle, a été ravagée par la guerre civile, suite à l'arrivée des talibans. Depuis, Afsana et les siens sont en fuite, parcourant le pays d'un bout à l'autre, en perpétuelle recherche d'un lieu où enfin trouver la paix.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/cb/6b/8b/9137099/1540-1/tsp20171206152936/Sous-les-etoiles-silencieuses.jpg',
    price: '19.50',
    commentary: {
      author: 'Stéphane',
      from: 'Neobooks Aix-En-Provence',
      title: 'Récit de guerre...',
      text:
        "Que reste-t-il quand la guerre est là? Afsana a dû quitter l'Afganistan avec ses proches pour tenter de survivre en cherchant une herbe un peu plus verte. Ce livre est un sublime récit qui illustre parfaitement la situation dans laquelle se trouvent des milliers de réfugiés à l'instant même où vous lisez ces mots.",
    },
  },
  {
    title: "L'île",
    author: 'BJORNSDOTTIR S.',
    synopsis:
      "Il arrive que se produisent des choses qui rassemblent l'humanité tout entière, et chacun se rappelle l'endroit où il se trouvait quand il a appris la nouvelle. Le monde peut devenir si petit qu'il se résume à un seul être humain.",
    img:
      'https://static.fnac-static.com/multimedia/Images/FR/NR/99/2b/8b/9120665/1540-1/tsp20171205172749/L-ile.jpg',
    price: '21',
    commentary: {
      author: 'Nadine',
      from: 'Neobooks Aix-En-Provence',
      title: 'Notre île, ton île, mon île',
      text:
        "À la manière d'un bateau piégé en haute mer et dont les appels resteraient sans réponses, une journaliste imagine pour sa première fiction que son pays; l'Islande est isolée du reste du monde... Ce roman postapocalyptique rappelle les désordres humains en pareilles circonstances avec ses dérives proches d'un naufrage.",
    },
  },
]
