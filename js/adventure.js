
var title = document.getElementById("title");
var image = document.getElementById("image");
var option = document.getElementById("option");
var text = document.getElementById("text");
var endImg = document.getElementById("endImg");
var endImg2 = document.getElementById("endImg2");
var medicKey = false;
var militaryKey = false;

 var showText = function(target, message, index, interval) {
     if (index < message.length) {
        $(target).append(message[index++]);
         setTimeout(function() { showText(target, message, index, interval); }, interval);
     }
 }


function intro()
{
  endImg.src = "";
  endImg2.src = "";
  document.getElementsByTagName("footer")[0].style.display = "block";
  document.getElementsByTagName("main")[0].style.display = "block";
  document.getElementsByTagName("body")[0].style.backgroundImage = "";
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Adventure game!";
  image.src = "images/zombieApocalypse.png";
  showText("#text", "In this adventure game you have to survive the Zompocalypse!\nyou have to make your way out of the country alive,\nTo do so you have to make chooses between life and death.", 0, 1);


  var option1 = document.createElement ('li');
  option1.innerHTML = "start";
  option1.setAttribute("onclick","livingRoom();");
  option.appendChild(option1);
}

function livingRoom()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Living room";
  image.src = "images/tvScene.jpeg";
  showText("#text", "Place: home   Time: 13:34\nTV: it’s code red everyone have to evacuate! There is a virus outbreak, if you get infected\nyou slowly evolve in some cannibal. EVERY INFECTED HAS TO GET KILLED! If you walk on the\nstreet after 14:00 you will get shot! Every rule in the us is gone.\nYou: shit! Is this for real I have to save my family but I cant get there on time.\nWhere should I go first?!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Brother";
  option1.setAttribute("onclick","school();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "Mother";
  option2.setAttribute("onclick","hospital();");
  option.appendChild(option2);
}

function school()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Steve's school";
  image.src = "images/school.jpg";
  showText("#text", "Place: primary school   Time: 13:53\nYou: Steve come fast we have to go! \nSteve: what is going on?\nYou: there is some kind of zombie apocalypse! No joke!\nSteve: what….. \nYou: I will explain it on our way to…\n", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Grandpa";
  option1.setAttribute("onclick","grandpa1();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "Ammunation store";
  option2.setAttribute("onclick","ammunationstore();");
  option.appendChild(option2);
}

function hospital()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Hospital (mom's work)";
  image.src = "images/zombieHallway.jpg";
  showText("#text", "Place: hospital   Time: 13:56\nYou: Mom! Mom where you are?!\nMom: I’m hear come quick! Watch out their everywhere. \nYou: are you heart mom? \nMom: yeah my lag its broken, where your brother??? \nYou: I… I… he is still at school. \nMom: he’s where! Go to your brother leave me here I can’t make it! \nYou: yes you can I will help you, together we make it. \nMom: okay than, we have to move fast. \n", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","firstEnd();");
  option.appendChild(option1);

}

function firstEnd()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Trapped";
  image.src = "images/zombieHallway2.jpg";
  showText("#text", "Place: hallways hospital   Time: 14:02\nYou: mom?  What are we going to do?! \nMom: I don’t know son. \n….\n….\nYou died", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Try again";
  option1.setAttribute("onclick","intro();");
  option.appendChild(option1);
}

function grandpa1()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "At grandpa's";
  image.src = "images/grandpaHouse.jpg";
  showText("#text", "Place: Grandpa’s home   Time: 14:18\nYou: so, where here let’s take a look if grandpa knows what to do. \nSteve: I think I hear something... \nYou: be careful Steve you don’t know what’s over there. \n", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","grandpa2();");
  option.appendChild(option1);
}

function grandpa2()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "At grandpa's";
  image.src = "images/boom.jpg";
  showText("#text", "Steve: RUN RUN RUN!!! \nYou: shit! Steve fast go inside! \nGrandpa: kids come stand behind me! \nSounds: BANG! BANG!\nYou: that was close, grandpa what can we do?\nGrandpa: the army base  is safe?\nGrandpa: okay boys we only make it to the army base prepared, I have some guns but not enough.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Pistol";
  option1.setAttribute("onclick","wayToArmy();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "Baseball bath";
  option2.setAttribute("onclick","wayToArmy();");
  option.appendChild(option2);

  var option3 = document.createElement ('li');
  option3.innerHTML = "Knife";
  option3.setAttribute("onclick","wayToArmy();");
  option.appendChild(option3);
}

function ammunationstore()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The ammunation store";
  image.src = "images/ammunationstore.jpg";
  showText("#text", "Place: Ammunition store in town   Time: 14:52\nStore owner: what are you kids doing here?I was just leaving.\nYou: do you have some weapons for us...\nStore owner: do you know how to use them?\nYou: uhm… yeah kind of.\nStore owner: k, I don’t have much anymore but you can take what you want. I’m out of here!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Pistol";
  option1.setAttribute("onclick","wayToArmy();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "Baseball bath";
  option2.setAttribute("onclick","wayToArmy();");
  option.appendChild(option2);

  var option3 = document.createElement ('li');
  option3.innerHTML = "Knife";
  option3.setAttribute("onclick","wayToArmy();");
  option.appendChild(option3);
}

function wayToArmy()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Somewhere on a road";
  image.src = "images/road.jpg";
  showText("#text", "Place: on the road   Time: 15:38\nSound: BOOM!\nYou: shit! we have a flat tire, dammm!\nSteve: what now?\nYou: now we have to walk, but no worries boy we are almost there.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","wayToArmy2();");
  option.appendChild(option1);
}

function wayToArmy2()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "What is that?";
  image.src = "images/road2.jpg";
  showText("#text", "Steve: do you see that?\nYou: what?\nSteve: a mile in front of us.\nYou: shit zombies, I count 8 of them.\nSteve: what should we do?", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Hide";
  option1.setAttribute("onclick","hiding();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "Fight";
  option2.setAttribute("onclick","fighting();");
  option.appendChild(option2);
}

function hiding()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Hiding!";
  image.src = "images/hideRoad.jpg";
  showText("#text", "You: fast get behind the bushes.\nZombies: argh groan…\nYou: sit still Steve there almost gone.\nSteve: are they gone already?\nYou: I think so.\nYou: let’s move fast before they come back.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","strangersWithSteve();");
  option.appendChild(option1);
}

function fighting()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Fighting!";
  image.src = "images/road2Fight.png";
  showText("#text", "You: Steve get behind me.\nSteve: what now.\nYou: if you get my back it’s all goanna be alright.\nSteve: there they are!\n…\nSteve: Behind us!\nYou: watch out!\n…\nYou: nooo Steve why!!\nConsole: Steve Died.\nYou: I have to go on, for Steve.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","strangersWithoutSteve();");
  option.appendChild(option1);
}

function strangersWithSteve()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The strangers";
  image.src = "images/strangers.png";
  showText("#text", "Place: on the road   Time: 16:12\nyou: I think I see people Steve, stay alert.\nSteve: I see them too, should we talk with them?", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Talk with the stranger ";
  option1.setAttribute("onclick","talkWithSteve();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "Avoid them";
  option2.setAttribute("onclick","talkWithSteve();");
  option.appendChild(option2);
}
// stranger talk with steve
function talkWithSteve()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The strangers";
  image.src = "images/strangers2.jpeg";
  showText("#text", "strangers: STOP! Who are you guys?\nYou: Shit... where friendly, don’t shoot. I’m with my brother Steve.\nStrangers: where you guys heading?\nYou: where on our way to the army base, we have heard that its save there.\nStranger: yeah? Should we travel together?", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "That’s good ";
  option1.setAttribute("onclick","awnserGoodSteve();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "No we rather travel alone";
  option2.setAttribute("onclick","awnserNoSteve();");
  option.appendChild(option2);
}

function awnserGoodSteve() {
  option.innerHTML = ""
  text.innerHTML = ""
  title.innerHTML = "The strangers";
  image.src = "images/strangers2.jpeg";
  showText("#text", "Stranger: great lets go.\nSteve: yes!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","theItem();");
  option.appendChild(option1);
}

function awnserNoSteve() {
  option.innerHTML = ""
  text.innerHTML = ""
  title.innerHTML = "The strangers";
  image.src = "images/whisper.jpg";
  showText("#text", "Steve: psst, (wisper) brother? Its better to travel to getter right.\nYou: (wisper) uh… yeah your probably right Steve.\nYou: okay wait guys where in.\nStrangers: alright lets go then!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","theItem();");
  option.appendChild(option1);
}

// stranger talk without Steve

function strangersWithoutSteve() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The strangers";
  image.src = "images/strangers2.jpeg";
  showText("#text", "Place: on the road   Time: 16:12\nstrangers: STOP! Who are you?\nYou: I’m friendly, don’t shoot. I’m alone.\nStrangers: where you heading?\nYou: I’m on my way to the army base, I’ve heard that it’s a save place there.\nStranger: yeah we now, do you want to  travel together?", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "uhm yeah that’s good.";
  option1.setAttribute("onclick","togetherNoSteve();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "no thanks I rather travel alone.";
  option2.setAttribute("onclick","aloneNoSteve();");
  option.appendChild(option2);
}

function togetherNoSteve() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "How to travel?";
  image.src = "images/strangers2.jpeg";
  showText("#text", "Stranger: great let’s go.\nYou:  yes, we have better make it before dark.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","theItemWithoutsteve();");
  option.appendChild(option1);
}

function aloneNoSteve() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "How to travel?";
  image.src = "images/strangers2.jpeg";
  showText("#text", "Stranger: are you sure, the change of getting there by your own is small.\nYou: yeah maybe your right, okay I stay with you guys.\nStranger: Great than we have to move because we have to make it before dark.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","theItemWithoutsteve();");
  option.appendChild(option1);
}
// item set true
function medicKeySetTrue() {
  steveDied();
  medicKey = true;
  alert("you picked up a medic security pass")
}

function militaryKeySetTrue() {
  steveDied();
  militaryKey = true;
  alert("you picked up a security pass from a army base")
}

function medicKeySetTrue2() {
  miaItem();
  medicKey = true;
  alert("you picked up a medic security pass")
}

function militaryKeySetTrue2() {
  miaItem();
  militaryKey = true;
  alert("you picked up a security pass from a army base")
}

function theItem() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The village";
  image.src = "images/village.jpg";
  showText("#text", "Place: village not far from the military base.  Time: 16:45\nStrangers: okay people we are not staying long, resupply out of the houses and watch your\n back. We are exploring in groups of two.\nYou: okay Steve come with me let’s explore the house across the street.\nSteve: k, I follow you.\n..\n..\nPlace: in a house   Time: 16:59\nYou: I think I found something!\nSteve: what did you find?", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "security pass army base";
  option1.setAttribute("onclick","militaryKeySetTrue();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "security pass hospital";
  option2.setAttribute("onclick","medicKeySetTrue();");
  option.appendChild(option2);
}
// received a item
function steveDied() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Watchout Steve!";
  image.src = "images/zombieBehindYou.jpg";
  showText("#text", "You: STEVE BEHIND YOU!\nSteve: what… aaaah\n..\n..\nYou: NO Steve not now!\nStrangers : what happened…\nStrangers: I’m sorry man, we can bury him if you want.\nYou: yes, please.\nMia (stranger): Hi, I’m Mia I’m sorry for what happened with your brother.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","armyBase();");
  option.appendChild(option1);
}

function theItemWithoutsteve() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The village?";
  image.src = "images/village.jpg";
  showText("#text", "Place: village not far from the military base.  Time: 16:45\nStrangers: okay people we are not staying long, resupply out of the houses and watch your\n back. We are exploring in groups of two.\nMia (stranger): I’m Mia, I saw You before I’m sorry for you brother.\nYou: thanks, do you want to explorer some houses together?\nMia: yeah of cores.\n..\n..\nPlace: in a house   Time: 16:59\nYou: I think I found something!\nMia: what did you find?", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "security pass army base";
  option1.setAttribute("onclick","militaryKeySetTrue2();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "security pass hospital";
  option2.setAttribute("onclick","medicKeySetTrue2();");
  option.appendChild(option2);
}

function miaItem() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The village?";
  image.src = "images/village2.png";
  showText("#text", "Mia: keep it close to you’ll never know when it came handy.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","armyBase();");
  option.appendChild(option1);
}

function armyBase() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Arrived at the military base";
  image.src = "images/militaryBase.jpg";
  showText("#text", "Place: military base west.  Time: 17:20\nYou: we’ve made it. \nMia: its looks abended, don’t you think\nYou: yeah your right, let’s take a look if we find someone.\n..\nConsole: 10 minutes later.\n..\nYou: there is no one here\nMia: what do you think that happened here?\nYou:  I don’t now maybe they were scared and ran away.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","armyBase2();");
  option.appendChild(option1);
}

function armyBase2() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Arrived at the army base";
  image.src = "images/militaryBase.jpg";
  showText("#text", "You: Mia you see this?\nMia: What??\nYou: a note: the only way you can lose the zombies is by getting out of the country.\nMia: What should we do now?\nYou: We can try to catch a plane or take a helicopter.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","armyBaseSouth();");
  option.appendChild(option1);
}

function armyBaseSouth() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Storage tent";
  image.src = "images/insideTent.jpg";
  showText("#text", "Place: military base south .  Time: 17:35\nYou: Mia, you see that? Its A storage tent.\nMia: yeah, I see.\n..\n..\nMia: there is a medic and military chest.\nYou: Let's try to open them.", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "medic case";
  option1.setAttribute("onclick","medicChest();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "military case";
  option2.setAttribute("onclick","militaryChest();");
  option.appendChild(option2);
}

function medicChest()
{
  if (medicKey === true) {
    medicChestOpen()
  } else {
    alert("Medic: you don't have the key");
  }
}

function militaryChest()
{
  if (militaryKey === true) {
    militaryChestOpen();
  } else {
    alert("Army: you don't have the key");
  }
}

function militaryChestOpen()
{
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Getting out of here";
  image.src = "images/insideTentMedic.jpg";
  showText("#text", "Place: military base.  Time: 17:36.\nYou: it’s a radio, let’s try if we can contact anyone.\nRadio you: Hello, is there anyone out there?...\nRadio: HI, yeah we’re here. Who are you?\nRadio you: I’m a survivor of this hell, can you help me and my friend out of here?\nRadio: yeah we will sent a helicopter to you, can you tell us where you are.\nyou: we’re at the south side of the military base.\nRadio: great stay there we're on our way!!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","youMadeIt();");
  option.appendChild(option1);
}

function medicChestOpen() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Getting out of here";
  image.src = "images/insideTentArmy.jpg";
  showText("#text", "Place: military base.  Time: 17:36.\nYou: it’s a flare Mia.\nYou: we can lure a helicopter with it.\nYou: nice.\nMia: Where should we go no?", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "To a open lawn";
  option1.setAttribute("onclick","openLawn();");
  option.appendChild(option1);

  var option2 = document.createElement ('li');
  option2.innerHTML = "to a tall building";
  option2.setAttribute("onclick","tallBuilding();");
  option.appendChild(option2);
}

function openLawn() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Open lawn";
  image.src = "images/openLawn.jpg";
  showText("#text", "Place: Open Lawn.  Time: 17:58.\nYou: mia shoot the flair can you shoot the flair?\nI protect you.\nMia: alright, I’ll shoot.\nYou: you hear that?\nZombies: awr aaargw!\nMia: I think we have lured the zombies instead of a helicopter!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","openLawn2();");
  option.appendChild(option1);
}

function openLawn2() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Open lawn";
  image.src = "images/openLawnZombies.jpg";
  showText("#text", "Mia: we’re surrendered, what now.\nYou: now we fight!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Try again";
  option1.setAttribute("onclick","youDied();");
  option.appendChild(option1);
}

function tallBuilding() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "The roof";
  image.src = "images/tallBuilding.jpg";
  showText("#text", "Place: Open Lawn.  Time: 17:58.\nYou: mia shoot the flair\nI protect you.\nMia: alright, I’ll shoot.\nYou: you hear that?\nZombies: awr aaargw!\nMia: I think we have lured the zombies instead of a helicopter!", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","endingRoof();");
  option.appendChild(option1);
}

function endingRoof() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "Ending";
  image.src = "images/tallBuildingHeli.jpg";
  showText("#text", "You: look over there Mia a helicopter is coming this way.\nMia: we’re saved!\n", 0, 1);

  var option1 = document.createElement ('li');
  option1.innerHTML = "Next";
  option1.setAttribute("onclick","youMadeIt();");
  option.appendChild(option1);
}

function youMadeIt() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "";
  image.src = "";
  endImg2.setAttribute("onclick","intro();");
  endImg2.src = "images/wannaPlayAgain.png";
  document.getElementsByTagName("footer")[0].style.display = "none";
  document.getElementsByTagName("main")[0].style.display = "none";
  document.getElementsByTagName("body")[0].style.backgroundImage = "url(images/youMadeIt.jpg)";
}

function youDied() {
  text.innerHTML = ""
  option.innerHTML = ""
  title.innerHTML = "";
  image.src = "";
  endImg.setAttribute("onclick","intro();");
  endImg.src = "images/Tryagain.png";
  document.getElementsByTagName("footer")[0].style.display = "none";
  document.getElementsByTagName("main")[0].style.display = "none";
  document.getElementsByTagName("body")[0].style.backgroundImage = "url(images/youDied.jpg)";
}
