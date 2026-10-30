/* Ars Syllogistica — the Advanced Studies decks.
   Fourteen decks that perfect the skill of each act, after its doctrine deck
   and its exercises. Each card states one point; its three question forms
   follow in the *_EXTRA table and are merged in below. Each deck carries a
   Review and a recitation outline for the Recitation Tablet. The gate on each entry is the set of exercises that opens it in
   the Guided Path (the paired exercise sets XXII–XXVI are in ars-engine.js).
   Loaded by index.html before its main script, which calls
   arsAdvancedDecks(Q, sources) to build the list. */
(function(root){
root.arsAdvancedDecks = function(Q, SRC){
  const {SRC_ART, SRC_MAR, SRC_JST, SRC_OES} = SRC;
  /* ---- First Act: The Predicables in Depth ---- */
  const ADV_PRED = [
    { src:`${SRC_ART}; ${SRC_MAR}; Matthew Minerd, “BCS Logic 2023” (course slides); John F. Peifer, <i>The Concept in Thomism</i> (Bookman, 1952); Porphyry, <i>Isagoge</i>, with Cajetan’s commentary; R. E. Houser, <i>Logic as a Liberal Art</i> (Catholic University of America Press, 2020); Aristotle, <i>Topics</i> I.4–8; St. Thomas Aquinas, <i>Summa theologiae</i> I, q. 77, a. 1, ad 5.`,
      h:`<p><strong>The universal known by reflection.</strong> The mind first knows things. When we grasp what a tree is, the concept is not what we know but that by which we know the tree; this is <em>direct</em> knowledge. Afterward the mind can turn back on what it has grasped and consider the nature as it is in the mind: abstracted from this tree and that one, and able to be said of many. This turning back is <em>reflex</em> knowledge, and it always comes second, since we know that we know only by first knowing something.</p>`
      + `<p>The predicables are found by reflex knowledge. Being a genus, being a species, and being said of many are relations that a nature has only as it is known, and the tradition calls them second intentions. No genus exists outside the mind as one thing among others; what exists outside the mind is this oak and that pine. So the logician studies the universal as it is in the mind, while the metaphysician asks what in things grounds it.</p>` },
    { h:`<p><strong>The tree of Porphyry.</strong> Porphyry, a third-century Neoplatonist who wrote the standard introduction to Aristotle’s <em>Categories</em>, set out one line of the category of substance from the top down. Substance is divided into body and spirit; body into living and non-living body; living body into animal and plant; animal into rational and irrational animal; and rational animal gives man, under whom are Socrates, Plato, and every other man. Drawn on a page, with the differences branching to either side, the series became known as the tree of Porphyry.</p>`
      + `<p>Each step is made by a difference, and each difference is one of a pair: corporeal or incorporeal, animate or inanimate, sentient or insentient, rational or irrational. The genus at each step joined to its difference gives the species at the next, so that “living body” is “body” with the difference “animate,” and “animal” is “living body” with the difference “sentient.” Reading the tree upward gives the definition of man by its successive genera and differences.</p>` },
    { h:`<p><strong>Highest, middle, and lowest.</strong> In the tree some terms are only genera, some only species, and some both. The <strong>supreme genus</strong> (substance) has no genus above it, and so it is a genus and never a species. The <strong>lowest species</strong> (man) has no species below it, only individuals, and so it is a species and never a genus. Every term between them is a <strong>subaltern</strong> genus, that is, a species of the term above it and a genus of the term below it: animal is a species of living body and a genus of rational animal.</p>`
      + `<p>The individual stands below the lowest species and is neither genus nor species, since it is not said of many. So Socrates is a man, but nothing is a Socrates. The supreme genus cannot be defined by a genus and a difference, because it has no higher genus to define it by. The individual cannot be defined at all, because a definition states what is common, and the individual is known by the senses and named, not defined.</p>` },
    { h:`<p><strong>Property in four senses.</strong> Porphyry distinguishes four senses of “property.” In the first sense, a property belongs to one species only, but not to every member of it, as being a physician or a geometer belongs to man alone, but not to every man. In the second, it belongs to every member, but not to that species only, as being two-footed belongs to every man and also to birds. In the third, it belongs to every member and only to that species, but not always, as turning gray in old age.</p>`
      + `<p>In the fourth and strict sense, a property belongs to every member, only to that species, and always, as the power to laugh belongs to man, or the power to neigh to the horse. Only a property in this fourth sense converts with its species (whatever can laugh is a man, and every man can laugh), and so the tradition calls it property in the proper sense. The exercise on the predicables uses this fourth sense; the other three are properties only in a qualified way.</p>` },
    { h:`<p><strong>Two kinds of accident.</strong> The word “accident” is used twice in logic, in two related senses. Among the categories, the nine accidents are the ways of being that exist <em>in</em> a substance and cannot exist on their own, such as quantity, quality, and relation; this is <strong>predicamental</strong> accident, the accident of the categories. Among the predicables, an accident is anything said of a subject that is no part of its essence and does not follow from it; this is <strong>predicable</strong> accident.</p>`
      + `<p>The two do not always coincide. The difference “rational” is taken from the substantial form, and so it is reduced to the category of substance. The power of reason, as a property flowing from that form, is a quality, and so a predicamental accident, but it is no predicable accident of man, since it follows from what he is. And the predicable accident can be said of an accident as well as of a substance: in “This large area is white,” white is a predicable accident of the quantity, since the color has no necessary connection with the size. St. Thomas makes the same distinction when he notes that the soul’s powers are accidents in the first sense but not in the second (<em>Summa theologiae</em> I, q. 77, a. 1, ad 5).</p>` },
    { h:`<p><strong>The difference divides and constitutes.</strong> A specific difference does two things at once. It <strong>divides</strong> the genus, separating the species that have it from those that lack it, as “rational” separates man from the brutes; and it <strong>constitutes</strong> the species, making it what it is, as “rational” joined to “animal” makes man. Cajetan, the Dominican commentator on Porphyry and on St. Thomas, whose commentary on Porphyry dates from 1497, notes that it divides the genus not by cutting its essence in pieces, since the whole nature of animal is found in man and in the horse, but by dividing the species that fall under it.</p>`
      + `<p>A property also marks off one species from another, but it does not constitute the species, because it flows from a species already constituted. The power to laugh distinguishes man from the brutes, but it follows from his being rational; it does not make him a man. So in seeking a definition we look for the difference, and we use the property as a sign that leads us to it.</p>` },
    { h:`<p><strong>Aristotle’s four and Porphyry’s five.</strong> Aristotle does not list five predicables. In the <em>Topics</em> he considers every predicate in relation to a subject and finds four: a predicate either converts with its subject or does not. If it converts and states the essence, it is a <strong>definition</strong>; if it converts and does not state the essence, it is a <strong>property</strong>. If it does not convert and belongs to the essence, it is a <strong>genus</strong> (the difference is counted with the genus); if it does not convert and is outside the essence, it is an <strong>accident</strong>. The <em>Topics</em> treats the four heads in turn: accident in Books II and III, genus in Book IV, property in Book V, and definition in Books VI and VII.</p>`
      + `<p>Porphyry’s five are reached from a different question, namely how a universal is related to the things under it, and so the species and the difference appear in his list, while the definition does not. The two lists do not contradict each other. Aristotle’s is the list of the dialectician, who asks how a predicate stands to a subject in an argument; Porphyry’s is the list of the logician who orders universals for definition and classification.</p>` },
    { h:`<p><strong>What the universal is.</strong> The question of universals asks what in reality grounds our general concepts. Three answers are usually distinguished. <strong>Absolute realism</strong>, associated with Plato, holds that the natures we grasp exist apart from things and from minds as universals. <strong>Nominalism</strong> holds that only individuals exist and that general words and concepts are names for groups of individuals, with nothing common in the things themselves. <strong>Moderate realism</strong>, the view of Aristotle and St. Thomas, holds that the nature exists in individuals, really but as individual, and becomes universal only in the mind, which abstracts it.</p>`
      + `<p>The question bears on logic. If nominalism is true, a universal proposition such as “Every man is mortal” is only a summary of the cases observed, and a definition states no essence. On the moderate realist view, the universal concept grasps a nature that is truly in each individual, and so a definition can state what a thing is and a demonstration can show why it must be so. Nominalism, which spread widely in the fourteenth and fifteenth centuries, is one of the sources of the modern doubt about definition and demonstration.</p>` }
  ];
  const ADV_PRED_EXTRA = {
    0:{ qs:[
      Q(`When we know what a horse is, what do we know first?`,
        [`The horse itself, by means of the concept`,`The concept of horse, as a thing in the mind`,`The relation of species that the nature has`,`The word “horse” as a spoken sound`], 0,
        `Direct knowledge reaches the thing; the concept is that by which it is known, and it becomes an object only when the mind turns back on it.`,
        `The concept, its relations, and the word are known afterward, by reflection or by convention; what is known first is the thing.`),
      Q(`Why does the tradition call “being a species” a second intention?`,
        [`It belongs to a nature only as the nature is known`,`It is learned after the first intention of a teacher`,`It is the second of the five predicables in order`,`It belongs to things as their second kind of matter`], 0,
        `Being a species, a genus, or a predicate is a relation the nature has in the mind, which reflection finds after the thing is known.`,
        `The word “second” refers to the order of knowing: the mind first knows the thing and then turns back to what it knows.`),
      Q(`Which of these exists outside the mind?`,
        [`This oak growing on the hill`,`The genus to which oaks belong`,`The species “oak” as said of many`,`The relation of predicate to subject`], 0,
        `Outside the mind there are individual things; genus, species, and predicate are relations the mind forms by reflection.`,
        `A genus, a species as said of many, and a predicate are second intentions, which exist only in the mind.`)
    ]},
    1:{ qs:[
      Q(`In a tree of figures built like Porphyry’s, what is “plane figure” joined to the difference “bounded by three straight lines”?`,
        [`Triangle`,`Circle`,`Rectangle`,`Line`], 0,
        `The genus joined to its difference gives the species at the next step, as in Porphyry’s tree of substance.`,
        `A circle and a rectangle have other differences, and a line is not a plane figure at all.`),
      Q(`What divides each step of the tree of Porphyry?`,
        [`A pair of opposed differences`,`A pair of accidents`,`A property and an accident`,`Two individuals of the species`], 0,
        `Each genus is divided by a pair of differences such as corporeal and incorporeal, or animate and inanimate.`,
        `Accidents and properties do not constitute species, and individuals come only at the foot of the tree.`),
      Q(`Reading the tree of Porphyry upward from man, what do we find?`,
        [`The genera and differences of his definition`,`The list of his proper accidents`,`The individuals who share his nature`,`The ten categories in their order`], 0,
        `Each step adds a difference to a genus, and so reading upward gives the successive genera and differences in the definition of man.`,
        `The tree stays within one category, substance, and it lists genera and differences, not accidents or individuals.`)
    ]},
    2:{ qs:[
      Q(`In the line “quantity, continuous quantity, line,” what is “continuous quantity”?`,
        [`A subaltern genus`,`The supreme genus`,`The lowest species`,`An individual`], 0,
        `It is a species of quantity and a genus of line, so it is both genus and species, which is the mark of a subaltern genus.`,
        `Quantity, at the top, is the supreme genus; and continuous quantity is not the lowest, since line falls under it.`),
      Q(`Why can the supreme genus not be defined by genus and difference?`,
        [`It has no genus above it`,`It has no species below it`,`It is not said of many things`,`It is an accident of substance`], 0,
        `A definition by genus and difference requires a higher genus, and the supreme genus has none.`,
        `The supreme genus has many species below it and is said of many; what it lacks is a genus above.`),
      Q(`Why is the individual neither a genus nor a species?`,
        [`It is not said of many`,`It has no accidents`,`It lies outside the categories`,`It has no definition in words`], 0,
        `Genus and species are said of many, and the individual is not said of anything else.`,
        `The individual has accidents and falls in a category as the subject of predication; it is not a predicate of many.`)
    ]},
    3:{ qs:[
      Q(`“Having lungs belongs to every horse, but not to horses alone.” In which sense is having lungs a property of the horse?`,
        [`The second: to every member, not only to it`,`The first: to it alone, not to every member`,`The third: to all and only, not always`,`The fourth: to all, only, and always`], 0,
        `It belongs to every member of the species but not only to that species, which is Porphyry’s second sense.`,
        `The first sense lacks “every,” the third lacks “always,” and the third and fourth both require “only,” which lungs do not satisfy, since many animals have them.`),
      Q(`Which property is a property in the fourth and strict sense?`,
        [`The power to bray, said of the donkey`,`Being a jockey, said of man`,`Having four legs, said of the horse`,`Going bald in old age, said of man`], 0,
        `The power to bray belongs to every donkey, to the donkey alone, and always, and so it converts with the species.`,
        `Being a jockey is not in every man, four legs are not in the horse alone, and going bald is not always present.`),
      Q(`Why does the tradition call the fourth sense of property “property in the proper sense”?`,
        [`Only it converts with its species`,`Only it belongs to the essence itself`,`Only it can be gained and lost`,`Only it is found in every genus`], 0,
        `A property in the fourth sense belongs to every member, only, and always, and so whatever has it is of that species.`,
        `No property belongs to the essence, and a property in the strict sense is never gained or lost.`)
    ]},
    4:{ qs:[
      Q(`In “Snow is cold,” coldness is a quality. Is it a predicable accident of snow?`,
        [`No, since coldness follows from what snow is`,`Yes, since every quality is a predicable accident`,`Yes, since snow can be found in many places`,`No, since a quality cannot be said of a substance`], 0,
        `Coldness is a predicamental accident (a quality), but it follows from the nature of snow, and so it is not a predicable accident of it.`,
        `The two senses of accident do not coincide; a quality can belong to the definition or follow from it.`),
      Q(`What makes something a predicamental accident?`,
        [`It exists in a substance and not on its own`,`It may be present or absent in its subject`,`It is said of many individuals at once`,`It belongs to every member of a species`], 0,
        `The accidents of the categories are ways of being that exist only in a substance.`,
        `Being present or absent describes the predicable accident, and being said of many describes any universal.`),
      Q(`In “This long road is narrow,” what is narrowness to the length?`,
        [`A predicable accident of an accident`,`A predicable property of the road`,`A substance said of an accident`,`A genus of the road’s quantity`], 0,
        `Narrowness has no necessary connection with being long, so it is a predicable accident; and its subject here is a quantity, an accident.`,
        `Narrowness does not follow from length, and it is a quantity of the road, not a substance or a genus.`)
    ]},
    5:{ qs:[
      Q(`What two things does a specific difference do?`,
        [`It divides the genus and constitutes the species`,`It names the genus and lists the individuals`,`It defines the genus and orders the categories`,`It follows the species and signals its property`], 0,
        `The difference separates the species that have it from those that lack it, and joined to the genus it makes the species what it is.`,
        `The difference does not follow the species as a property does; it is part of what the species is.`),
      Q(`Why is the power to use language not the difference of man?`,
        [`It flows from his being rational`,`It belongs to some other animals too`,`It is not found in every man`,`It is a quantity, not a quality`], 0,
        `The power to use language follows from rationality, and so it is a property; the difference is what constitutes the species.`,
        `As a power it belongs to every man and only to man; the reason it is not the difference is that it follows from the difference.`),
      Q(`Does the difference “rational” cut the nature of animal in pieces?`,
        [`No, the whole nature of animal is in each species`,`Yes, man has one part of animal and the brutes another`,`Yes, since a divided thing is no longer whole`,`No, since the difference is not said of the genus`], 0,
        `Cajetan explains that the difference divides the species under the genus, not the genus’s essence, which is wholly in each.`,
        `Man is wholly an animal, as the horse is; the difference sorts the species and leaves the genus whole in each.`)
    ]},
    6:{ qs:[
      Q(`On Aristotle’s division, a predicate converts with its subject but does not state the essence. What is it?`,
        [`A property`,`A definition`,`A genus`,`An accident`], 0,
        `Converting predicates are definitions or properties, and the one that does not state the essence is the property.`,
        `A definition converts and states the essence; genus and accident do not convert.`),
      Q(`Where does the difference stand on Aristotle’s list in the <em>Topics</em>?`,
        [`With the genus`,`With the property`,`With the accident`,`With the definition`], 0,
        `Aristotle counts the difference with the genus, since both belong to the essence without converting with the subject.`,
        `The difference belongs to the essence, so it cannot be a property or an accident, and alone it is not the whole definition.`),
      Q(`Why does Porphyry’s list include the species, which Aristotle’s does not?`,
        [`Porphyry asks how a universal stands to what is under it`,`Porphyry corrected an error in Aristotle’s list`,`Aristotle denied that species exist in things`,`Aristotle wrote before the species was named`], 0,
        `The two lists answer different questions, and the species appears only when we ask how a universal relates to its inferiors.`,
        `The lists do not contradict each other; Aristotle’s answers how a predicate stands to a subject in argument.`)
    ]},
    7:{ qs:[
      Q(`“Only individual things exist, and ‘mammal’ is a name for a group of them.” Which position is this?`,
        [`Nominalism`,`Moderate realism`,`Absolute realism`,`The view of St. Thomas`], 0,
        `Nominalism holds that only individuals exist and that general words name groups, with nothing common in the things.`,
        `Both kinds of realism hold that a nature is really common in some way, and St. Thomas is a moderate realist.`),
      Q(`On the view of St. Thomas, where is the nature universal?`,
        [`In the mind that abstracts it`,`In a separate world of forms`,`In each individual thing`,`Only in the word that names it`], 0,
        `The nature is in individuals as individual and becomes universal in the mind, which abstracts it.`,
        `Separate forms are the view of absolute realism, and a universal word without a universal concept is nominalism.`),
      Q(`If nominalism were true, what would a definition state?`,
        [`No essence, only what a name groups together`,`The essence of each individual one by one`,`The separate form in which things share`,`The same essence that a moderate realist finds`], 0,
        `With nothing common in things, a definition cannot state what a thing is; it only fixes the use of a name.`,
        `The nominalist denies common natures, so a definition cannot state an essence, separate or shared.`)
    ]}
  };
  /* ---- First Act: The Categories in Depth ---- */
  const ADV_CAT = [
    { src:`${SRC_ART}; ${SRC_MAR}; Aristotle, <i>Categories</i> 1–2 and 10–15; ${SRC_OES}; Matthew Minerd, “BCS Logic 2023” (course slides); St. Thomas Aquinas, <i>Summa theologiae</i> I, q. 3, a. 5.`,
      h:`<p><strong>Names said in one way or in many.</strong> Before the categories, Aristotle distinguishes the ways a name can be said of several things. Things are named <strong>equivocally</strong> when they share a name but the definition that goes with the name differs for each, as “animal” is said of a man and of a man painted in a picture. They are named <strong>univocally</strong> when they share both the name and its definition, as “animal” is said of a man and of an ox.</p>`
      + `<p>Things are named <strong>derivatively</strong> (denominatively) when they take their name from something else, with a change of ending, as the grammarian is named from grammar and the courageous man from courage. These distinctions come first because the categories sort what is said univocally. An equivocal name must be divided into its senses, and each sense placed in its own category, before anything can be classified.</p>` },
    { h:`<p><strong>Analogous names.</strong> Between the univocal and the equivocal stands the <strong>analogous</strong> name, which signifies different natures but is said first of one and of the others by reference to the first. “Healthy” is said first of the animal, which has health, and then of food, which causes health, and of a complexion, which is a sign of it. This is analogy by <strong>attribution</strong>, in which the secondary things are named from their relation to the first.</p>`
      + `<p>In analogy by <strong>proportion</strong>, the name is said of each thing in its own way, according to a likeness of relations: “being” is said of substance and of accident, each according to its own manner of being, and “good” is said of a good knife and a good man, each good as it fulfills its own end. When the likeness of relations is only figurative, as when a brave man is called a lion, the analogy is <strong>metaphor</strong>. Many of the most important words in philosophy, such as “being,” “good,” and “true,” are analogous, and so neither univocal nor merely equivocal.</p>` },
    { h:`<p><strong>Said of a subject, present in a subject.</strong> Aristotle also distinguishes two ways in which one thing can stand to a subject. To be <strong>said of</strong> a subject is to be predicable of it, as a universal is said of what falls under it. To be <strong>present in</strong> a subject is to exist in it, not as a part, but as something that cannot exist apart from it, as a color exists in a body. The first is a distinction in the order of knowing; the second is a distinction in the order of being.</p>`
      + `<p>Combining the two gives four classes. What is said of a subject and present in none is <strong>universal substance</strong>, as “man.” What is neither said of a subject nor present in one is <strong>singular substance</strong>, as this man. What is said of a subject and present in one is <strong>universal accident</strong>, as “white.” What is present in a subject but said of none is <strong>singular accident</strong>, as the whiteness of this wall. Only the universals are placed in the categories, as genera and species of their kinds.</p>` },
    { h:`<p><strong>What belongs in a category.</strong> The Thomist tradition commonly sets five conditions for placing a nature directly in a category. It must be a real being, not a being of reason or a privation such as blindness. It must be one <em>per se</em>, that is, one simple nature signified by a simple expression: “white horse” signifies two natures and belongs in no single category, and an artifact as such is not one nature, since it is a shape given by the mind of the maker to some material. It must be complete, not a part or principle of a nature, such as a soul or a difference, which belongs to a category only by reduction. It must be finite, so that God, who is not limited to any kind of being, is in no category. And it must be signified univocally. Since a category is a highest predicate, only what can be said of many is placed in it as a predicate.</p>`
      + `<p>So a chair is a substance with respect to its wood, but the chair as a chair is outside the categories; Socrates is not in the category of substance as a predicate, but under it as the ultimate subject of predication; and an analogous word such as “being” is in no single category, since it is said of all of them, each in its own way.</p>` },
    { h:`<p><strong>Why the categories belong to logic.</strong> The categories are the ten highest genera of what can be said of a thing: substance, quantity, quality, relation, action, passion, when, where, posture, and having (also called habit). As modes of being they belong to metaphysics; logic studies them as modes of predication, that is, as the highest kinds under which predicates are ordered. Logic does not tell us what a man or a color is, but it supplies the order in which natures are classified, and knowing the supreme genus of a thing is the first step toward its definition.</p>`
      + `<p>Being itself is not an eleventh and highest genus above the ten. A genus is divided by differences that lie outside it, as “rational” lies outside the nature of animal; but nothing lies outside being, since every difference is itself something that is. So St. Thomas, following Aristotle’s <em>Metaphysics</em>, holds that being cannot be the genus of anything (<em>Summa theologiae</em> I, q. 3, a. 5), and each category is a highest genus in its own line.</p>` },
    { h:`<p><strong>Four kinds of opposition.</strong> After the categories come the postpredicaments, the relations that appear once natures are placed in categories. The first is opposition, of which there are four kinds, in order of decreasing strength. <strong>Contradictory</strong> opposition sets a thing against its simple negation, as man against non-man, with nothing between them. <strong>Privative</strong> opposition sets a form against its absence in a subject that ought naturally to have it, as hearing against deafness in an animal.</p>`
      + `<p><strong>Contrary</strong> opposition sets two positive extremes of one genus against each other in the same subject, as odd and even in number, or white and black in color, and some contraries have intermediates while others do not. <strong>Relative</strong> opposition, the weakest, sets two correlatives against each other, as whole and part or double and half, which exclude each other only in the same respect. Only contradiction is found in every category; privation and contrariety are found in several, and relative opposition chiefly in the category of relation.</p>` },
    { h:`<p><strong>Prior and simultaneous.</strong> Aristotle counts the senses of “prior.” A thing is prior in <strong>time</strong>, as the older is prior to the younger. It is prior when the <strong>sequence of being cannot be reversed</strong>: if there are two, there is one, but not conversely, so one is prior to two. It is prior in <strong>order</strong>, as the elements of geometry come before the theorems and the opening of a speech before its narrative. It is prior in <strong>excellence</strong>, as the better is said to come first. And where two things imply each other, the one that is the <strong>cause</strong> is prior: a man’s being is the cause of the truth of “There is a man,” and not the reverse.</p>`
      + `<p>Things are <strong>simultaneous</strong> in time when they come to be at once. They are simultaneous by nature when each implies the other and neither causes the other, as the double and the half, or when they are species divided from one genus by the same division, as the winged, the land, and the water animals. The genus, however, is prior to its species, since if there is a water animal there is an animal, but not conversely.</p>` },
    { h:`<p><strong>Motion and having.</strong> Aristotle counts six kinds of motion: generation, destruction, increase, diminution, alteration, and change of place. They are distinct, since a thing can be altered in quality without growing, and a square can grow by an added figure without being altered. Rest is the contrary of motion in general, and each kind has its contrary: destruction of generation, diminution of increase, and motion downward of motion upward.</p>`
      + `<p>He also counts the senses of “to have.” We have a quality, such as knowledge or virtue; a quantity, such as a height; clothing, or a ring on the hand; a part, such as a hand; a content, as a jar has wine; a possession, such as a house; and a husband or a wife, the most remote sense. Only one of these, what is worn or carried on the body, is the category of having. So “He has a cloak” falls under having, while “He has courage” falls under quality, though the same verb is used for both.</p>` }
  ];
  const ADV_CAT_EXTRA = {
    0:{ qs:[
      Q(`“The river bank was steep, and the bank lent us money.” How is “bank” said of the two?`,
        [`Equivocally`,`Univocally`,`Derivatively`,`Analogously`], 0,
        `The two share the name, but the definition that goes with it differs for each, which is equivocation.`,
        `They do not share the definition, so the name is not univocal, and neither is named from the other.`),
      Q(`A terrier and a collie are both called “dog.” How is the name said of them?`,
        [`Univocally`,`Equivocally`,`Derivatively`,`Metaphorically`], 0,
        `They share the name and the definition that answers to it, so the name is univocal.`,
        `The definition of “dog” is the same for both, so there is no equivocation, derivation, or figure.`),
      Q(`A just man is named from justice. How is he named?`,
        [`Derivatively, from the quality, with a change of ending`,`Univocally, since justice and he share a definition`,`Equivocally, since justice is a quality and he a man`,`Analogously, since justice is said first of God and then of men`], 0,
        `A thing named from another with a change of ending is named derivatively, as the grammarian from grammar.`,
        `The just man and justice do not share a definition, and naming him “just” after his justice is derivation, not equivocation.`)
    ]},
    1:{ qs:[
      Q(`“A medical book,” “a medical instrument,” and “a medical doctor” are said with reference to the art of medicine. What kind of name is “medical” here?`,
        [`Analogous by attribution`,`Univocal, with one definition`,`Purely equivocal`,`Analogous by metaphor`], 0,
        `Each is called medical by its relation to one first thing, the art of medicine, which is analogy by attribution.`,
        `The things differ in nature, so the name is not univocal; and its uses are related, so it is not purely equivocal or merely figurative.`),
      Q(`Calling a ship’s prow its “nose” is an analogy of what kind?`,
        [`Metaphor, since the likeness of relations is figurative`,`Attribution, since the prow causes the nose`,`Proportion in the proper sense, as when “being” is said of all`,`None, since the name is said univocally`], 0,
        `The prow stands to the ship somewhat as a nose to a face, but only figuratively, which is metaphor.`,
        `The prow neither causes nor signifies a nose, and the likeness is not a proper sharing of one notion.`),
      Q(`Why is “good” called analogous rather than univocal?`,
        [`It is said of each thing according to its own end`,`It is said of every thing in exactly one sense`,`Its uses have no relation to one another`,`It is said only of men and of nothing else`], 0,
        `A good knife and a good man are each good as they fulfill their own ends, so the name is said proportionally.`,
        `A univocal name keeps one definition, and an equivocal name has unrelated senses; “good” does neither.`)
    ]},
    2:{ qs:[
      Q(`Where does “horse” fall in Aristotle’s fourfold division?`,
        [`Universal substance`,`Singular substance`,`Universal accident`,`Singular accident`], 0,
        `“Horse” is said of many and is present in no subject, so it is universal substance.`,
        `It is not one horse, so not singular substance, and it does not exist in another, so it is no accident.`),
      Q(`Where does the courage of Achilles fall in the fourfold division?`,
        [`Singular accident`,`Universal accident`,`Singular substance`,`Universal substance`], 0,
        `It exists in Achilles and is said of nothing else, so it is a singular accident.`,
        `Courage as said of many would be universal accident; this courage is one man’s.`),
      Q(`What does “present in a subject” mean in this division?`,
        [`Unable to exist apart from the subject, yet not a part of it`,`Being one of the integral parts that together make up the subject`,`Being predicable of the subject as its genus`,`Being near the subject in place or time`], 0,
        `Aristotle means what exists in another, not as a part, but as unable to exist apart from it, as a color in a body.`,
        `Parts are excluded, predication is the other half of the division, and nearness in place is not meant.`)
    ]},
    3:{ qs:[
      Q(`Why does “tall tree” belong in no single category?`,
        [`It signifies two natures, a quantity and a substance`,`It is an artifact made by the human mind`,`It is said of many trees at once`,`It is an equivocal name for a plant`], 0,
        `A complex expression signifies two natures, and only one simple nature is placed in a category.`,
        `A tree is not an artifact, being said of many is required for a category, and “tall tree” is not equivocal.`),
      Q(`Why is a table, as a table, outside the categories?`,
        [`Its form as a table is given by the mind of its maker`,`It is a single thing and so not a universal that is said of many`,`It has no quantity or quality of its own`,`It is said univocally of all furniture`], 0,
        `An artifact as such is a shape given to some material by the maker, and so it is not one natural kind.`,
        `The table’s material is a substance with quantity and quality; what is outside the categories is the artifact as such.`),
      Q(`“One” is said of one man, one color, and one day. Why is it in no single category?`,
        [`It is said of every category, each in its own way`,`It is a complex expression of two natures`,`It is the name of an artifact`,`It is a singular and not a universal`], 0,
        `A name said of all the categories, each in its own way, is analogous, and a category requires a univocal name.`,
        `“One” is a simple expression, not an artifact, and it is said of many; it fails the condition of univocity.`)
    ]},
    4:{ qs:[
      Q(`How does logic consider the categories?`,
        [`As the highest kinds of predicates`,`As the causes of all things that are`,`As the ten parts of every substance`,`As ten words of the Greek language`], 0,
        `Metaphysics studies the categories as modes of being; logic studies them as the highest genera under which predicates are ordered.`,
        `The categories are not causes, parts of a substance, or mere words; logic orders predicates under them.`),
      Q(`Why is being not a genus?`,
        [`Every difference that would divide it is itself a being`,`Being is said of only one category`,`Being has no species under it at all`,`Being is a name for the individual only`], 0,
        `A genus is divided by differences outside its nature, and nothing lies outside being.`,
        `Being is said of all the categories, analogously; the difficulty is that no difference lies outside it.`),
      Q(`Why is knowing a thing’s category useful for defining it?`,
        [`It is the highest genus, the first step to a nearer one`,`The category gives the specific difference of the thing`,`The category lists every property of the thing`,`The category tells whether the thing exists`], 0,
        `Knowing the supreme genus starts the search for the nearer genus that a definition needs.`,
        `The category does not supply the difference or the properties, and it says nothing about existence.`)
    ]},
    5:{ qs:[
      Q(`A man who was born able to see has lost his sight. What opposition is there between sight and his blindness?`,
        [`Privative`,`Contradictory`,`Contrary`,`Relative`], 0,
        `Blindness is the absence of sight in a subject that ought naturally to have it, which is privation.`,
        `Blindness is not the simple negation of sight in anything whatever, nor a positive extreme, nor a correlative.`),
      Q(`A stone cannot see. Why is the stone not called blind?`,
        [`A privation is only in a subject apt to have the form`,`A stone is opposed to sight by contrariety, not privation`,`Blindness is a relation and a stone has none`,`A stone has the form of sight in potency`], 0,
        `Privation is the absence of a form in a subject naturally able to have it, and a stone is not such a subject.`,
        `The stone is simply non-seeing, by contradiction; it is not blind, since it was never apt to see.`),
      Q(`Master and servant are opposed in which way?`,
        [`Relatively, as correlatives`,`Contrarily, as extremes of one genus`,`Privatively, as a form and its lack`,`Contradictorily, as a thing and its negation`], 0,
        `Master and servant are each said by reference to the other, which is relative opposition.`,
        `Neither is the absence or the negation of the other, and they are not two extremes of one genus.`)
    ]},
    6:{ qs:[
      Q(`In a speech the introduction comes before the argument. In which sense is it prior?`,
        [`In order`,`In time only`,`In excellence`,`As a cause`], 0,
        `Aristotle gives the parts of a speech as an example of what is prior in order.`,
        `The introduction is not said to be better or a cause, and the order meant is that of the parts, not simply of time.`),
      Q(`“If there is a triangle, there is a figure, but not conversely.” In which sense is figure prior to triangle?`,
        [`The sequence of being cannot be reversed`,`It is older in time`,`It is more honorable`,`It is prior in the order of the parts of a speech`], 0,
        `The being of the one implies the other but not the reverse, which is Aristotle’s second sense of prior, as one is prior to two.`,
        `The point is not age, honor, or the order of a speech, but that the implication runs only one way.`),
      Q(`Why are the greater and the less simultaneous by nature?`,
        [`Each implies the other and neither causes the other`,`They came into being at the same moment`,`They are species of the same genus`,`The one is the cause of the other’s being`], 0,
        `If there is a greater there is a less, and conversely, and neither is the cause of the other’s being.`,
        `Simultaneity in time is a different sense, and if one caused the other it would be prior.`)
    ]},
    7:{ qs:[
      Q(`A puppy grows into a large dog. Which kind of motion is this?`,
        [`Increase`,`Alteration`,`Generation`,`Change of place`], 0,
        `Growing in size is increase, a change in quantity.`,
        `Alteration is change in quality, generation is coming to be, and change of place is local motion.`),
      Q(`Water warms in the sun without growing or moving. Which kind of motion is this?`,
        [`Alteration`,`Increase`,`Generation`,`Destruction`], 0,
        `Becoming warm is a change in quality, which is alteration.`,
        `Nothing grows, comes to be, or perishes; only a quality changes.`),
      Q(`“The soldier has a helmet on.” In which category is this “having”?`,
        [`Having`,`Quality`,`Quantity`,`Relation`], 0,
        `What is worn or carried on the body is the category of having.`,
        `A helmet worn on the head is neither a quality nor a quantity of the soldier, nor a reference to another; it is what he has on.`)
    ]}
  };
  /* ---- First Act: Definition and Division in Depth ---- */
  const ADV_DEFDIV = [
    { src:`${SRC_ART}; ${SRC_MAR}; ${SRC_JST}; Matthew Minerd, “BCS Logic 2023” (course slides); Aristotle, <i>Posterior Analytics</i> II.1, 8–10, 13; Plato, <i>Sophist</i>; R. E. Houser, <i>Logic as a Liberal Art</i> (Catholic University of America Press, 2020); Pierre Conway, <i>Aristotelian Formal and Material Logic</i> (University Press of America, 1995); St. Thomas Aquinas, <i>Summa theologiae</i> I-II, q. 55, a. 4.`,
      h:`<p><strong>Four questions.</strong> Aristotle observes that every question we ask about things is one of four kinds. Of a single term we ask <em>whether it is</em> (“Is there such a thing as a comet?”) and <em>what it is</em> (“What is a comet?”). Of a subject and predicate together we ask <em>whether it is so</em> (“Is the moon eclipsed?”) and <em>why it is so</em> (“Why is the moon eclipsed?”). The first two questions concern a single term; the second two concern a subject and a predicate together.</p>`
      + `<p>A definition answers the question “What is it?” Yet we cannot ask what a thing is until we know what its name means, and we do not seriously ask what it is until we know that it is. So the nominal definition comes first, the question of existence next, and the real definition after them. The four questions also show why definition and demonstration belong together: the answer to “What is it?” often turns out to be the answer to “Why is it so?”</p>` },
    { h:`<p><strong>Division leads to definition.</strong> Plato’s <em>Sophist</em> shows how division can lead to a definition. Seeking to define the angler, the speakers begin with art and divide it into making and acquiring; acquiring into exchange and taking by force; taking by force into open fighting and hunting; and hunting into the hunting of lifeless things and of living prey, and so on. At the end, the definition of angling gathers up the differences found along the way: an art, acquisitive, of taking by force, of hunting, of living prey, and the rest.</p>`
      + `<p>Each division keeps one member and divides it again, and every member kept stays within the first genus. So the definition is reached by narrowing one genus step by step, and each step contributes one difference. The genera all fall in one category (here, art, a kind of quality), even when the differences that divide them, such as “living” and “lifeless,” are taken from elsewhere.</p>` },
    { h:`<p><strong>Dividing in order.</strong> A division made to reach a definition must keep three requirements. It must state the essence, dividing by differences that belong to the genus as such and not by accidents. It must be <strong>ordered</strong>, so that no step is skipped and each member contains everything under the step before it. And it must be <strong>complete</strong>, continuing until it reaches a lowest species, which is divided only into individuals.</p>`
      + `<p>A division that skips a step leaves something out. If animal is divided at once into the whole-winged and the split-winged, the animals that do not fly fall under neither member; the division should first separate the flying from the walking and the swimming, and only then divide the flying. John of St. Thomas makes the same point: substance is not well divided at once into man, plant, and angel, but in order, into corporeal and spiritual, and corporeal into living and non-living, and so on. Where the members are not immediate and equal, the division should have two members, or as few as possible.</p>` },
    { h:`<p><strong>Gathering the difference.</strong> Often no single known difference marks off a species. Then we gather several characteristics, each of which belongs to more than the species but none of which goes outside its genus, until together they belong to that species alone. Aristotle’s example is the number three: it is odd, which it shares with other odd numbers; it is prime, which it shares with five and seven; and it is not the sum of other numbers, which it shares with two. Together these belong to three alone, and they lead toward its definition.</p>`
      + `<p>The characteristics gathered this way are signs of the difference, not yet the difference itself, and the hope is to reach the single difference that explains why they occur together. We use such signs instead of the property because a property is known to be proper only after the species is known. So the search for a definition usually begins from what is outward and common, and moves inward toward what is essential.</p>` },
    { h:`<p><strong>Definition by likeness.</strong> A second method begins from individuals rather than from the genus. We take a group of things called by one name and find what they have in common; then another group called by the same name, and find what they have in common; and then ask whether the two common features share something further. Aristotle’s example is magnanimity. Alcibiades, Achilles, and Ajax would not bear an insult; Lysander and Socrates were indifferent to good and bad fortune. If something is common to both, that is the definition; if nothing is, there are two kinds of magnanimity. Aristotle leaves the example there; in the <em>Nicomachean Ethics</em> he defines the magnanimous man as one who thinks himself worthy of great things and is worthy of them.</p>`
      + `<p>This method proceeds from what is easier for us to grasp, the single cases, and it guards against equivocation, since it compares small groups before forming a general notion. It has one rule: the likeness must be taken in the same sense throughout. If one group is “hot” in temperature and the other “hot” only by a figure of speech, nothing common will be found, because things alike only by metaphor do not share an essence.</p>` },
    { h:`<p><strong>What cannot be strictly defined.</strong> A strict definition gives a genus and a difference, and so some things cannot be defined in the strict sense. The highest genera, such as substance and quality, have no genus above them; they are made known by examples and by their properties. Individuals cannot be defined, because a definition states what is common, and the individual is reached by the senses and named. Being and the other notions said of every category cannot be defined by genus and difference either, since nothing lies outside them.</p>`
      + `<p>Accidents are defined, but in a special way: since an accident exists only in a subject, its subject enters its definition from outside its own genus. So “snub” is defined as a nose that is concave, and a passion of the soul is defined with reference to the body. The tradition therefore says that an accident has a definition by addition, and that the substance alone is defined in the full and proper sense.</p>` },
    { h:`<p><strong>Definition through the four causes.</strong> Because to define a thing is to say what makes it what it is, a full definition can name its causes. St. Thomas gathers the definition of virtue in this way: virtue is a good quality (its formal cause, with “quality” as its genus) of the mind (its material cause, the subject in which it exists), by which one lives rightly and which no one uses badly (its final cause, the good act), which God works in us without us (its efficient cause, said of infused virtue).</p>`
      + `<p>Not every definition names all four causes, and the best definition names the one that explains the rest. In natural things the form is usually that cause, and in things made for a purpose it is usually the end. This is why the tradition sets the essential definition above the causal one but values both: the causal definition by the outside causes (the maker and the end) often leads us to the essential one.</p>` },
    { h:`<p><strong>Definition and demonstration.</strong> Aristotle shows that the same account can appear as a definition and as a demonstration. “What is an eclipse of the moon?” One answer is “a loss of light from the moon,” which states the effect. Another is “a loss of light from the moon caused by the earth’s coming between it and the sun,” which states the cause. Put in order, the cause is the middle term of a demonstration whose conclusion is the effect: the moon is screened by the earth, and what is so screened loses its light, so the moon loses its light.</p>`
      + `<p>So there are three kinds of definition in relation to demonstration: the definition that states the cause, which serves as the middle term; the definition that states the effect, which is the conclusion; and the definition of the first principles, which is not demonstrated at all but understood. The definition through the cause is the most perfect, since it says not only what the thing is but why it is so. The cause meant here is the middle term, and the middle term is the essence of the thing defined; so this ranking agrees with the preference for the essential definition.</p>` }
  ];
  const ADV_DEFDIV_EXTRA = {
    0:{ qs:[
      Q(`“Why does iron rust?” Which of Aristotle’s four questions is this?`,
        [`Why it is so`,`Whether it is`,`What it is`,`Whether it is so`], 0,
        `It joins a subject and predicate and asks for the cause, which is the question “Why is it so?”`,
        `“Whether it is” and “What it is” concern a single term, and “Whether it is so” asks only for the fact.`),
      Q(`Why does the nominal definition come before the real one?`,
        [`We must know what a name means before asking what it is`,`The nominal definition states the thing’s essence more exactly`,`The real definition is only a guess until the name is fixed`,`A thing has no essence until it has been named by someone`], 0,
        `To ask what a thing is, we must first know what the name refers to; then we ask whether it exists, and then what it is.`,
        `The nominal definition states only what the name means; the essence is stated by the real definition.`),
      Q(`Which two of Aristotle’s questions concern a single term?`,
        [`Whether it is, and what it is`,`What it is, and why it is so`,`Whether it is so, and why it is so`,`Whether it is, and why it is so`], 0,
        `Asking whether a thing is and what it is concerns one term; the other two questions join a subject and predicate.`,
        `“Whether it is so” and “Why it is so” ask about a predicate belonging to a subject, which needs two terms.`)
    ]},
    1:{ qs:[
      Q(`A division begins with “living body” and divides it into plant and animal, then animal into rational and irrational. What does the definition of man gather?`,
        [`The genus and the differences found on the way`,`Every member that was set aside on the way down`,`The properties of each member of the division`,`Only the last difference, “rational”`], 0,
        `As in Plato’s angler, the definition collects the genus and each difference that led to the species.`,
        `The members set aside belong to other species, and the definition needs the genus as well as the last difference.`),
      Q(`In a division aimed at a definition, what is done with each step’s chosen member?`,
        [`It is divided again, staying within the first genus`,`It is compared with the members set aside earlier`,`It is replaced by a property that signals it`,`It is moved to a different category for clarity`], 0,
        `Each member kept is divided again, so that one genus is narrowed step by step toward the species.`,
        `The division narrows one genus; it does not leave the genus or exchange the member for a property.`),
      Q(`Must the differences used in a division fall in the same category as the genus?`,
        [`No, though the genera stay within one category`,`Yes, every difference must share the genus’s category`,`No, and the genera may change category at each step`,`Yes, otherwise the division is merely accidental`], 0,
        `The genera divided stay in one category, while the differences that divide them may be taken from elsewhere.`,
        `In the angler, the genera are all kinds of art, but differences such as “living” are not themselves arts.`)
    ]},
    2:{ qs:[
      Q(`Vehicles are divided at once into gasoline cars and electric cars. Which requirement does this break?`,
        [`Order, since a step is skipped and much is left out`,`Completeness, since it reaches a lowest species`,`The essence, since it divides by a difference`,`None of them, since the division has two members`], 0,
        `Skipping from vehicle to kinds of car leaves bicycles, ships, and wagons under neither member.`,
        `A division with two members can still skip a step, and here the members do not exhaust the whole.`),
      Q(`Why does John of St. Thomas prefer two members where the species are not immediate and equal?`,
        [`So that each step is ordered and nothing is skipped`,`Because every genus has exactly two species`,`Because three or more members always overlap one another`,`So that the division ends more quickly`], 0,
        `Dividing into two, and then dividing again, keeps the order of the genera and leaves nothing out.`,
        `Some genera have several equal species, which may be divided into all of them at once; the rule concerns order.`),
      Q(`When is a division aimed at definition complete?`,
        [`When it reaches a lowest species`,`When it reaches the supreme genus`,`When it lists the individuals by name`,`When it has made three divisions`], 0,
        `The division must continue until a species is reached that is divided only into individuals.`,
        `The supreme genus is the starting point, individuals are not defined, and no fixed number of steps is required.`)
    ]},
    3:{ qs:[
      Q(`A square is a plane figure with four sides, with equal sides, and with right angles; each mark is shared with other plane figures, but together they fit the square alone. What are these marks?`,
        [`Signs leading toward the difference`,`The specific difference itself`,`Three separate properties`,`Three accidents with no use`], 0,
        `Characteristics that each overflow the species but together belong to it alone are signs of the difference.`,
        `None of them is proper alone, so none is a property; and together they are useful, though not yet the difference.`),
      Q(`Why do we gather common characteristics instead of using the property at once?`,
        [`A property is known to be proper only after the species is known`,`A property never belongs to every single member of the species`,`A property belongs to the essence and so is too obvious`,`A property cannot be expressed in words`], 0,
        `To know that a feature is proper to a species, we must already know the species, so we begin from common signs.`,
        `A property belongs to every member and follows from the essence; the difficulty is that it presupposes the species.`),
      Q(`When we gather signs of a difference, what must each one do?`,
        [`Stay within the genus while belonging to more than the species`,`Belong to the species alone, to every member of it, and always`,`Go beyond the genus into other categories`,`Belong to only some members of the species`], 0,
        `Each sign overflows the species but not the genus; together they fit the species alone.`,
        `A sign that went outside the genus would not help, and one belonging to the species alone would already be proper.`)
    ]},
    4:{ qs:[
      Q(`Some brave men charge into danger and others hold firm under it. If nothing is common to both, what follows?`,
        [`There are two kinds of bravery`,`Bravery cannot be defined at all`,`Only one group is truly brave`,`The two groups are the same kind`], 0,
        `In definition by likeness, if the common features of the groups share nothing further, the name covers two kinds.`,
        `The method does not conclude that the thing is indefinable or that one group is false; it finds two species.`),
      Q(`Why must the likeness be taken in the same sense throughout?`,
        [`Things alike only by metaphor do not share an essence`,`A metaphor is always a false statement about the things it names`,`Each group must have the same number of members`,`The groups must be drawn from the same century`], 0,
        `If one group is so called properly and the other figuratively, nothing common will be found.`,
        `The rule concerns the sense of the likeness, not the number or the date of the cases.`),
      Q(`What is an advantage of definition by likeness?`,
        [`It begins from single cases, which are easier for us to grasp`,`It begins from the supreme genus, which is easiest to know`,`It avoids comparing any individuals at all`,`It requires no further inquiry after one example`], 0,
        `It proceeds from individuals, which are easier for us, and compares small groups before forming a general notion.`,
        `This method starts from individuals, not from the genus, and it compares several groups.`)
    ]},
    5:{ qs:[
      Q(`Why can “quality” not be defined by genus and difference?`,
        [`It is a highest genus, with no genus above it`,`It is an individual, known only by the senses`,`It is an accident, which has no definition`,`It is an artifact, made by the mind`], 0,
        `The highest genera are made known by examples and properties, since they have no genus above them.`,
        `Quality is not an individual or an artifact, and accidents can be defined by including their subject.`),
      Q(`“Bald” is defined as a head without hair. Why does “head” enter the definition?`,
        [`An accident is defined with its subject added`,`A head is the genus of baldness`,`Baldness is a substance with parts`,`Every definition of a quality must name a part of the body`], 0,
        `An accident exists only in a subject, so its subject enters its definition from outside its own genus.`,
        `“Head” is not the genus of baldness but its subject; baldness is an accident, a privation in a subject.`),
      Q(`Why can Socrates not be defined?`,
        [`A definition states what is common, and he is an individual`,`He is a highest genus, with no genus above him`,`He lived too long ago for us to know his essence`,`His name is equivocal and has several senses`], 0,
        `A definition states what is common to many, and the individual is reached by the senses and named.`,
        `Socrates is the opposite of a highest genus; and age or equivocation is not the reason.`)
    ]},
    6:{ qs:[
      Q(`“A hammer is a tool made by a smith for driving nails.” Which causes does this name?`,
        [`The efficient and the final`,`The material and the formal`,`The formal and the final`,`The material and the efficient`], 0,
        `The smith is the efficient cause, and driving nails is the end, the final cause.`,
        `Nothing is said of what the hammer is made of or of its shape; the definition names the maker and the purpose.`),
      Q(`In things made for a purpose, which cause usually explains the rest?`,
        [`The end`,`The matter`,`The maker`,`The shape`], 0,
        `The end explains why the thing is shaped and made as it is.`,
        `In things made for a purpose, the matter, the maker, and the shape are all chosen for the sake of the end.`),
      Q(`Why is a definition through causes a full definition?`,
        [`To define a thing is to say what makes it what it is`,`Every thing has exactly four parts`,`Causes are always easier to observe than their effects`,`A definition must be as long as possible`], 0,
        `Defining declares what makes a thing what it is, and that is to give its causes.`,
        `The causes are not parts, they are often harder to observe than effects, and brevity is a rule of definition.`)
    ]},
    7:{ qs:[
      Q(`“Thunder is a noise in the clouds caused by fire being quenched.” What role can this definition play in a demonstration?`,
        [`It states the cause, so it can be the middle term`,`It states only the effect, so it is the conclusion`,`It is a first principle, which cannot be demonstrated`,`It is nominal, and so has no place in demonstration`], 0,
        `A definition that gives the cause can serve as the middle term of a demonstration of the effect.`,
        `This definition names the cause, not only the effect, and it is real, not merely nominal.`),
      Q(`Which definition is the most perfect?`,
        [`The one that states the cause`,`The one that states the effect`,`The one that gives the name’s origin`,`The one with the most words`], 0,
        `The definition through the cause says what the thing is and why it is so.`,
        `The definition through the effect states only that something happens, and the origin of a name is nominal.`),
      Q(`Which kind of definition is not demonstrated at all?`,
        [`The definition of the first principles`,`The definition that states the effect`,`The definition that states the cause`,`The definition that gathers signs`], 0,
        `The definitions of first principles are understood directly, not proved.`,
        `Definitions by cause and by effect appear in demonstration as middle and conclusion.`)
    ]}
  };
  /* ---- First Act: Supposition ---- */
  const ADV_SUPP = [
    { src:`${SRC_ART}; ${SRC_MAR}; Timothy B. Noone and Gyula Klima, <i>A Little Practical Olde Logick</i> (manuscript); ${SRC_JST}; Matthew Minerd, “BCS Logic 2023” (course slides); ${SRC_OES}.`,
      h:`<p><strong>Signification and supposition.</strong> In “Man is a species,” “Man has three letters,” and “Peter is a man,” the word “man” means the same thing each time: a rational animal. Yet it stands for something different each time, since we cannot conclude that Peter is a species or that Peter has three letters. The tradition therefore distinguishes a term’s <strong>signification</strong>, what it makes us understand, from its <strong>supposition</strong> (Latin <em>suppositio</em>), what it stands for in a proposition.</p>`
      + `<p>A term has its signification by itself and always; it has supposition only within a proposition. John of St. Thomas defines supposition as the use of a term for that of which it is verified, according to what the copula requires. And it is chiefly the predicate that decides what the subject stands for: “species” makes “man” stand for the nature, “three letters” makes it stand for the word, and “is Peter” makes it stand for individual men.</p>` },
    { h:`<p><strong>Material and formal, proper and improper.</strong> A term has <strong>material</strong> supposition when it stands for itself, as a spoken or written word: in “‘Lamb’ is a four-letter word,” the term stands for the word “lamb,” not for any animal. It has <strong>formal</strong> supposition when it stands for what it signifies. In writing, material supposition is usually marked with quotation marks, which is why words mentioned as words are put in quotation marks.</p>`
      + `<p>Formal supposition is <strong>proper</strong> when the term stands for what it signifies in its proper sense, and <strong>improper</strong> when it stands for something by a figure of speech. In “The Lamb was offered for the sins of the world,” “Lamb” stands for Christ, and not for an animal. An argument that treats improper supposition as proper fails, as in “Every lamb has four legs; the Lamb was offered for the world; so something with four legs was offered for the world.”</p>` },
    { h:`<p><strong>Simple and personal.</strong> Formal supposition is <strong>simple</strong> when a common term stands for the nature it signifies, and not for the individuals that have it. In “Man is a species,” the subject stands for the nature as known, since no individual man is a species. It is <strong>personal</strong> when the term stands for the individuals that have the nature, as in “Man is mortal,” which is true of each man. “Personal” here has nothing to do with persons; a stone has personal supposition in “Some stone is heavy.”</p>`
      + `<p>The medieval logicians agreed on the name “simple supposition” but not on what it reaches. Realists such as Walter Burley, an English logician of the fourteenth century, held that the term stands for the common nature found in each individual. Nominalists such as William of Ockham, the English Franciscan, held that it stands for the concept in the mind. Either way, the inference from “Man is a species” to “Socrates is a species” fails, because the term “man” changes what it stands for.</p>` },
    { h:`<p><strong>Singular, determinate, distributive.</strong> Personal supposition is <strong>singular</strong> (or discrete) when the term stands for one individual, as “Socrates” or “this man.” It is <strong>common</strong> when a common term stands for many. Common supposition is <strong>determinate</strong> when we may descend to the individuals by “or”: “Some man is running” means that this man is running, or that one, or that other one. It is <strong>distributive</strong> when we may descend by “and”: “Every man is mortal” means that this man is mortal, and that one, and that other one.</p>`
      + `<p>The descent shows what the proposition requires to be true. A determinate term needs only one of the individuals to make the proposition true; a distributive term needs every one of them. From the singulars we may also ascend: from “This man is running” to “Some man is running,” but not from “This man is mortal” to “Every man is mortal,” since one instance does not establish all of them.</p>` },
    { h:`<p><strong>Merely confused and collective.</strong> Some common terms allow neither descent. In “Every man is an animal,” the predicate “animal” does not allow the descent “Every man is this animal, or every man is that animal,” since both are false; it allows only “Every man is this animal or that animal or that other one,” with the “or” inside the predicate. This is <strong>merely confused</strong> supposition, and it is the supposition of the predicate of a universal affirmative. The subject of Maritain’s example, “Workmen are needed to build a house,” has the same supposition, since no particular workman is needed.</p>`
      + `<p>A term has <strong>collective</strong> supposition when it stands for many things taken together as one subject, as in “The apostles were twelve.” No apostle was twelve, so we cannot descend to “Peter was twelve, and Paul was twelve.” Collective supposition must not be confused with distributive: “All the soldiers are brave” is said of each soldier, while “All the soldiers surrounded the fort” is said of them together.</p>` },
    { h:`<p><strong>Supposition and distribution.</strong> The modern word “distributed” names confused and distributive supposition, which is one mode, not three kinds. Common supposition is determinate or confused, and confused supposition is distributive or merely confused. In A, “Every S is P,” the subject is distributive and the predicate merely confused. In E, “No S is P,” both terms are distributive. In I, “Some S is P,” both terms are determinate. In O, “Some S is not P,” the subject is determinate and the predicate distributive. These are the rules of distribution that the exercises on the syllogism use.</p>`
      + `<p>The modes of supposition also explain conversion. E and I convert simply because their two terms have the same mode of supposition, so exchanging them changes nothing. A and O do not convert simply, because their terms have different modes, and a change in a term’s supposition is enough to spoil an inference. For this reason the predicate of an affirmative is taken particularly, and the predicate of a negative is always taken universally.</p>` },
    { h:`<p><strong>The copula and existence.</strong> What a term stands for also depends on the time the copula signifies. An affirmative whose subject stands for nothing at that time is false: said now, “Napoleon will be emperor” is false, since there is no future Napoleon. A negative can be true of such a subject: “Napoleon is not in Paris” is true. This is why affirmatives carry existential import and negatives do not.</p>`
      + `<p>Maritain distinguishes <strong>natural</strong> supposition, where the predicate belongs to the subject by its essence and the copula abstracts from time, from <strong>accidental</strong> supposition, where the predicate belongs by accident and the copula signifies actual existence. So “Every triangle has three sides” is true even if no triangle now exists, because in necessary matter the subject is extended to what is possible, while “Peter is running” is false if Peter does not exist. Words such as “can,” “will,” and “was” likewise extend a term to possible, future, or past things, and qualifiers such as “the poor” or “of this town” narrow it. The technical names are <strong>ampliation</strong> and <strong>restriction</strong>.</p>` },
    { h:`<p><strong>A change of supposition breaks the argument.</strong> Since a valid inference needs each term to stand for the same things throughout, an argument fails when a term’s kind of supposition changes from one premise to another. “Animal is a genus; the dog is an animal; so the dog is a genus” fails, because in the first premise “animal” has simple supposition, standing for the nature as known, and in the second it has personal supposition, standing for individual animals. The Fallacies deck, in its card on the figure of speech, places the like sophism “Man is a species; Socrates is a man; so Socrates is a species” under that fallacy; both placements are traditional.</p>`
      + `<p>The same rule covers a change in the manner of existence. From “Every centaur is half man, half horse” and “A centaur is a creature of fable,” we may conclude that some creature of fable is half man, half horse, but not that such a creature really exists, since the premises speak of the centaur only as imagined. This is the point of the card on the copula and existence: the conclusion carries only the kind of existence the premises assert. Many errors that look like failures of form are failures of supposition, and the remedy is the one the disputations used: to distinguish what each term stands for.</p>` }
  ];
  const ADV_SUPP_EXTRA = {
    0:{ qs:[
      Q(`What is the difference between a term’s signification and its supposition?`,
        [`Signification is what it means; supposition, what it stands for`,`Signification belongs to spoken words; supposition belongs to written words`,`Signification changes with the predicate; supposition never changes`,`Signification is said of nouns; supposition is said of verbs alone`], 0,
        `A term keeps its meaning by itself, but what it stands for depends on the proposition in which it is used.`,
        `It is supposition, not signification, that changes with the predicate, and both belong to spoken and written terms.`),
      Q(`Which part of a proposition chiefly decides what its subject stands for?`,
        [`The predicate`,`The copula alone`,`The first word`,`The speaker’s intention`], 0,
        `The tradition says the subject stands for what the predicate allows, as “species” makes “man” stand for the nature.`,
        `The copula fixes the time, but it is chiefly the predicate that decides the kind of supposition.`),
      Q(`Does a term have supposition when it is said by itself, outside any proposition?`,
        [`No, it has signification, but supposition only in a proposition`,`Yes, it has the same supposition everywhere it is used`,`Yes, but only when it is a proper name`,`No, a term has neither meaning nor supposition alone`], 0,
        `Signification belongs to a term by itself; supposition belongs to it only as part of a proposition.`,
        `A term said alone still means something, but it stands for nothing until it is used in a proposition.`)
    ]},
    1:{ qs:[
      Q(`In “‘Horse’ is a noun,” what supposition does the subject have?`,
        [`Material`,`Simple`,`Personal`,`Improper`], 0,
        `The subject stands for the word itself, which is material supposition.`,
        `No horse is a noun; the term stands for the word, not for the nature or for any animal.`),
      Q(`“The lion of the tribe of Judah has conquered.” What supposition does “lion” have?`,
        [`Improper, since it stands for Christ by a figure`,`Material, since it stands for the word itself`,`Simple, since it stands for the nature of lions`,`Proper, since it stands for an animal`], 0,
        `The term stands for what it signifies only by a figure of speech, which is improper supposition.`,
        `The term does not stand for the word, the nature, or any actual lion; it stands for Christ by metaphor.`),
      Q(`Why are words mentioned as words put in quotation marks?`,
        [`To mark material supposition, where a term stands for itself`,`To mark improper supposition, where a term is used as a figure`,`To show that the word is in a foreign language`,`To show that the word is being stressed`], 0,
        `Quotation marks show that the term stands for the word itself, which is material supposition.`,
        `A figure of speech, a foreign word, and stress are marked in other ways, if at all.`)
    ]},
    2:{ qs:[
      Q(`In “Dog is a species of mammal,” what supposition does “dog” have?`,
        [`Simple`,`Personal`,`Material`,`Collective`], 0,
        `No individual dog is a species, so the term stands for the nature, which is simple supposition.`,
        `It does not stand for the word, for the individual dogs, or for dogs taken together.`),
      Q(`In “Some tree is tall,” what supposition does “tree” have?`,
        [`Personal`,`Simple`,`Material`,`Improper`], 0,
        `The term stands for the individual trees that have the nature, which is personal supposition.`,
        `A species is not tall, and neither is the word; the subject stands for individual trees, in the proper sense.`),
      Q(`On Ockham’s view, what does “man” stand for in “Man is a species”?`,
        [`The concept in the mind`,`The common nature in things`,`Each individual man`,`The spoken word “man”`], 0,
        `Ockham, a nominalist, denied common natures and held that the term stands for the concept.`,
        `The common nature is Burley’s realist answer, individuals would be personal supposition, and the word would be material.`)
    ]},
    3:{ qs:[
      Q(`In “Some river is frozen,” what supposition does “river” have?`,
        [`Determinate`,`Distributive`,`Singular`,`Collective`], 0,
        `We may descend by “or”: this river, or that one, or that other one, is frozen.`,
        `We cannot descend by “and,” the term is common rather than singular, and the rivers are not taken together.`),
      Q(`In “Every river flows downhill,” what supposition does “river” have?`,
        [`Distributive`,`Determinate`,`Merely confused`,`Simple`], 0,
        `We may descend by “and”: this river flows downhill, and that one, and that other one.`,
        `The proposition is about each river, so the descent is by “and,” and the term stands for individuals.`),
      Q(`From “This dog barks,” to which proposition may we ascend?`,
        [`Some dog barks`,`Every dog barks`,`No dog barks`,`Dog is a species`], 0,
        `From a singular we may ascend to the determinate “Some dog barks,” but not to the distributive “Every dog barks.”`,
        `One instance does not establish every case, and the other options change the quality or the supposition.`)
    ]},
    4:{ qs:[
      Q(`In “Every bird is an animal,” what supposition does “animal” have?`,
        [`Merely confused`,`Distributive`,`Determinate`,`Collective`], 0,
        `We cannot descend to “every bird is this animal, or every bird is that animal,” only to “every bird is this animal or that animal,” which is merely confused supposition.`,
        `The predicate of a universal affirmative is neither distributed nor determinate.`),
      Q(`“The jurors were twelve.” What supposition does “jurors” have?`,
        [`Collective`,`Distributive`,`Determinate`,`Material`], 0,
        `No juror was twelve; the jurors are taken together as one subject, which is collective supposition.`,
        `We cannot descend to each juror by “and” or by “or,” and the term does not stand for the word.`),
      Q(`“A key is needed to open this door.” Why can we not descend to “This key is needed, or that key is needed”?`,
        [`No particular key is needed, so the supposition is merely confused`,`Every key is needed, so the supposition is distributive`,`The keys are all taken together, so the supposition is collective`,`The word “key” is meant, so the supposition is material`], 0,
        `As with Maritain’s workmen, the term stands for keys without picking out any one, which is merely confused supposition.`,
        `Not every key is needed, the keys are not taken together, and the word itself is not meant.`)
    ]},
    5:{ qs:[
      Q(`In O, “Some S is not P,” which term is distributed?`,
        [`The predicate only`,`The subject only`,`Both terms`,`Neither term`], 0,
        `In O the subject is determinate and the predicate distributive.`,
        `Both terms are distributed in E and neither in I; in O only the predicate.`),
      Q(`Why does E convert simply?`,
        [`Both its terms have the same mode, distributive`,`Its subject is determinate and its predicate distributive`,`It is negative, and every negative converts`,`Its terms are both singular`], 0,
        `When both terms have the same mode of supposition, exchanging them changes nothing.`,
        `O is negative and does not convert simply; what matters is that E’s two terms share one mode.`),
      Q(`What did the medieval logicians call what modern books call a distributed term?`,
        [`Confused and distributive supposition`,`Common, confused, and distributive, as three kinds`,`Simple supposition`,`Material supposition`], 0,
        `“Distributed” names one mode, confused and distributive supposition. Common supposition is determinate or confused, and confused supposition is distributive or merely confused.`,
        `The phrase with three names is one mode, not three kinds; determinate supposition is undistributed, and simple and material are other kinds.`)
    ]},
    6:{ qs:[
      Q(`There are no dragons. Is “Some dragon is green” true or false?`,
        [`False, since its subject stands for nothing`,`True, since nothing contradicts it`,`Neither, since it is about nothing`,`True in natural supposition`], 0,
        `An affirmative proposition whose subject stands for nothing is false.`,
        `The rule leaves no third value: the affirmative is false, and its contradictory “No dragon is green” is true.`),
      Q(`There are no dragons. Is “No dragon is green” true or false?`,
        [`True, since a negative needs no existing subject`,`False, since its subject stands for nothing that exists`,`Neither, since it is about nothing`,`False in natural supposition`], 0,
        `A negative proposition can be true when its subject stands for nothing, which is why negatives carry no existential import.`,
        `Only affirmatives are made false by an empty subject.`),
      Q(`In “Every circle has a center,” what supposition does “circle” have?`,
        [`Natural, since the predicate belongs by essence`,`Accidental, since some circles are drawn badly`,`Material, since “circle” is a word`,`Collective, since the circles are taken together`], 0,
        `The predicate belongs to the subject by its essence, and the copula abstracts from time, which is natural supposition.`,
        `Accidental supposition is for predicates that belong by accident, and the term here stands for circles, each one.`)
    ]},
    7:{ qs:[
      Q(`“Bread is a word; I ate bread; so I ate a word.” What has gone wrong?`,
        [`“Bread” changes from material to personal supposition`,`“Bread” changes from simple to collective supposition`,`The argument has two negative premises`,`Nothing, the argument is valid`], 0,
        `In the first premise the term stands for the word, in the second for the food, so the middle term stands for different things.`,
        `There is no negative premise and nothing collective; the term changes from the word to the thing.`),
      Q(`“Rose is a species of flower; this flower is a rose; so this flower is a species of flower.” What has gone wrong?`,
        [`The middle term shifts from the nature to an individual`,`The conclusion is true, so nothing has gone wrong`,`Both premises are affirmative, which is not allowed in this figure`,`The argument has two particular premises`], 0,
        `In the first premise “rose” stands for the nature and in the second for individual roses, so the middle term stands for different things.`,
        `The conclusion is false and the premises are true, and two affirmatives may conclude; the fault is the change in what the middle term stands for.`),
      Q(`What remedy do the disputations use against a change of supposition?`,
        [`To distinguish what each term stands for`,`To deny every premise of the argument`,`To grant the argument and narrow the thesis`,`To convert each premise simply`], 0,
        `The respondent distinguishes the senses in which the term is taken, granting one and denying the other.`,
        `Denying true premises or granting a bad argument does not answer it; the distinction shows where it fails.`)
    ]}
  };
  /* ---- Second Act: Opposition and Conversion in Depth ---- */
  const ADV_OPP = [
    { src:`${SRC_ART}; ${SRC_MAR}; Timothy B. Noone and Gyula Klima, <i>A Little Practical Olde Logick</i> (manuscript); Matthew Minerd, “BCS Logic 2023” (course slides); Aristotle, <i>De interpretatione</i> 7 and 9, with St. Thomas Aquinas’s commentary, bk. I, lect. 10 and 13–14.`,
      h:`<p><strong>The strongest opposition.</strong> It is natural to think that contraries, “Every man is just” and “No man is just,” are the most opposed of propositions. The tradition holds the opposite: <strong>contradiction</strong> is the strongest opposition, because the one proposition simply denies what the other affirms, and the two agree in nothing. Contraries still agree in something, since both take the subject universally, and so both can be false together.</p>`
      + `<p>Subalternation, between A and I or between E and O, is not opposition in the proper sense at all. The subaltern says the same thing as its universal, only partially: “Some man is mortal” repeats in part what “Every man is mortal” says. It is placed on the square of opposition for the sake of symmetry, so that all the relations between propositions with the same terms can be seen together, but Aristotle’s own account of opposition does not include it.</p>` },
    { h:`<p><strong>Singulars and the universal taken as one.</strong> The square assumes a universal and a particular subject. A singular proposition has only one kind of opposition: “Peter is wise” and “Peter is not wise” are contradictories, since the second simply denies the first, and there is no singular that could be their contrary or their subaltern. So two singulars of opposite quality cannot both be true or both be false.</p>`
      + `<p>The same holds when a universal nature is taken as one thing, as in “Man is the noblest of bodily creatures” and “Man is not the noblest of bodily creatures.” St. Thomas explains that here the predicate is said of the nature as it is one in the mind, though what is said belongs to the nature as it is in things (commentary on the <em>De interpretatione</em>, bk. I, lect. 10). Such propositions behave like singulars and admit only contradiction.</p>` },
    { h:`<p><strong>What the matter adds.</strong> The laws of opposition hold by form, whatever the terms: contraries cannot both be true, subcontraries cannot both be false, and contradictories divide truth and falsity between them. The matter can add more. In <strong>necessary matter</strong>, where the predicate belongs to the subject by its essence, contraries cannot both be false and subcontraries cannot both be true: “Every man is mortal” is true and “No man is mortal” is false, and “Some man is not mortal” is false.</p>`
      + `<p>In <strong>contingent matter</strong>, where the predicate may or may not belong, contraries are usually both false and subcontraries both true: “Every man is just” and “No man is just” are false, while “Some man is just” and “Some man is not just” are true. Only in necessary or impossible (remote) matter may we conclude from the truth of one subcontrary to the falsity of the other. An argument that does so in contingent matter mistakes a feature of the matter for a law of the form.</p>` },
    { h:`<p><strong>Future contingents.</strong> Aristotle asks whether “There will be a sea battle tomorrow” and “There will not be a sea battle tomorrow” must be one true and the other false now. If one were already true, the battle would be already fixed, and deliberation would be useless. His answer, which St. Thomas develops in his commentary (bk. I, lect. 13–14), is that such propositions about a contingent future are not yet determinately true or false, since their causes do not yet determine them to one side.</p>`
      + `<p>The law of contradiction is not abandoned. The disjunction “Either there will be a sea battle tomorrow or there will not” is necessarily true now; what is not yet determined is which part is true. So the two propositions exclude each other, but neither can yet be called the true one. This applies only to the contingent future: “The sun will rise tomorrow” concerns what follows from causes already at work, and “There was a battle yesterday” is already determinately true or false.</p>` },
    { h:`<p><strong>Conversion rests on supposition.</strong> To convert a proposition is to exchange its terms so as to say the same truth. The term that becomes the subject must keep the extension it had as the predicate, and so the rules of conversion follow from the supposition of the terms. In E both terms are distributive, and in I both are determinate, so E and I convert simply. In A the subject is distributive and the predicate merely confused, so A converts only by limitation: “Every man is mortal” gives “Some mortal is a man.”</p>`
      + `<p>O does not convert at all. In “Some animal is not a dog,” the predicate “dog” is distributive, and some animal is excluded from every dog; made the subject, “dog” becomes determinate, and “Some dog is not an animal” is false. So the supposed converse does not say the same truth. O converts only by contraposition: “Some animal is not a dog” gives “Some non-dog is not a non-animal,” that is, some non-dog is an animal.</p>` },
    { h:`<p><strong>Buridan’s limits on contraposition and obversion.</strong> John Buridan, the fourteenth-century master at Paris, noticed that contraposition and obversion need a further condition when the affirmatives carry existential import. “Every man is a being” is true, but its contrapositive “Every non-being is a non-man” is false, because nothing is a non-being, and an affirmative whose subject stands for nothing is false. Contraposition of A and of O holds only when the terms stand for things that actually exist.</p>`
      + `<p>Obversion moves safely from the affirmative side of the square to the negative: “Every lawyer is learned” gives “No lawyer is non-learned.” But it moves from the negative to the affirmative only when the subject exists: “No chimera is a woman” is true, while “Every chimera is a non-woman” is false, since there are no chimeras. This is the same doctrine of existential import that the course follows throughout, applied to the operations on a single proposition.</p>` },
    { h:`<p><strong>Not an inference in the proper sense.</strong> Conversion, obversion, subalternation, and the passage from a proposition to the falsity of its contradictory are often called immediate inferences. Maritain argues that none of them is an inference in the proper sense. In each, the mind says the same truth in a second form: “No man is an angel” and “No angel is a man” are two ways of stating one separation of the two terms, and the mind does not advance from a known truth to one not yet known.</p>`
      + `<p>An inference in the proper sense reaches a new truth, and for that the mind must relate one known truth to another; so every inference properly so called has at least two premises and three terms. The immediate operations are still useful, since they let us restate a premise so that it fits an argument, and the logician can verify them by a syllogism. But the verification comes after the mind has already seen that the two forms say the same thing.</p>` },
    { h:`<p><strong>The reciprocal and the inverse.</strong> The <strong>reciprocal</strong> of a universal affirmative exchanges its terms and keeps the universal quantity: the reciprocal of “Every square is a rectangle” is “Every rectangle is a square.” Since the predicate of an affirmative is taken particularly, the reciprocal says a different truth and must be proved on its own. Sometimes it is true, as with “Every square is a rhombus with right angles”; sometimes it is false, as here.</p>`
      + `<p>The <strong>inverse</strong> negates both the subject and the copula: the inverse of “Every man is an animal” is “Every non-man is not an animal,” which says in negative form the same thing as the reciprocal, and is false. To pass from a universal affirmative to its reciprocal is a common error: from “Every great artist astonishes ordinary people” it does not follow that whoever astonishes ordinary people is a great artist.</p>` },
    { h:`<p><strong>The modern reading of the universal.</strong> Modern predicate logic, developed by Gottlob Frege, the German mathematician and logician, writes “All men are mortal” as “For anything whatever, if it is a man, it is mortal.” On this reading the universal is true when there are no men at all, since a conditional with a false antecedent is counted true; so the A proposition carries no existential import, the step from “All S are P” to “Some S are P” fails, and the square loses subalternation, contrariety, and subcontrariety as well, so that only contradiction remains.</p>`
      + `<p>The tradition answers in two ways. First, the formula represents the universal without saying what it means: “All men are mortal” attributes mortality to man as such, and does not merely report that nothing in the universe is a man without being mortal. Second, as Gyula Klima, the Hungarian-American logician, and Timothy B. Noone, the American medievalist, point out, the medieval logicians did see the problem of empty terms, and placed existence in the affirmatives rather than at the bottom of the square. Contemporary Aristotelians, such as Klima and Terence Parsons, the American logician, have since shown that the older square can be stated formally without contradiction.</p>` }
  ];
  const ADV_OPP_EXTRA = {
    0:{ qs:[
      Q(`Why is contradiction a stronger opposition than contrariety?`,
        [`Contradictories agree in nothing, while contraries can both be false`,`Contradictories are both universal, while contraries are not`,`Contraries can both be true, while contradictories cannot`,`Contradictories differ only in quantity, and contraries in quality`], 0,
        `The contradictory simply denies what the other affirms; contraries keep the universal subject and can share falsity.`,
        `Contraries cannot both be true, and contradictories differ in both quality and quantity when one is universal and the other particular.`),
      Q(`Why is subalternation not opposition in the proper sense?`,
        [`The subaltern repeats in part what the universal says`,`The subaltern denies part of what the universal affirms`,`The two can never both be true`,`The two have different terms`], 0,
        `“Some S is P” says partially what “Every S is P” says, so the two are not opposed.`,
        `Subalterns share the same terms and quality and can both be true; nothing is denied.`),
      Q(`“Every planet is inhabited” and “No planet is inhabited” are both false. What does this show?`,
        [`Contraries can both be false`,`Contradictories can both be false`,`Subcontraries can both be false`,`The square fails for planets`], 0,
        `Contraries share something, the universal subject, and so they can both be false.`,
        `Contradictories cannot both be false, and these two are universals of opposite quality, which is contrariety.`)
    ]},
    1:{ qs:[
      Q(`What opposition holds between “Plato is a poet” and “Plato is not a poet”?`,
        [`Contradiction`,`Contrariety`,`Subcontrariety`,`Subalternation`], 0,
        `Two singulars of opposite quality are contradictories; the second simply denies the first.`,
        `Contrariety and subcontrariety need a universal or a particular subject, which a singular does not have.`),
      Q(`Can “Rome is the capital of Italy” and “Rome is not the capital of Italy” both be false?`,
        [`No, since singulars of opposite quality are contradictories`,`Yes, since they are contraries, which can both be false`,`Yes, since singular propositions have no truth value`,`No, since they are subcontraries, which cannot both be false`], 0,
        `Two singulars of opposite quality are contradictories, which divide truth and falsity between them.`,
        `Singulars admit only contradiction, not contrariety or subcontrariety.`),
      Q(`“The horse is a noble animal,” said of the nature as one. What opposition does its denial have to it?`,
        [`Only contradiction, as with singulars`,`Contrariety, as with universals`,`Subcontrariety, as with particulars`,`No opposition, since it is not a proposition`], 0,
        `A universal nature taken as one behaves like a singular subject, so its denial is its contradictory.`,
        `The subject is not taken universally or particularly here, so only contradiction applies.`)
    ]},
    2:{ qs:[
      Q(`“Some triangle has three angles” is true, and the matter is necessary. What of “Some triangle does not have three angles”?`,
        [`It is false`,`It is true`,`It is undetermined`,`It is neither true nor false`], 0,
        `In necessary matter two subcontraries cannot both be true, so the second is false.`,
        `By form alone the subcontrary would be undetermined; the necessary matter decides it.`),
      Q(`In contingent matter, what usually holds of “Some bird sings” and “Some bird does not sing”?`,
        [`Both are true`,`Both are false`,`One is true and one false`,`Neither has a truth value`], 0,
        `Where the predicate may or may not belong, subcontraries are usually both true.`,
        `Subcontraries cannot both be false, and in contingent matter they are usually both true.`),
      Q(`When may we conclude from the truth of one subcontrary to the falsity of the other?`,
        [`Only in necessary or impossible matter`,`In every matter whatever`,`Only in contingent matter`,`Only when both are singular`], 0,
        `Only where the predicate belongs by essence, or is excluded by it, can two subcontraries not both be true.`,
        `By form alone subcontraries can both be true, so the conclusion depends on necessary or impossible matter.`)
    ]},
    3:{ qs:[
      Q(`On Aristotle’s view, what is true now about “It will rain here a year from today”?`,
        [`It is not yet determinately true or false`,`It is already true or already false`,`It is necessarily false, since it is future`,`It is not a proposition at all`], 0,
        `A proposition about a contingent future is not yet determinately true or false.`,
        `It is a proposition, and its truth is not fixed yet; nothing makes it necessarily false.`),
      Q(`Which proposition is necessarily true now?`,
        [`Either the ship will sail tomorrow or it will not`,`The ship will sail tomorrow`,`The ship will not sail tomorrow`,`The ship can neither sail nor stay`], 0,
        `The disjunction of the two contradictories is necessary; which part is true is not yet determined.`,
        `Neither part of the disjunction is yet determinately true, and the last option is impossible.`),
      Q(`Why is “The sun will rise tomorrow” not a future contingent in this sense?`,
        [`It follows from causes already at work`,`It is about the past and not the future`,`It is a negative proposition`,`It is about a substance, not an accident`], 0,
        `What follows from causes already at work is determined now, unlike what depends on choice or chance.`,
        `The proposition is affirmative and about the future; what matters is that its causes are already acting.`)
    ]},
    4:{ qs:[
      Q(`Why does “No fish is a mammal” convert simply?`,
        [`Both its terms are distributive`,`Both its terms are determinate`,`Its subject is singular`,`Its predicate is merely confused`], 0,
        `In E both terms stand for each of their individuals, so exchanging them keeps the same truth.`,
        `The terms of E are distributive, not determinate or merely confused, and the subject is common.`),
      Q(`What is the converse of “Every rose is a flower”?`,
        [`Some flower is a rose`,`Every flower is a rose`,`No flower is a rose`,`Some flower is not a rose`], 0,
        `A converts only by limitation, since its predicate is taken particularly.`,
        `“Every flower is a rose” would take the predicate universally, which the original never did.`),
      Q(`Why does “Some animal is not a dog” have no simple converse?`,
        [`In the converse the new subject could stand for other things`,`It is affirmative, and only negatives convert`,`It is universal, and universals convert only by limitation`,`Its terms are both distributive`], 0,
        `In the original the predicate stands for dogs, from whom some animal is excluded; as a subject it changes what it stands for, and “Some dog is not an animal” is false.`,
        `O is particular and negative; its subject is determinate and its predicate distributive, so the modes do not match.`)
    ]},
    5:{ qs:[
      Q(`On Buridan’s account, what further condition does the contraposition of an A proposition require?`,
        [`That its terms stand for things that actually exist`,`That its subject be a singular term`,`That its predicate be distributed`,`That it be in necessary matter`], 0,
        `An affirmative whose subject stands for nothing is false, so the contrapositive holds only when its terms stand for existing things.`,
        `The condition concerns existence, not the subject’s singularity, the predicate’s distribution, or the matter.`),
      Q(`“No unicorn is a horse” is true. What of “Every unicorn is a non-horse”?`,
        [`False, since there are no unicorns`,`True, since it is the obverse`,`True, since unicorns are not horses`,`Undetermined, since unicorns are imaginary`], 0,
        `Obversion from E to A needs an existing subject; an affirmative about nothing is false.`,
        `Obversion from the negative side to the affirmative holds only when the subject exists.`),
      Q(`In which direction is obversion always safe?`,
        [`From affirmative to negative`,`From negative to affirmative`,`From particular to universal`,`In every direction alike`], 0,
        `Moving from the affirmative side to the negative needs no further condition, since negatives carry no existential import.`,
        `Moving from negative to affirmative requires the subject to exist, and obversion never changes quantity.`)
    ]},
    6:{ qs:[
      Q(`Why does Maritain deny that conversion is an inference properly so called?`,
        [`The mind states one truth in two forms and does not advance`,`Conversion is invalid unless a premise is added`,`Conversion uses three terms instead of two`,`Conversion reaches a truth that is not yet known`], 0,
        `The converse says the same truth as the original, so the mind does not move to a new truth.`,
        `Conversion is valid, uses two terms, and reaches no new truth; that is why it is not an inference properly so called.`),
      Q(`How many premises does an inference in the proper sense require at least?`,
        [`Two`,`One`,`Three`,`None`], 0,
        `To reach a new truth the mind must relate one known truth to another, so it needs at least two premises and three terms.`,
        `One proposition alone can only be restated, not developed into a new truth.`),
      Q(`What use do the immediate operations still have?`,
        [`They let us restate a premise so that it fits an argument`,`They prove new conclusions from a single premise`,`They replace the syllogism in demonstration`,`They show which premises are true`], 0,
        `Restating a premise in an equivalent form can make it fit the figure of an argument.`,
        `They do not prove new conclusions, replace the syllogism, or establish truth.`)
    ]},
    7:{ qs:[
      Q(`What is the reciprocal of “Every whale is a mammal”?`,
        [`Every mammal is a whale`,`Some mammal is a whale`,`No whale is a non-mammal`,`Every non-whale is not a mammal`], 0,
        `The reciprocal exchanges the terms and keeps the universal quantity.`,
        `“Some mammal is a whale” is the converse by limitation; the others are the obverse and the inverse.`),
      Q(`Why must a reciprocal be proved on its own?`,
        [`It says a different truth from the original`,`It is always false`,`It is the contradictory of the original proposition`,`It changes the quality of the original`], 0,
        `Since the predicate of an affirmative is taken particularly, the reciprocal adds a claim the original did not make.`,
        `A reciprocal is sometimes true, it is not a contradictory, and it keeps the quality.`),
      Q(`What does the inverse of “Every whale is a mammal” say in negative form?`,
        [`The same as its reciprocal`,`The same as the original`,`The same as its converse by limitation`,`The same as its obverse`], 0,
        `“Every non-whale is not a mammal” says the same as “Every mammal is a whale.”`,
        `The inverse is false here, while the original, its converse by limitation, and its obverse are true.`)
    ]},
    8:{ qs:[
      Q(`On the modern reading, when is “All griffins have wings” true?`,
        [`Even when there are no griffins`,`Only when some griffin exists`,`Only when every winged thing is a griffin`,`Never, since griffins are imaginary`], 0,
        `It is read as “For anything, if it is a griffin, it has wings,” which is counted true when nothing is a griffin.`,
        `The modern reading gives the universal no existential import, so it does not require any griffin.`),
      Q(`Which relations of the square does the modern reading give up?`,
        [`Subalternation, contrariety, and subcontrariety`,`Contradiction only`,`Subcontrariety and contradiction`,`Every relation on the square, contradiction included`], 0,
        `Without existential import, the universals A and E can both be true when the subject stands for nothing, and the particulars I and O can both be false, so subalternation, contrariety, and subcontrariety fail, and only contradiction remains.`,
        `Contradiction remains. The other three relations fail when the subject can stand for nothing.`),
      Q(`What is the tradition’s first answer to the modern reading?`,
        [`The formula represents the universal without saying what it means`,`The modern formula is simply invalid`,`Universals should be read as particulars`,`Existential import belongs to the negatives`], 0,
        `“All men are mortal” attributes mortality to man as such; the formula only reports that nothing is a man without being mortal.`,
        `The tradition does not call the formula invalid, and it places existence in the affirmatives, not in the negatives.`)
    ]}
  };
  /* ---- Second Act: The Modal Proposition in Depth ---- */
  const ADV_MODP = [
    { src:`${SRC_ART}; ${SRC_MAR}; ${SRC_JST}; Matthew Minerd, “BCS Logic 2023” (course slides); Aristotle, <i>On Interpretation</i> 12–13 and <i>Prior Analytics</i> I.3, 13; St. Thomas Aquinas, commentary on the <i>Sentences</i> I, d. 38, q. 1, a. 5, ad 5, and <i>De veritate</i>, q. 2, a. 12, ad 4.`,
      h:`<p><strong>Modes of the copula.</strong> A mode is a determination added to something. Some modes affect only the subject, as in “The prudent man is wise,” and some affect only the predicate, as in “Peter runs fast.” Neither makes a proposition modal. A proposition is modal only when the mode affects the copula itself, that is, the way in which the predicate belongs to the subject: “Peter is necessarily a man,” “Peter can be ill.”</p>`
      + `<p>There are four such modes: necessity (it cannot not be), impossibility (it cannot be), possibility (it can be), and contingency (it can be and can also not be). In the <em>Prior Analytics</em> Aristotle treats the syllogism only with necessity and possibility, while <em>On Interpretation</em> 12–13 treats all four modes. A proposition with no mode of the copula, such as “Man is rational,” is called simply attributive (Latin <em>de inesse</em>, “of being in”).</p>` },
    { h:`<p><strong>Quality and quantity of a modal.</strong> A modal proposition has two qualities, that of the mode and that of the dictum. The proposition is affirmative when both are affirmative or both are negative, and negative when one is affirmative and the other negative. So “It is impossible that it is not,” with a negative mode and a negative dictum, is affirmative, and it comes to “It is necessary that it is.” Counting “impossible” as “not possible” makes this rule work.</p>`
      + `<p>The modes also have a kind of quantity. Necessity and impossibility are like universals, since what must be or cannot be holds in every case; possibility and contingency are like particulars, since what can be need hold only sometimes. This is why the four modes stand at the four corners of a square: “necessary” with the universal affirmative, “impossible” with the universal negative, “possible” with the particular affirmative, and “possible not” with the particular negative.</p>` },
    { h:`<p><strong>The square with a quantified dictum.</strong> When the dictum itself has a universal or particular subject, the modal square grows to eight corners. “It is necessary that every man is mortal,” “It is necessary that some man is mortal,” “It is possible that every man is a geometer,” and so on, each standing in fixed relations to the others. The relations still follow the pattern of the square: what is necessary of every subject is necessary of some, and what is possible of some is not thereby possible of every.</p>`
      + `<p>The ordinary wording can mislead. “It is impossible that every man runs” does not mean “It is impossible that any man runs”; it means only “It is not possible that every man runs,” which is the contradictory of “It is possible that every man runs.” To say that no man can run, we must say “It is impossible that any man runs,” or simply “No man can run.” Maritain gives a serious example: from the falsity of “Every error can be avoided without revelation,” it follows only that some error cannot be so avoided, not that none can.</p>` },
    { h:`<p><strong>Marking the combinations.</strong> To keep the combinations of mode and dictum in view, the scholastics marked each with a vowel (A, E, I, U): A when both mode and dictum are affirmative, E when the dictum is negative and the mode affirmative, I when the mode is negative and the dictum affirmative, and U when both are negative. Their verse runs: “E dictum negat, Ique modum, nihil A, sed U totum.”</p>`
      + `<p>Each of the four words Purpurea, Iliace, Amabimus, and Edentuli then lists, in order, the forms with the modes possible, contingent, impossible, and necessary that say the same thing. So the first word, Purpurea, gathers “not possible that not,” “not contingent that not,” “impossible that not,” and “necessary that it is,” which are equipollent. The words are an aid to memory; what they record is the rule that a negation before the mode moves to the contradictory corner, and a negation after the mode denies only the dictum.</p>` },
    { h:`<p><strong>Of what is said, and of the thing.</strong> A modal can be read in two ways. Read as said <strong>of what is said</strong> (<em>de dicto</em>), the mode governs the whole proposition: “It is necessary that whatever God knows is true” says that the proposition “What God knows is true” cannot be false. Read as said <strong>of the thing</strong> (<em>de re</em>), the mode is said of the thing the subject stands for: “Whatever God knows is necessarily true” would say that each thing God knows is necessary in itself.</p>`
      + `<p>St. Thomas uses the distinction to answer an objection that God’s knowledge makes all things necessary. The statement “Everything known by God is necessarily so” is true of what is said and false of the thing (commentary on the <em>Sentences</em> I, d. 38, q. 1, a. 5, ad 5). God knows contingent things as contingent; what is necessary is the truth of the whole statement, not each thing known. The distinction runs close to that of the composite and divided senses, and it decides many arguments that seem to make free acts necessary.</p>` },
    { h:`<p><strong>Two senses of “possible.”</strong> Aristotle distinguishes two senses of “possible” (<em>Prior Analytics</em> I.13). In one sense the possible is whatever is not impossible, and in this sense the necessary is also possible, since what must be certainly can be. In the other, stricter sense the possible is what is neither necessary nor impossible, what can be and can also not be; this is the <strong>contingent</strong>, and in this sense the necessary is not possible.</p>`
      + `<p>Much confusion comes from passing between the two senses. From “It is necessary that fire is hot” it follows that it is possible in the first sense, but not that it is contingent. And from “It is contingent that Peter walks” it follows both that he can walk and that he can not walk. The course takes “contingent” in the strict sense: what can be and can also not be.</p>` },
    { h:`<p><strong>The mode belongs to the proposition.</strong> Aristotle’s modes concern the way the predicate belongs to the subject: whether it belongs necessarily, contingently, or simply. Immanuel Kant, the eighteenth-century German philosopher, divided judgments instead by their modality as problematic, assertoric, and apodictic, and he meant by this the possibility or necessity of the act of judging, not of the relation judged. Maritain points out that Kant also counts the simple assertion as a mode, though in it nothing modifies the copula.</p>`
      + `<p>The difference matters. For the tradition, “Man is necessarily an animal” states something about man and animal, not about the certainty of the one who judges; one can be certain of a contingent fact and uncertain of a necessary truth. A further sign that the mode belongs to the proposition is that conversion keeps it: “No man can think without images” converts to “No being that thinks without images can be a man,” with the mode unchanged.</p>` }
  ];
  const ADV_MODP_EXTRA = {
    0:{ qs:[
      Q(`Which proposition is modal in the proper sense?`,
        [`The fire is necessarily hot`,`The careful driver arrives safely`,`The horse runs swiftly`,`The old man walks slowly`], 0,
        `“Necessarily” affects the copula, the way the predicate belongs to the subject.`,
        `“Careful,” “swiftly,” and “slowly” affect the subject or the predicate, not the copula.`),
      Q(`In the <em>Prior Analytics</em>, with which modes does Aristotle treat the syllogism?`,
        [`Necessity and possibility only`,`All four modes`,`Necessity alone`,`Impossibility and contingency only`], 0,
        `In the <em>Prior Analytics</em> he treats the syllogism only with necessity and possibility; <em>On Interpretation</em> 12–13 treats all four modes.`,
        `All four modes are treated in <em>On Interpretation</em>, chapters 12 and 13; the account of the syllogism in the <em>Prior Analytics</em> treats only necessity and possibility.`),
      Q(`What is a proposition with no mode of the copula called?`,
        [`Simply attributive`,`Contingent`,`Composite`,`Problematic`], 0,
        `It simply says that the predicate is in the subject, and so it is called simply attributive.`,
        `“Contingent” names a mode, “composite” a sense of a modal, and “problematic” is Kant’s term for a judgment.`)
    ]},
    1:{ qs:[
      Q(`Is “It is impossible that he does not breathe” affirmative or negative?`,
        [`Affirmative, since mode and dictum are both negative`,`Negative, since its mode is negative`,`Negative, since its dictum is negative and that decides it`,`Neither, since it has two negations`], 0,
        `When mode and dictum are both negative, the proposition is affirmative; it comes to “It is necessary that he breathes.”`,
        `One negation in mode or dictum makes a modal negative; two make it affirmative.`),
      Q(`Which modes are like universals?`,
        [`Necessity and impossibility`,`Possibility and contingency`,`Necessity and possibility`,`Impossibility and contingency`], 0,
        `What must be or cannot be holds in every case, so these two modes are like universals.`,
        `Possibility and contingency are like particulars, since what can be need hold only sometimes.`),
      Q(`Which corner of the modal square answers to the universal negative?`,
        [`Impossible`,`Necessary`,`Possible`,`Possible not`], 0,
        `“Impossible” denies in every case, so it stands where the universal negative stands.`,
        `“Necessary” is the universal affirmative corner, and the possibles are the particular corners.`)
    ]},
    2:{ qs:[
      Q(`What does “It is impossible that every student passes” mean?`,
        [`It is not possible that every student passes`,`It is impossible that any student passes`,`It is necessary that no student passes`,`It is possible that no student passes`], 0,
        `“Impossible that every” denies only that all can pass together; it does not say that none can pass.`,
        `“Impossible that any” or “necessary that no” would say that none can pass, which is a stronger claim.`),
      Q(`“Every illness can be cured” is false. What follows?`,
        [`Some illness cannot be cured`,`No illness can be cured`,`Every illness cannot be cured`,`Some illness can be cured`], 0,
        `The contradictory of the false proposition is true: some illness cannot be cured.`,
        `The falsity of the universal does not make its contrary true, and it says nothing either way about some illness being curable.`),
      Q(`What is necessary of every subject is necessary of some. Which relation of the square is this?`,
        [`Subalternation`,`Contradiction`,`Contrariety`,`Subcontrariety`], 0,
        `The universal implies the particular below it, which is subalternation.`,
        `Contradiction, contrariety, and subcontrariety are relations of opposed quality.`)
    ]},
    3:{ qs:[
      Q(`Which vowel marks a modal with a negative mode and an affirmative dictum?`,
        [`I`,`A`,`E`,`U`], 0,
        `“Ique modum”: I denies the mode only.`,
        `A denies nothing, E denies the dictum, and U denies both.`),
      Q(`What rule do the words Purpurea, Iliace, Amabimus, and Edentuli record?`,
        [`A negation before the mode moves to the contradictory corner`,`A negation after the mode leaves the proposition unchanged`,`Every modal with two negations is negative`,`The possible and the necessary always agree`], 0,
        `The words gather equipollent forms, and they rest on where the negation falls.`,
        `A negation after the mode denies the dictum, which changes the proposition, and two negations make the modal affirmative.`),
      Q(`Which vowel marks a modal in which both the mode and the dictum are negative?`,
        [`U`,`A`,`E`,`I`], 0,
        `“Sed U totum”: U denies both the mode and the dictum.`,
        `A affirms both, E denies the dictum, and I denies the mode.`)
    ]},
    4:{ qs:[
      Q(`“Whatever is seen is necessarily seen.” How is this true?`,
        [`Of what is said, as the statement “What is seen is seen”`,`Of the thing, as each thing seen being necessary`,`In neither way, since seeing is contingent`,`Of the thing, but not of what is said`], 0,
        `The whole statement cannot be false, which is the reading of what is said; the things seen are not necessary in themselves.`,
        `Read of the thing, it would make each thing seen necessary, which is false; it is true of what is said.`),
      Q(`How does St. Thomas answer the objection that God’s knowledge makes all things necessary?`,
        [`The statement is true of what is said and false of the thing`,`God does not know contingent things at all`,`God’s knowledge is only probable`,`Contingent things become necessary once they are known by God`], 0,
        `“Everything known by God is necessarily so” is true of what is said and false of the thing; God knows contingent things as contingent.`,
        `St. Thomas affirms that God knows contingent things, certainly, without making them necessary.`),
      Q(`When a modal is read as said of the thing, what is the mode said of?`,
        [`The thing the subject stands for`,`The whole proposition`,`The word that names the subject`,`The mind of the speaker`], 0,
        `Read of the thing, the mode is said of the thing; read of what is said, of the whole statement.`,
        `The whole proposition is the other reading, and the word and the speaker are not in question.`)
    ]},
    5:{ qs:[
      Q(`In which sense is what is necessary also possible?`,
        [`In the sense of “not impossible”`,`In the sense of “contingent”`,`In the sense of “can also not be”`,`In no sense at all`], 0,
        `What must be certainly can be, so it is possible in the sense of not impossible.`,
        `In the strict sense the possible can also not be, which the necessary cannot.`),
      Q(`From “It is contingent that the bell rings,” what follows?`,
        [`It can ring, and it can also not ring`,`It must ring, and it cannot fail to ring`,`It cannot ring`,`It rings now`], 0,
        `The contingent in the strict sense can be and can also not be.`,
        `The contingent is neither necessary nor impossible, and it says nothing about what happens now.`),
      Q(`From “It is necessary that a square has four sides,” what does not follow?`,
        [`It is contingent that a square has four sides`,`It is possible that a square has four sides`,`It is not impossible that a square has four sides`,`It is true that a square has four sides`], 0,
        `The necessary is possible in the broad sense, but it is not contingent, since it cannot not be.`,
        `The necessary is true, possible, and not impossible; it is only not contingent.`)
    ]},
    6:{ qs:[
      Q(`What did Kant mean by the modality of a judgment?`,
        [`The possibility or necessity of the act of judging`,`The way in which the predicate belongs to the subject itself`,`The number of terms in the proposition`,`The quantity of the subject`], 0,
        `Kant spoke of the act of judging, while Aristotle spoke of the relation judged.`,
        `The way the predicate belongs is Aristotle’s sense; quantity and the number of terms are other matters.`),
      Q(`Why is a simple assertion not modal, on the tradition’s view?`,
        [`Nothing in it modifies the copula`,`It is always uncertain`,`It is always about the future`,`It has no predicate`], 0,
        `A modal proposition requires a mode of the copula, and a simple assertion has none.`,
        `A simple assertion can be certain, can be about the past, and has a predicate.`),
      Q(`“Every circle is necessarily round” converts to which proposition?`,
        [`Something round is necessarily a circle`,`Something round is possibly a circle`,`Everything round is necessarily a circle`,`Something round is a circle, with no mode`], 0,
        `Conversion keeps the mode and, for A, limits the quantity.`,
        `The mode is kept in conversion, and A converts only by limitation.`)
    ]}
  };
  /* ---- Second Act: Compound and Exponible Propositions ---- */
  const ADV_COMP = [
    { src:`${SRC_ART}; ${SRC_MAR}; ${SRC_JST}; Matthew Minerd, “BCS Logic 2023” (course slides).`,
      h:`<p><strong>Simple and compound.</strong> A simple, or categorical, proposition joins two terms by the copula “is”: “Man is mortal.” A <strong>compound</strong>, or hypothetical, proposition joins two propositions by a connecting word other than the verb, such as “and,” “or,” or “if”: “The brave gave their lives, and the cowards fled.” A compound proposition states a new truth of its own, which depends on the truths of its parts but is not the same as any of them.</p>`
      + `<p>A compound is <strong>openly</strong> compound when its structure shows two propositions joined, as in the examples with “and,” “or,” and “if.” It is <strong>hiddenly</strong> compound (exponible) when it looks simple but contains a word, such as “only,” “except,” or “as such,” that makes it equivalent to several propositions. “Only man laughs” looks like one categorical proposition, but it says two things: that man laughs, and that nothing else does.</p>` },
    { h:`<p><strong>The copulative.</strong> A <strong>copulative</strong> proposition joins its parts by “and.” It is true only when every part is true, and false when any one part is false: “The moon moves and the earth stands still” is false because its second part is false. So from a true copulative we may assert either part by itself, but from a true part we may not assert the copulative, and from a false copulative we may not deny any particular part, since we do not know which one is false.</p>`
      + `<p>Some copulatives are hidden in a joined subject or predicate: “Peter and Paul died at Rome” means that Peter died at Rome and Paul died at Rome. But a joined subject is not always copulative: “Peter and Paul are friends” says something of the two together, and so it is a simple proposition with one subject. John of St. Thomas notes that the copulative follows its weaker part: if any part is false, or only probable, the whole is no stronger than that part.</p>` },
    { h:`<p><strong>The disjunctive and the conjunctive.</strong> A <strong>disjunctive</strong> proposition joins its parts by “or.” In the strict sense it says that the parts cannot be true together and cannot be false together, as in “A number is either odd or even.” In the broad sense it says only that at least one part is true. A broad disjunctive is true when one part is true, and so it follows its stronger part; a strict disjunctive is false when both parts are true. An improper disjunctive merely offers alternatives (“You may come by train or on foot”), and denying one of these posits nothing.</p>`
      + `<p>The <strong>conjunctive</strong> proposition denies that two propositions are true together, without denying that both may be false: “No one can be both a judge and a party in the same case.” Where there is no middle between the two, the conjunctive says the same thing as a disjunctive: “No one can serve both God and Mammon” amounts to “One serves either God or Mammon,” since on the Gospel’s account there is no middle between the two.</p>` },
    { h:`<p><strong>The conditional.</strong> A <strong>conditional</strong> proposition joins its parts by “if.” It does not assert either part; it asserts only that the second follows from the first. So it is true when the sequence holds, even if both parts are false: “If twenty were odd, it could not be divided by two” is true. And it is false when the sequence fails, even if both parts are true: “If England is an island, two and two make four” is false, since the second does not follow from the first.</p>`
      + `<p>This is why a conditional can be asserted without asserting its condition. St. Paul could write “But though we, or an angel from heaven, preach a gospel to you besides that which we have preached to you, let him be anathema” (Galatians 1:8) without thinking that an angel would do so. Maritain distinguishes conditionals in the strict sense, where “if” signifies a necessary sequence, from conditionals in a broad sense, where it signifies only a regular connection in fact: “If the speaker so much as opened his mouth, everyone yawned.” A broad conditional is true only if its parts are in fact verified.</p>` },
    { h:`<p><strong>Causal, rational, relative, adversative.</strong> Other compounds can be resolved into categorical propositions. A <strong>causal</strong> proposition, “The soul is immortal because it is spiritual,” asserts three things: that the soul is immortal, that it is spiritual, and that its spirituality is the cause of its immortality. So, unlike a conditional, it requires the truth of both its parts. A <strong>rational</strong> proposition, “The soul is spiritual, therefore it is immortal,” is in fact a short argument, an enthymeme.</p>`
      + `<p>A <strong>relative</strong> proposition may have a causal sense (“The soul, which is spiritual, is immortal”) or may amount to a copulative (“The man whom I see is running” means that I see a man and he is running). An <strong>adversative</strong> proposition, joined by “but,” may deny a causal link (“The soul is spiritual but is not joined to the body by force”) or may simply join two facts (“He laughs, but I weep”).</p>` },
    { h:`<p><strong>The contradictory of a compound.</strong> To contradict a compound we must deny exactly what it asserts. The contradictory of a copulative is a disjunctive of the contradictories of its parts: the contradictory of “Every rich man is sad and honored” is “Some rich man is not sad or not honored.” The contradictory of a broad disjunctive is a copulative of the contradictories: the contradictory of “Either the bridge is closed or the road is flooded” is “The bridge is not closed and the road is not flooded.”</p>`
      + `<p>The contradictory of a conditional denies the sequence, not the parts: the contradictory of “If he is rich, he is happy” is “It is not the case that if he is rich he is happy,” that is, he could be rich and not happy. It is not “If he is rich, he is not happy,” which is a contrary claim. Modern logic states the first two rules as De Morgan’s laws, after Augustus De Morgan, the nineteenth-century English logician.</p>` },
    { h:`<p><strong>Exclusive and exceptive propositions.</strong> An <strong>exclusive</strong> proposition contains a word such as “only” or “alone,” and it resolves into two propositions. “Only the human species laughs” means that the human species laughs, and that no other species laughs; it is true only if both are true. An <strong>exceptive</strong> proposition contains “except” or “but,” and it resolves into three. “Every metal except mercury is solid at room temperature” means that every metal other than mercury is so solid, that mercury is a metal, and that mercury is not so solid.</p>`
      + `<p>The resolution shows how such propositions can be false. “Only citizens may vote” is false if a non-citizen may vote, even if every citizen may. And an exceptive is false if the excepted thing does not really belong to the subject, as “Every bird except the bat lays eggs” is, since the bat is not a bird.</p>` },
    { h:`<p><strong>Reduplicative propositions.</strong> A <strong>reduplicative</strong> proposition contains “as,” “insofar as,” or “as such”: “The wicked, as wicked, are to be hated.” Sometimes the word names the very nature of the subject, so that the predicate is said to belong to the subject by its own nature: “The colored, as colored, is visible.” Sometimes it names a different feature of the subject, which is the reason or condition for the predicate: “Man, as rational, can laugh; as animal, he can be nourished.” This is the reduplicative in the strict sense.</p>`
      + `<p>Mistaking a reduplicative for a simple proposition causes many errors. “The wicked, as wicked, are to be hated” does not say that the wicked are to be hated simply, since as men they are to be loved. And “Man as man is not greedy” (greed is not part of what man is) differs from “Man as man is non-greedy” (freedom from greed belongs to his nature): man as man is neither greedy nor free of greed.</p>` }
  ];
  const ADV_COMP_EXTRA = {
    0:{ qs:[
      Q(`“If it freezes, the pond will be safe to cross.” What kind of proposition is this?`,
        [`Openly compound`,`Hiddenly compound`,`Simple`,`Singular`], 0,
        `It plainly joins two propositions by “if,” so it is openly compound.`,
        `Its structure shows two propositions, so it is neither simple nor hiddenly compound.`),
      Q(`“Only the owl hunts at night in this wood.” What kind of proposition is this?`,
        [`Hiddenly compound`,`Openly compound`,`Simple and categorical`,`Conditional`], 0,
        `It looks simple, but “only” makes it equivalent to two propositions.`,
        `No connecting word joins two propositions, but “only” hides a second one.`),
      Q(`How does a compound proposition differ from a simple one?`,
        [`It joins propositions, not terms, by a word other than the verb`,`It has more than one adjective in its predicate`,`It always has a universal subject and also a particular predicate`,`It is always longer than a simple proposition`], 0,
        `A simple proposition joins two terms by “is”; a compound joins propositions by “and,” “or,” “if,” and the like.`,
        `Adjectives, quantity, and length do not make a proposition compound.`)
    ]},
    1:{ qs:[
      Q(`“The sun is a star and the moon is a planet.” Is this true?`,
        [`No, since one part is false`,`Yes, since one part is true`,`Yes, since both terms are bodies`,`It cannot be decided`], 0,
        `A copulative is false when any part is false, and the moon is not a planet.`,
        `One true part is not enough for a copulative; every part must be true.`),
      Q(`“Peter and John are cousins.” What kind of proposition is this?`,
        [`Simple, with one joined subject`,`Copulative, meaning Peter is a cousin and John is a cousin`,`Disjunctive`,`Conditional`], 0,
        `Being cousins is said of the two together, so the proposition has one subject and is simple.`,
        `“Peter is a cousin and John is a cousin” would lose the relation between them.`),
      Q(`It is false that “It is raining and cold.” What may we conclude?`,
        [`At least one part is false, but not which`,`It is not raining`,`It is not cold`,`It is neither raining nor cold`], 0,
        `A false copulative tells us only that some part is false.`,
        `We may not deny any particular part, since we do not know which one is false.`)
    ]},
    2:{ qs:[
      Q(`“Either the lamp is on or it is off.” What kind of disjunctive is this?`,
        [`Strict, since the parts cannot be true or false together`,`Broad, since both parts may be true`,`Improper, since it only offers alternatives`,`Conjunctive, since it denies both parts`], 0,
        `A lamp cannot be both on and off, nor neither, so the disjunction is strict.`,
        `Both parts cannot be true together, so it is not broad, and it asserts a real alternative.`),
      Q(`“No one can be both asleep and keeping watch.” What kind of proposition is this?`,
        [`Conjunctive`,`Copulative`,`Disjunctive`,`Conditional`], 0,
        `It denies that two propositions are true together, without denying that both may be false.`,
        `It does not join by “and,” “or,” or “if” to assert; it denies that both are true together.`),
      Q(`A broad disjunctive is said to follow its stronger part. Why?`,
        [`It is true when any one part is true`,`It is true only when every part is true`,`Its parts are always necessary`,`It asserts a sequence between its parts`], 0,
        `One true part is enough to make a broad disjunctive true.`,
        `It is the copulative that needs every part true, and the conditional that asserts a sequence.`)
    ]},
    3:{ qs:[
      Q(`“If a triangle had four sides, it would have four angles.” Is this conditional true?`,
        [`Yes, since the second follows from the first`,`No, since both parts are false`,`No, since triangles have three sides and never four`,`It cannot be judged`], 0,
        `A conditional asserts only that the sequence holds, and it holds here.`,
        `The falsity of the parts does not make a conditional false; only a failed sequence does.`),
      Q(`“If water is wet, Paris is in France.” Is this conditional true?`,
        [`No, since the second does not follow from the first`,`Yes, since both of its parts are plainly true of the world`,`Yes, since the first part is true`,`It cannot be judged`], 0,
        `A conditional is false when the sequence fails, even if both parts are true.`,
        `The truth of the parts does not make the conditional true.`),
      Q(`What does a strict conditional assert?`,
        [`That the second part follows from the first`,`That both parts are true`,`That the first part is true, whatever the second`,`That the second part is true`], 0,
        `The conditional asserts the sequence, not the truth of either part.`,
        `A conditional can be true when both parts are false.`)
    ]},
    4:{ qs:[
      Q(`“The bridge fell because the river flooded.” What must be true for this to be true?`,
        [`Both parts, and that the flood caused the fall`,`Only that a flood of that size would cause the fall`,`Only that the bridge fell`,`Only that the river flooded`], 0,
        `A causal proposition asserts both parts and the causal link between them.`,
        `Unlike a conditional, a causal proposition requires the truth of both its parts.`),
      Q(`“He is honest, therefore he will be trusted.” What kind of proposition is this?`,
        [`Rational, in fact a short argument`,`Causal`,`Conditional`,`Copulative`], 0,
        `A rational proposition, joined by “therefore,” is an enthymeme.`,
        `It draws a conclusion; a causal proposition would say “because.”`),
      Q(`“The man whom I met is a doctor.” Into what may this relative proposition be resolved?`,
        [`I met a man, and he is a doctor`,`If I met a man, he is a doctor`,`I met a man because he is a doctor`,`I met a man or he is a doctor`], 0,
        `This relative has no causal sense, so it amounts to a copulative.`,
        `Nothing here is conditional, causal, or disjunctive; it joins two facts.`)
    ]},
    5:{ qs:[
      Q(`What is the contradictory of “The door is locked and the window is shut”?`,
        [`The door is not locked or the window is not shut`,`The door is not locked and the window is not shut`,`If the door is locked, the window is not shut`,`The door is locked or the window is shut`], 0,
        `The contradictory of a copulative is a disjunctive of the contradictories of its parts.`,
        `Denying both parts says more than the contradictory; the copulative is false if either part is false.`),
      Q(`What is the contradictory of “Either he is ill or he is lazy,” taken broadly?`,
        [`He is not ill and he is not lazy`,`He is not ill or he is not lazy`,`If he is ill, he is not lazy`,`He is ill and he is lazy`], 0,
        `A broad disjunctive is false only when both parts are false.`,
        `“Not ill or not lazy” is still compatible with the disjunctive being true.`),
      Q(`What is the contradictory of “If the dam breaks, the town floods”?`,
        [`The dam could break without the town flooding`,`If the dam breaks, the town will certainly not flood`,`The dam does not break and the town floods`,`If the town floods, the dam broke`], 0,
        `The contradictory of a conditional denies the sequence, not its parts.`,
        `“If it breaks, the town does not flood” is a contrary claim, and the others change the subject.`)
    ]},
    6:{ qs:[
      Q(`Into what does “Only the dog barked” resolve?`,
        [`The dog barked, and nothing else barked`,`The dog barked, and the dog is an animal`,`If anything barked, the dog barked`,`The dog barked or nothing barked`], 0,
        `An exclusive proposition resolves into two propositions, the positive and the exclusion.`,
        `The exclusion of everything else is what “only” adds.`),
      Q(`Into how many propositions does an exceptive proposition resolve?`,
        [`Three`,`Two`,`One`,`Four`], 0,
        `“Every A except B is C” says that every A other than B is C, that B is an A, and that B is not C.`,
        `An exclusive resolves into two; an exceptive adds that the excepted thing belongs to the subject.`),
      Q(`Why is “Every fish except the whale has gills” false?`,
        [`The whale is not a fish`,`The whale has gills`,`Some fish live on land`,`An exceptive cannot be universal`], 0,
        `An exceptive requires that the excepted thing belong to the subject, and the whale is a mammal.`,
        `The fault is in the exception: the whale is not a fish at all.`)
    ]},
    7:{ qs:[
      Q(`“The doctor, as doctor, aims at health.” Which feature does “as doctor” name?`,
        [`The very nature by which the predicate belongs`,`A feature with no bearing on the predicate`,`The place where the doctor works`,`A figure of speech for the doctor`], 0,
        `The doctor aims at health by the very art that makes him a doctor.`,
        `“As doctor” gives the reason for the predicate; it is neither irrelevant nor a figure.`),
      Q(`“Man, as animal, can be nourished.” What does “as animal” supply?`,
        [`The feature by reason of which the predicate belongs`,`The whole definition of man`,`A restriction of the subject to some men only, not all`,`The cause of man’s rationality`], 0,
        `In the strict reduplicative, “as” names the feature that is the reason for the predicate.`,
        `Animal is not the whole definition, and it does not restrict the subject to some men.`),
      Q(`Why must “The enemy, as enemy, is to be resisted” not be read as a simple proposition?`,
        [`As men, enemies are still to be loved`,`Enemies are not to be resisted at all`,`It is a conditional in disguise`,`It has no subject`], 0,
        `The reduplication limits the predicate to the enemy as enemy; read simply, it would say too much.`,
        `The proposition is true as reduplicative; read simply, it would forget that the enemy is also a man.`)
    ]}
  };
  /* ---- Third Act: Figures and Moods ---- */
  const ADV_FIG = [
    { src:`${SRC_ART}; ${SRC_MAR}; ${SRC_JST}; Matthew Minerd, “BCS Logic 2023” (course slides); Aristotle, <i>Prior Analytics</i> I.4–7 and <i>Posterior Analytics</i> I.14; Pierre Conway, <i>Aristotelian Formal and Material Logic</i> (University Press of America, 1995).`,
      h:`<p><strong>Figure and mood.</strong> A syllogism has a double matter, its terms and its propositions, and so a double form. The <strong>figure</strong> is the arrangement of the terms, fixed by the place of the middle term: subject of the major and predicate of the minor in the first figure, predicate of both in the second, subject of both in the third. The <strong>mood</strong> is the arrangement of the propositions by quantity and quality, named by the letters A, E, I, and O for the major, the minor, and the conclusion in order.</p>`
      + `<p>Each premise can be A, E, I, or O, so there are sixteen pairs of premises, and since the conclusion can be A, E, I, or O as well, there are sixty-four combinations. Most break one of the general rules. The scholastic account counts nineteen legitimate moods: four in the first figure, five indirect moods of the first figure, four in the second, and six in the third. The later textbook account counts the indirect moods as a fourth figure and adds the weakened moods, which conclude in particular what could be concluded universally.</p>` },
    { h:`<p><strong>The first figure.</strong> In the first figure the major premise must be universal and the minor affirmative. If the major were particular, the middle term would be distributed in neither premise; if the minor were negative, the conclusion would be negative and would distribute the major term, which the affirmative major leaves undistributed. So four moods remain: AAA, EAE, AII, and EIO (Barbara, Celarent, Darii, Ferio).</p>`
      + `<p>These moods are called perfect because the principle of all syllogisms is seen in them directly. The principle is that what is said of every member of a class is said of whatever falls under it, and what is denied of every member is denied of whatever falls under it (the <em>dictum de omni et nullo</em>). In the first figure the middle term is the subject of the major and the predicate of the minor, so the minor term is plainly placed under the middle, and the major term is said or denied of it through the middle.</p>` },
    { h:`<p><strong>The second figure.</strong> In the second figure one premise must be negative and the major must be universal. If both premises were affirmative, the middle term, which is the predicate of both, would be distributed in neither; and a particular major would leave the major term undistributed while the negative conclusion distributes it. So four moods remain: EAE, AEE, EIO, and AOO (Cesare, Camestres, Festino, Baroco), and every conclusion of the second figure is negative.</p>`
      + `<p>The principle of this figure is that if an attribute is said or denied of every member of one class, whatever it cannot be said or denied of in the same way is not in that class (sometimes called the <em>dictum de diverso</em>). The second figure is therefore suited to refutation and to exclusion, as when we show that something is not a fish because it does not breathe by gills, while every fish does.</p>` },
    { h:`<p><strong>The third figure.</strong> In the third figure the minor premise must be affirmative and the conclusion particular. A negative minor would make the conclusion negative and distribute the major term, which the affirmative major leaves undistributed; and a universal conclusion would distribute the minor term, which is the predicate of an affirmative minor and so undistributed. Six moods remain: AAI, EAO, IAI, AII, OAO, and EIO (Darapti, Felapton, Disamis, Datisi, Bocardo, Ferison).</p>`
      + `<p>The principle of this figure is that two terms that share a common instance agree at least in part, and if one has a part the other lacks, they differ at least in part (sometimes called the <em>dictum de exemplo</em>). So the third figure is suited to the counterexample, which shows that a universal claim does not hold: some swan is not white, since this bird is a swan and this bird is not white.</p>` },
    { h:`<p><strong>The indirect moods and the fourth figure.</strong> When the middle term is the predicate of the major and the subject of the minor, the syllogism concludes indirectly: the term that is naturally the predicate becomes the grammatical subject of the conclusion, as in “Some mortal thing is Peter.” The scholastics, following Aristotle, counted these as five indirect moods of the first figure (Baralipton, Celantes, Dabitis, Fapesmo, Frisesomorum), since they are the first figure with the conclusion turned around.</p>`
      + `<p>The later textbook account counts the same arrangement as a separate fourth figure, with the moods AAI, AEE, IAI, EAO, and EIO (Bramantip, Camenes, Dimaris, Fesapo, Fresison). Historians of logic report that this fourth figure was attributed to Galen, the second-century physician. The Aristotelian and Thomist tradition, including St. Thomas and John of St. Thomas, does not count it as a distinct figure but treats it as the indirect first figure; in Maritain’s words, it is “in reality but the first figure concluding indirectly by the transposition of the premisses.” Maritain argues that a fourth figure attends to the words rather than to the thought, since in the mind the grammatical predicate of its conclusion is the real subject.</p>` },
    { h:`<p><strong>Singular premises.</strong> A singular minor premise counts as universal, since it speaks of the whole of its subject: “Every man is mortal; Socrates is a man; so Socrates is mortal” is in Barbara. But a singular major does not count as a universal. “This man is a liar; Peter is a man; so Peter is a liar” does not conclude, since “man” in the minor is not the man spoken of in the major.</p>`
      + `<p>When the middle term itself is singular, the argument is an <strong>expository syllogism</strong>, which simply displays an individual in whom two terms meet. “Socrates is wise; Socrates is a man; so some man is wise” is in the third figure, which suits it best. Because its middle stands for one individual, it admits arrangements the ordinary syllogism forbids, such as two affirmatives in the second figure: “This apostle is Judas; this traitor is Judas; so this traitor is an apostle.”</p>` },
    { h:`<p><strong>What a syllogism is.</strong> It is often said that a syllogism moves from a more universal truth to a less universal one. Maritain grants that this is true of the logical relations, since in the first figure the minor term is placed under the middle; but he denies that it is the essence of the syllogism. The essence is the identification of two terms with one and the same third term, from which their identity with each other follows.</p>`
      + `<p>The proof is that the conclusion can be as universal as the major. “Every rational being is made to live in society; every man is a rational being; so every man is made to live in society” is a syllogism in Barbara, and its terms are convertible: its conclusion is as universal as its premises. Aristotle and the scholastics took such syllogisms, where the middle term is the definition of the subject, as the model of demonstration.</p>` },
    { h:`<p><strong>The figure of science.</strong> Aristotle holds that the first figure is the most suited to science (<em>Posterior Analytics</em> I.14). Science seeks the reason why a property belongs to a subject, and only the first figure concludes universally and affirmatively, in Barbara, which is the form of “Every triangle has angles equal to two right angles.” The second figure concludes only negatively, and the third only particularly, so neither can state that a property belongs to every member of a species.</p>`
      + `<p>The first figure is also the most direct, since the middle term stands between the extremes in extension. The other figures keep their uses: the second for showing what a thing is not, and the third for disproving a universal. Pierre Conway, the twentieth-century Dominican teacher of Aristotelian logic, adds that Barbara and Celarent are the moods proper to demonstration, since through them a definition or a cause is shown to bring its property with it.</p>` }
  ];
  const ADV_FIG_EXTRA = {
    0:{ qs:[
      Q(`What fixes the figure of a syllogism?`,
        [`The place of the middle term`,`The quantity of the premises`,`The quality of the conclusion`,`The number of terms used`], 0,
        `The figure is the arrangement of the terms, fixed by where the middle term stands.`,
        `Quantity and quality give the mood; every syllogism has three terms.`),
      Q(`How many legitimate moods does the scholastic account count?`,
        [`Nineteen`,`Sixty-four`,`Twenty-four`,`Sixteen`], 0,
        `Four in the first figure, five indirect, four in the second, and six in the third.`,
        `Sixty-four are the combinations before the rules are applied; twenty-four is the later count with the weakened moods.`),
      Q(`What does the later textbook account add to the scholastic count?`,
        [`A fourth figure and the weakened moods`,`A fifth figure for singular terms`,`Moods with two negative premises`,`Moods with four terms`], 0,
        `It counts the indirect moods as a fourth figure and adds moods that conclude particularly what could be concluded universally.`,
        `No account admits two negative premises or four terms, and there is no fifth figure.`)
    ]},
    1:{ qs:[
      Q(`Why must the minor premise be affirmative in the first figure?`,
        [`A negative minor would distribute the major term in the conclusion only`,`A negative minor would leave the middle term undistributed in both premises`,`A negative minor would make the conclusion particular`,`A negative minor would require a singular subject`], 0,
        `The conclusion would be negative and distribute the major term, which the affirmative major leaves undistributed.`,
        `The fault is the major term distributed in the conclusion but not in its premise, not the middle term or the quantity.`),
      Q(`“Every planet moves; some star is a planet; so some star moves.” In which mood is this?`,
        [`AII in the first figure`,`AAA in the first figure`,`IAI in the third figure`,`AII in the third figure`], 0,
        `The middle term, “planet,” is subject of the major and predicate of the minor, and the propositions are A, I, I.`,
        `The minor and conclusion are particular, so not AAA; and the middle term’s place makes it the first figure.`),
      Q(`What principle governs the first figure directly?`,
        [`What is said of every member of a class is said of whatever falls under it`,`Two things that share a single instance agree with each other at least in part`,`What an attribute is denied of lies outside its class`,`Whatever is true of a part is true of the whole`], 0,
        `This principle, what is said of every member is said of each one under it, is seen directly in the first figure.`,
        `The second and third options give the principles of the third and second figures; the last is not a rule of the syllogism.`)
    ]},
    2:{ qs:[
      Q(`Why must one premise be negative in the second figure?`,
        [`Otherwise the middle term, predicate of both, is never distributed`,`Otherwise the major term would have to be a singular term in the conclusion`,`Otherwise the conclusion would be universal`,`Otherwise there would be four terms`], 0,
        `The middle term is the predicate of both premises, and the predicate of an affirmative is undistributed.`,
        `The rule concerns distribution of the middle term, not singular terms, quantity, or the number of terms.`),
      Q(`What is true of every conclusion in the second figure?`,
        [`It is negative`,`It is universal`,`It is particular`,`It is affirmative`], 0,
        `One premise is negative, so the conclusion is negative.`,
        `The second figure has universal and particular conclusions, but no affirmative ones.`),
      Q(`For what is the second figure especially suited?`,
        [`Showing that something does not belong to a class`,`Showing that a property belongs to a whole species`,`Finding a single counterexample to a universal`,`Combining several definitions into one`], 0,
        `Its negative conclusions exclude a thing from a class, which suits refutation.`,
        `Universal affirmatives belong to the first figure, and counterexamples to the third.`)
    ]},
    3:{ qs:[
      Q(`Why must the conclusion be particular in the third figure?`,
        [`The minor term is undistributed in its affirmative premise`,`The middle term is left undistributed in both of the premises of the figure`,`The major premise must always be particular`,`Both premises must always be negative`], 0,
        `The minor term is the predicate of the affirmative minor, so it cannot be distributed in the conclusion.`,
        `The middle term is the subject of both premises and can be distributed; the premises need not be particular or negative.`),
      Q(`“Some doctor is not wealthy; every doctor is educated; so some educated person is not wealthy.” In which mood is this?`,
        [`OAO in the third figure`,`EAO in the third figure`,`AOO in the second figure`,`OAO in the first figure`], 0,
        `The middle term, “doctor,” is the subject of both premises, and the propositions are O, A, O.`,
        `The major is O, not E; and the middle term’s place makes it the third figure.`),
      Q(`For what is the third figure especially suited?`,
        [`Disproving a universal by a counterexample`,`Proving universal affirmative conclusions`,`Showing why a property belongs to a species`,`Excluding a thing from every class`], 0,
        `Its particular conclusions show that a universal does not hold.`,
        `It cannot conclude universally, so it cannot give the reason a property belongs to a whole species.`)
    ]},
    4:{ qs:[
      Q(`Why did the scholastics not count a fourth figure?`,
        [`They treated its moods as the first figure concluding indirectly`,`They did not know of its moods at all`,`They thought its moods were all invalid, since they conclude indirectly`,`They counted only moods with universal conclusions`], 0,
        `The indirect moods are the first figure with the conclusion turned around, so they were counted with the first.`,
        `The scholastics knew and named these moods; they classified them differently.`),
      Q(`Where is the middle term in the indirect moods?`,
        [`Predicate of the major and subject of the minor`,`Subject of the major and predicate of the minor`,`Predicate of both premises`,`Subject of both premises`], 0,
        `That arrangement is the indirect one, which the later account calls the fourth figure.`,
        `The other arrangements are the first, second, and third figures.`),
      Q(`On Maritain’s view, what does counting a fourth figure attend to?`,
        [`The words rather than the thought`,`The thought rather than the words`,`The truth of the premises`,`The number of the premises`], 0,
        `In the mind the grammatical predicate of the indirect conclusion is the real subject.`,
        `Maritain’s objection concerns attending to grammar, not truth or the number of premises.`)
    ]},
    5:{ qs:[
      Q(`“Every bird has feathers; this robin is a bird; so this robin has feathers.” In which mood is this?`,
        [`AAA in the first figure`,`AII in the first figure`,`AAI in the third figure`,`IAI in the third figure`], 0,
        `A singular minor counts as universal, so the mood is AAA.`,
        `The singular minor is treated as universal, not particular.`),
      Q(`“This dog bites; Rex is a dog; so Rex bites.” Does this conclude?`,
        [`No, since a singular major does not count as universal`,`Yes, since singular premises count as universal`,`Yes, since it is in the first figure`,`No, since it has two singular premises`], 0,
        `“Dog” in the minor need not be the dog spoken of in the major, so nothing follows.`,
        `Only a singular minor is treated as universal; a singular major is not.`),
      Q(`What is an expository syllogism?`,
        [`One whose middle term is singular`,`One with a premise left unsaid`,`One with a causal premise`,`One with more than three terms`], 0,
        `It displays one individual in whom two terms meet.`,
        `A missing premise makes an enthymeme, a causal premise an epicheirema, and four terms no syllogism at all.`)
    ]},
    6:{ qs:[
      Q(`On Maritain’s account, what is the essence of the syllogism?`,
        [`Two terms identified with one third term`,`A descent from the more universal to the less`,`A rule written in symbols`,`A conclusion more universal than the premises`], 0,
        `The two extremes are identified with the same middle, and so with each other.`,
        `The descent from more to less universal is a property of the logical relations, not the essence.`),
      Q(`“Every equilateral triangle is equiangular; every triangle with three equal sides is equilateral; so every triangle with three equal sides is equiangular.” What does this show?`,
        [`A conclusion can be as universal as its major`,`A syllogism must descend to a smaller class`,`Convertible terms make a syllogism invalid`,`The conclusion is always less universal`], 0,
        `Its terms are convertible, and the conclusion is as universal as the major, as Maritain argues.`,
        `The syllogism is valid in Barbara, though it does not descend to a smaller class.`),
      Q(`Which syllogisms did Aristotle and the scholastics take as the model of demonstration?`,
        [`Those whose middle term is the definition of the subject`,`Those with particular conclusions`,`Those in the third figure`,`Those with singular premises`], 0,
        `A middle term that defines the subject shows why the property belongs to it.`,
        `Particular conclusions, the third figure, and singular premises do not state a universal property.`)
    ]},
    7:{ qs:[
      Q(`Why is the first figure the most suited to science?`,
        [`Only it concludes universally and affirmatively`,`Only it uses three terms`,`Only it has negative conclusions`,`Only it admits singular premises`], 0,
        `Science shows that a property belongs to every member of a species, which needs a universal affirmative conclusion.`,
        `Every figure uses three terms, and the second figure is the one whose conclusions are all negative.`),
      Q(`Why can the third figure not demonstrate a property of a whole species?`,
        [`Its conclusions are all particular`,`Its conclusions are all negative`,`It has no middle term`,`It concludes indirectly`], 0,
        `A property of a whole species needs a universal conclusion, and the third figure gives only particular ones.`,
        `Third-figure conclusions can be affirmative, and it has a middle term like every syllogism.`),
      Q(`Which moods are proper to demonstration, on Conway’s account?`,
        [`Barbara and Celarent`,`Darapti and Felapton`,`Baroco and Bocardo`,`Disamis and Datisi`], 0,
        `In these first-figure moods a definition or cause is shown to bring its property with it.`,
        `The others are imperfect moods of the second and third figures.`)
    ]}
  };
  /* ---- Third Act: Reduction ---- */
  const ADV_RED = [
    { src:`${SRC_ART}; ${SRC_MAR}; ${SRC_JST}; Aristotle, <i>Prior Analytics</i> I.4–7; ${SRC_OES}.`,
      h:`<p><strong>Perfect and imperfect moods.</strong> Aristotle calls the moods of the first figure <strong>perfect</strong>, because their force is evident from the premises alone: what is said of every member of a class is said of whatever falls under it. He calls the moods of the other figures <strong>imperfect</strong>, because their force becomes evident through something not stated in the premises, such as the conversion of a premise or an argument from the impossible.</p>`
      + `<p>To <strong>reduce</strong> an imperfect mood is to show its validity by a perfect one. Every A conclusion is drawn most perfectly in AAA of the first figure (Barbara), every E conclusion in EAE (Celarent), every I in AII (Darii), and every O in EIO (Ferio). Reduction is either <strong>direct</strong>, drawing the same conclusion in a first-figure mood, or <strong>to the impossible</strong>, showing that whoever grants the premises and denies the conclusion contradicts himself.</p>` },
    { h:`<p><strong>What the letters mean.</strong> The Latin names of the moods record how each is reduced. The first letter tells which perfect mood it goes to: a name beginning with B goes to Barbara, with C to Celarent, with D to Darii, and with F to Ferio. Within the name, <strong>s</strong> after a vowel means that the proposition is converted simply; <strong>p</strong> means that it is converted by limitation (<em>per accidens</em>); <strong>m</strong> means that the premises are transposed; and <strong>c</strong> means that the mood is reduced to the impossible.</p>`
      + `<p>The scholastics summed this up in a verse: “S vult simpliciter verti, P vero per accidens, M vult transponi, C per impossibile duci.” So Cesare (EAE in the second figure) goes to Celarent by converting its major simply, and Datisi (AII in the third) goes to Darii by converting its minor simply. The other consonants in the names, such as r, t, l, and n, mark nothing.</p>` },
    { h:`<p><strong>Direct reduction by simple conversion and transposition.</strong> Take a syllogism in AEE of the second figure (Camestres): “Every jealous man is bitter; no saint is bitter; so no saint is a jealous man.” Its name begins with C, so it goes to Celarent. The m tells us to transpose the premises, and each s tells us to convert simply the proposition it follows, here the minor and the conclusion.</p>`
      + `<p>Transposing gives “No saint is bitter” as the first premise; converting it gives “No bitter man is a saint.” Then “Every jealous man is bitter” stands as the minor, and the conclusion is “No jealous man is a saint,” which is Celarent. Converting that conclusion simply gives back “No saint is a jealous man,” the original conclusion. The same conclusion has been drawn in a perfect mood, and so the imperfect one is shown to be valid.</p>` },
    { h:`<p><strong>Reduction by conversion by limitation.</strong> Some reductions need conversion by limitation. Take EAO in the third figure (Felapton): “No animal is incorruptible; every animal is a living being; so some living being is not incorruptible.” Its name begins with F, so it goes to Ferio, and the p after the second vowel tells us to convert the minor by limitation.</p>`
      + `<p>“Every animal is a living being” becomes “Some living being is an animal.” With the major unchanged, we have “No animal is incorruptible; some living being is an animal; so some living being is not incorruptible,” which is EIO in the first figure (Ferio). In the same way AAI of the third figure (Darapti) goes to Darii by converting its minor by limitation.</p>` },
    { h:`<p><strong>Reduction to the impossible.</strong> Two moods, AOO in the second figure (Baroco) and OAO in the third (Bocardo), cannot be reduced directly, since an O cannot be converted simply. They are reduced to the impossible. We suppose an opponent who grants the premises but denies the conclusion. We take the contradictory of the conclusion, put it in place of the premise marked by the c, and draw a conclusion in Barbara that contradicts the other premise, which the opponent had granted.</p>`
      + `<p>Take Baroco: “Every fool is tiresome; some talker is not tiresome; so some talker is not a fool.” If the conclusion is denied, then every talker is a fool. Joined to “Every fool is tiresome,” this gives in Barbara “Every talker is tiresome,” which contradicts the granted minor “Some talker is not tiresome.” So the opponent contradicts himself, and the conclusion must be granted. Any imperfect mood can be reduced this way, but these two can be reduced in no other.</p>` },
    { h:`<p><strong>The indirect moods reduced.</strong> The indirect moods of the first figure are reduced by restoring to the first premise its proper role as the major. A syllogism in Celantes, “No philosopher is an angel; Descartes is a philosopher; so no angel is Descartes,” becomes Celarent by reading the conclusion directly: “Descartes is not an angel.” A syllogism in Baralipton, “Every artist is imaginative; every poet is an artist; so something imaginative is a poet,” becomes Barbara, “so every poet is imaginative.”</p>`
      + `<p>Maritain notes that this works because the indirect conclusion already was the direct one, stated with its terms turned around. In the later account, where these moods form a fourth figure, they are reduced by transposition and conversion: AAI of the fourth figure (Bramantip) goes to Barbara by transposing the premises and converting the conclusion by limitation.</p>` },
    { h:`<p><strong>Valid in their own right.</strong> Reduction does not mean that the imperfect moods borrow their validity from the first figure. Maritain reads Aristotle as saying that their evidence depends on a principle more particular than the principle of the first figure, not that they prove nothing by themselves. A syllogism in the second figure concludes by its own form, and the reduction verifies it by showing the same truth in a perfect form.</p>`
      + `<p>The figures also keep their own uses, which reduction would hide: the second figure is the natural form of a refutation, and the third the natural form of a counterexample. So reduction is a test and an explanation of validity, not a rule that every argument should be rewritten in the first figure.</p>` }
  ];
  const ADV_RED_EXTRA = {
    0:{ qs:[
      Q(`Why does Aristotle call the moods of the second and third figures imperfect?`,
        [`Their force becomes evident through something not stated`,`They are invalid unless a further premise is added to them first`,`They have more than three terms`,`They conclude only particular propositions`], 0,
        `Their validity is made evident by a conversion or an argument from the impossible, which the premises do not state.`,
        `Imperfect moods are valid, have three terms, and some conclude universally.`),
      Q(`To which perfect mood is every E conclusion best reduced?`,
        [`EAE in the first figure (Celarent)`,`AAA in the first figure (Barbara)`,`AII in the first figure (Darii)`,`EIO in the first figure (Ferio)`], 0,
        `Every E conclusion is drawn most perfectly in EAE of the first figure.`,
        `Barbara concludes A, Darii I, and Ferio O.`),
      Q(`What is reduction to the impossible?`,
        [`Showing that denying the conclusion contradicts a granted premise`,`Showing that the premises themselves are impossible and must be denied`,`Converting both premises simply`,`Replacing the middle term with a new one`], 0,
        `Whoever grants the premises and denies the conclusion is shown to contradict himself.`,
        `It does not show the premises false or change the terms; it shows the denial of the conclusion impossible.`)
    ]},
    1:{ qs:[
      Q(`A mood’s name begins with D. To which perfect mood is it reduced?`,
        [`Darii`,`Barbara`,`Celarent`,`Ferio`], 0,
        `The initial letter names the perfect mood: D goes to Darii.`,
        `B goes to Barbara, C to Celarent, and F to Ferio.`),
      Q(`What does the letter p in a mood’s name mean?`,
        [`Convert that proposition by limitation`,`Convert that proposition simply`,`Transpose the premises`,`Reduce the mood to the impossible`], 0,
        `P marks conversion by limitation, s simple conversion, m transposition, and c the impossible.`,
        `Each letter marks one operation; p is conversion by limitation.`),
      Q(`What does the letter m in a mood’s name mean?`,
        [`Transpose the premises`,`Convert the major simply`,`Convert the minor by limitation`,`Deny the conclusion`], 0,
        `M (for <em>mutari</em>) means that the premises change places.`,
        `Conversion is marked by s and p, and the impossible by c.`)
    ]},
    2:{ qs:[
      Q(`EAE in the second figure (Cesare): “No fish is a mammal; every whale is a mammal; so no whale is a fish.” How is it reduced?`,
        [`Convert the major simply, giving Celarent`,`Transpose the premises, giving Barbara`,`Convert the minor by limitation, giving Ferio`,`Reduce it to the impossible, giving Darii`], 0,
        `The s after the first vowel calls for simple conversion of the major: “No mammal is a fish,” and the syllogism is in Celarent.`,
        `Cesare begins with C, so it goes to Celarent, and its only operation is the simple conversion of the major.`),
      Q(`In AEE of the second figure (Camestres), which propositions are converted simply?`,
        [`The minor and the conclusion`,`The major and the minor`,`The major only`,`The conclusion only`], 0,
        `The s after the second and third vowels marks the minor and the conclusion.`,
        `In “Camestres” the s’s follow the E of the minor and the E of the conclusion.`),
      Q(`After a direct reduction of Camestres, why is the conclusion converted again?`,
        [`To recover the original conclusion`,`To make the syllogism valid, which it was not before`,`To change its quality`,`To add a fourth term`], 0,
        `The reduced syllogism concludes the converse; converting it gives back the original conclusion.`,
        `The reduced syllogism is already valid, and simple conversion of E changes neither quality nor terms.`)
    ]},
    3:{ qs:[
      Q(`AAI in the third figure (Darapti): “Every square is a rectangle; every square is a rhombus; so some rhombus is a rectangle.” How is it reduced?`,
        [`Convert the minor by limitation, giving Darii`,`Convert the major simply, giving Celarent`,`Transpose the premises, giving Barbara`,`Reduce it to the impossible, giving Ferio`], 0,
        `“Every square is a rhombus” becomes “Some rhombus is a square,” and the syllogism is in Darii.`,
        `Darapti begins with D, so it goes to Darii, and the p marks conversion of the minor by limitation.`),
      Q(`Why must Darapti’s minor be converted by limitation and not simply?`,
        [`An A proposition does not convert simply`,`An I proposition does not convert at all`,`The minor is negative`,`The minor is singular`], 0,
        `A universal affirmative converts only by limitation, since its predicate is not distributed.`,
        `Darapti’s minor is an A, affirmative and universal; I converts simply.`),
      Q(`Felapton goes to which perfect mood?`,
        [`Ferio`,`Celarent`,`Darii`,`Barbara`], 0,
        `Its name begins with F, so it goes to Ferio.`,
        `The initial letter decides: F goes to Ferio.`)
    ]},
    4:{ qs:[
      Q(`Why can Baroco and Bocardo not be reduced directly?`,
        [`An O proposition cannot be converted simply`,`They have two negative premises and so conclude nothing`,`They are invalid moods`,`They have singular premises`], 0,
        `Their O premise cannot be converted to fit the first figure, so only reduction to the impossible remains.`,
        `They are valid, with one negative premise each; the obstacle is the O.`),
      Q(`In reducing Bocardo (OAO in the third figure) to the impossible, which premise is replaced?`,
        [`The major, marked by the c`,`The minor, marked by the c`,`Both premises`,`Neither premise`], 0,
        `In “Bocardo” the c follows the O of the major, so the contradictory of the conclusion replaces the major.`,
        `In Baroco the c follows the minor; in Bocardo it follows the major.`),
      Q(`In a reduction to the impossible, what does the new conclusion contradict?`,
        [`The premise that was kept and granted`,`The contradictory just assumed`,`The original conclusion`,`The middle term`], 0,
        `The conclusion drawn in Barbara contradicts the premise that the opponent granted and that was not replaced.`,
        `The assumed contradictory is a premise of the new syllogism; what it leads to contradicts the other granted premise.`)
    ]},
    5:{ qs:[
      Q(`How is a syllogism in an indirect mood reduced?`,
        [`By giving the first premise its proper role as the major`,`By converting both premises by limitation and keeping the conclusion`,`By reducing it to the impossible`,`By adding a third premise`], 0,
        `Restoring the first premise as the major and reading the conclusion directly gives a first-figure mood.`,
        `The indirect moods need no third premise and are not reduced to the impossible.`),
      Q(`Why does reading the indirect conclusion directly work, on Maritain’s account?`,
        [`It already was the direct conclusion with its terms turned around`,`The indirect conclusion is always false and so must be replaced by another`,`The direct conclusion is weaker`,`The terms have changed their meaning`], 0,
        `The indirect conclusion states the direct one with the grammatical predicate as subject.`,
        `The two conclusions say the same thing; nothing is false, weaker, or changed in meaning.`),
      Q(`In the later account, AAI of the fourth figure (Bramantip) goes to which perfect mood?`,
        [`Barbara`,`Celarent`,`Darii`,`Ferio`], 0,
        `Its name begins with B, so it goes to Barbara, by transposing the premises and converting the conclusion by limitation.`,
        `The initial B decides the perfect mood.`)
    ]},
    6:{ qs:[
      Q(`Does an imperfect mood borrow its validity from the first figure?`,
        [`No, reduction verifies a validity it already has`,`Yes, it is valid only once it has been reduced to the first figure`,`Yes, since it is invalid by itself`,`No, since it is not valid at all`], 0,
        `An imperfect mood concludes by its own form; reduction shows the same truth in a perfect form.`,
        `The imperfect moods are valid by themselves; reduction is a test and an explanation.`),
      Q(`Why should not every argument be rewritten in the first figure?`,
        [`The other figures have their own natural uses`,`The first figure is the least clear`,`Reduction always changes the conclusion`,`The first figure cannot conclude negatively`], 0,
        `The second figure suits refutation and the third the counterexample, which reduction would hide.`,
        `The first figure is the clearest and can conclude negatively; the point is that other figures have their uses.`),
      Q(`On Maritain’s reading, what does the evidence of an imperfect mood depend on?`,
        [`A principle more particular than that of the first figure`,`A further premise that has been left unstated by the arguer`,`The truth of its conclusion`,`The authority of Aristotle`], 0,
        `Each imperfect figure applies the general principle through a more particular one.`,
        `Nothing is left unstated, and validity does not depend on the conclusion’s truth or on authority.`)
    ]}
  };
  /* ---- Third Act: The Modal Syllogism in Depth ---- */
  const ADV_MODS = [
    { src:`${SRC_ART}; ${SRC_MAR}; Aristotle, <i>Prior Analytics</i> I.3, 9, 13–17; St. Albert the Great, commentary on the <i>Prior Analytics</i>, bk. I, tract. 3, ch. 3; Stanford Encyclopedia of Philosophy, “Medieval Theories of Modality” (on Kilwardby); St. Thomas Aquinas, commentary on the <i>Posterior Analytics</i>, bk. I, lect. 14, and commentary on the <i>Sentences</i> I, d. 38, q. 1, a. 5, ad 5; Matthew Minerd, “BCS Logic 2023” (course slides).`,
      h:`<p><strong>Why the first-figure rule holds.</strong> Aristotle holds that in the first figure a necessary major premise with a plain minor premise gives a necessary conclusion (<em>Prior Analytics</em> I.9). The reason is the same principle that governs the first figure. If a predicate belongs necessarily to everything under the middle term, it belongs necessarily to whatever falls under the middle term; and the plain minor premise places the minor term under the middle.</p>`
      + `<p>So “Every metal necessarily conducts electricity; this wire is metal; so this wire necessarily conducts electricity” concludes necessarily, though the minor premise is plain, since the wire might have been made of something else. The necessity in the conclusion is the necessity with which the property follows from being metal; the minor premise contributes only that the wire falls under “metal,” which is enough.</p>` },
    { h:`<p><strong>Why the reverse mixture fails.</strong> The reverse does not hold: a plain major premise with a necessary minor premise gives only a plain conclusion. Aristotle’s example sets motion, animal, and man as the terms (<em>Prior Analytics</em> I.9). Every man is necessarily an animal, and suppose that every animal is in fact moving; it follows that every man is moving, but not that every man is necessarily moving, since neither animal nor man moves necessarily.</p>`
      + `<p>The principle explains the difference. The major premise states how the predicate belongs to everything under the middle term, and what is said of the middle is said of what falls under it in the same way. A necessary minor only makes the minor term fall under the middle necessarily; it cannot make the predicate belong to the middle any more firmly than the major says it does.</p>` },
    { h:`<p><strong>The necessity of the consequence.</strong> Every valid syllogism has a kind of necessity: if the premises are true, the conclusion cannot be false. St. Thomas calls this the <strong>necessity of the consequence</strong>, and he distinguishes it from the <strong>necessity of the consequent</strong>, the necessity of the conclusion taken by itself. From contingent premises a conclusion follows necessarily, in the first sense; but the conclusion need not be necessary in the second sense (commentary on the <em>Posterior Analytics</em>, bk. I, lect. 14).</p>`
      + `<p>The two must not be confused. “If Socrates is sitting, he is necessarily sitting” is true of the consequence (it cannot be that he sits and does not sit) and false of the consequent (his sitting is not necessary). A modal syllogism concerns the second kind: whether the conclusion is itself necessary or contingent, not whether it follows.</p>` },
    { h:`<p><strong>What is said, and the thing, in a syllogism.</strong> The distinction between a modal read as said of what is said and as said of the thing decides some modal syllogisms. An old objection runs: “Whatever God knows is necessarily so; God knows that this man will sin; so this man will necessarily sin.” The objection appeals to Aristotle’s first-figure rule, since its major premise is necessary and its minor plain.</p>`
      + `<p>St. Thomas answers by distinguishing the major (commentary on the <em>Sentences</em> I, d. 38, q. 1, a. 5, ad 5). Said of what is said, the major is true: the statement “What God knows is so” cannot be false. Said of the thing, it is false: the things God knows are not each necessary in themselves. Read the first way, the major does not say that the predicate belongs necessarily to everything under the middle term, and so the rule does not apply. He answers by distinguishing the premise, not by denying the rule.</p>` },
    { h:`<p><strong>Converting modal premises.</strong> The reduction of modal syllogisms depends on converting modal premises, and Aristotle sets out how they convert (<em>Prior Analytics</em> I.3). A necessary universal negative converts simply: if it is necessary that no stone is an animal, it is necessary that no animal is a stone. A necessary universal affirmative converts by limitation: if every man is necessarily an animal, some animal is necessarily a man.</p>`
      + `<p>The contingent universal negative behaves differently (I.17). “It is contingent that no man is white,” in the strict sense, means that any man may be white or not white, and it does not convert into “It is contingent that no white thing is a man.” Aristotle shows this just before he finds that two contingent premises give no conclusion in the second figure, where such a conversion would be needed to reduce the syllogism.</p>` },
    { h:`<p><strong>One-sided possibility in a conclusion.</strong> Since “possible” has two senses, the conclusion of a modal syllogism can be possible in one sense and not in the other. In the first figure, when the major premise is plain and the minor contingent, Aristotle says that the syllogisms are imperfect and that the negative ones conclude not to contingency in the strict sense, but only that the predicate does not belong necessarily (<em>Prior Analytics</em> I.15).</p>`
      + `<p>The difference is between “can be and can also not be” (contingent, or two-sided) and “need not be” (one-sided). A conclusion of the second kind says less: it denies necessity without asserting that the opposite can also hold. Aristotle’s mixtures with contingent premises differ in this way from mood to mood, and each has to be examined on its own.</p>` },
    { h:`<p><strong>The logicians’ cross.</strong> When both premises are necessary, the conclusion is necessary, and the general rules apply without difficulty. The other mixtures led to so many distinctions that the theory of the modal syllogism has been called “the logicians’ cross” (<em>crux logicorum</em>), as Maritain reports. The <em>Summa totius logicae</em>, once attributed to St. Thomas, follows Aristotle and lists the cases figure by figure. St. Albert the Great, St. Thomas’s teacher, also follows Aristotle, but he adds that the plain minor premise must be true “simply” (<em>simpliciter</em>), by the nature of its terms, and not only “as of now” (<em>ut nunc</em>); by “simply” he means that the predicate belongs to the subject substantially (commentary on the <em>Prior Analytics</em>, bk. I, tract. 3, ch. 3). Historians of logic report that Robert Kilwardby, the thirteenth-century English Dominican, gave the same qualification.</p>`
      + `<p>Theophrastus, Aristotle’s successor at the Lyceum, held a simpler rule, that the conclusion always follows the weaker premise in mode. The medieval commentators did not adopt it for the first figure, and this course follows Aristotle.</p>` }
  ];
  const ADV_MODS_EXTRA = {
    0:{ qs:[
      Q(`“Every circle is necessarily round; this plate is a circle; so this plate is ____.” In what mode does the conclusion follow?`,
        [`Necessarily round`,`Round, but only as a plain assertion`,`Contingently round`,`Nothing follows`], 0,
        `In the first figure a necessary major with a plain minor gives a necessary conclusion.`,
        `By Aristotle’s rule the plain minor does not weaken the conclusion here; the necessity comes from the major.`),
      Q(`In such a syllogism, what does the plain minor premise contribute?`,
        [`That the minor term falls under the middle term`,`The necessity of the conclusion`,`The quality of the conclusion`,`A second middle term`], 0,
        `The minor places the subject under the middle; the major supplies how the predicate belongs.`,
        `The necessity comes from the major, and there is only one middle term.`),
      Q(`On which principle does Aristotle’s first-figure rule rest?`,
        [`What is necessary of all under the middle is necessary of what falls under it`,`The conclusion always follows the weaker premise in every respect`,`A necessary premise of any kind makes every conclusion necessary, in every figure alike`,`A plain premise can never appear in a necessary syllogism`], 0,
        `The principle of the first figure, applied to necessity, gives the rule.`,
        `The weaker-premise rule is Theophrastus’s, and Aristotle’s rule holds in the first figure with the necessary major.`)
    ]},
    1:{ qs:[
      Q(`“Every swimmer is in fact wet; every fish is necessarily a swimmer; so every fish is ____.” In what mode does the conclusion follow?`,
        [`Wet, as a plain assertion`,`Necessarily wet`,`Contingently wet`,`Nothing follows`], 0,
        `A plain major with a necessary minor gives only a plain conclusion.`,
        `The major says only that the predicate belongs, not that it must; a necessary minor cannot add that.`),
      Q(`Why can a necessary minor not make the conclusion necessary?`,
        [`It cannot make the predicate belong to the middle more firmly`,`A necessary minor is always false`,`The minor never contains the middle term`,`Necessity cannot appear in a minor premise of the first figure at all`], 0,
        `How the predicate belongs to what falls under the middle depends on how it belongs to the middle, which the major states.`,
        `The minor does contain the middle term and can be necessary; it simply cannot strengthen the major.`),
      Q(`In Aristotle’s example, which proposition is necessary?`,
        [`Every man is an animal`,`Every animal is moving`,`Every man is moving`,`No animal is moving`], 0,
        `Man is necessarily an animal, but neither animal nor man moves necessarily.`,
        `Moving belongs to animals and men in fact, not of necessity.`)
    ]},
    2:{ qs:[
      Q(`“If the door is open, it is necessarily open.” In which sense is this true?`,
        [`Of the consequence`,`Of the consequent`,`In both senses`,`In neither sense`], 0,
        `It cannot be that the door is open and not open, but its being open is not necessary in itself.`,
        `The open door could have been shut, so the consequent taken alone is not necessary.`),
      Q(`From contingent premises, does a conclusion follow necessarily?`,
        [`Yes, with the necessity of the consequence`,`No, nothing follows from contingent premises`,`Yes, and the conclusion is necessary in itself`,`Only in the second figure`], 0,
        `The conclusion follows necessarily, though it need not be necessary by itself.`,
        `Necessity of the consequence does not make the conclusion necessary in itself.`),
      Q(`What does a modal syllogism ask about its conclusion?`,
        [`Whether the conclusion is itself necessary or contingent`,`Whether the conclusion follows at all`,`Whether the conclusion is singular`,`Whether the premises are probable`], 0,
        `A modal syllogism concerns the necessity of the consequent, not of the consequence.`,
        `Whether it follows is the question of validity; the modal question is about the conclusion’s own mode.`)
    ]},
    3:{ qs:[
      Q(`How does St. Thomas answer the argument that God’s knowledge makes sins necessary?`,
        [`He distinguishes the major premise`,`He denies Aristotle’s first-figure rule`,`He denies that God knows future events`,`He grants the conclusion`], 0,
        `The major is true of what is said and false of the thing, so the rule does not apply.`,
        `St. Thomas keeps the rule and God’s knowledge of the future; he distinguishes the premise.`),
      Q(`Read as said of the thing, “Whatever God knows is necessarily so” would mean what?`,
        [`Each thing God knows is necessary in itself`,`The statement “What God knows is so” cannot be false`,`God knows only necessary things`,`Nothing God knows is contingent in its cause`], 0,
        `Said of the thing, the mode attaches to each thing known.`,
        `“Cannot be false” is the reading of what is said, which is true.`),
      Q(`Why does the first-figure rule not apply when the major is read as said of what is said?`,
        [`The major is then not necessary of each thing under the middle`,`The minor premise is then necessary`,`The syllogism is then in the second figure, where the rule does not hold`,`The conclusion is then negative`], 0,
        `The rule needs a major that is necessary of the things under the middle term.`,
        `The figure and the quality are unchanged; the major no longer has the needed sense.`)
    ]},
    4:{ qs:[
      Q(`“It is necessary that no circle is a square.” What follows by conversion?`,
        [`It is necessary that no square is a circle`,`It is possible that some square is a circle`,`It is necessary that some square is a circle`,`Nothing follows by conversion`], 0,
        `A necessary universal negative converts simply.`,
        `The converse keeps the mode and the quality; nothing is said of squares being circles.`),
      Q(`“Every horse is necessarily an animal.” What follows by conversion?`,
        [`Some animal is necessarily a horse`,`Every animal is necessarily a horse`,`No animal is necessarily a horse`,`Some animal is possibly not a horse`], 0,
        `A necessary universal affirmative converts by limitation, keeping its mode.`,
        `An affirmative universal converts only by limitation, and the mode is kept.`),
      Q(`Which modal proposition does not convert simply, according to Aristotle?`,
        [`The contingent universal negative`,`The necessary universal negative`,`The necessary particular affirmative`,`The plain universal negative`], 0,
        `In the strict sense, “It is contingent that no S is P” does not convert (Prior Analytics I.17).`,
        `Necessary and plain universal negatives convert simply, and so does the particular affirmative.`)
    ]},
    5:{ qs:[
      Q(`What does a one-sided possible conclusion assert?`,
        [`That the predicate need not belong`,`That the predicate can and can also not belong`,`That the predicate must belong`,`That the predicate cannot belong`], 0,
        `The one-sided possible denies necessity without asserting the opposite possibility.`,
        `“Can and can also not” is the two-sided, contingent sense.`),
      Q(`In which case does Aristotle find such one-sided conclusions?`,
        [`First figure, plain major, contingent minor, negative`,`First figure, two necessary premises`,`Third figure, two plain premises`,`Second figure, necessary major, plain minor`], 0,
        `With a contingent minor in the first figure the negative syllogisms conclude only that the predicate does not belong necessarily (I.15).`,
        `Two necessary premises give a necessary conclusion, and plain premises a plain one.`),
      Q(`Which says less, “It need not rain” or “It can rain and can also not rain”?`,
        [`“It need not rain”`,`“It can rain and can also not rain”`,`They say the same`,`Neither says anything`], 0,
        `“Need not” denies necessity only; the contingent also asserts that it can rain.`,
        `The two-sided statement adds the possibility of raining.`)
    ]},
    6:{ qs:[
      Q(`What has the theory of the modal syllogism been called?`,
        [`The logicians’ cross`,`The bridge of asses`,`The tree of Porphyry`,`The square of opposition`], 0,
        `Its many mixtures earned it the name <em>crux logicorum</em>.`,
        `The bridge of asses is a name for finding the middle term, and the tree and the square belong elsewhere.`),
      Q(`What did St. Albert add to Aristotle’s first-figure rule?`,
        [`That the plain minor must be true by the nature of its terms`,`That the major must be contingent`,`That the conclusion must always follow the weaker premise in mode`,`That the rule holds in every figure`], 0,
        `He required that the plain minor be true “simply,” by the nature of its terms.`,
        `He followed Aristotle, not the weaker-premise rule, and kept the rule to the first figure.`),
      Q(`Whose rule is it that the conclusion follows the weaker premise in mode?`,
        [`Theophrastus’s`,`Aristotle’s`,`St. Albert’s`,`Kilwardby’s`], 0,
        `Theophrastus, Aristotle’s successor, held the simpler rule.`,
        `Aristotle and Albert grant a necessary conclusion in the first-figure case, and historians of logic report that Kilwardby did as well.`)
    ]}
  };
  /* ---- Third Act: Compound Arguments ---- */
  const ADV_CARG = [
    { src:`${SRC_ART}; ${SRC_MAR}; ${SRC_OES}; Matthew Minerd, “BCS Logic 2023” (course slides); Aristotle, <i>Prior Analytics</i> I.25 and <i>Topics</i> VIII.11.`,
      h:`<p><strong>The epicheirema.</strong> A syllogism is compound when it contains several syllogisms, stated or implied. The simplest is the <strong>epicheirema</strong>, a syllogism in which one premise, or both, is joined to its proof: “Every martyr is a saint, because every martyr has heroic charity; Peter is a martyr; so Peter is a saint.” The causal premise is itself a syllogism in brief: whoever has heroic charity is a saint, and every martyr has it, so every martyr is a saint.</p>`
      + `<p>Aristotle used the word “epicheirema” in another sense, for a dialectical argument from probable premises. The later sense may come from the fact that such premises invite further argument, and a premise that carries its own proof answers the invitation in advance. In judging an epicheirema, we judge each syllogism it contains, the stated one and the one hidden in the causal premise.</p>` },
    { h:`<p><strong>Polysyllogism and sorites.</strong> A <strong>polysyllogism</strong> links several syllogisms so that the conclusion of one is a premise of the next, each stated in full. A <strong>sorites</strong> links several propositions so that the predicate of each is the subject of the next, until a conclusion joins the subject of the first with the predicate of the last: “Peter is a man; every man is an animal; every animal has instincts; whatever has instincts reacts on its own; so Peter reacts on his own.” It contains as many syllogisms as it has premises, less one, but states none of their conclusions until the last.</p>`
      + `<p>The name “sorites” comes from the Greek word for a heap, after the paradox of the heap, which Cicero called the most captious kind of argument. The chain of premises shares a like danger, since a defect in any link is easily hidden among the others. Its validity depends on the validity of every syllogism it contains. Aristotle does not use the name, but he describes the reasoning in the <em>Prior Analytics</em>.</p>` },
    { h:`<p><strong>The Aristotelian and the Goclenian sorites.</strong> In the form just described, called the Aristotelian sorites, the series runs from the minor premise toward the major, and each middle term is wider than the one before. Rudolph Goclenius, a sixteenth-century German logician, gave his name to the reverse form, which begins with the premise that contains the predicate of the conclusion and ends with the one that contains its subject: “Whatever has instincts reacts on its own; every animal has instincts; every man is an animal; Peter is a man; so Peter reacts on his own.”</p>`
      + `<p>Each form has its rules, which follow from the rules of the syllogism. In the Aristotelian sorites only the first premise may be particular and only the last may be negative. In the Goclenian sorites the rules are reversed: only the last premise may be particular and only the first may be negative. A particular premise elsewhere leaves a middle term undistributed, and a negative premise elsewhere lets the major term be distributed in the conclusion when it is not distributed in its premise.</p>` },
    { h:`<p><strong>The dilemma.</strong> A <strong>dilemma</strong> sets out a disjunction such that, whichever member is taken, the same conclusion follows. It is usually built on conditionals: “Either this man will do the act his conscience commands or he will not. If he does it, he acts against the eternal law; if he does not, he acts against his conscience. Either way he does wrong.” This is Maritain’s example of a conscience formed badly through the man’s own fault.</p>`
      + `<p>A dilemma can also be categorical: “Every just man needs grace to persevere; every sinner needs grace to be converted; every man is just or a sinner; so every man needs grace.” The dilemma is chiefly an argument of attack, and it is used more often about what to do than about what is so. The dilemma of Tertullian, the Christian writer of Carthage around the year 200, against the emperor Trajan’s decree on the Christians is a famous example: if they are guilty, why forbid searching for them; if they are innocent, why punish them?</p>` },
    { h:`<p><strong>The rules of a dilemma.</strong> A dilemma holds only if three conditions are met. First, the disjunction must be <strong>complete</strong>, leaving no third possibility. “Every philosopher holds either that ideas are innate or that all knowledge is sensation” fails, since the Aristotelian tradition holds neither. Second, each consequence must <strong>follow</strong> from its member. Third, the common conclusion must be the <strong>only</strong> one that can be drawn, or the dilemma can be turned against its author.</p>`
      + `<p>The rules also show how a dilemma is answered. We may show that the disjunction is not complete, which is called escaping between the horns. We may deny that a consequence follows from its member, which is called taking the dilemma by the horns. Or we may draw an opposite conclusion from the same members, which is called retorting it. The dilemma attributed to the caliph Omar, “The books in the library either agree with the Koran or not; if they agree, they are superfluous; if not, they are harmful; so burn them,” fails the second rule, since agreement does not make a book superfluous.</p>` },
    { h:`<p><strong>Retorting a dilemma.</strong> To retort an argument is to draw the opposite conclusion from its own premises. Maritain’s example is the dilemma urged on someone considering public office: “Either you will govern honestly or dishonestly; if honestly, you will please God; if dishonestly, you will please men; either way it is to your advantage.” It is retorted: “If you govern honestly, you will displease men; if dishonestly, you will displease God; either way it is not to your advantage.”</p>`
      + `<p>A dilemma that can be retorted fails the third rule, since its members support two opposite conclusions equally. A sound dilemma cannot be retorted, because its conclusion is the only one its members allow. So before urging a dilemma, its author should try to retort it himself.</p>` },
    { h:`<p><strong>Dilemma and disjunctive syllogism.</strong> A dilemma is not the same as a disjunctive syllogism, though speakers often confuse them. In a dilemma the same conclusion follows from each member of the disjunction, so that we need not know which member is true. In a disjunctive syllogism one member is removed, and the other is concluded: “Either the minister was deceived or he knew; he was not deceived; so he knew.”</p>`
      + `<p>An orator who says he has caught his opponent “in a dilemma” usually means a disjunctive syllogism, with one member closed off by a further premise. The difference matters for answering: a disjunctive syllogism is answered by defending the member that was removed, and a dilemma by one of the three answers that suit it.</p>` },
    { h:`<p><strong>Oblique syllogisms.</strong> In an <strong>oblique</strong> syllogism one term stands in an oblique case, that is, it is not itself the subject or predicate but qualifies one by some relation, marked in English by a preposition or a possessive. “Christ is God; Mary is the mother of Christ; so Mary is the mother of God” is an oblique syllogism, in which the middle term “Christ” is direct in the major and oblique in the minor.</p>`
      + `<p>Maritain shows that some arguments usually taken to need a new “logic of relations” are oblique syllogisms. “A is greater than B; B is greater than C; so A is greater than C” is not a syllogism as it stands, since its middle term is “B” in one premise and “greater than B” in the other. It becomes valid when its hidden premise is stated: whatever is greater than something greater than C is itself greater than C. An oblique syllogism can always be restated as a direct one, but it has its own way of proceeding.</p>` }
  ];
  const ADV_CARG_EXTRA = {
    0:{ qs:[
      Q(`“Every judge must be impartial, since a judge decides between parties; Ruth is a judge; so Ruth must be impartial.” What is this?`,
        [`An epicheirema`,`A sorites`,`A dilemma`,`An enthymeme`], 0,
        `Its major premise carries its own proof, which makes it an epicheirema.`,
        `Nothing is left unsaid, no chain of predicates runs on, and there is no disjunction.`),
      Q(`What must be judged in an epicheirema?`,
        [`Each syllogism it contains, stated and hidden`,`Only the stated syllogism`,`Only the causal premise, since it carries the proof`,`Only the conclusion`], 0,
        `The causal premise is itself a syllogism in brief, and it must hold as well.`,
        `The whole argument depends on both the stated syllogism and the one in the causal premise.`),
      Q(`In what sense did Aristotle use the word “epicheirema”?`,
        [`A dialectical argument from probable premises`,`A syllogism with a causal premise`,`A chain of conditionals leading to one conclusion`,`A syllogism with a singular middle term`], 0,
        `Aristotle’s epicheirema is a dialectical argument; the later sense is the syllogism with a causal premise.`,
        `The causal premise is the later sense; the other options are other kinds of argument.`)
    ]},
    1:{ qs:[
      Q(`A sorites has five premises. How many syllogisms does it contain?`,
        [`Four`,`Five`,`Six`,`Two`], 0,
        `A sorites contains as many syllogisms as premises, less one.`,
        `Each syllogism after the first uses the previous conclusion and one new premise.`),
      Q(`How does a sorites differ from a polysyllogism?`,
        [`It leaves the intermediate conclusions unstated`,`It uses only negative premises`,`It has no middle terms`,`It always has a particular conclusion and a negative premise`], 0,
        `A polysyllogism states each conclusion; a sorites states only the last.`,
        `A sorites has several middle terms and may conclude universally or affirmatively.`),
      Q(`Where does the name “sorites” come from?`,
        [`From the paradox of the heap, which Cicero called most captious`,`From a Greek logician who first used the form`,`From the links of a chain that binds a prisoner`,`From a Latin word for a series of steps`], 0,
        `“Sorites” comes from the Greek word for a heap, after the paradox of the heap, which Cicero called the most captious kind of argument.`,
        `No logician bore the name, and the word means a heap, not a chain or a series.`)
    ]},
    2:{ qs:[
      Q(`In an Aristotelian sorites, which premise may be particular?`,
        [`Only the first`,`Only the last`,`Any premise`,`None of them`], 0,
        `A particular premise elsewhere would leave a middle term undistributed.`,
        `In the Goclenian form it is the last premise that may be particular.`),
      Q(`In a Goclenian sorites, which premise may be negative?`,
        [`Only the first`,`Only the last`,`Any premise`,`None of them`], 0,
        `The first Goclenian premise contains the predicate of the conclusion, so only it may be negative.`,
        `In the Aristotelian form it is the last premise that may be negative.`),
      Q(`“Every mammal breathes; every dog is a mammal; every terrier is a dog; so every terrier breathes.” What form is this?`,
        [`A Goclenian sorites`,`An Aristotelian sorites`,`A dilemma`,`A polysyllogism`], 0,
        `It begins with the premise that contains the predicate of the conclusion, which is the Goclenian order.`,
        `An Aristotelian sorites would begin with “Every terrier is a dog.” No conclusions are stated in between, so it is no polysyllogism.`)
    ]},
    3:{ qs:[
      Q(`What makes an argument a dilemma?`,
        [`The same conclusion follows from either member of a disjunction`,`One member of a disjunction is removed and the other posited`,`A conclusion is drawn from two conditionals in a chain`,`A premise is supported by its own proof`], 0,
        `In a dilemma the conclusion holds whichever member is taken.`,
        `Removing one member is the disjunctive syllogism, and a premise with its proof is an epicheirema.`),
      Q(`For what is the dilemma chiefly used?`,
        [`To attack, often about what to do`,`To define a species`,`To demonstrate a property of a species`,`To divide a genus`], 0,
        `The dilemma is chiefly an argument of attack, usually about action.`,
        `Definition, demonstration, and division use other forms.`),
      Q(`“Every honest witness is believed; every dishonest witness is exposed; every witness is honest or dishonest; so every witness is believed or exposed.” What is this?`,
        [`A categorical dilemma`,`A conditional dilemma`,`A sorites`,`An epicheirema`], 0,
        `It sets out a disjunction and draws a conclusion from each member without conditionals.`,
        `No “if” is used, so it is categorical; there is no chain of predicates or causal premise.`)
    ]},
    4:{ qs:[
      Q(`“Either we stay home or we go to the city; if we stay, we will be bored; if we go, we will be tired.” Someone points out that we could go to the country. Which answer is this?`,
        [`Escaping between the horns`,`Taking the dilemma by the horns`,`Retorting the dilemma`,`Granting the dilemma`], 0,
        `Showing a third possibility denies that the disjunction is complete.`,
        `Taking by the horns denies a consequence; retorting draws an opposite conclusion.`),
      Q(`Which rule of the dilemma is broken when a consequence does not follow from its member?`,
        [`The second rule`,`The first rule`,`The third rule`,`No rule is broken`], 0,
        `The second rule requires each consequence to follow from its member.`,
        `The first concerns the completeness of the disjunction, and the third the uniqueness of the conclusion.`),
      Q(`Why does the dilemma attributed to the caliph Omar fail?`,
        [`Agreement with the Koran does not make a book superfluous`,`The disjunction leaves out a third possibility for the books`,`It can be retorted against the caliph`,`It has no conclusion`], 0,
        `The consequence “if they agree, they are superfluous” does not follow, so the second rule is broken.`,
        `Every book either agrees or does not, so the disjunction is complete.`)
    ]},
    5:{ qs:[
      Q(`What is it to retort an argument?`,
        [`To draw the opposite conclusion from its own premises`,`To deny that its disjunction is complete and leaves nothing out`,`To repeat it more forcefully`,`To grant its conclusion`], 0,
        `Retorting turns the members of the argument toward the opposite conclusion.`,
        `Denying completeness is escaping between the horns.`),
      Q(`“If you study, you will tire yourself; if you do not, you will fail; so you will suffer.” What retort is possible?`,
        [`If you study, you will pass; if not, you will rest; so you gain`,`You could neither study nor fail to study, so the disjunction fails`,`Studying does not tire anyone`,`You will both study and not study`], 0,
        `The retort draws the opposite conclusion from the same members.`,
        `The second option denies an exhaustive disjunction, the third takes a horn, and the last is impossible.`),
      Q(`Which rule does a dilemma that can be retorted fail?`,
        [`The third, since its conclusion is not the only one`,`The first, since its disjunction is incomplete`,`The second, since a consequence does not follow`,`None, since retorting is only rhetoric`], 0,
        `If the members support an opposite conclusion equally, the stated conclusion is not the only one.`,
        `Retorting does not show an incomplete disjunction or a failed consequence.`)
    ]},
    6:{ qs:[
      Q(`“Either the lamp is broken or the power is out; the lamp is not broken; so the power is out.” What is this?`,
        [`A disjunctive syllogism`,`A dilemma`,`A sorites`,`An epicheirema`], 0,
        `One member is removed and the other concluded, which is a disjunctive syllogism.`,
        `In a dilemma the same conclusion would follow from both members.`),
      Q(`How is a disjunctive syllogism answered?`,
        [`By defending the member that was removed`,`By retorting it with an opposite conclusion`,`By denying that it has a disjunction`,`By granting it and narrowing the thesis`], 0,
        `The argument stands or falls with the premise that removes one member.`,
        `Retorting is an answer to a dilemma, not to a disjunctive syllogism.`),
      Q(`What do orators often mean by having an opponent “in a dilemma”?`,
        [`A disjunctive syllogism with one member closed off`,`A dilemma in the strict sense`,`An argument with no conclusion`,`A sorites with hidden steps and an unstated conclusion`], 0,
        `They usually remove one member by a further premise, which is a disjunctive syllogism.`,
        `In a strict dilemma neither member is closed off; both lead to the conclusion.`)
    ]},
    7:{ qs:[
      Q(`“Every friend of Peter is welcome; John is a friend of Peter; so John is welcome.” Where is the oblique term?`,
        [`“Peter,” which qualifies the term by a relation`,`“John,” the subject of the conclusion`,`“welcome,” the predicate`,`There is no oblique term`], 0,
        `“Of Peter” is in an oblique case, qualifying “friend” by a relation.`,
        `The direct terms are “friend of Peter,” “John,” and “welcome”; “Peter” itself stands obliquely.`),
      Q(`Why is “A is older than B; B is older than C; so A is older than C” not a syllogism as it stands?`,
        [`Its middle term is not the same in both premises`,`It has two negative premises and a particular conclusion`,`It concludes particularly`,`It has a singular term`], 0,
        `The middle is “B” in one premise and “older than B” in the other.`,
        `The premises are affirmative, and singular terms are allowed; the problem is the middle term.`),
      Q(`What makes the argument about “older than” valid?`,
        [`Adding the premise that what is older than one older than C is older than C`,`Converting both premises simply, so that the terms change their places in each`,`Adding a second conclusion`,`Reading the terms as material`], 0,
        `With that premise stated, the middle term is the same in both premises.`,
        `Conversion would not fix the middle term, and nothing material is meant.`)
    ]}
  };
  /* ---- Third Act: Induction and Example ---- */
  const ADV_IND = [
    { src:`${SRC_ART}; ${SRC_MAR}; Aristotle, <i>Prior Analytics</i> II.23–24 and <i>Posterior Analytics</i> I.1, I.18, II.19; St. Albert the Great, commentary on the <i>Prior Analytics</i>; Matthew Minerd, “BCS Logic 2023” (course slides).`,
      h:`<p><strong>Two ways to make truth known.</strong> Aristotle and St. Thomas teach that we come to know in two ways: by the syllogism, which proceeds from universals, and by induction, which proceeds from singulars. The reason lies in our knowledge itself. All of it depends formally on first principles known through themselves, and all of it takes its origin materially from the singular things the senses perceive.</p>`
      + `<p>Maritain puts the difference this way. A syllogism stays on the plane of the intelligible and moves from one universal truth to another, resolving a conclusion into the principles it depends on. Induction rises from the plane of the senses to the intelligible, resolving a conclusion into the experience from which the mind drew it. So induction is not a weaker syllogism; it is the other way of making truth known, and it supplies the principles that syllogisms use.</p>` },
    { h:`<p><strong>No middle term.</strong> In a syllogism two terms are joined because each is joined to a third, the middle term. Induction has no middle term. Its mean is an <strong>enumeration</strong> of individuals or of kinds: “This water boils at one hundred degrees, and this, and this; and the nature found in these is water; so water boils at one hundred degrees.” The enumeration does the work that the middle term does in a syllogism.</p>`
      + `<p>The two premises of an induction therefore differ from those of a syllogism. Its first premise joins a predicate to a series of individuals taken one by one; its second joins those individuals to the universal they share; and the conclusion joins the predicate to the universal. Aristotle says the same in the <em>Prior Analytics</em> (II.23): in induction one extreme is shown of the middle through the other extreme, the enumerated cases.</p>` },
    { h:`<p><strong>“Every,” not “all.”</strong> Maritain insists that induction concludes about a nature, not about a collection. From “this metal conducts electricity, and this, and this,” it concludes that metal, every metal, conducts electricity, and so it claims a connection between the property and the nature, even if that connection is not yet seen. It does not merely sum up the cases observed. For this reason he prefers “every” to “all,” since “all” can suggest the cases taken together as a collection.</p>`
      + `<p>Read as a statement about a collection, induction would be either worthless or empty. If it passed from some members to the whole collection taken together (“this soldier has a soul, and that one, so the regiment has a soul”), it would be a fallacy. If it simply listed every member (“Peter, James, and John were present, so all three were present”), it would say nothing new. Induction properly so called passes from some to <em>every</em>, from the cases to the nature found in each.</p>` },
    { h:`<p><strong>Complete and incomplete induction.</strong> An induction is <strong>complete</strong> when every part of the universal has been enumerated: “Sight, hearing, touch, taste, and smell each have a bodily organ; these are all the senses; so every sense has a bodily organ.” It is <strong>incomplete</strong> when only some of the parts have been enumerated, as in nearly all inductions from experience, since we cannot review every case.</p>`
      + `<p>“Incomplete” does not mean “badly done.” An incomplete enumeration can still be <strong>sufficient</strong>, and when it is sufficient, the induction is valid; a sufficient enumeration is in effect a complete one. The hard question, which belongs to the study of each science, is when an enumeration is sufficient. Complete induction is not empty either: to know that each of the five senses has an organ is one thing, and to know that sense, as such, has an organ is another.</p>` },
    { h:`<p><strong>The two rules.</strong> Maritain gives two rules for the form of induction. First, the enumeration must be <strong>sufficient</strong>; otherwise the inference is not formal. “Peter is French, and Paul, and James, so every man is French” is a defective induction, since three Frenchmen do not represent mankind.</p>`
      + `<p>Second, we may not make a particular term universal by an inductive ascent, even with a sufficient enumeration. “Some saint lacked this kind of heroism, and some saint lacked that kind, and so on through every kind, so some saint lacked every kind of heroism” does not follow, because a different saint may lack each kind. Each premise says only that one or another saint lacked one kind, and that does not add up to one saint lacking all of them.</p>` },
    { h:`<p><strong>Not a syllogism in Darapti.</strong> Some modern logicians treat induction as a syllogism in the third figure: “This body attracts iron; this body is a magnet; so some magnet attracts iron,” with “every magnet” then assumed. Maritain answers that this destroys induction rather than explains it. As a syllogism the argument concludes only “some magnet,” and the step to “every magnet” would be invalid in form.</p>`
      + `<p>St. Albert the Great, St. Thomas’s teacher, had already said that the matter of induction can be put into a syllogism but its form cannot, and that induction is opposed to the syllogism properly so called. The syllogism proves that a subject and predicate agree because both agree with a third term; induction proves that a property belongs to a nature by producing the cases in which they are found together.</p>` },
    { h:`<p><strong>Reasoning by resemblance.</strong> Reasoning by resemblance, which Aristotle calls the example, passes from one case to another like it: “This remedy cured Paul’s headaches, so it will cure John’s.” It is an induction that stops halfway. Instead of rising to the universal of which Paul’s case is a part, it rises only to a resemblance between the two cases, and from there it descends to the second case.</p>`
      + `<p>Because the resemblance may be accidental, the example gives probable knowledge, not certainty, though it plays a great part in discovery. It is not an inference from particular to particular without any universal, as some modern logicians claim: the universal in it is the likeness itself. The scientist who guesses that dew forms as moisture forms on a cold glass is reasoning by resemblance, and so is a rhetorician who argues from a past war to a coming one.</p>` },
    { h:`<p><strong>Analogy in reasoning and in knowledge.</strong> Reasoning by resemblance is often called reasoning by analogy, but it must not be confused with analogical knowledge. In reasoning by analogy the likeness is the means of an inference, often a likeness that is more or less accidental, and the conclusion is only probable.</p>`
      + `<p>In analogical knowledge the analogy belongs to a concept and to the things it is said of, as “being” is said of creatures and of God, each in its own way. When one of the things is known to us and the other is not, we can know the second through the first, inadequately but with certainty. So an argument “from analogy” in the first sense may be weak, while knowledge by analogy in the second sense can be certain.</p>` }
  ];
  const ADV_IND_EXTRA = {
    0:{ qs:[
      Q(`From what does induction proceed?`,
        [`From singulars known through the senses`,`From first principles known through themselves`,`From probable opinions held by the wise`,`From definitions stated by authority`], 0,
        `Induction rises from singulars to the universal; the syllogism proceeds from universals.`,
        `First principles are the starting point of the syllogism; opinion and authority belong to dialectic.`),
      Q(`On Maritain’s account, how does induction differ from the syllogism?`,
        [`It rises from the senses to the intelligible`,`It stays on the plane of the intelligible`,`It is a weaker form of the syllogism`,`It uses four terms instead of three`], 0,
        `The syllogism moves within the intelligible; induction rises to it from experience.`,
        `Induction is not a weaker syllogism, and it has no middle term at all.`),
      Q(`What does induction supply to syllogisms?`,
        [`The principles they use`,`The middle terms they need`,`Their rules of validity`,`Their conclusions`], 0,
        `Universal principles are first known by induction from experience.`,
        `Induction supplies principles, not rules, middle terms, or conclusions.`)
    ]},
    1:{ qs:[
      Q(`What takes the place of the middle term in an induction?`,
        [`An enumeration of individuals or kinds`,`A definition of the subject that is being studied`,`A conditional premise`,`A universal principle`], 0,
        `The enumerated cases are the mean that joins the predicate to the universal.`,
        `Induction has no middle term; a definition or principle would make it a syllogism.`),
      Q(`“This crow is black, and this, and this; and these are crows; so the crow is black.” What does the second premise join?`,
        [`The individuals to the universal they share`,`The predicate to the universal under which the cases fall`,`The predicate to the individuals`,`Two universals to each other`], 0,
        `The second premise joins the enumerated cases to the nature they share.`,
        `The first premise joins the predicate to the cases, and the conclusion joins it to the universal.`),
      Q(`What does the first premise of an induction join?`,
        [`A predicate to a series of individuals`,`Two universals to each other by means of a middle term`,`An individual to its species`,`A cause to its effect`], 0,
        `It says that the predicate belongs to this case, and this, and this.`,
        `No middle term is used, and the joining of cases to their species is the second premise.`)
    ]},
    2:{ qs:[
      Q(`“This rose has thorns, and this, and this; so every rose has thorns.” What does the conclusion claim?`,
        [`A connection between the nature and the property`,`A summary of the roses observed`,`That all the roses, taken together as one group, have thorns`,`That some roses have thorns`], 0,
        `Induction concludes about the nature found in each case, not about a collection.`,
        `A mere summary would say nothing new, and a claim about all roses together would be a fallacy.`),
      Q(`“This brick weighs a pound, and this one, and this one; so the wall weighs a pound.” What is wrong?`,
        [`It passes from members to the collection taken together`,`The enumeration is complete`,`It concludes about the nature rather than about the bricks`,`It has a middle term`], 0,
        `What holds of each brick need not hold of the wall as a whole; this reads induction as about a collection.`,
        `Induction properly passes to the nature in each case, not to the group taken together.`),
      Q(`Why should an induction be stated with “every” rather than “all”?`,
        [`“Every” signifies the nature in each case, not a collection`,`“All” is not correct English`,`“Every” makes the induction complete, whatever has been enumerated`,`“All” makes the conclusion particular`], 0,
        `Maritain prefers “every,” since “all” first suggests a collection of individuals.`,
        `Both are good English; the point is what each word signifies first.`)
    ]},
    3:{ qs:[
      Q(`“Copper, iron, and gold conduct heat; so every metal conducts heat.” What kind of induction is this?`,
        [`Incomplete, though it may be sufficient`,`Complete, since all metals are named`,`Not an induction, since it has a middle term`,`A syllogism in Darapti`], 0,
        `Only some metals are enumerated, so the induction is incomplete; it is valid if the enumeration is sufficient.`,
        `Not every metal is named, and there is no middle term.`),
      Q(`What does “incomplete” mean when said of an induction?`,
        [`That not every part has been enumerated`,`That the induction is badly done`,`That the conclusion is false`,`That the induction has no conclusion`], 0,
        `It is short for “by incomplete enumeration,” and such an induction can still be sufficient.`,
        `An incomplete induction can be valid and its conclusion true.`),
      Q(`Why is a complete induction not empty?`,
        [`Knowing the nature as such differs from knowing each part`,`It adds a new case that was not counted among the others before`,`It changes the predicate`,`It is not really an induction`], 0,
        `To know that sense as such has an organ is more than to know that each sense does.`,
        `A complete induction adds no case and keeps the predicate; it reaches the universal.`)
    ]},
    4:{ qs:[
      Q(`“This swan is white, and that one, and that one; so every swan is white.” What would make this induction defective?`,
        [`An enumeration too small to represent swans`,`An enumeration that is complete`,`Stating its conclusion with the word “every”`,`Having a predicate in it`], 0,
        `The enumeration must be sufficient; otherwise the inference is not formal.`,
        `A complete enumeration would be sufficient, and “every” is the right word.`),
      Q(`“Some student failed the first test, some failed the second, and so on; so some student failed every test.” Why does this not follow?`,
        [`A different student may have failed each test`,`The enumeration of the tests is not sufficient`,`The conclusion is universal`,`It has a middle term`], 0,
        `We may not make a particular term universal by ascent: each premise is about one student or another.`,
        `Even a sufficient enumeration of tests would not let us pass to one student failing all.`),
      Q(`Which of Maritain’s rules forbids ascending from a particular term?`,
        [`The second rule`,`The first rule`,`Neither rule`,`Both rules`], 0,
        `The second rule forbids making a determinate particular universal by an inductive ascent.`,
        `The first rule requires a sufficient enumeration.`)
    ]},
    5:{ qs:[
      Q(`Why does Maritain reject reading induction as a syllogism in Darapti?`,
        [`As a syllogism it concludes only “some,” not “every”`,`Darapti is not a valid mood`,`Induction has more premises than Darapti, so it cannot fit the mood`,`Darapti has no middle term`], 0,
        `The third figure concludes particularly, so the universal conclusion would not follow in form.`,
        `Darapti is valid and has a middle term; it simply cannot give a universal conclusion.`),
      Q(`What did St. Albert say about induction and the syllogism?`,
        [`The matter of induction can be put in a syllogism, but not its form`,`Induction is only a weaker kind of syllogism, in the third figure as a rule`,`The syllogism is a kind of induction`,`Induction has no matter`], 0,
        `Albert held that induction is opposed to the syllogism properly so called.`,
        `Albert denied that induction is a kind of syllogism or the reverse.`),
      Q(`How does a syllogism prove that a subject and predicate agree?`,
        [`Both agree with a third term`,`By listing the cases in which they are found together`,`By a resemblance between two cases`,`By the authority of the wise`], 0,
        `The syllogism joins the extremes through the middle term.`,
        `Listing the cases is the way of induction, and resemblance that of the example.`)
    ]},
    6:{ qs:[
      Q(`“This plan worked in our city, so it will work in yours.” What kind of reasoning is this?`,
        [`Reasoning by resemblance, the example`,`Complete induction`,`A syllogism in Barbara`,`An expository syllogism`], 0,
        `It passes from one case to another like it, without rising to a universal.`,
        `It neither enumerates all cases nor uses a middle term.`),
      Q(`What kind of knowledge does reasoning by resemblance give?`,
        [`Probable knowledge, useful in discovery`,`Certain knowledge, as in demonstration`,`No knowledge at all`,`Knowledge of first principles`], 0,
        `The resemblance may be accidental, so the conclusion is only probable.`,
        `It is useful, but it does not give the certainty of demonstration or of principles.`),
      Q(`Is reasoning by resemblance an inference from particular to particular with no universal?`,
        [`No, the likeness itself is its universal`,`Yes, as the modern logicians claim`,`Yes, since it names no species`,`No, since it is a complete induction`], 0,
        `Maritain argues that every reasoning has some universal, here the resemblance between the cases.`,
        `It is not complete induction; but it does rest on a universal, the likeness.`)
    ]},
    7:{ qs:[
      Q(`“The moon’s light comes from the sun, so the light of the planets does too.” Which kind of analogy is this?`,
        [`Reasoning by analogy, which is probable`,`Analogical knowledge, which can be certain`,`Metaphor, which proves nothing`,`Univocal predication`], 0,
        `The likeness is the means of an inference, so the conclusion is only probable.`,
        `Analogical knowledge concerns a concept said of things in different ways, not an inference from a likeness.`),
      Q(`In analogical knowledge, to what does the analogy belong?`,
        [`To a concept and the things it is said of`,`To the likeness between two cases`,`To the probability of a conclusion`,`To the words of a figure of speech`], 0,
        `In analogical knowledge the analogy is in the concept, as “being” is said of creatures and of God.`,
        `A likeness between cases is reasoning by analogy, which is a different thing.`),
      Q(`Can knowledge by analogy be certain?`,
        [`Yes, though it is inadequate`,`No, since every analogy is weak`,`Only when the things are equal`,`Only in mathematics`], 0,
        `We can know one thing through another truly, though not fully.`,
        `Arguments by resemblance are weak; knowledge by analogy can be certain.`)
    ]}
  };
  /* ---- Third Act: Demonstration ---- */
  const ADV_DEM = [
    { src:`${SRC_ART}; ${SRC_MAR}; St. Thomas Aquinas, commentary on the <i>Posterior Analytics</i>, bk. I, lect. 4, 10, 23–25; Aristotle, <i>Posterior Analytics</i> I.2, 4, 9, 13–14; Pierre Conway, <i>Aristotelian Formal and Material Logic</i> (University Press of America, 1995); Matthew Minerd, “BCS Logic 2023” (course slides).`,
      h:`<p><strong>The conditions of the premises.</strong> A demonstration is a syllogism that produces science, that is, knowledge of a thing through its cause and as something that cannot be otherwise. So its premises must be of a certain kind. Aristotle requires that they be <strong>true</strong>, <strong>first</strong> and <strong>immediate</strong> (not themselves proved through a middle), <strong>better known</strong> than the conclusion, <strong>prior</strong> to it, and its <strong>causes</strong> (<em>Posterior Analytics</em> I.2).</p>`
      + `<p>St. Thomas explains each condition (commentary, bk. I, lect. 4). The premises must be true, since what is not cannot be known. They must be first and immediate, or else resolve into premises that are, since proof cannot go back without end. And they must be better known, prior, and causes, since the conclusion is known through them. A valid argument from true premises proves its conclusion, but it is a demonstration only when its premises meet all these conditions.</p>` },
    { h:`<p><strong>The first and second ways of being said per se.</strong> The premises of a demonstration are necessary because their predicates belong to their subjects <em>per se</em>, that is, through the subject itself. St. Thomas distinguishes four ways (commentary, bk. I, lect. 10). In the <strong>first</strong>, the predicate is the definition of the subject or part of it: “A triangle is a figure,” “A line is bounded by points.” In the <strong>second</strong>, the subject enters the definition of the predicate, as its proper subject: “A number is odd or even,” “A nose is snub,” since odd and snub cannot be defined without number and nose.</p>`
      + `<p>Whatever is predicated neither way is predicated <em>per accidens</em>, as “musical” and “white” are said of an animal. Demonstration uses the first way in its principles, since the definition is the middle term, and it concludes in the second way, since the property it proves is defined through the subject in which it belongs.</p>` },
    { h:`<p><strong>The third and fourth ways.</strong> In the <strong>third</strong> way, “per se” means existing by itself, as an individual substance does: Socrates exists by himself, while “the walking” or “the white” exists only in something else. This sense concerns things, not predication. In the <strong>fourth</strong> way, a predicate belongs to a subject per se when the subject is the cause of it: “What was killed, died,” since the killing caused the death. What merely happens along with something belongs per accidens: “While he was walking, there was lightning.”</p>`
      + `<p>The fourth way joins effect to efficient cause, and so it too can appear in demonstration, when the cause named is the proper and necessary cause. The four ways together show what kind of necessity science looks for: a predicate that belongs to a subject through what the subject is or through what it causes, not through what happens to accompany it.</p>` },
    { h:`<p><strong>Through the effect: the planets.</strong> Aristotle distinguishes knowing <em>that</em> a thing is so from knowing <em>why</em> (<em>Posterior Analytics</em> I.13). His example: “Whatever does not twinkle is near; the planets do not twinkle; so the planets are near.” This is valid and true, but the middle term, not twinkling, is not the cause of nearness; the reverse is true, since the planets do not twinkle because they are near. So this demonstrates only <strong>that</strong> the planets are near (<em>quia</em>).</p>`
      + `<p>Exchange the terms and the demonstration gives the reason: “Whatever is near does not twinkle; the planets are near; so the planets do not twinkle.” Now the middle term is the cause, and we know <strong>why</strong> (<em>propter quid</em>). St. Thomas adds that the demonstration of the fact can proceed through an effect that is better known to us, since effects are often more evident to the senses than their causes (commentary, bk. I, lect. 23).</p>` },
    { h:`<p><strong>Through a remote cause: the wall.</strong> A demonstration can also show only the fact when its middle term is a cause, but not the proper and proximate one. Aristotle’s example: “Whatever is not an animal does not breathe; a wall is not an animal; so a wall does not breathe.” The conclusion is true, but not being an animal is not the reason a wall does not breathe. If it were, being an animal would be the reason for breathing, and many animals do not breathe in the way meant (St. Thomas, commentary, bk. I, lect. 24).</p>`
      + `<p>The middle term here is too wide: it lies outside the proper genus of the conclusion and does not convert with the major term. Pierre Conway gives a parallel: no diamond is a tiger, and “it is not an animal” is again too remote a reason, since the diamond is first of all not living. The demonstration of the reasoned fact needs the proximate cause, the one that converts with the effect.</p>` },
    { h:`<p><strong>Proper principles, not common ones.</strong> A demonstration must proceed from the principles proper to its own science, not from principles common to many. Aristotle cites the attempt of Bryson, a Greek mathematician of Plato’s time, to square the circle, which the commentators report as an argument of this kind: in whatever genus there is something greater and something less than a given thing, there is something equal to it; there are squares greater and less than a given circle; so there is a square equal to it. The principle is true of quantity in general, but it says nothing about the forms of the circle and the square.</p>`
      + `<p>Such an argument may be persuasive, but it does not give the reason proper to geometry, and so it is not a demonstration. For the same reason a proof in geometry does not proceed from arithmetic, nor a proof in medicine from mere statistics: each science demonstrates from the principles that belong to its own subject. Squaring the circle is impossible, as Ferdinand von Lindemann, the German mathematician, proved in 1882.</p>` },
    { h:`<p><strong>The definition as middle term.</strong> A demonstration of the reasoned fact usually has the definition of the subject, or of the property, as its middle term. “Every rational animal is capable of laughter; every man is a rational animal; so every man is capable of laughter.” The definition explains why the property belongs, and the conclusion states a property in the second way of being said per se.</p>`
      + `<p>Such a demonstration is made in the first figure, which Aristotle holds to be the most scientific (<em>Posterior Analytics</em> I.14): only in it can a universal affirmative be concluded, and science seeks the universal affirmative “every S is P” through its cause. A demonstration in the second or third figure can be completed only by being reduced to the first.</p>` },
    { h:`<p><strong>Fact and reason in different sciences.</strong> Sometimes one science knows the fact and another the reason. Aristotle’s example: the physician knows <em>that</em> round wounds heal more slowly, while the geometer knows <em>why</em>. So also the practical astronomer or the musician knows facts whose reason belongs to mathematics. In such cases the lower science is <strong>subalternated</strong> to the higher, taking its principles from it.</p>`
      + `<p>This shows that “science” in the classical sense has degrees. A science that knows the fact without the reason is still knowledge, but it rests on another science for its explanation. St. Thomas counts theology a science in this way, subalternated to the knowledge God and the blessed have, from which it receives its principles by faith (<em>Summa theologiae</em> I, q. 1, a. 2).</p>` }
  ];
  const ADV_DEM_EXTRA = {
    0:{ qs:[
      Q(`Which of these is not one of Aristotle’s conditions for the premises of a demonstration?`,
        [`That they be widely believed`,`That they be prior to the conclusion`,`That they be causes of the conclusion`,`That they be better known than the conclusion`], 0,
        `Being widely believed is the mark of a dialectical premise, not a demonstrative one.`,
        `Priority, causality, and being better known are among Aristotle’s conditions.`),
      Q(`Why must the premises of a demonstration be first and immediate?`,
        [`Proof cannot go back without end`,`Every premise must be self-evident to everyone`,`A premise with a middle term is false`,`The conclusion must be immediate too`], 0,
        `Every chain of proof must end in premises not proved through a middle.`,
        `Mediate premises are not false; but they must resolve into immediate ones.`),
      Q(`A valid argument from true premises fails to give the cause. What is it?`,
        [`Sound, but not a demonstration of the reasoned fact`,`Invalid, since it has no cause in its middle term at all`,`A fallacy of the consequent`,`A demonstration in the full sense`], 0,
        `Soundness is not enough for demonstration; the premises must also be causes.`,
        `The argument is valid and sound; what it lacks is the cause.`)
    ]},
    1:{ qs:[
      Q(`“A circle is a figure.” In which way is this said per se?`,
        [`The first, since the predicate is part of the definition`,`The second, since the subject enters the definition of the predicate`,`The third, since a circle exists by itself`,`It is said per accidens`], 0,
        `“Figure” is the genus in the definition of the circle.`,
        `The predicate is part of the subject’s definition, which is the first way.`),
      Q(`“A number is prime or composite.” In which way is this said per se?`,
        [`The second, since number enters the definition of prime`,`The first, since prime is part of the definition of number`,`The fourth, since number causes primeness`,`It is said per accidens`], 0,
        `“Prime” cannot be defined without “number,” its proper subject.`,
        `Prime is not part of what a number is; the subject enters the predicate’s definition.`),
      Q(`“The animal is musical.” How is the predicate said?`,
        [`Per accidens`,`Per se in the first way`,`Per se in the second way`,`Per se in the fourth way`], 0,
        `Neither enters the definition of the other, so it is said per accidens.`,
        `Musical is not part of animal, nor is animal its proper subject by definition.`)
    ]},
    2:{ qs:[
      Q(`“The beheaded man died.” In which way is this said per se?`,
        [`The fourth, since the beheading caused the death`,`The first, since death is part of man’s definition`,`The third, since he existed by himself`,`It is said per accidens`], 0,
        `In the fourth way the subject is the cause of what is predicated.`,
        `Death is not in man’s definition; the beheading is the cause.`),
      Q(`“While she was reading, the bell rang.” How is this said?`,
        [`Per accidens, since the reading did not cause the ringing`,`Per se in the fourth way`,`Per se in the first way`,`Per se in the third way`], 0,
        `What merely happens along with something is per accidens.`,
        `The reading is not the cause of the ringing.`),
      Q(`What does the third way of being per se concern?`,
        [`A thing existing by itself, as an individual substance`,`A predicate that is placed in the definition of the subject`,`A cause and its effect`,`A subject in the definition of the predicate`], 0,
        `It concerns things, not predication: a substance exists by itself.`,
        `The other ways concern predication.`)
    ]},
    3:{ qs:[
      Q(`“Whatever has smoke has fire; this house has smoke; so this house has fire.” What kind of demonstration is this?`,
        [`Of the fact, through an effect`,`Of the reasoned fact, through the cause`,`Of the fact, through a remote cause`,`No demonstration at all`], 0,
        `Smoke is the effect of fire, so the argument shows that, not why.`,
        `The middle term is an effect, not a cause, near or remote.`),
      Q(`In “Whatever is near does not twinkle; the planets are near; so they do not twinkle,” what is the middle term?`,
        [`Being near, which is the cause`,`Not twinkling, which is the effect`,`The planets`,`Twinkling`], 0,
        `The middle term, nearness, is the cause, so this shows why.`,
        `Not twinkling is here the conclusion’s predicate.`),
      Q(`Why can a demonstration of the fact proceed through an effect?`,
        [`The effect is often better known to us than the cause`,`The effect is the cause of the cause`,`The effect is always prior by nature`,`The effect is more certain in itself`], 0,
        `Effects are often more evident to the senses, though causes are prior by nature.`,
        `The cause is prior and better known by nature; the effect is better known to us.`)
    ]},
    4:{ qs:[
      Q(`“Whatever is not a living thing does not grow; a stone is not a living thing; so a stone does not grow.” Is the middle term the proximate cause?`,
        [`Yes, since not living explains not growing`,`No, it is a remote cause`,`No, it is an effect`,`No, it is an accident`], 0,
        `Growth belongs to living things as such, so not living is the proper reason.`,
        `Here the middle term is the proper reason, not a remote cause, an effect, or an accident.`),
      Q(`Why does “a wall is not an animal” not explain why it does not breathe?`,
        [`Then being an animal would explain breathing, which it does not`,`Walls are animals in a figurative sense, and so do breathe in a way`,`The premise is false`,`Breathing has no cause`], 0,
        `If a negation is the cause of a negation, the affirmation must be the cause of the affirmation.`,
        `The premise is true; the middle term is too wide to be the proper cause.`),
      Q(`What must the middle term of a demonstration of the reasoned fact do?`,
        [`Be the proximate cause, converting with the effect`,`Be wider than the major term`,`Be an effect better known to us`,`Be a probable opinion`], 0,
        `The proper cause converts with the effect and explains it.`,
        `A wider middle is a remote cause, and an effect gives only the fact.`)
    ]},
    5:{ qs:[
      Q(`Why is Bryson’s argument not a demonstration?`,
        [`It proceeds from a principle common to all quantity`,`Its premises are false`,`It is invalid`,`It uses the second figure`], 0,
        `The principle is true of quantity in general and says nothing of circles and squares as such.`,
        `The argument may be valid with true premises; it fails to give the proper reason.`),
      Q(`A proof in geometry uses only principles of arithmetic. What has gone wrong?`,
        [`It does not proceed from the principles proper to its science`,`It has four terms`,`It reasons from effects instead of from causes, which is not allowed`,`It concludes negatively`], 0,
        `Each science demonstrates from principles proper to its own subject.`,
        `The fault is not the number of terms or the quality of the conclusion.`),
      Q(`What may an argument from a common principle still be?`,
        [`Persuasive, but not a demonstration`,`A demonstration of the reasoned fact`,`A first principle`,`A definition`], 0,
        `It may seem convincing, yet it does not give the proper reason.`,
        `Only proper principles give the reasoned fact.`)
    ]},
    6:{ qs:[
      Q(`Why is the first figure the most scientific?`,
        [`Only it concludes universally and affirmatively`,`Only it has three terms`,`Only it uses necessary premises`,`Only it avoids definitions`], 0,
        `Science seeks “every S is P” through its cause, which only the first figure concludes.`,
        `All figures have three terms and may use necessary premises.`),
      Q(`What is usually the middle term of a demonstration of the reasoned fact?`,
        [`A definition`,`An accident`,`A probable opinion`,`A singular term`], 0,
        `The definition explains why the property belongs.`,
        `Accidents, opinions, and singulars do not give the cause.`),
      Q(`In “Every rational animal is capable of laughter; every man is a rational animal; so every man is capable of laughter,” in which way is the conclusion said per se?`,
        [`The second`,`The first`,`The third`,`Per accidens`], 0,
        `A property is defined through its subject, so it is said per se in the second way.`,
        `Laughter is not part of man’s definition, so not the first way.`)
    ]},
    7:{ qs:[
      Q(`The engineer knows that a bridge of a certain shape holds, and the physicist knows why. What is the relation?`,
        [`The engineer’s knowledge is subalternated to the physicist’s`,`The physicist’s is subalternated to the engineer’s`,`Neither is science`,`They are the same science`], 0,
        `The lower science knows the fact and takes the reason from the higher.`,
        `The one that supplies the reason is the higher science.`),
      Q(`Which science does Aristotle say knows why round wounds heal more slowly?`,
        [`Geometry`,`Medicine`,`Astronomy`,`Music`], 0,
        `The physician knows the fact; the geometer knows the reason.`,
        `Medicine knows only that it is so.`),
      Q(`How does St. Thomas count theology a science?`,
        [`As subalternated to the knowledge of God and the blessed`,`As a science that proves all of its own principles by reason`,`As a branch of geometry`,`As a dialectical art only`], 0,
        `It receives its principles by faith from a higher knowledge (Summa theologiae I, q. 1, a. 2).`,
        `Theology does not prove its own first principles.`)
    ]}
  };
  /* ---- Third Act: The Fallacies in Depth ---- */
  const ADV_FAL = [
    { src:`${SRC_ART}; ${SRC_MAR}; St. Thomas Aquinas (attributed), <i>De fallaciis</i>; ${SRC_JST}; Aristotle, <i>Sophistical Refutations</i>; Matthew Minerd, “BCS Logic 2023” (course slides).`,
      h:`<p><strong>Three kinds of multiplicity.</strong> <em>De fallaciis</em>, the treatise attributed to St. Thomas, explains why there are exactly six fallacies in the words. A fallacy in the words deceives because one expression seems to signify one thing while it signifies several, and this can happen in three ways (ch. 5). The multiplicity is <strong>actual</strong> when an expression, unchanged, signifies several things: in one word this is equivocation, and in a phrase amphiboly.</p>`
      + `<p>The multiplicity is <strong>potential</strong> when the expression signifies several things only as it is spoken in one way or another: in one word this is accent, and in a phrase composition and division. It is <strong>apparent</strong> when a word signifies one thing but seems to signify something else by its likeness to other words, which is the figure of speech. So the six fallacies in the words are equivocation, amphiboly, accent, composition, division, and figure of speech.</p>` },
    { h:`<p><strong>The modes of equivocation and amphiboly.</strong> <em>De fallaciis</em> counts three modes of equivocation (ch. 6). In the first, a word signifies several things equally, as “dog” signifies the animal, the star, and the sea creature. In the second, a word signifies one thing properly and another by a figure, as a meadow is said to “laugh” when it flowers, and analogous words such as “healthy,” said of the body and of food, are counted here. In the third, a word changes what it signifies with its tense, number, or person, as in “Whoever was rising is standing; the seated man was rising; so the seated man is standing.”</p>`
      + `<p>Amphiboly, the equivocation of a phrase, also has three modes (ch. 7). A phrase may be built in one way and still bear two relations, as “the book of Aristotle” can mean the book he wrote or the book he owns. It may be built in two ways, as when a word can be taken as subject or as object. Or the whole phrase may be taken properly in one premise and figuratively in another, as “to plow the seashore” means both cutting the sand and labor wasted. In each case the remedy is to distinguish the senses and grant the premise in one and deny it in the other.</p>` },
    { h:`<p><strong>Composition, division, and accent.</strong> In composition and division the same words can be joined or separated in different ways, so that one phrase is potentially several (ch. 8). “Whatever lives always exists” is false if “always” goes with “exists” and true if it goes with “lives.” The fallacy is one of <strong>composition</strong> when the phrase is false taken together, and of <strong>division</strong> when it is false taken apart. “Five is two and three, so five is even and odd” divides what is true only together.</p>`
      + `<p>Accent is the same fault in one word: a word pronounced in different ways signifies different things (ch. 9). In Latin the difference lay in the pitch of a syllable; in English it lies chiefly in stress and in the emphasis of the speaker, as when “I never said he stole the money” is made to mean different things by stressing different words.</p>` },
    { h:`<p><strong>The modes of figure of speech.</strong> In the figure of speech a word has one way of signifying but seems to have another, by its likeness to other words (ch. 10). The treatise counts three modes. A word of one gender may seem to be of another, which matters chiefly in Latin. A word in one category may seem to be in another, as when “what you saw yesterday you see today” passes from a quality (“white”) to a substance. And a word that signifies a kind may seem to signify an individual, as “man” seems to name this something.</p>`
      + `<p>The third mode explains a famous sophism: “Man is a species; Socrates is a man; so Socrates is a species.” The treatise places it under the figure of speech, passing from a term that stands for the nature to one that stands for an individual. The figure of speech is the fallacy closest to grammar, since its cause is the likeness between the forms of words.</p>` },
    { h:`<p><strong>Why seven outside the words.</strong> The fallacies outside the words deceive because things that agree in some way are taken as the same simply, or things that differ in some way are taken as different simply (ch. 11). <em>De fallaciis</em> derives seven from the general conditions of being. From what is <em>per se</em> and what is <em>per accidens</em> comes the fallacy of <strong>accident</strong>; from the perfect and the imperfect, <strong>in a certain respect taken flatly</strong>; from the opposed and the not opposed, <strong>missing the point</strong>.</p>`
      + `<p>From the same and the different comes <strong>begging the question</strong>; from the prior and the posterior, the <strong>consequent</strong>; from cause and effect, <strong>treating what is not the cause as the cause</strong>; and from the one and the many, <strong>many questions as one</strong>. So the list of seven is not a collection of observed mistakes but an order taken from the ways in which things can be one or many.</p>` },
    { h:`<p><strong>Accident and consequent.</strong> The two fallacies resemble each other, and the treatise explains the difference (ch. 16). Accident arises when a predicate is taken to be wholly the same as its subject: “Socrates is an animal, so Socrates is a man” assumes that whatever is an animal is a man, as if animal and man were the same. The consequent arises when a consequent is taken to be wholly the same as its antecedent, so that the consequence is thought to run both ways.</p>`
      + `<p>The consequent therefore always involves two consequences, one true and one false: “If someone runs, he moves” is true, but “If he moves, he runs” is false, and “Socrates moves, so Socrates runs” depends on the false one. So, the treatise says, when an argument proceeds from a categorical proposition, the fallacy is accident, and when it proceeds from a conditional, it is the consequent. Aristotle makes the point briefly (<em>Sophistical Refutations</em> 6, 168b): accident can arise in one thing alone, while the consequent always involves two.</p>` },
    { h:`<p><strong>Five ways to beg the question.</strong> To beg the question is to ask that the very thing to be proved be granted, under another name (ch. 15). If it were asked under the same name, the asker would only be laughed at; the fallacy deceives because the words are different. The treatise counts five modes. The thing defined is asked to prove the definition, or the reverse. A universal is asked to prove its particular, as when “all opposites are known by one science” is asked to prove that contraries are.</p>`
      + `<p>Or all the particulars are asked to prove the universal they make up; or the parts of a proposition are asked one by one to prove the whole, as when “medicine treats the healthy” and “medicine treats the sick” are asked to prove that it treats both; or one of two correlatives is asked to prove the other, as when “Plato is the son of Socrates” is asked in order to prove that Socrates is the father of Plato. In every mode the premise is no better known than the conclusion.</p>` },
    { h:`<p><strong>Non-cause and many questions.</strong> In <em>De fallaciis</em>, treating what is not the cause as the cause is a fault of argument, not of causal explanation (ch. 17). It occurs when among the premises one is placed that does nothing toward the conclusion, but seems to because it shares terms with the others. It deceives chiefly in an argument to the impossible, where an absurd conclusion is blamed on a premise that did not produce it, and so a true premise is rejected.</p>`
      + `<p>The modern “false cause,” which takes what merely goes with a thing for its cause, is a different fault. Many questions as one arises when two questions are put in one form, so that one answer is given to both (ch. 18): “Are Socrates and Plato running?” asked when only one of them runs. A proposition is one when one thing is said of one, or when the several things said make one by nature, as “rational mortal animal”; otherwise it is several, and so is the question.</p>` },
    { h:`<p><strong>Every fallacy is an ignorance of the refutation.</strong> A refutation is a syllogism that concludes the contradictory of what the opponent holds. Since every fallacy fails either as a syllogism or as a contradiction, <em>De fallaciis</em> says that every fallacy is reduced to ignorance of the refutation as to its general principle (ch. 14). The other twelve each omit something that a true syllogism or a true contradiction requires.</p>`
      + `<p>Missing the point is also a fallacy of its own, when what is omitted concerns the contradiction itself: the conclusion seems to contradict the thesis, but not of the same thing, in the same respect, in relation to the same, or at the same time. “Two is double of one and not double of three, so two is double and not double” is the treatise’s kind of case. So the study of fallacies is the study of what a real refutation needs, approached from the side of its failures.</p>` }
  ];
  const ADV_FAL_EXTRA = {
    0:{ qs:[
      Q(`A word unchanged signifies several things. What kind of multiplicity is this?`,
        [`Actual`,`Potential`,`Apparent`,`Collective`], 0,
        `An expression that signifies several things without any change is actually multiple.`,
        `Potential multiplicity depends on how the words are spoken or joined; apparent multiplicity only seems to be there.`),
      Q(`Which fallacy arises from apparent multiplicity?`,
        [`Figure of speech`,`Equivocation`,`Accent`,`Amphiboly`], 0,
        `In the figure of speech a word signifies one thing but seems to signify another.`,
        `Equivocation and amphiboly are actual, and accent potential.`),
      Q(`Which pair of fallacies arises from potential multiplicity in a phrase?`,
        [`Composition and division`,`Equivocation and amphiboly`,`Accident and consequent`,`Accent and figure of speech`], 0,
        `A phrase that signifies differently as its words are joined or separated gives composition and division.`,
        `Accent is potential multiplicity in one word; accident and consequent are outside the words.`)
    ]},
    1:{ qs:[
      Q(`“Whatever runs has legs; the river runs; so the river has legs.” Which mode of equivocation is this?`,
        [`The second, where one sense is proper and one figurative`,`The first, where the word signifies several things equally`,`The third, where the word changes with tense or number`,`None, since it is amphiboly`], 0,
        `“Runs” is said properly of animals and figuratively of the river, which the treatise counts in the second mode.`,
        `The senses are not equal and unrelated, and nothing turns on tense or number.`),
      Q(`“The portrait of the king” can mean the one he owns or the one that shows him. What is this?`,
        [`Amphiboly`,`Equivocation`,`Accent`,`Figure of speech`], 0,
        `One phrase, built the same way, bears two relations, which is amphiboly.`,
        `No single word changes its sense; the phrase does.`),
      Q(`“Light” said of a feather and of a lamp. Which fallacy can it produce?`,
        [`Equivocation`,`Amphiboly`,`Composition`,`Accident`], 0,
        `One word with several meanings produces equivocation.`,
        `The ambiguity is in one word, not in a phrase or in the things.`)
    ]},
    2:{ qs:[
      Q(`“A man who sits can walk; so a man can sit and walk at once.” Which fallacy is this?`,
        [`Composition`,`Division`,`Accent`,`Accident`], 0,
        `The premise is true taken apart and false taken together, and the argument takes it together.`,
        `The fault comes from joining what is true only separately.`),
      Q(`“Five is two and three; so five is even and odd.” Which fallacy is this?`,
        [`Division`,`Composition`,`Equivocation`,`Figure of speech`], 0,
        `What is true of two and three together is divided into what is true of each.`,
        `The phrase is false taken apart, which makes it division.`),
      Q(`In English, where does the fallacy of accent mainly lie?`,
        [`In stress and emphasis`,`In spelling`,`In the gender of words`,`In word order alone`], 0,
        `Latin accent was pitch; in English the difference lies mainly in stress and emphasis.`,
        `Gender belongs to the figure of speech, and word order to amphiboly.`)
    ]},
    3:{ qs:[
      Q(`“You bought raw meat yesterday; you eat what you bought; so you eat raw meat.” Which mode of figure of speech is this?`,
        [`A word in one category seems to be in another`,`A word of one gender seems to be of another`,`A word for a kind seems to name an individual`,`It is not a figure of speech`], 0,
        `“What you bought” names a substance (this meat), and “raw” is a quality; the argument passes from one category to the other.`,
        `Nothing turns on gender or on kind and individual; a substance is taken as a quality.`),
      Q(`“Animal is a genus; a horse is an animal; so a horse is a genus.” Where does De fallaciis place this?`,
        [`Under the figure of speech`,`Under equivocation`,`Under accident`,`Under begging the question`], 0,
        `It passes from a term for the nature to a term for an individual, which the treatise counts as figure of speech.`,
        `The word has one meaning; it seems to signify an individual when it signifies a kind.`),
      Q(`Why is the figure of speech the fallacy closest to grammar?`,
        [`Its cause is the likeness between the forms of words`,`It concerns pronunciation`,`It concerns the meaning of a whole phrase taken together`,`It concerns the order of premises`], 0,
        `It arises because a word looks like others with a different way of signifying.`,
        `Pronunciation is accent, and a phrase’s meaning is amphiboly.`)
    ]},
    4:{ qs:[
      Q(`From which condition of being does the fallacy of accident come?`,
        [`What is per se and what is per accidens`,`Cause and effect`,`The one and the many`,`The prior and the posterior in a consequence`], 0,
        `Accident arises from taking what belongs per accidens as if per se.`,
        `Cause and effect give non-cause, the one and the many give many questions, and prior and posterior the consequent.`),
      Q(`From which condition of being does many questions as one come?`,
        [`The one and the many`,`The same and the different`,`The perfect and the imperfect`,`The opposed and the not opposed`], 0,
        `Several questions are taken as one.`,
        `The same and the different give begging the question, the perfect and imperfect in a certain respect, and opposition missing the point.`),
      Q(`What does the derivation of the seven show?`,
        [`The list is an order taken from the conditions of being`,`The list is a collection of observed mistakes`,`There could be any number of such fallacies`,`The seven are the same as the six fallacies found in the words`], 0,
        `Each fallacy outside the words answers to one general condition of being.`,
        `The treatise derives the seven; it does not merely collect them.`)
    ]},
    5:{ qs:[
      Q(`“If it is a square, it has four sides; this has four sides; so it is a square.” Which fallacy is this?`,
        [`The consequent`,`Accident`,`Begging the question`,`Non-cause`], 0,
        `It proceeds from a conditional as if the consequence ran both ways.`,
        `Accident proceeds from a categorical; this uses a conditional.`),
      Q(`“Fido is a mammal, so Fido is a whale.” Which fallacy is this, according to De fallaciis?`,
        [`Accident`,`The consequent`,`Composition`,`Many questions`], 0,
        `It proceeds from a categorical, taking the predicate as wholly the same as the subject.`,
        `With no conditional, the treatise calls it accident, not the consequent.`),
      Q(`Aristotle says that accident can arise in one thing alone, while the consequent always involves two. What does he mean?`,
        [`The consequent involves two consequences, one true and one false`,`Accident needs two premises and the consequent only one premise`,`Accident is found in one figure only`,`The consequent has two middle terms`], 0,
        `The consequent depends on a true consequence and its false reverse.`,
        `The point concerns consequences, not premises, figures, or middle terms.`)
    ]},
    6:{ qs:[
      Q(`“Every human being is a person, since every man is a person.” Which fallacy is this, if “man” and “human being” mean the same?`,
        [`Begging the question`,`Accident`,`Missing the point`,`The consequent`], 0,
        `The conclusion is asked under another name, which is begging the question.`,
        `The premise is no better known than the conclusion.`),
      Q(`Proving that all metals melt by first asking that iron, copper, and every other metal be granted to melt. Which mode of begging is this?`,
        [`Asking all the particulars to prove the universal`,`Asking the universal to prove a particular`,`Asking the definition to prove the defined`,`Asking one of two correlatives to prove the other`], 0,
        `Asking each particular that makes up the universal begs the universal.`,
        `Here the particulars are asked in order to prove the universal.`),
      Q(`What is common to all five modes?`,
        [`The premise is no better known than the conclusion`,`The premise is false`,`The argument is invalid, since the conclusion does not follow`,`The terms are equivocal`], 0,
        `Begging the question is valid but proves nothing, since the premise is no clearer than what it proves.`,
        `The argument may be valid with true premises.`)
    ]},
    7:{ qs:[
      Q(`In De fallaciis, where does the fallacy of non-cause chiefly deceive?`,
        [`In an argument to the impossible`,`In a direct syllogism in Barbara`,`In an induction`,`In a definition`], 0,
        `An absurd conclusion is blamed on a premise that did not produce it.`,
        `In a direct argument an idle premise leads to no absurdity.`),
      Q(`“Have you and your brother paid the fine?” when only one has paid. Which fallacy is this?`,
        [`Many questions as one`,`Amphiboly`,`Begging the question`,`Accident`], 0,
        `Two questions are put in one form, so that one answer is given to both.`,
        `The phrase is clear; the problem is that it asks two things at once.`),
      Q(`When is a proposition one rather than several?`,
        [`When one is said of one, or the several things said make one by nature`,`When it has a single verb`,`When it is short`,`When it is affirmative`], 0,
        `“Rational mortal animal” makes one by nature; “white man” does not.`,
        `Grammar and length do not decide unity; the things said do.`)
    ]},
    8:{ qs:[
      Q(`Why does De fallaciis reduce every fallacy to ignorance of the refutation?`,
        [`Every fallacy fails as a syllogism or as a contradiction`,`Every fallacy is about some ignorance on the part of the arguer`,`Every fallacy has a false premise`,`Every fallacy is in the words`], 0,
        `A refutation is a syllogism of contradiction, and each fallacy omits something it needs.`,
        `Some fallacies are outside the words, and some have true premises.`),
      Q(`“This liquid is sweet to the healthy and bitter to the sick; so it is sweet and not sweet.” What has gone wrong?`,
        [`The contradiction is not in relation to the same`,`The terms are equivocal`,`The premise is begged`,`The consequence is reversed`], 0,
        `A real contradiction must deny the same thing, in the same respect, in relation to the same.`,
        `The fault is the missing condition of the contradiction, which is missing the point.`),
      Q(`What does the study of fallacies study, on this account?`,
        [`What a real refutation needs, from the side of its failures`,`The tricks of debate for winning`,`The history of mistaken opinions`,`The psychology of persuasion`], 0,
        `Each fallacy shows a condition of a true syllogism or contradiction by failing it.`,
        `The study is logical, not a collection of tricks, opinions, or motives.`)
    ]}
  };
  [[ADV_PRED, ADV_PRED_EXTRA], [ADV_CAT, ADV_CAT_EXTRA], [ADV_DEFDIV, ADV_DEFDIV_EXTRA], [ADV_SUPP, ADV_SUPP_EXTRA], [ADV_OPP, ADV_OPP_EXTRA], [ADV_MODP, ADV_MODP_EXTRA], [ADV_COMP, ADV_COMP_EXTRA], [ADV_FIG, ADV_FIG_EXTRA], [ADV_RED, ADV_RED_EXTRA], [ADV_MODS, ADV_MODS_EXTRA], [ADV_CARG, ADV_CARG_EXTRA], [ADV_IND, ADV_IND_EXTRA], [ADV_DEM, ADV_DEM_EXTRA], [ADV_FAL, ADV_FAL_EXTRA]].forEach(([deck, extra])=>{
    for(const k in extra){
      const p = deck[k|0]; if(!p) continue;
      const qs = extra[k].qs.filter(Boolean);
      p.q = qs[0]; p.q2 = qs[1]; p.q3 = qs[2];
    }
  });
  /* Recitation outlines for the fourteen Logic as a Science studies, taken unchanged
     from notes/recitations/. A study without one does not appear in the tablet. */
  const RECITE_ADV_PRED = [
    `The mind first knows things: when we grasp what a tree is, the concept is not what we know but that by which we know the tree, and this is <em>direct</em> knowledge.`,
    `Afterward the mind can turn back on what it has grasped and consider the nature as it is in the mind, abstracted from this tree and that one and able to be said of many; this turning back is <em>reflex</em> knowledge, and it always comes second, since we know that we know only by first knowing something.`,
    `The predicables are found by reflex knowledge, because being a genus, being a species, and being said of many are relations that a nature has only as it is known, and the tradition calls them second intentions.`,
    `No genus exists outside the mind as one thing among others, since what exists outside the mind is this oak and that pine; so the logician studies the universal as it is in the mind, while the metaphysician asks what in things grounds it.`,
    `Porphyry, a third-century Neoplatonist who wrote the standard introduction to Aristotle’s <em>Categories</em>, set out one line of the category of substance from the top down, and this series, drawn on a page with the differences branching to either side, became known as the tree of Porphyry.`,
    `In the tree, substance is divided into body and spirit, body into living and non-living body, living body into animal and plant, and animal into rational and irrational animal; and rational animal gives man, under whom are Socrates, Plato, and every other man.`,
    `Each step of the tree is made by a difference, and each difference is one of a pair: corporeal or incorporeal, animate or inanimate, sentient or insentient, rational or irrational.`,
    `The genus at each step joined to its difference gives the species at the next, so that “animal” is “living body” with the difference “sentient,” and reading the tree upward gives the definition of man by its successive genera and differences.`,
    `In the tree some terms are only genera, some only species, and some both: the <strong>supreme genus</strong> (substance) has no genus above it, and so it is a genus and never a species; the <strong>lowest species</strong> (man) has no species below it, only individuals, and so it is a species and never a genus.`,
    `Every term between them is a <strong>subaltern</strong> genus, that is, a species of the term above it and a genus of the term below it, as animal is a species of living body and a genus of rational animal.`,
    `The individual stands below the lowest species and is neither genus nor species, since it is not said of many; so Socrates is a man, but nothing is a Socrates.`,
    `The supreme genus cannot be defined by a genus and a difference, because it has no higher genus to define it by, and the individual cannot be defined at all, because a definition states what is common, and the individual is known by the senses and named, not defined.`,
    `Porphyry distinguishes four senses of “property”: in the first, a property belongs to one species only, but not to every member of it (being a physician belongs to man alone, but not to every man); in the second, it belongs to every member, but not to that species only (being two-footed belongs to every man and also to birds).`,
    `In the third sense, a property belongs to every member and only to that species, but not always (turning gray in old age); in the fourth and strict sense, it belongs to every member, only to that species, and always, as the power to laugh belongs to man.`,
    `Only a property in the fourth sense converts with its species (whatever can laugh is a man, and every man can laugh), and so the tradition calls it property in the proper sense; the exercise on the predicables uses this fourth sense, and the other three are properties only in a qualified way.`,
    `The word “accident” is used in logic in two related senses; among the categories, the nine accidents are the ways of being that exist <em>in</em> a substance and cannot exist on their own, such as quantity, quality, and relation, and this is <strong>predicamental</strong> accident, the accident of the categories.`,
    `Among the predicables, an accident is anything said of a subject that is no part of its essence and does not follow from it, and this is <strong>predicable</strong> accident.`,
    `The two do not always coincide: the difference “rational” is taken from the substantial form, and so it is reduced to the category of substance, while the power of reason, as a property flowing from that form, is a quality, and so a predicamental accident, but it is no predicable accident of man, since it follows from what he is.`,
    `The predicable accident can be said of an accident as well as of a substance (in “This large area is white,” white is a predicable accident of the quantity), and St. Thomas makes the same distinction when he notes that the soul’s powers are accidents in the first sense but not in the second.`,
    `A specific difference does two things at once: it <strong>divides</strong> the genus, separating the species that have it from those that lack it, as “rational” separates man from the brutes, and it <strong>constitutes</strong> the species, making it what it is, as “rational” joined to “animal” makes man.`,
    `Cajetan, the Dominican commentator on Porphyry and on St. Thomas, whose commentary on Porphyry dates from 1497, notes that the difference divides the genus not by cutting its essence in pieces, since the whole nature of animal is found in man and in the horse, but by dividing the species that fall under it.`,
    `A property also marks off one species from another, but it does not constitute the species, because it flows from a species already constituted (the power to laugh follows from man’s being rational); so in seeking a definition we look for the difference, and we use the property as a sign that leads us to it.`,
    `Aristotle does not list five predicables; in the <em>Topics</em> he considers every predicate in relation to a subject and finds four, according as the predicate converts with its subject or not, and states the essence or not, and the <em>Topics</em> treats the four heads in turn: accident in Books II and III, genus in Book IV, property in Book V, and definition in Books VI and VII.`,
    `If a predicate converts and states the essence, it is a <strong>definition</strong>; if it converts and does not state the essence, it is a <strong>property</strong>; if it does not convert and belongs to the essence, it is a <strong>genus</strong> (the difference is counted with the genus); and if it does not convert and is outside the essence, it is an <strong>accident</strong>.`,
    `Porphyry’s five are reached from a different question, namely how a universal is related to the things under it, and so the species and the difference appear in his list, while the definition does not.`,
    `The two lists do not contradict each other, because Aristotle’s is the list of the dialectician, who asks how a predicate stands to a subject in an argument, and Porphyry’s is the list of the logician who orders universals for definition and classification.`,
    `The question of universals asks what in reality grounds our general concepts, and three answers are usually distinguished; the first, <strong>absolute realism</strong>, associated with Plato, holds that the natures we grasp exist apart from things and from minds as universals.`,
    `<strong>Nominalism</strong> holds that only individuals exist and that general words and concepts are names for groups of individuals, with nothing common in the things themselves; <strong>moderate realism</strong>, the view of Aristotle and St. Thomas, holds that the nature exists in individuals, really but as individual, and becomes universal only in the mind, which abstracts it.`,
    `If nominalism is true, a universal proposition such as “Every man is mortal” is only a summary of the cases observed, and a definition states no essence; on the moderate realist view, a definition can state what a thing is and a demonstration can show why it must be so, and nominalism, which spread widely in the fourteenth and fifteenth centuries, is one of the sources of the modern doubt about definition and demonstration.`
  ];
  const RECITE_ADV_CAT = [
    `Before the categories, Aristotle distinguishes the ways a name can be said of several things: things are named <strong>equivocally</strong> when they share a name but the definition that goes with the name differs for each, as “animal” is said of a man and of a man painted in a picture.`,
    `Things are named <strong>univocally</strong> when they share both the name and its definition, as “animal” is said of a man and of an ox, and they are named <strong>derivatively</strong> (denominatively) when they take their name from something else, with a change of ending, as the grammarian is named from grammar.`,
    `These distinctions come first because the categories sort what is said univocally, so an equivocal name must be divided into its senses, and each sense placed in its own category, before anything can be classified.`,
    `Between the univocal and the equivocal stands the <strong>analogous</strong> name, which signifies different natures but is said first of one and of the others by reference to the first.`,
    `In analogy by <strong>attribution</strong>, the secondary things are named from their relation to the first, as “healthy” is said first of the animal, which has health, and then of food, which causes health, and of a complexion, which is a sign of it.`,
    `In analogy by <strong>proportion</strong>, the name is said of each thing in its own way, according to a likeness of relations, as “being” is said of substance and of accident, each according to its own manner of being, and “good” is said of a good knife and a good man, each good as it fulfills its own end.`,
    `When the likeness of relations is only figurative, as when a brave man is called a lion, the analogy is <strong>metaphor</strong>; and many of the most important words in philosophy, such as “being,” “good,” and “true,” are analogous, and so neither univocal nor merely equivocal.`,
    `Aristotle also distinguishes two ways in which one thing can stand to a subject: to be <strong>said of</strong> a subject is to be predicable of it, as a universal is said of what falls under it, and to be <strong>present in</strong> a subject is to exist in it, not as a part, but as something that cannot exist apart from it, as a color exists in a body.`,
    `The first is a distinction in the order of knowing, and the second is a distinction in the order of being.`,
    `Combining the two gives four classes: what is said of a subject and present in none is <strong>universal substance</strong> (“man”), and what is neither said of a subject nor present in one is <strong>singular substance</strong> (this man).`,
    `What is said of a subject and present in one is <strong>universal accident</strong> (“white”), and what is present in a subject but said of none is <strong>singular accident</strong> (the whiteness of this wall); only the universals are placed in the categories, as genera and species of their kinds.`,
    `The Thomist tradition commonly sets five conditions for placing a nature directly in a category: it must be a real being, not a being of reason or a privation such as blindness; and it must be one <em>per se</em>, that is, one simple nature signified by a simple expression (“white horse” signifies two natures and belongs in no single category, and an artifact as such is not one nature, since it is a shape given by the mind of the maker to some material).`,
    `The nature must also be complete, not a part or principle of a nature, such as a soul or a difference, which belongs to a category only by reduction; it must be finite, so that God, who is not limited to any kind of being, is in no category; it must be signified univocally; and, since a category is a highest predicate, only what can be said of many is placed in it as a predicate.`,
    `So a chair is a substance with respect to its wood, but the chair as a chair is outside the categories; Socrates is not in the category of substance as a predicate, but under it as the ultimate subject of predication; and an analogous word such as “being” is in no single category, since it is said of all of them, each in its own way.`,
    `The categories are the ten highest genera of what can be said of a thing: substance, quantity, quality, relation, action, passion, when, where, posture, and having (also called habit).`,
    `As modes of being the categories belong to metaphysics, but logic studies them as modes of predication, that is, as the highest kinds under which predicates are ordered; logic does not tell us what a man or a color is, but it supplies the order in which natures are classified, and knowing the supreme genus of a thing is the first step toward its definition.`,
    `Being itself is not an eleventh and highest genus above the ten, because a genus is divided by differences that lie outside it, as “rational” lies outside the nature of animal, but nothing lies outside being, since every difference is itself something that is.`,
    `So St. Thomas, following Aristotle’s <em>Metaphysics</em>, holds that being cannot be the genus of anything, and each category is a highest genus in its own line.`,
    `After the categories come the postpredicaments, the relations that appear once natures are placed in categories, and the first is opposition, of which there are four kinds, in order of decreasing strength.`,
    `<strong>Contradictory</strong> opposition sets a thing against its simple negation, as man against non-man, with nothing between them; <strong>privative</strong> opposition sets a form against its absence in a subject that ought naturally to have it, as hearing against deafness in an animal.`,
    `<strong>Contrary</strong> opposition sets two positive extremes of one genus against each other in the same subject, as odd and even in number, or white and black in color, and some contraries have intermediates while others do not.`,
    `<strong>Relative</strong> opposition, the weakest, sets two correlatives against each other, as whole and part, which exclude each other only in the same respect; only contradiction is found in every category, while privation and contrariety are found in several, and relative opposition chiefly in the category of relation.`,
    `Aristotle counts the senses of “prior”: a thing is prior in <strong>time</strong>, as the older is prior to the younger; it is prior when the <strong>sequence of being cannot be reversed</strong>, as one is prior to two, since if there are two, there is one, but not conversely; and it is prior in <strong>order</strong>, as the elements of geometry come before the theorems.`,
    `A thing is also prior in <strong>excellence</strong>, as the better is said to come first; and where two things imply each other, the one that is the <strong>cause</strong> is prior, as a man’s being is the cause of the truth of “There is a man,” and not the reverse.`,
    `Things are <strong>simultaneous</strong> in time when they come to be at once, and simultaneous by nature when each implies the other and neither causes the other (the double and the half), or when they are species divided from one genus by the same division (the winged, the land, and the water animals); but the genus is prior to its species, since if there is a water animal there is an animal, but not conversely.`,
    `Aristotle counts six kinds of motion: generation, destruction, increase, diminution, alteration, and change of place; they are distinct, since a thing can be altered in quality without growing, and a square can grow by an added figure without being altered.`,
    `Rest is the contrary of motion in general, and each kind of motion has its contrary: destruction of generation, diminution of increase, and motion downward of motion upward.`,
    `Aristotle also counts the senses of “to have”: we have a quality, a quantity, clothing, a part, a content, a possession, and a husband or a wife, the most remote sense; but only what is worn or carried on the body is the category of having, so “He has a cloak” falls under having, while “He has courage” falls under quality, though the same verb is used for both.`
  ];
  const RECITE_ADV_DEFDIV = [
    `Aristotle observes that every question we ask about things is one of four kinds: of a single term we ask <em>whether it is</em> and <em>what it is</em>, and of a subject and predicate together we ask <em>whether it is so</em> and <em>why it is so</em> (“Is the moon eclipsed?” and “Why is the moon eclipsed?”).`,
    `The first two questions concern a single term, and the second two concern a subject and a predicate together.`,
    `A definition answers the question “What is it?”, but we cannot ask what a thing is until we know what its name means, and we do not seriously ask what it is until we know that it is; so the nominal definition comes first, the question of existence next, and the real definition after them.`,
    `The four questions also show why definition and demonstration belong together, because the answer to “What is it?” often turns out to be the answer to “Why is it so?”`,
    `Plato’s <em>Sophist</em> shows how division can lead to a definition: seeking to define the angler, the speakers divide art into making and acquiring, acquiring into exchange and taking by force, taking by force into open fighting and hunting, and so on, and at the end the definition of angling gathers up the differences found along the way.`,
    `Each division keeps one member and divides it again, and every member kept stays within the first genus, so the definition is reached by narrowing one genus step by step, and each step contributes one difference.`,
    `The genera all fall in one category (in the angler, art, a kind of quality), even when the differences that divide them, such as “living” and “lifeless,” are taken from elsewhere.`,
    `A division made to reach a definition must keep three requirements: it must state the essence, dividing by differences that belong to the genus as such and not by accidents; it must be <strong>ordered</strong>, so that no step is skipped and each member contains everything under the step before it; and it must be <strong>complete</strong>, continuing until it reaches a lowest species, which is divided only into individuals.`,
    `A division that skips a step leaves something out: if animal is divided at once into the whole-winged and the split-winged, the animals that do not fly fall under neither member, so the division should first separate the flying from the walking and the swimming, and only then divide the flying.`,
    `John of St. Thomas makes the same point, that substance is not well divided at once into man, plant, and angel, but in order, into corporeal and spiritual, and corporeal into living and non-living; and where the members are not immediate and equal, the division should have two members, or as few as possible.`,
    `Often no single known difference marks off a species, and then we gather several characteristics, each of which belongs to more than the species but none of which goes outside its genus, until together they belong to that species alone.`,
    `Aristotle’s example is the number three, which is odd, which it shares with other odd numbers; prime, which it shares with five and seven; and not the sum of other numbers, which it shares with two; together these belong to three alone, and they lead toward its definition.`,
    `The characteristics gathered this way are signs of the difference, not yet the difference itself, and the hope is to reach the single difference that explains why they occur together.`,
    `We use such signs instead of the property because a property is known to be proper only after the species is known, and so the search for a definition usually begins from what is outward and common, and moves inward toward what is essential.`,
    `A second method, definition by likeness, begins from individuals rather than from the genus: we take a group of things called by one name and find what they have in common, then another group called by the same name, and then ask whether the two common features share something further.`,
    `Aristotle’s example is magnanimity: Alcibiades, Achilles, and Ajax would not bear an insult, and Lysander and Socrates were indifferent to good and bad fortune; if something is common to both, that is the definition, and if nothing is, there are two kinds of magnanimity; Aristotle leaves the example there, and in the <em>Nicomachean Ethics</em> he defines the magnanimous man as one who thinks himself worthy of great things and is worthy of them.`,
    `This method proceeds from what is easier for us to grasp, the single cases, and it guards against equivocation, since it compares small groups before forming a general notion; its one rule is that the likeness must be taken in the same sense throughout, because things alike only by metaphor do not share an essence.`,
    `A strict definition gives a genus and a difference, and so some things cannot be defined in the strict sense: the highest genera, such as substance and quality, have no genus above them, and they are made known by examples and by their properties.`,
    `Individuals cannot be defined, because a definition states what is common, and the individual is reached by the senses and named; and being and the other notions said of every category cannot be defined by genus and difference either, since nothing lies outside them.`,
    `Accidents are defined, but in a special way: since an accident exists only in a subject, its subject enters its definition from outside its own genus (“snub” is defined as a nose that is concave), and so the tradition says that an accident has a definition by addition, and that the substance alone is defined in the full and proper sense.`,
    `Because to define a thing is to say what makes it what it is, a full definition can name its causes, and St. Thomas gathers the definition of virtue in this way: virtue is a good quality (its formal cause, with “quality” as its genus) of the mind (its material cause, the subject in which it exists).`,
    `Virtue is a good quality of the mind by which one lives rightly and which no one uses badly (its final cause, the good act), which God works in us without us (its efficient cause, said of infused virtue).`,
    `Not every definition names all four causes, and the best definition names the one that explains the rest; in natural things the form is usually that cause, and in things made for a purpose it is usually the end.`,
    `This is why the tradition sets the essential definition above the causal one but values both, because the causal definition by the outside causes (the maker and the end) often leads us to the essential one.`,
    `Aristotle shows that the same account can appear as a definition and as a demonstration: an eclipse of the moon is “a loss of light from the moon,” which states the effect, or “a loss of light from the moon caused by the earth’s coming between it and the sun,” which states the cause.`,
    `Put in order, the cause is the middle term of a demonstration whose conclusion is the effect: the moon is screened by the earth, and what is so screened loses its light, so the moon loses its light.`,
    `So there are three kinds of definition in relation to demonstration: the definition that states the cause, which serves as the middle term; the definition that states the effect, which is the conclusion; and the definition of the first principles, which is not demonstrated at all but understood; and the definition through the cause is the most perfect, since it says not only what the thing is but why it is so; the cause meant here is the middle term, and the middle term is the essence of the thing defined.`
  ];
  const RECITE_ADV_SUPP = [
    `In “Man is a species,” “Man has three letters,” and “Peter is a man,” the word “man” means the same thing each time, a rational animal, yet it stands for something different each time, since we cannot conclude that Peter is a species or that Peter has three letters.`,
    `The tradition therefore distinguishes a term’s <strong>signification</strong>, what it makes us understand, from its <strong>supposition</strong> (Latin <em>suppositio</em>), what it stands for in a proposition; a term has its signification by itself and always, but it has supposition only within a proposition.`,
    `John of St. Thomas defines supposition as the use of a term for that of which it is verified, according to what the copula requires, and it is chiefly the predicate that decides what the subject stands for: “species” makes “man” stand for the nature, “three letters” for the word, and “is Peter” for individual men.`,
    `A term has <strong>material</strong> supposition when it stands for itself, as a spoken or written word (in “‘Lamb’ is a four-letter word,” the term stands for the word “lamb”), and <strong>formal</strong> supposition when it stands for what it signifies; in writing, material supposition is usually marked with quotation marks.`,
    `Formal supposition is <strong>proper</strong> when the term stands for what it signifies in its proper sense, and <strong>improper</strong> when it stands for something by a figure of speech, as “Lamb” stands for Christ in “The Lamb was offered for the sins of the world.”`,
    `An argument that treats improper supposition as proper fails, as in “Every lamb has four legs; the Lamb was offered for the world; so something with four legs was offered for the world.”`,
    `Formal supposition is <strong>simple</strong> when a common term stands for the nature it signifies, and not for the individuals that have it, as in “Man is a species,” where the subject stands for the nature as known, since no individual man is a species.`,
    `Formal supposition is <strong>personal</strong> when the term stands for the individuals that have the nature, as in “Man is mortal,” which is true of each man; and “personal” here has nothing to do with persons, since a stone has personal supposition in “Some stone is heavy.”`,
    `The medieval logicians agreed on the name “simple supposition” but not on what it reaches: realists such as Walter Burley, an English logician of the fourteenth century, held that the term stands for the common nature found in each individual, and nominalists such as William of Ockham, the English Franciscan, held that it stands for the concept in the mind.`,
    `Either way, the inference from “Man is a species” to “Socrates is a species” fails, because the term “man” changes what it stands for.`,
    `Personal supposition is <strong>singular</strong> (or discrete) when the term stands for one individual, as “Socrates” or “this man,” and <strong>common</strong> when a common term stands for many.`,
    `Common supposition is <strong>determinate</strong> when we may descend to the individuals by “or” (“Some man is running” means that this man is running, or that one, or that other one), and <strong>distributive</strong> when we may descend by “and” (“Every man is mortal” means that this man is mortal, and that one, and that other one).`,
    `The descent shows what the proposition requires to be true: a determinate term needs only one of the individuals to make the proposition true, and a distributive term needs every one of them.`,
    `From the singulars we may also ascend, from “This man is running” to “Some man is running,” but not from “This man is mortal” to “Every man is mortal,” since one instance does not establish all of them.`,
    `Some common terms allow neither descent: the predicate of “Every man is an animal” allows only “Every man is this animal or that animal or that other one,” with the “or” inside the predicate, and this is <strong>merely confused</strong> supposition, the supposition of the predicate of a universal affirmative.`,
    `A term has <strong>collective</strong> supposition when it stands for many things taken together as one subject, as in “The apostles were twelve,” where we cannot descend to “Peter was twelve, and Paul was twelve”; so “All the soldiers are brave” is said of each soldier, while “All the soldiers surrounded the fort” is said of them together.`,
    `The modern word “distributed” names confused and distributive supposition, one mode and not three kinds: common supposition is determinate or confused, and confused supposition is distributive or merely confused; in A, “Every S is P,” the subject is distributive and the predicate merely confused, and in E, “No S is P,” both terms are distributive.`,
    `In I, “Some S is P,” both terms are determinate, and in O, “Some S is not P,” the subject is determinate and the predicate distributive; these are the rules of distribution that the exercises on the syllogism use.`,
    `The modes of supposition also explain conversion: E and I convert simply because their two terms have the same mode of supposition, so exchanging them changes nothing, but A and O do not, because their terms have different modes, and a change in a term’s supposition is enough to spoil an inference.`,
    `For this reason the predicate of an affirmative is taken particularly, and the predicate of a negative is always taken universally.`,
    `Supposition also depends on the time and the manner of being signified by the copula: an affirmative proposition whose subject stands for nothing at the time signified is false (“Napoleon will be emperor,” said now), but a negative proposition can be true even when its subject stands for nothing (“Napoleon is not in Paris”).`,
    `This is the ground of the classical rule that affirmatives carry existential import and negatives do not.`,
    `Maritain distinguishes <strong>natural</strong> supposition, where the predicate belongs to the subject by its essence and the copula abstracts from time, from <strong>accidental</strong> supposition, where the predicate belongs by accident and the copula signifies actual existence; so “Every triangle has three sides” is true even if no triangle now exists, because in necessary matter the subject is extended to what is possible (the technical term for this is ampliation), while “Peter is running” is false if Peter does not exist.`,
    `Words such as “can,” “will,” and “was” <strong>enlarge</strong> a term to possible, future, or past things (ampliation), and qualifiers such as “the poor” or “of this town” <strong>restrict</strong> it (restriction).`,
    `Since a valid inference needs each term to stand for the same things throughout, an argument fails when a term’s kind of supposition changes from one premise to another, as “Animal is a genus; the dog is an animal; so the dog is a genus” fails, because “animal” has simple supposition in the first premise and personal supposition in the second.`,
    `The same rule covers a change in the manner of existence: from premises that speak of the centaur only as imagined we may conclude that some creature of fable is half man, half horse, but not that such a creature really exists; and many errors that look like failures of form are failures of supposition, which the disputations remedied by distinguishing what each term stands for.`
  ];
  const RECITE_ADV_OPP = [
    `It is natural to think that contraries (“Every man is just” and “No man is just”) are the most opposed of propositions, but the tradition holds that <strong>contradiction</strong> is the strongest opposition, because the one proposition simply denies what the other affirms, and the two agree in nothing.`,
    `Contraries still agree in something, since both take the subject universally, and so both can be false together.`,
    `Subalternation, between A and I or between E and O, is not opposition in the proper sense at all, because the subaltern says the same thing as its universal, only partially, as “Some man is mortal” repeats in part what “Every man is mortal” says.`,
    `Subalternation is placed on the square of opposition for the sake of symmetry, so that all the relations between propositions with the same terms can be seen together, but Aristotle’s own account of opposition does not include it.`,
    `The square assumes a universal and a particular subject, but a singular proposition has only one kind of opposition: “Peter is wise” and “Peter is not wise” are contradictories, and there is no singular that could be their contrary or their subaltern, so two singulars of opposite quality cannot both be true or both be false.`,
    `The same holds when a universal nature is taken as one thing, as in “Man is the noblest of bodily creatures” and its negation, and St. Thomas explains that here the predicate is said of the nature as it is one in the mind, though what is said belongs to the nature as it is in things; so such propositions behave like singulars and admit only contradiction.`,
    `The laws of opposition hold by form, whatever the terms: contraries cannot both be true, subcontraries cannot both be false, and contradictories divide truth and falsity between them.`,
    `The matter can add more: in <strong>necessary matter</strong>, where the predicate belongs to the subject by its essence, contraries cannot both be false and subcontraries cannot both be true (“Every man is mortal” is true, and “No man is mortal” and “Some man is not mortal” are false).`,
    `In <strong>contingent matter</strong>, where the predicate may or may not belong, contraries are usually both false and subcontraries both true (“Every man is just” and “No man is just” are false, while “Some man is just” and “Some man is not just” are true).`,
    `Only in necessary or impossible (remote) matter may we conclude from the truth of one subcontrary to the falsity of the other, and an argument that does so in contingent matter mistakes a feature of the matter for a law of the form.`,
    `Aristotle asks whether “There will be a sea battle tomorrow” and “There will not be a sea battle tomorrow” must be one true and the other false now, since if one were already true, the battle would be already fixed, and deliberation would be useless.`,
    `His answer, which St. Thomas develops in his commentary, is that such propositions about a contingent future are not yet determinately true or false, since their causes do not yet determine them to one side.`,
    `The law of contradiction is not abandoned, because the disjunction “Either there will be a sea battle tomorrow or there will not” is necessarily true now, and what is not yet determined is which part is true; so the two propositions exclude each other, but neither can yet be called the true one.`,
    `This applies only to the contingent future, since “The sun will rise tomorrow” concerns what follows from causes already at work, and “There was a battle yesterday” is already determinately true or false.`,
    `To convert a proposition is to exchange its terms so as to say the same truth, and the term that becomes the subject must keep the extension it had as the predicate, so the rules of conversion follow from the supposition of the terms.`,
    `In E both terms are distributive, and in I both are determinate, so E and I convert simply; in A the subject is distributive and the predicate merely confused, so A converts only by limitation (“Every man is mortal” gives “Some mortal is a man”).`,
    `O does not convert at all, because in “Some animal is not a dog” the predicate “dog” is distributive, and some animal is excluded from every dog, while made the subject “dog” becomes determinate, and “Some dog is not an animal” is false, so the supposed converse does not say the same truth.`,
    `O converts only by contraposition: “Some animal is not a dog” gives “Some non-dog is not a non-animal,” that is, some non-dog is an animal.`,
    `John Buridan, the fourteenth-century master at Paris, noticed that contraposition and obversion need a further condition when the affirmatives carry existential import: “Every man is a being” is true, but its contrapositive “Every non-being is a non-man” is false, because nothing is a non-being, and an affirmative whose subject stands for nothing is false.`,
    `So contraposition of A and of O holds only when the terms stand for things that actually exist.`,
    `Obversion moves safely from the affirmative side of the square to the negative (“Every lawyer is learned” gives “No lawyer is non-learned”), but it moves from the negative to the affirmative only when the subject exists, since “No chimera is a woman” is true, while “Every chimera is a non-woman” is false; this is the course’s doctrine of existential import applied to the operations on a single proposition.`,
    `Conversion, obversion, subalternation, and the passage from a proposition to the falsity of its contradictory are often called immediate inferences, but Maritain argues that none of them is an inference in the proper sense, because in each the mind says the same truth in a second form and does not advance from a known truth to one not yet known.`,
    `So “No man is an angel” and “No angel is a man” are two ways of stating one separation of the two terms.`,
    `An inference in the proper sense reaches a new truth, and for that the mind must relate one known truth to another, so every inference properly so called has at least two premises and three terms.`,
    `The immediate operations are still useful, since they let us restate a premise so that it fits an argument, and the logician can verify them by a syllogism, but the verification comes after the mind has already seen that the two forms say the same thing.`,
    `The <strong>reciprocal</strong> of a universal affirmative exchanges its terms and keeps the universal quantity (the reciprocal of “Every square is a rectangle” is “Every rectangle is a square”), and since the predicate of an affirmative is taken particularly, the reciprocal says a different truth and must be proved on its own; sometimes it is true, and sometimes it is false.`,
    `The <strong>inverse</strong> negates both the subject and the copula (the inverse of “Every man is an animal” is “Every non-man is not an animal”), and it says in negative form the same thing as the reciprocal; to pass from a universal affirmative to its reciprocal is a common error.`,
    `Modern predicate logic, developed by Gottlob Frege, the German mathematician and logician, writes “All men are mortal” as “For anything whatever, if it is a man, it is mortal,” and on this reading the universal is true when there are no men at all, since a conditional with a false antecedent is counted true.`,
    `So on the modern reading the A proposition carries no existential import, the step from “All S are P” to “Some S are P” fails, and the square loses subalternation, contrariety, and subcontrariety as well, so that only contradiction remains.`,
    `The tradition answers in two ways: first, the formula represents the universal without saying what it means, since “All men are mortal” attributes mortality to man as such; second, as Gyula Klima and Timothy B. Noone point out, the medieval logicians did see the problem of empty terms, and placed existence in the affirmatives, and contemporary Aristotelians such as Klima and Terence Parsons have shown that the older square can be stated formally without contradiction.`
  ];
  const RECITE_ADV_MODP = [
    `A mode is a determination added to something, and some modes affect only the subject (“The prudent man is wise”) and some only the predicate (“Peter runs fast”), but neither makes a proposition modal.`,
    `A proposition is modal only when the mode affects the copula itself, that is, the way in which the predicate belongs to the subject, as in “Peter is necessarily a man.”`,
    `There are four such modes: necessity (it cannot not be), impossibility (it cannot be), possibility (it can be), and contingency (it can be and can also not be).`,
    `In the <em>Prior Analytics</em> Aristotle treats the syllogism only with necessity and possibility, while <em>On Interpretation</em> 12–13 treats all four modes; and a proposition with no mode of the copula, such as “Man is rational,” is called simply attributive (Latin <em>de inesse</em>, “of being in”).`,
    `A modal proposition has two qualities, that of the mode and that of the dictum, and it is affirmative when both are affirmative or both are negative, and negative when one is affirmative and the other negative.`,
    `So “It is impossible that it is not,” with a negative mode and a negative dictum, is affirmative, and it comes to “It is necessary that it is”; counting “impossible” as “not possible” makes this rule work.`,
    `The modes also have a kind of quantity: necessity and impossibility are like universals, since what must be or cannot be holds in every case, and possibility and contingency are like particulars, since what can be need hold only sometimes.`,
    `This is why the four modes stand at the four corners of a square: “necessary” with the universal affirmative, “impossible” with the universal negative, “possible” with the particular affirmative, and “possible not” with the particular negative.`,
    `When the dictum itself has a universal or particular subject, the modal square grows to eight corners (“It is necessary that every man is mortal,” “It is necessary that some man is mortal,” and so on), each standing in fixed relations to the others.`,
    `The relations still follow the pattern of the square: what is necessary of every subject is necessary of some, and what is possible of some is not thereby possible of every.`,
    `The ordinary wording can mislead, because “It is impossible that every man runs” means only “It is not possible that every man runs,” the contradictory of “It is possible that every man runs”; to say that no man can run, we must say “It is impossible that any man runs,” or simply “No man can run.”`,
    `Maritain gives a serious example: from the falsity of “Every error can be avoided without revelation,” it follows only that some error cannot be so avoided, not that none can.`,
    `To keep the combinations of mode and dictum in view, the scholastics marked each with a vowel: A when both mode and dictum are affirmative, E when the dictum is negative and the mode affirmative, I when the mode is negative and the dictum affirmative, and U when both are negative.`,
    `Each of the four words Purpurea, Iliace, Amabimus, and Edentuli lists, in order, the forms with the modes possible, contingent, impossible, and necessary that say the same thing, so Purpurea gathers “not possible that not,” “not contingent that not,” “impossible that not,” and “necessary that it is,” which are equipollent.`,
    `The words are an aid to memory, and what they record is the rule that a negation before the mode moves to the contradictory corner, and a negation after the mode denies only the dictum.`,
    `A modal can be read in two ways: read as said <strong>of what is said</strong> (<em>de dicto</em>), the mode governs the whole proposition, and read as said <strong>of the thing</strong> (<em>de re</em>), the mode is said of the thing the subject stands for.`,
    `So “It is necessary that whatever God knows is true” says that the proposition “What God knows is true” cannot be false, while “Whatever God knows is necessarily true” would say that each thing God knows is necessary in itself.`,
    `St. Thomas uses the distinction to answer an objection that God’s knowledge makes all things necessary: “Everything known by God is necessarily so” is true of what is said and false of the thing, because God knows contingent things as contingent, and what is necessary is the truth of the whole statement, not each thing known.`,
    `The distinction runs close to that of the composite and divided senses, and it decides many arguments that seem to make free acts necessary.`,
    `Aristotle distinguishes two senses of “possible”: in one sense the possible is whatever is not impossible, and in this sense the necessary is also possible, since what must be certainly can be; in the other, stricter sense the possible is what can be and can also not be, which is the <strong>contingent</strong>, and in this sense the necessary is not possible.`,
    `Much confusion comes from passing between the two senses, since from “It is necessary that fire is hot” it follows that it is possible in the first sense, but not that it is contingent; and the course takes “contingent” in the strict sense, what can be and can also not be.`,
    `Aristotle’s modes concern the way the predicate belongs to the subject, but Immanuel Kant, the eighteenth-century German philosopher, divided judgments by their modality as problematic, assertoric, and apodictic, meaning the possibility or necessity of the act of judging, not of the relation judged; and Maritain points out that Kant also counts the simple assertion as a mode, though in it nothing modifies the copula.`,
    `For the tradition, “Man is necessarily an animal” states something about man and animal, not about the certainty of the one who judges, since one can be certain of a contingent fact and uncertain of a necessary truth; and a further sign that the mode belongs to the proposition is that conversion keeps it, as when “No man can think without images” converts to “No being that thinks without images can be a man.”`
  ];
  const RECITE_ADV_COMP = [
    `A simple, or categorical, proposition joins two terms by the copula “is” (“Man is mortal”), while a <strong>compound</strong>, or hypothetical, proposition joins two propositions by a connecting word other than the verb, such as “and,” “or,” or “if.”`,
    `A compound proposition states a new truth of its own, which depends on the truths of its parts but is not the same as any of them.`,
    `A compound is <strong>openly</strong> compound when its structure shows two propositions joined, and <strong>hiddenly</strong> compound (exponible) when it looks simple but contains a word, such as “only,” “except,” or “as such,” that makes it equivalent to several propositions, as “Only man laughs” says that man laughs and that nothing else does.`,
    `A <strong>copulative</strong> proposition joins its parts by “and,” and it is true only when every part is true, and false when any one part is false (“The moon moves and the earth stands still” is false because its second part is false).`,
    `So from a true copulative we may assert either part by itself, but from a true part we may not assert the copulative, and from a false copulative we may not deny any particular part, since we do not know which one is false.`,
    `Some copulatives are hidden in a joined subject or predicate (“Peter and Paul died at Rome”), but a joined subject is not always copulative, since “Peter and Paul are friends” says something of the two together, and so it is a simple proposition with one subject.`,
    `John of St. Thomas notes that the copulative follows its weaker part: if any part is false, or only probable, the whole is no stronger than that part.`,
    `A <strong>disjunctive</strong> proposition joins its parts by “or”; in the strict sense it says that the parts cannot be true together and cannot be false together (“A number is either odd or even”), and in the broad sense it says only that at least one part is true.`,
    `A broad disjunctive is true when one part is true, and so it follows its stronger part, while a strict disjunctive is false when both parts are true; an improper disjunctive merely offers alternatives (“You may come by train or on foot”), and denying one of these posits nothing.`,
    `The <strong>conjunctive</strong> proposition denies that two propositions are true together, without denying that both may be false (“No one can be both a judge and a party in the same case”).`,
    `Where there is no middle between the two parts, the conjunctive says the same thing as a disjunctive, as “No one can serve both God and Mammon” amounts to “One serves either God or Mammon,” since on the Gospel’s account there is no middle between the two.`,
    `A <strong>conditional</strong> proposition joins its parts by “if,” and it does not assert either part but asserts only that the second follows from the first.`,
    `So a conditional is true when the sequence holds, even if both parts are false (“If twenty were odd, it could not be divided by two”), and false when the sequence fails, even if both parts are true (“If England is an island, two and two make four”).`,
    `This is why a conditional can be asserted without asserting its condition, as St. Paul could write that if an angel from heaven preached another gospel, “let him be anathema,” without thinking that an angel would do so.`,
    `Maritain distinguishes conditionals in the strict sense, where “if” signifies a necessary sequence, from conditionals in a broad sense, where it signifies only a regular connection in fact, and a broad conditional is true only if its parts are in fact verified.`,
    `Other compounds can be resolved into categorical propositions: a <strong>causal</strong> proposition, such as “The soul is immortal because it is spiritual,” asserts that the soul is immortal, that it is spiritual, and that its spirituality is the cause of its immortality, so, unlike a conditional, it requires the truth of both its parts.`,
    `A <strong>rational</strong> proposition, such as “The soul is spiritual, therefore it is immortal,” is in fact a short argument, an enthymeme.`,
    `A <strong>relative</strong> proposition may have a causal sense (“The soul, which is spiritual, is immortal”) or may amount to a copulative (“The man whom I see is running”); an <strong>adversative</strong> proposition, joined by “but,” may deny a causal link or may simply join two facts (“He laughs, but I weep”).`,
    `To contradict a compound we must deny exactly what it asserts, and so the contradictory of a copulative is a disjunctive of the contradictories of its parts: the contradictory of “Every rich man is sad and honored” is “Some rich man is not sad or not honored.”`,
    `The contradictory of a broad disjunctive is a copulative of the contradictories, as the contradictory of “Either the bridge is closed or the road is flooded” is “The bridge is not closed and the road is not flooded”; and modern logic states these two rules as De Morgan’s laws, after Augustus De Morgan, the nineteenth-century English logician.`,
    `The contradictory of a conditional denies the sequence, not the parts: the contradictory of “If he is rich, he is happy” is “It is not the case that if he is rich he is happy,” that is, he could be rich and not happy, and not “If he is rich, he is not happy,” which is a contrary claim.`,
    `An <strong>exclusive</strong> proposition contains a word such as “only” or “alone,” and it resolves into two propositions, as “Only the human species laughs” means that the human species laughs, and that no other species laughs; it is true only if both are true.`,
    `An <strong>exceptive</strong> proposition contains “except” or “but,” and it resolves into three, as “Every metal except mercury is solid at room temperature” means that every metal other than mercury is so solid, that mercury is a metal, and that mercury is not so solid.`,
    `The resolution shows how such propositions can be false: “Only citizens may vote” is false if a non-citizen may vote, even if every citizen may, and an exceptive is false if the excepted thing does not really belong to the subject (“Every bird except the bat lays eggs”).`,
    `A <strong>reduplicative</strong> proposition contains “as,” “insofar as,” or “as such”: sometimes the word names the very nature of the subject, so that the predicate belongs to the subject by its own nature (“The colored, as colored, is visible”), and sometimes it names a different feature of the subject, which is the reason or condition for the predicate (“Man, as rational, can laugh”), and this is the reduplicative in the strict sense.`,
    `Mistaking a reduplicative for a simple proposition causes many errors: “The wicked, as wicked, are to be hated” does not say that the wicked are to be hated simply, since as men they are to be loved, and “Man as man is not greedy” differs from “Man as man is non-greedy,” since man as man is neither greedy nor free of greed.`
  ];
  const RECITE_ADV_FIG = [
    `A syllogism has a double matter, its terms and its propositions, and so a double form: the <strong>figure</strong> is the arrangement of the terms, fixed by the place of the middle term, which is subject of the major and predicate of the minor in the first figure, predicate of both in the second, and subject of both in the third.`,
    `The <strong>mood</strong> is the arrangement of the propositions by quantity and quality, named by the letters A, E, I, and O for the major, the minor, and the conclusion in order.`,
    `Each premise can be A, E, I, or O, so there are sixteen pairs of premises, and since the conclusion can be A, E, I, or O as well, there are sixty-four combinations, and most of them break one of the general rules.`,
    `The scholastic account counts nineteen legitimate moods: four in the first figure, five indirect moods of the first figure, four in the second, and six in the third; the later textbook account counts the indirect moods as a fourth figure and adds the weakened moods, which conclude in particular what could be concluded universally.`,
    `In the first figure the major premise must be universal and the minor affirmative, because if the major were particular, the middle term would be distributed in neither premise, and if the minor were negative, the conclusion would be negative and would distribute the major term, which the affirmative major leaves undistributed.`,
    `So four moods remain in the first figure: AAA, EAE, AII, and EIO (Barbara, Celarent, Darii, Ferio).`,
    `These moods are called perfect because the principle of all syllogisms is seen in them directly, namely that what is said of every member of a class is said of whatever falls under it, and what is denied of every member is denied of whatever falls under it (the <em>dictum de omni et nullo</em>).`,
    `In the first figure the middle term is the subject of the major and the predicate of the minor, so the minor term is plainly placed under the middle, and the major term is said or denied of it through the middle.`,
    `In the second figure one premise must be negative and the major must be universal, because if both premises were affirmative, the middle term, which is the predicate of both, would be distributed in neither, and a particular major would leave the major term undistributed while the negative conclusion distributes it.`,
    `So four moods remain in the second figure: EAE, AEE, EIO, and AOO (Cesare, Camestres, Festino, Baroco), and every conclusion of the second figure is negative.`,
    `The principle of the second figure is that if an attribute is said or denied of every member of one class, whatever it cannot be said or denied of in the same way is not in that class (sometimes called the <em>dictum de diverso</em>), and so the second figure is suited to refutation and to exclusion.`,
    `In the third figure the minor premise must be affirmative and the conclusion particular, because a negative minor would make the conclusion negative and distribute the major term, which the affirmative major leaves undistributed, and a universal conclusion would distribute the minor term, which is the predicate of an affirmative minor and so undistributed.`,
    `So six moods remain in the third figure: AAI, EAO, IAI, AII, OAO, and EIO (Darapti, Felapton, Disamis, Datisi, Bocardo, Ferison).`,
    `The principle of the third figure is that two terms that share a common instance agree at least in part, and if one has a part the other lacks, they differ at least in part (sometimes called the <em>dictum de exemplo</em>); so the third figure is suited to the counterexample, which shows that a universal claim does not hold.`,
    `When the middle term is the predicate of the major and the subject of the minor, the syllogism concludes indirectly, and the term that is naturally the predicate becomes the grammatical subject of the conclusion, as in “Some mortal thing is Peter.”`,
    `The scholastics, following Aristotle, counted these as five indirect moods of the first figure (Baralipton, Celantes, Dabitis, Fapesmo, Frisesomorum), since they are the first figure with the conclusion turned around.`,
    `The later textbook account counts the same arrangement as a separate fourth figure, with the moods AAI, AEE, IAI, EAO, and EIO (Bramantip, Camenes, Dimaris, Fesapo, Fresison), and historians of logic report that this fourth figure was attributed to Galen, the second-century physician.`,
    `The Aristotelian and Thomist tradition, including St. Thomas and John of St. Thomas, treats it as the indirect first figure, and Maritain argues that a fourth figure attends to the words rather than to the thought, since in the mind the grammatical predicate of its conclusion is the real subject.`,
    `A singular minor premise counts as universal, since it speaks of the whole of its subject (“Socrates is a man” in Barbara), but a singular major does not, so “This man is a liar; Peter is a man; so Peter is a liar” does not conclude, since “man” in the minor is not the man spoken of in the major.`,
    `When the middle term itself is singular, the argument is an <strong>expository syllogism</strong>, which simply displays an individual in whom two terms meet (“Socrates is wise; Socrates is a man; so some man is wise”), and it is in the third figure, which suits it best.`,
    `Because the middle of an expository syllogism stands for one individual, it admits arrangements the ordinary syllogism forbids, such as two affirmatives in the second figure (“This apostle is Judas; this traitor is Judas; so this traitor is an apostle”).`,
    `It is often said that a syllogism moves from a more universal truth to a less universal one, and Maritain grants that this is true of the logical relations, since in the first figure the minor term is placed under the middle, but he denies that it is the essence of the syllogism.`,
    `The essence of the syllogism is the identification of two terms with one and the same third term, from which their identity with each other follows; the proof is that the conclusion can be as universal as the major, when its terms are convertible, and Aristotle and the scholastics took such syllogisms, where the middle term is the definition of the subject, as the model of demonstration.`,
    `Aristotle holds that the first figure is the most suited to science, because science seeks the reason why a property belongs to a subject, and only the first figure concludes universally and affirmatively, in Barbara, which is the form of “Every triangle has angles equal to two right angles.”`,
    `The second figure concludes only negatively, and the third only particularly, so neither can state that a property belongs to every member of a species; and the first figure is also the most direct, since the middle term stands between the extremes in extension, though the second keeps its use for showing what a thing is not, and the third for disproving a universal.`,
    `Pierre Conway, the twentieth-century Dominican teacher of Aristotelian logic, adds that Barbara and Celarent are the moods proper to demonstration, since through them a definition or a cause is shown to bring its property with it.`
  ];
  const RECITE_ADV_RED = [
    `Aristotle calls the moods of the first figure <strong>perfect</strong>, because their force is evident from the premises alone: what is said of every member of a class is said of whatever falls under it.`,
    `He calls the moods of the other figures <strong>imperfect</strong>, because their force becomes evident through something not stated in the premises, such as the conversion of a premise or an argument from the impossible.`,
    `To <strong>reduce</strong> an imperfect mood is to show its validity by a perfect one, and every A conclusion is drawn most perfectly in AAA of the first figure (Barbara), every E conclusion in EAE (Celarent), every I in AII (Darii), and every O in EIO (Ferio).`,
    `Reduction is either <strong>direct</strong>, drawing the same conclusion in a first-figure mood, or <strong>to the impossible</strong>, showing that whoever grants the premises and denies the conclusion contradicts himself.`,
    `The Latin names of the moods record how each is reduced, and the first letter tells which perfect mood it goes to: a name beginning with B goes to Barbara, with C to Celarent, with D to Darii, and with F to Ferio.`,
    `Within the name, <strong>s</strong> after a vowel means that the proposition is converted simply; <strong>p</strong> means that it is converted by limitation (<em>per accidens</em>); <strong>m</strong> means that the premises are transposed; and <strong>c</strong> means that the mood is reduced to the impossible; the other consonants, such as r, t, l, and n, mark nothing.`,
    `The scholastics summed this up in a verse: “S vult simpliciter verti, P vero per accidens, M vult transponi, C per impossibile duci”; so Cesare (EAE in the second figure) goes to Celarent by converting its major simply, and Datisi (AII in the third) goes to Darii by converting its minor simply.`,
    `To reduce Camestres (AEE in the second figure), as in “Every jealous man is bitter; no saint is bitter; so no saint is a jealous man,” the C sends it to Celarent, the m tells us to transpose the premises, and each s tells us to convert simply the proposition it follows, here the minor and the conclusion.`,
    `Transposing and converting gives “No bitter man is a saint” as the major and “Every jealous man is bitter” as the minor, with the conclusion “No jealous man is a saint,” which is Celarent; converting that conclusion simply gives back the original conclusion.`,
    `So the same conclusion has been drawn in a perfect mood, and the imperfect one is shown to be valid.`,
    `Some reductions need conversion by limitation: in Felapton (EAO in the third figure), as in “No animal is incorruptible; every animal is a living being; so some living being is not incorruptible,” the F sends it to Ferio, and the p after the second vowel tells us to convert the minor by limitation.`,
    `“Every animal is a living being” becomes “Some living being is an animal,” and with the major unchanged we have EIO in the first figure (Ferio); in the same way Darapti (AAI of the third figure) goes to Darii by converting its minor by limitation.`,
    `Two moods, Baroco (AOO in the second figure) and Bocardo (OAO in the third), cannot be reduced directly, since an O cannot be converted simply, and so they are reduced to the impossible.`,
    `We suppose an opponent who grants the premises but denies the conclusion; we take the contradictory of the conclusion, put it in place of the premise marked by the c, and draw a conclusion in Barbara that contradicts the other premise, which the opponent had granted.`,
    `So in Baroco (“Every fool is tiresome; some talker is not tiresome; so some talker is not a fool”), if the conclusion is denied, every talker is a fool, and with “Every fool is tiresome” this gives in Barbara “Every talker is tiresome,” which contradicts the granted minor; any imperfect mood can be reduced this way, but these two can be reduced in no other.`,
    `The indirect moods of the first figure are reduced by restoring to the first premise its proper role as the major, as Celantes (“No philosopher is an angel; Descartes is a philosopher; so no angel is Descartes”) becomes Celarent by reading the conclusion directly as “Descartes is not an angel,” and Baralipton becomes Barbara.`,
    `Maritain notes that this works because the indirect conclusion already was the direct one, stated with its terms turned around.`,
    `In the later account, where these moods form a fourth figure, they are reduced by transposition and conversion, as Bramantip (AAI of the fourth figure) goes to Barbara by transposing the premises and converting the conclusion by limitation.`,
    `Reduction does not mean that the imperfect moods borrow their validity from the first figure, since Maritain reads Aristotle as saying that their evidence depends on a principle more particular than the principle of the first figure, not that they prove nothing by themselves; a syllogism in the second figure concludes by its own form, and the reduction verifies it by showing the same truth in a perfect form.`,
    `The figures also keep their own uses, which reduction would hide, since the second figure is the natural form of a refutation and the third the natural form of a counterexample; so reduction is a test and an explanation of validity, not a rule that every argument should be rewritten in the first figure.`
  ];
  const RECITE_ADV_MODS = [
    `Aristotle holds that in the first figure a necessary major premise with a plain minor premise gives a necessary conclusion, and the reason is the principle that governs the first figure: if a predicate belongs necessarily to everything under the middle term, it belongs necessarily to whatever falls under the middle term, and the plain minor premise places the minor term under the middle.`,
    `So “Every metal necessarily conducts electricity; this wire is metal; so this wire necessarily conducts electricity” concludes necessarily, though the wire might have been made of something else, because the necessity in the conclusion is the necessity with which the property follows from being metal, and the minor premise contributes only that the wire falls under “metal.”`,
    `The reverse does not hold, since a plain major premise with a necessary minor premise gives only a plain conclusion; Aristotle’s example is that every man is necessarily an animal, and if every animal is in fact moving, it follows that every man is moving, but not that every man is necessarily moving.`,
    `The principle explains the difference, because the major premise states how the predicate belongs to everything under the middle term, and what is said of the middle is said of what falls under it in the same way.`,
    `A necessary minor only makes the minor term fall under the middle necessarily, and it cannot make the predicate belong to the middle any more firmly than the major says it does.`,
    `Every valid syllogism has a kind of necessity, since if the premises are true, the conclusion cannot be false, and St. Thomas calls this the <strong>necessity of the consequence</strong>, distinguishing it from the <strong>necessity of the consequent</strong>, the necessity of the conclusion taken by itself.`,
    `From contingent premises a conclusion follows necessarily, in the first sense, but the conclusion need not be necessary in the second sense; so “If Socrates is sitting, he is necessarily sitting” is true of the consequence and false of the consequent, since his sitting is not necessary.`,
    `A modal syllogism concerns the second kind of necessity, that is, whether the conclusion is itself necessary or contingent, not whether it follows.`,
    `The distinction between a modal read as said of what is said and as said of the thing decides some modal syllogisms, as in the old objection “Whatever God knows is necessarily so; God knows that this man will sin; so this man will necessarily sin,” which appeals to Aristotle’s first-figure rule, since its major premise is necessary and its minor plain.`,
    `St. Thomas answers by distinguishing the major: said of what is said, it is true, since the statement “What God knows is so” cannot be false; said of the thing, it is false, since the things God knows are not each necessary in themselves.`,
    `Read the first way, the major does not say that the predicate belongs necessarily to everything under the middle term, and so the rule does not apply; St. Thomas answers by distinguishing the premise, not by denying the rule.`,
    `The reduction of modal syllogisms depends on converting modal premises, and Aristotle sets out how they convert: a necessary universal negative converts simply (if it is necessary that no stone is an animal, it is necessary that no animal is a stone), and a necessary universal affirmative converts by limitation.`,
    `The contingent universal negative behaves differently, because “It is contingent that no man is white,” in the strict sense, means that any man may be white or not white, and it does not convert into “It is contingent that no white thing is a man.”`,
    `Aristotle shows this just before he finds that two contingent premises give no conclusion in the second figure, where such a conversion would be needed to reduce the syllogism.`,
    `Since “possible” has two senses, the conclusion of a modal syllogism can be possible in one sense and not in the other; in the first figure, when the major premise is plain and the minor contingent, Aristotle says that the syllogisms are imperfect and that the negative ones conclude not to contingency in the strict sense, but only that the predicate does not belong necessarily.`,
    `The difference is between “can be and can also not be” (contingent, or two-sided) and “need not be” (one-sided), and a conclusion of the second kind says less, since it denies necessity without asserting that the opposite can also hold.`,
    `Aristotle’s mixtures with contingent premises differ in this way from mood to mood, and each has to be examined on its own.`,
    `When both premises are necessary, the conclusion is necessary, and the general rules apply without difficulty, but the other mixtures led to so many distinctions that the theory of the modal syllogism has been called “the logicians’ cross” (<em>crux logicorum</em>), as Maritain reports.`,
    `The <em>Summa totius logicae</em>, once attributed to St. Thomas, follows Aristotle and lists the cases figure by figure.`,
    `St. Albert the Great, St. Thomas’s teacher, also follows Aristotle, but he adds that the plain minor premise must be true “simply” (<em>simpliciter</em>), by the nature of its terms, and not only “as of now” (<em>ut nunc</em>), meaning that the predicate belongs to the subject substantially; and historians of logic report that Robert Kilwardby, the thirteenth-century English Dominican, gave the same qualification.`,
    `Theophrastus, Aristotle’s successor at the Lyceum, held a simpler rule, that the conclusion always follows the weaker premise in mode, but the medieval commentators did not adopt it for the first figure, and this course follows Aristotle.`
  ];
  const RECITE_ADV_CARG = [
    `A syllogism is compound when it contains several syllogisms, stated or implied, and the simplest is the <strong>epicheirema</strong>, a syllogism in which one premise, or both, is joined to its proof (“Every martyr is a saint, because every martyr has heroic charity; Peter is a martyr; so Peter is a saint”).`,
    `The causal premise of an epicheirema is itself a syllogism in brief, and so in judging an epicheirema we judge each syllogism it contains, the stated one and the one hidden in the causal premise.`,
    `Aristotle used the word “epicheirema” in another sense, for a dialectical argument from probable premises, and the later sense may come from the fact that such premises invite further argument, and a premise that carries its own proof answers the invitation in advance.`,
    `A <strong>polysyllogism</strong> links several syllogisms so that the conclusion of one is a premise of the next, each stated in full.`,
    `A <strong>sorites</strong> links several propositions so that the predicate of each is the subject of the next, until a conclusion joins the subject of the first with the predicate of the last (“Peter is a man; every man is an animal; every animal has instincts; whatever has instincts reacts on its own; so Peter reacts on his own”).`,
    `A sorites contains as many syllogisms as it has premises, less one, but states none of their conclusions until the last, and its validity depends on the validity of every syllogism it contains.`,
    `The name “sorites” comes from the Greek word for a heap, after the paradox of the heap, which Cicero called the most captious kind of argument, and the chain of premises shares a like danger, since a defect in any link is easily hidden among the others; and Aristotle does not use the name, but he describes the reasoning in the <em>Prior Analytics</em>.`,
    `In the Aristotelian sorites the series runs from the minor premise toward the major, and each middle term is wider than the one before.`,
    `Rudolph Goclenius, a sixteenth-century German logician, gave his name to the reverse form, which begins with the premise that contains the predicate of the conclusion and ends with the one that contains its subject.`,
    `Each form has its rules, which follow from the rules of the syllogism: in the Aristotelian sorites only the first premise may be particular and only the last may be negative, and in the Goclenian sorites the rules are reversed, so that only the last premise may be particular and only the first may be negative.`,
    `A particular premise elsewhere leaves a middle term undistributed, and a negative premise elsewhere lets the major term be distributed in the conclusion when it is not distributed in its premise.`,
    `A <strong>dilemma</strong> sets out a disjunction such that, whichever member is taken, the same conclusion follows, and it is usually built on conditionals, as in Maritain’s example of a conscience formed badly through the man’s own fault: if he does the act his conscience commands, he acts against the eternal law, and if he does not, he acts against his conscience, so either way he does wrong.`,
    `A dilemma can also be categorical (“Every just man needs grace to persevere; every sinner needs grace to be converted; every man is just or a sinner; so every man needs grace”).`,
    `The dilemma is chiefly an argument of attack, and it is used more often about what to do than about what is so; a famous example is the dilemma of Tertullian, the Christian writer of Carthage around the year 200, against the emperor Trajan’s decree on the Christians: if they are guilty, why forbid searching for them, and if they are innocent, why punish them?`,
    `A dilemma holds only if three conditions are met: first, the disjunction must be <strong>complete</strong>, leaving no third possibility; second, each consequence must <strong>follow</strong> from its member; and third, the common conclusion must be the <strong>only</strong> one that can be drawn, or the dilemma can be turned against its author.`,
    `The rules also show how a dilemma is answered: we may show that the disjunction is not complete, which is called escaping between the horns; we may deny that a consequence follows from its member, which is called taking the dilemma by the horns; or we may draw an opposite conclusion from the same members, which is called retorting it.`,
    `The dilemma attributed to the caliph Omar, “The books in the library either agree with the Koran or not; if they agree, they are superfluous; if not, they are harmful; so burn them,” fails the second rule, since agreement does not make a book superfluous.`,
    `To retort an argument is to draw the opposite conclusion from its own premises, as Maritain’s dilemma urged on someone considering public office, that governing honestly will please God and governing dishonestly will please men, so that either way it is to his advantage, is retorted by saying that governing honestly will displease men and governing dishonestly will displease God, so that either way it is not to his advantage.`,
    `A dilemma that can be retorted fails the third rule, since its members support two opposite conclusions equally, while a sound dilemma cannot be retorted, because its conclusion is the only one its members allow; so before urging a dilemma, its author should try to retort it himself.`,
    `A dilemma is not the same as a disjunctive syllogism, though speakers often confuse them: in a dilemma the same conclusion follows from each member of the disjunction, so that we need not know which member is true, but in a disjunctive syllogism one member is removed, and the other is concluded (“Either the minister was deceived or he knew; he was not deceived; so he knew”).`,
    `An orator who says he has caught his opponent “in a dilemma” usually means a disjunctive syllogism, with one member closed off by a further premise.`,
    `The difference matters for answering, because a disjunctive syllogism is answered by defending the member that was removed, and a dilemma by one of the three answers that suit it.`,
    `In an <strong>oblique</strong> syllogism one term stands in an oblique case, that is, it is not itself the subject or predicate but qualifies one by some relation, marked in English by a preposition or a possessive, as in “Christ is God; Mary is the mother of Christ; so Mary is the mother of God,” where the middle term “Christ” is direct in the major and oblique in the minor.`,
    `Maritain shows that some arguments usually taken to need a new “logic of relations” are oblique syllogisms: “A is greater than B; B is greater than C; so A is greater than C” is not a syllogism as it stands, since its middle term is “B” in one premise and “greater than B” in the other.`,
    `The argument becomes valid when its hidden premise is stated, that whatever is greater than something greater than C is itself greater than C; and an oblique syllogism can always be restated as a direct one, but it has its own way of proceeding.`
  ];
  const RECITE_ADV_IND = [
    `Aristotle and St. Thomas teach that we come to know in two ways: by the syllogism, which proceeds from universals, and by induction, which proceeds from singulars.`,
    `The reason lies in our knowledge itself, because all of it depends formally on first principles known through themselves, and all of it takes its origin materially from the singular things the senses perceive.`,
    `Maritain puts the difference this way: a syllogism stays on the plane of the intelligible and moves from one universal truth to another, resolving a conclusion into the principles it depends on, while induction rises from the plane of the senses to the intelligible, resolving a conclusion into the experience from which the mind drew it.`,
    `So induction is not a weaker syllogism; it is the other way of making truth known, and it supplies the principles that syllogisms use.`,
    `In a syllogism two terms are joined because each is joined to a third, the middle term, but induction has no middle term, and its mean is an <strong>enumeration</strong> of individuals or of kinds, which does the work that the middle term does in a syllogism.`,
    `The first premise of an induction joins a predicate to a series of individuals taken one by one, its second joins those individuals to the universal they share, and the conclusion joins the predicate to the universal (“This water boils at one hundred degrees, and this, and this; and the nature found in these is water; so water boils at one hundred degrees”).`,
    `Aristotle says the same in the <em>Prior Analytics</em>: in induction one extreme is shown of the middle through the other extreme, the enumerated cases.`,
    `Maritain insists that induction concludes about a nature, not about a collection: from “this metal conducts electricity, and this, and this,” it concludes that metal, every metal, conducts electricity, and so it claims a connection between the property and the nature, even if that connection is not yet seen, and does not merely sum up the cases observed; for this reason he prefers “every” to “all,” since “all” can suggest the cases taken together as a collection.`,
    `Read as a statement about a collection, induction would be either worthless or empty: if it passed from some members to the whole collection taken together (“this soldier has a soul, and that one, so the regiment has a soul”), it would be a fallacy, and if it simply listed every member, it would say nothing new.`,
    `Induction properly so called passes from some to <em>every</em>, from the cases to the nature found in each.`,
    `An induction is <strong>complete</strong> when every part of the universal has been enumerated (“Sight, hearing, touch, taste, and smell each have a bodily organ; these are all the senses; so every sense has a bodily organ”), and <strong>incomplete</strong> when only some of the parts have been enumerated, as in nearly all inductions from experience, since we cannot review every case.`,
    `“Incomplete” does not mean “badly done,” because an incomplete enumeration can still be <strong>sufficient</strong>, and when it is sufficient, the induction is valid, since a sufficient enumeration is in effect a complete one; and the hard question of when an enumeration is sufficient belongs to the study of each science.`,
    `Complete induction is not empty either, because to know that each of the five senses has an organ is one thing, and to know that sense, as such, has an organ is another.`,
    `Maritain gives two rules for the form of induction: first, the enumeration must be <strong>sufficient</strong>, or otherwise the inference is not formal, so “Peter is French, and Paul, and James, so every man is French” is a defective induction, since three Frenchmen do not represent mankind.`,
    `Second, we may not make a particular term universal by an inductive ascent, even with a sufficient enumeration, so “Some saint lacked this kind of heroism, and some saint lacked that kind, and so on through every kind, so some saint lacked every kind of heroism” does not follow, because a different saint may lack each kind.`,
    `Some modern logicians treat induction as a syllogism in the third figure (“This body attracts iron; this body is a magnet; so some magnet attracts iron,” with “every magnet” then assumed), but Maritain answers that this destroys induction rather than explains it, since as a syllogism the argument concludes only “some magnet,” and the step to “every magnet” would be invalid in form.`,
    `St. Albert the Great, St. Thomas’s teacher, had already said that the matter of induction can be put into a syllogism but its form cannot, and that induction is opposed to the syllogism properly so called.`,
    `The syllogism proves that a subject and predicate agree because both agree with a third term, while induction proves that a property belongs to a nature by producing the cases in which they are found together.`,
    `Reasoning by resemblance, which Aristotle calls the example, passes from one case to another like it (“This remedy cured Paul’s headaches, so it will cure John’s”), and it is an induction that stops halfway: instead of rising to the universal of which Paul’s case is a part, it rises only to a resemblance between the two cases, and from there it descends to the second case.`,
    `Because the resemblance may be accidental, the example gives probable knowledge, not certainty, though it plays a great part in discovery.`,
    `The example is not an inference from particular to particular without any universal, as some modern logicians claim, because the universal in it is the likeness itself.`,
    `Reasoning by resemblance is often called reasoning by analogy, but it must not be confused with analogical knowledge: in reasoning by analogy the likeness is the means of an inference, often a likeness that is more or less accidental, and the conclusion is only probable.`,
    `In analogical knowledge the analogy belongs to a concept and to the things it is said of, as “being” is said of creatures and of God, each in its own way, and when one of the things is known to us and the other is not, we can know the second through the first, inadequately but with certainty.`
  ];
  const RECITE_ADV_DEM = [
    `A demonstration is a syllogism that produces science, that is, knowledge of a thing through its cause and as something that cannot be otherwise, and so its premises must be of a certain kind.`,
    `Aristotle requires that the premises of a demonstration be <strong>true</strong>, <strong>first</strong> and <strong>immediate</strong> (not themselves proved through a middle), <strong>better known</strong> than the conclusion, <strong>prior</strong> to it, and its <strong>causes</strong>.`,
    `St. Thomas explains each condition: the premises must be true, since what is not cannot be known; they must be first and immediate, or else resolve into premises that are, since proof cannot go back without end; and they must be better known, prior, and causes, since the conclusion is known through them.`,
    `A valid argument from true premises proves its conclusion, but it is a demonstration only when its premises meet all these conditions.`,
    `The premises of a demonstration are necessary because their predicates belong to their subjects <em>per se</em>, that is, through the subject itself, and St. Thomas distinguishes four ways of being said per se.`,
    `In the <strong>first</strong> way, the predicate is the definition of the subject or part of it (“A triangle is a figure”); in the <strong>second</strong>, the subject enters the definition of the predicate, as its proper subject (“A number is odd or even,” since odd cannot be defined without number).`,
    `Whatever is predicated neither way is predicated <em>per accidens</em>, as “musical” and “white” are said of an animal.`,
    `Demonstration uses the first way in its principles, since the definition is the middle term, and it concludes in the second way, since the property it proves is defined through the subject in which it belongs.`,
    `In the <strong>third</strong> way, “per se” means existing by itself, as an individual substance does (Socrates exists by himself, while “the white” exists only in something else), and this sense concerns things, not predication.`,
    `In the <strong>fourth</strong> way, a predicate belongs to a subject per se when the subject is the cause of it (“What was killed, died”), while what merely happens along with something belongs per accidens (“While he was walking, there was lightning”).`,
    `The fourth way joins effect to efficient cause, and so it too can appear in demonstration, when the cause named is the proper and necessary cause.`,
    `The four ways together show what kind of necessity science looks for: a predicate that belongs to a subject through what the subject is or through what it causes, not through what happens to accompany it.`,
    `Aristotle distinguishes knowing <em>that</em> a thing is so from knowing <em>why</em>: “Whatever does not twinkle is near; the planets do not twinkle; so the planets are near” is valid and true, but not twinkling is not the cause of nearness, since the planets do not twinkle because they are near, and so this demonstrates only <strong>that</strong> the planets are near (<em>quia</em>).`,
    `Exchange the terms and the demonstration gives the reason (“Whatever is near does not twinkle; the planets are near; so the planets do not twinkle”), because now the middle term is the cause, and we know <strong>why</strong> (<em>propter quid</em>).`,
    `St. Thomas adds that the demonstration of the fact can proceed through an effect that is better known to us, since effects are often more evident to the senses than their causes.`,
    `A demonstration can also show only the fact when its middle term is a cause, but not the proper and proximate one, as in Aristotle’s example “Whatever is not an animal does not breathe; a wall is not an animal; so a wall does not breathe,” where not being an animal is not the reason a wall does not breathe, since many animals do not breathe in the way meant.`,
    `The middle term there is too wide, because it lies outside the proper genus of the conclusion and does not convert with the major term; and the demonstration of the reasoned fact needs the proximate cause, the one that converts with the effect.`,
    `A demonstration must proceed from the principles proper to its own science, not from principles common to many, and Aristotle cites the attempt of Bryson, a Greek mathematician of Plato’s time, to square the circle by a principle true of quantity in general that says nothing about the forms of the circle and the square.`,
    `Such an argument may be persuasive, but it does not give the reason proper to geometry, and so it is not a demonstration; for the same reason a proof in geometry does not proceed from arithmetic, nor a proof in medicine from mere statistics, since each science demonstrates from the principles that belong to its own subject; and squaring the circle is impossible, as Ferdinand von Lindemann, the German mathematician, proved in 1882.`,
    `A demonstration of the reasoned fact usually has the definition of the subject, or of the property, as its middle term (“Every rational animal is capable of laughter; every man is a rational animal; so every man is capable of laughter”), because the definition explains why the property belongs, and the conclusion states a property in the second way of being said per se.`,
    `Such a demonstration is made in the first figure, which Aristotle holds to be the most scientific, since only in it can a universal affirmative be concluded, which science seeks through its cause; a demonstration in the second or third figure can be completed only by being reduced to the first.`,
    `Sometimes one science knows the fact and another the reason, as the physician knows <em>that</em> round wounds heal more slowly, while the geometer knows <em>why</em>; in such cases the lower science is <strong>subalternated</strong> to the higher, taking its principles from it.`,
    `This shows that “science” in the classical sense has degrees, since a science that knows the fact without the reason is still knowledge, but it rests on another science for its explanation.`,
    `St. Thomas counts theology a science in this way, subalternated to the knowledge God and the blessed have, from which it receives its principles by faith.`
  ];
  const RECITE_ADV_FAL = [
    `<em>De fallaciis</em>, the treatise attributed to St. Thomas, explains why there are exactly six fallacies in the words: a fallacy in the words deceives because one expression seems to signify one thing while it signifies several, and this can happen in three ways.`,
    `The multiplicity is <strong>actual</strong> when an expression, unchanged, signifies several things, and in one word this is equivocation, and in a phrase amphiboly.`,
    `The multiplicity is <strong>potential</strong> when the expression signifies several things only as it is spoken in one way or another, and in one word this is accent, and in a phrase composition and division.`,
    `The multiplicity is <strong>apparent</strong> when a word signifies one thing but seems to signify something else by its likeness to other words, which is the figure of speech; so the six fallacies in the words are equivocation, amphiboly, accent, composition, division, and figure of speech.`,
    `<em>De fallaciis</em> counts three modes of equivocation: in the first, a word signifies several things equally, as “dog” signifies the animal, the star, and the sea creature; in the second, a word signifies one thing properly and another by a figure, as a meadow is said to “laugh” when it flowers, and analogous words such as “healthy” are counted here.`,
    `In the third mode of equivocation, a word changes what it signifies with its tense, number, or person, as in “Whoever was rising is standing; the seated man was rising; so the seated man is standing.”`,
    `Amphiboly, the equivocation of a phrase, also has three modes: a phrase may be built in one way and still bear two relations, as “the book of Aristotle” can mean the book he wrote or the book he owns; it may be built in two ways, as when a word can be taken as subject or as object; or the whole phrase may be taken properly in one premise and figuratively in another.`,
    `In each case of equivocation and amphiboly the remedy is to distinguish the senses and grant the premise in one and deny it in the other.`,
    `In composition and division the same words can be joined or separated in different ways, so that one phrase is potentially several, as “Whatever lives always exists” is false if “always” goes with “exists” and true if it goes with “lives.”`,
    `The fallacy is one of <strong>composition</strong> when the phrase is false taken together, and of <strong>division</strong> when it is false taken apart, as “Five is two and three, so five is even and odd” divides what is true only together.`,
    `Accent is the same fault in one word, since a word pronounced in different ways signifies different things; in Latin the difference lay in the pitch of a syllable, and in English it lies chiefly in stress and in the emphasis of the speaker.`,
    `In the figure of speech a word has one way of signifying but seems to have another, by its likeness to other words, and the treatise counts three modes: a word of one gender may seem to be of another, which matters chiefly in Latin; a word in one category may seem to be in another; and a word that signifies a kind may seem to signify an individual.`,
    `The third mode explains the famous sophism “Man is a species; Socrates is a man; so Socrates is a species,” which the treatise places under the figure of speech, since it passes from a term that stands for the nature to one that stands for an individual.`,
    `The figure of speech is the fallacy closest to grammar, since its cause is the likeness between the forms of words.`,
    `The fallacies outside the words deceive because things that agree in some way are taken as the same simply, or things that differ in some way are taken as different simply, and <em>De fallaciis</em> derives seven of them from the general conditions of being.`,
    `From what is <em>per se</em> and what is <em>per accidens</em> comes the fallacy of <strong>accident</strong>; from the perfect and the imperfect, <strong>in a certain respect taken flatly</strong>; and from the opposed and the not opposed, <strong>missing the point</strong>.`,
    `From the same and the different comes <strong>begging the question</strong>; from the prior and the posterior, the <strong>consequent</strong>; from cause and effect, <strong>treating what is not the cause as the cause</strong>; and from the one and the many, <strong>many questions as one</strong>.`,
    `So the list of seven is not a collection of observed mistakes but an order taken from the ways in which things can be one or many.`,
    `Accident and consequent resemble each other: accident arises when a predicate is taken to be wholly the same as its subject (“Socrates is an animal, so Socrates is a man” assumes that whatever is an animal is a man), and the consequent arises when a consequent is taken to be wholly the same as its antecedent, so that the consequence is thought to run both ways.`,
    `The consequent therefore always involves two consequences, one true and one false, as “If someone runs, he moves” is true, but “If he moves, he runs” is false, and “Socrates moves, so Socrates runs” depends on the false one.`,
    `So, the treatise says, when an argument proceeds from a categorical proposition, the fallacy is accident, and when it proceeds from a conditional, it is the consequent; Aristotle makes the point briefly: accident can arise in one thing alone, while the consequent always involves two.`,
    `To beg the question is to ask that the very thing to be proved be granted, under another name, and the fallacy deceives because the words are different, since if it were asked under the same name, the asker would only be laughed at.`,
    `The treatise counts five modes of begging the question: the thing defined is asked to prove the definition, or the reverse; a universal is asked to prove its particular; or all the particulars are asked to prove the universal they make up.`,
    `The other modes of begging the question are that the parts of a proposition are asked one by one to prove the whole, or one of two correlatives is asked to prove the other (“Plato is the son of Socrates” to prove that Socrates is the father of Plato); and in every mode the premise is no better known than the conclusion.`,
    `In <em>De fallaciis</em>, treating what is not the cause as the cause is a fault of argument, not of causal explanation: it occurs when among the premises one is placed that does nothing toward the conclusion, but seems to because it shares terms with the others.`,
    `This fallacy deceives chiefly in an argument to the impossible, where an absurd conclusion is blamed on a premise that did not produce it, and so a true premise is rejected; the modern “false cause,” which takes what merely goes with a thing for its cause, is a different fault.`,
    `Many questions as one arises when two questions are put in one form, so that one answer is given to both (“Are Socrates and Plato running?” asked when only one of them runs); a proposition is one when one thing is said of one, or when the several things said make one by nature, as “rational mortal animal,” and otherwise it is several, and so is the question.`,
    `A refutation is a syllogism that concludes the contradictory of what the opponent holds, and since every fallacy fails either as a syllogism or as a contradiction, <em>De fallaciis</em> says that every fallacy is reduced to ignorance of the refutation as to its general principle, because the other twelve each omit something that a true syllogism or a true contradiction requires.`,
    `Missing the point is also a fallacy of its own, when what is omitted concerns the contradiction itself: the conclusion seems to contradict the thesis, but not of the same thing, in the same respect, in relation to the same, or at the same time (“Two is double of one and not double of three, so two is double and not double”).`,
    `So the study of fallacies is the study of what a real refutation needs, approached from the side of its failures.`
  ];
  return [
    {id:'adv-pred', num:'LOGIC AS A SCIENCE', title:"The Predicables in Depth", deck:ADV_PRED, review:true,
     group:'v1', gate:[1, 2, 3, 4],
     desc:"Direct and reflex knowledge, and why the predicables are second intentions; the tree of Porphyry; the highest genus, the subaltern genera, and the lowest species; property in its four senses; the accident of the categories and the accident of the predicables; how the difference divides and constitutes; Aristotle’s four predicables and Porphyry’s five; and the question of universals.",
     recitation: RECITE_ADV_PRED},
    {id:'adv-cat', num:'LOGIC AS A SCIENCE', title:"The Categories in Depth", deck:ADV_CAT, review:true,
     group:'v1', gate:[1, 2, 3, 4],
     desc:"What comes before and after the categories: univocal, equivocal, derivative, and analogous names; what is said of a subject and what is present in one; what can be placed in a category; why being is not a genus; the four kinds of opposition; the senses of prior and simultaneous; and motion and having.",
     recitation: RECITE_ADV_CAT},
    {id:'adv-defdiv', num:'LOGIC AS A SCIENCE', title:"Definition and Division in Depth", deck:ADV_DEFDIV, review:true,
     group:'v1', gate:[1, 2, 3, 4],
     desc:"How a definition is found: Aristotle’s four questions; division as the way to a definition, with Plato’s angler; dividing in order; gathering the signs of a difference; definition by likeness; what cannot strictly be defined; definition through the four causes; and how definition and demonstration meet.",
     recitation: RECITE_ADV_DEFDIV},
    {id:'adv-supp', num:'LOGIC AS A SCIENCE', title:"Supposition", deck:ADV_SUPP, review:true,
     group:'v1', gate:[1, 2, 3, 4],
     desc:"What a term stands for in a proposition: signification and supposition; material and formal, proper and improper; simple and personal; singular, determinate, distributive, merely confused, and collective; supposition and distribution; the copula and existence; and how a change of supposition breaks an argument.",
     recitation: RECITE_ADV_SUPP},
    {id:'adv-opp', num:'LOGIC AS A SCIENCE', title:"Opposition and Conversion in Depth", deck:ADV_OPP, review:true,
     group:'v2', gate:[5, 6, 7],
     desc:"Why contradiction is the strongest opposition; singular propositions; what necessary and contingent matter add to the square; future contingents; how conversion rests on supposition; Buridan’s limits on contraposition and obversion; why these operations are not inferences in the proper sense; the reciprocal and the inverse; and the modern reading of the universal.",
     recitation: RECITE_ADV_OPP},
    {id:'adv-modp', num:'LOGIC AS A SCIENCE', title:"The Modal Proposition in Depth", deck:ADV_MODP, review:true,
     group:'v2', gate:[5, 6, 7],
     desc:"Modes of the copula; the quality and quantity of a modal; the square with a quantified dictum; the vowels that mark mode and dictum; a modal read of what is said and of the thing, with St. Thomas’s use of the distinction; the two senses of “possible”; and why the mode belongs to the proposition and not to the act of judging.",
     recitation: RECITE_ADV_MODP},
    {id:'adv-comp', num:'LOGIC AS A SCIENCE', title:"Compound and Exponible Propositions", deck:ADV_COMP, review:true,
     group:'v2', gate:[5, 6, 7],
     desc:"Propositions made of propositions: the copulative, disjunctive, conjunctive, and conditional; causal, rational, relative, and adversative propositions; how each is contradicted; and the hidden compounds, exclusive, exceptive, and reduplicative.",
     recitation: RECITE_ADV_COMP},
    {id:'adv-fig', num:'LOGIC AS A SCIENCE', title:"Figures and Moods", deck:ADV_FIG, review:true,
     group:'v3', gate:[8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
     desc:"Figure and mood; the special rules and principle of each figure and what each is good for; the nineteen moods, the indirect moods, and the later account’s fourth figure; singular premises and the expository syllogism; what a syllogism essentially is; and why the first figure is the figure of science.",
     recitation: RECITE_ADV_FIG},
    {id:'adv-red', num:'LOGIC AS A SCIENCE', title:"Reduction", deck:ADV_RED, review:true,
     group:'v3', gate:[8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
     desc:"Perfect and imperfect moods; what the letters in the names of the moods mean; direct reduction by simple conversion, by limitation, and by transposition; reduction to the impossible; the indirect moods; and why the imperfect moods are valid in their own right.",
     recitation: RECITE_ADV_RED},
    {id:'adv-mods', num:'LOGIC AS A SCIENCE', title:"The Modal Syllogism in Depth", deck:ADV_MODS, review:true,
     group:'v3', gate:[8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
     desc:"Why Aristotle’s first-figure rule holds and why the reverse mixture fails; the necessity of the consequence and of the consequent; St. Thomas’s distinction applied to a syllogism; converting modal premises; one-sided possibility; and why the theory was called the logicians’ cross.",
     recitation: RECITE_ADV_MODS},
    {id:'adv-carg', num:'LOGIC AS A SCIENCE', title:"Compound Arguments", deck:ADV_CARG, review:true,
     group:'v3', gate:[8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
     desc:"The epicheirema; the polysyllogism and the sorites, Aristotelian and Goclenian, with their rules; the dilemma, its three rules, and the three ways of answering it; the dilemma and the disjunctive syllogism; and oblique syllogisms.",
     recitation: RECITE_ADV_CARG},
    {id:'adv-ind', num:'LOGIC AS A SCIENCE', title:"Induction and Example", deck:ADV_IND, review:true,
     group:'v3', gate:[8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
     desc:"The two ways of making truth known; why induction has no middle term; why it concludes about a nature and not a collection; complete and incomplete induction; its two rules; why it is not a syllogism in Darapti; reasoning by resemblance; and analogy in reasoning and in knowledge.",
     recitation: RECITE_ADV_IND},
    {id:'adv-dem', num:'LOGIC AS A SCIENCE', title:"Demonstration", deck:ADV_DEM, review:true,
     group:'v3', gate:[18],
     desc:"The conditions of demonstrative premises; the four ways of being said per se; demonstration of the fact through an effect and through a remote cause, and of the reasoned fact through the proper cause; proper and common principles; the first figure as the figure of science; and fact and reason in different sciences.",
     recitation: RECITE_ADV_DEM},
    {id:'adv-fal', num:'LOGIC AS A SCIENCE', title:"The Fallacies in Depth", deck:ADV_FAL, review:true,
     group:'v3', gate:[21],
     desc:"After De fallaciis, attributed to St. Thomas: the three kinds of multiplicity behind the six fallacies in the words and their modes; why there are seven outside the words; accident and consequent; the five ways to beg the question; non-cause and many questions; and why every fallacy is an ignorance of the refutation.",
     recitation: RECITE_ADV_FAL}
  ];
};
if(typeof module!=='undefined' && module.exports) module.exports = root.arsAdvancedDecks;
})(typeof window!=='undefined' ? window : this);
